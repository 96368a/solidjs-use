import { createSignal, getOwner, runWithOwner } from 'solid-js'
import { toValue } from '../toValue'
import { noop } from './is'
import type { AnyFn, ArgumentsType, MaybeAccessor, Pausable } from './types'

export type FunctionArgs<Args extends any[] = any[], Return = void> = (...args: Args) => Return

export interface FunctionWrapperOptions<Args extends any[] = any[], This = any> {
  fn: FunctionArgs<Args, This>
  args: Args
  thisArg: This
}

export type EventFilter<Args extends any[] = any[], This = any, Invoke extends AnyFn = AnyFn> = (
  invoke: Invoke,
  options: FunctionWrapperOptions<Args, This>
) => ReturnType<Invoke> | Promise<ReturnType<Invoke>>

export interface ConfigurableEventFilter {
  /**
   * Filter for if events should to be received.
   *
   *
   */
  eventFilter?: EventFilter
}

export interface DebounceFilterOptions {
  /**
   * The maximum time allowed to be delayed before it's invoked.
   * In milliseconds.
   */
  maxWait?: MaybeAccessor<number>

  /**
   * Whether to reject the last call if it's been cancel.
   *
   * @default false
   */
  rejectOnCancel?: boolean
}

/**
 * @internal
 */
export function createFilterWrapper<T extends AnyFn>(filter: EventFilter, fn: T) {
  function wrapper(this: any, ...args: ArgumentsType<T>) {
    return new Promise<ReturnType<T>>((resolve, reject) => {
      // make sure it's a promise
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args }))
        .then(resolve)
        .catch(reject)
    })
  }

  return wrapper
}

export const bypassFilter: EventFilter = invoke => {
  return invoke()
}

/**
 * Create an EventFilter that debounce the events
 */
export function debounceFilter(ms: MaybeAccessor<number>, options: DebounceFilterOptions = {}) {
  let timer: ReturnType<typeof setTimeout> | undefined
  let maxTimer: ReturnType<typeof setTimeout> | undefined | null
  let lastRejector: AnyFn = noop

  const _clearTimeout = (timer: ReturnType<typeof setTimeout>) => {
    clearTimeout(timer)
    lastRejector()
    lastRejector = noop
  }

  const owner = getOwner()
  const filter: EventFilter = invoke => {
    const duration = toValue(ms)
    const maxDuration = toValue(options.maxWait)

    if (timer) _clearTimeout(timer)

    if (duration <= 0 || (maxDuration !== undefined && maxDuration <= 0)) {
      if (maxTimer) {
        _clearTimeout(maxTimer)
        maxTimer = null
      }

      return new Promise(resolve => {
        runWithOwner(owner!, () => {
          resolve(invoke())
        })
      })
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve
      // Create the maxTimer. Clears the regular timer on invoke
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer) _clearTimeout(timer)
          maxTimer = null
          resolve(invoke())
        }, maxDuration)
      }

      // Create the regular timer. Clears the max timer on invoke
      timer = setTimeout(() => {
        if (maxTimer) _clearTimeout(maxTimer)
        maxTimer = null
        resolve(invoke())
      }, duration)
    })
  }

  return filter
}

/**
 * Create an EventFilter that throttle the events
 *
 * @param ms
 * @param [trailing=true]
 * @param [leading=true]
 * @param [rejectOnCancel=false]
 */
export function throttleFilter(ms: MaybeAccessor<number>, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0
  let timer: ReturnType<typeof setTimeout> | undefined
  let isLeading = true
  let lastRejector: AnyFn = noop
  let lastValue: any

  const owner = getOwner()
  const clear = () => {
    if (timer) {
      clearTimeout(timer)
      timer = undefined
      lastRejector()
      lastRejector = noop
    }
  }

  const filter: EventFilter = _invoke => {
    const duration = toValue(ms)
    const elapsed = Date.now() - lastExec
    const invoke = () => {
      return (lastValue = _invoke())
    }

    clear()

    if (duration <= 0) {
      lastExec = Date.now()
      runWithOwner(owner!, () => {
        invoke()
      })
      return
    }

    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now()
      runWithOwner(owner!, () => {
        invoke()
      })
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve
        timer = setTimeout(() => {
          lastExec = Date.now()
          isLeading = true
          runWithOwner(owner!, () => {
            resolve(invoke())
          })
          clear()
        }, Math.max(0, duration - elapsed))
      })
    }

    if (!leading && !timer) timer = setTimeout(() => (isLeading = true), duration)

    isLeading = false
    return lastValue
  }

  return filter
}

/**
 * EventFilter that gives extra controls to pause and resume the filter
 *
 * @param extendFilter  Extra filter to apply when the PausableFilter is active, default to none
 *
 */
export function pausableFilter(extendFilter: EventFilter = bypassFilter): Pausable & { eventFilter: EventFilter } {
  const [isActive, setIsActive] = createSignal(true)

  function pause() {
    setIsActive(false)
  }
  function resume() {
    setIsActive(true)
  }

  const eventFilter: EventFilter = (...args) => {
    if (isActive()) extendFilter(...args)
  }

  return { isActive, pause, resume, eventFilter }
}