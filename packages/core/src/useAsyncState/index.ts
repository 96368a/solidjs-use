import { noop, promiseTimeout } from '@solidjs-use/shared'
import { createSignal } from 'solid-js'
import type { Accessor } from 'solid-js'

export interface UseAsyncStateReturn<Data> {
  state: Accessor<Data>
  isReady: Accessor<boolean>
  isLoading: Accessor<boolean>
  error: Accessor<unknown>
  execute: (delay?: number, ...args: any[]) => Promise<Data>
}

export interface UseAsyncStateOptions<T = any> {
  /**
   * Delay for executing the promise. In milliseconds.
   *
   * @default 0
   */
  delay?: number

  /**
   * Execute the promise right after the function is invoked.
   * Will apply the delay if any.
   *
   * When set to false, you will need to execute it manually.
   *
   * @default true
   */
  immediate?: boolean

  /**
   * Callback when error is caught.
   */
  onError?: (e: unknown) => void

  /**
   * Callback when success is caught.
   */
  onSuccess?: (data: T) => void

  /**
   * Sets the state to initialState before executing the promise.
   *
   * This can be useful when calling the execute function more than once (for
   * example, to refresh data). When set to false, the current state remains
   * unchanged until the promise resolves.
   *
   * @default true
   */
  resetOnExecute?: boolean

  /**
   *
   * An error is thrown when executing the execute function
   *
   * @default false
   */
  throwError?: boolean
}

/**
 * Reactive async state. Will not block your setup function and will trigger changes once
 * the promise is ready.
 */
export function useAsyncState<Data>(
  promise: Promise<Data> | ((...args: any[]) => Promise<Data>),
  initialState: Data,
  options?: UseAsyncStateOptions<Data>
): UseAsyncStateReturn<Data> {
  const {
    immediate = true,
    delay = 0,
    onError = noop,
    onSuccess = noop,
    resetOnExecute = true,
    throwError
  } = options ?? {}

  const [state, setState] = createSignal(initialState)
  const [isReady, setReady] = createSignal(false)
  const [isLoading, setLoading] = createSignal(false)
  const [error, setError] = createSignal<unknown | undefined>(undefined)

  async function execute(delay = 0, ...args: any[]) {
    if (resetOnExecute) setState(() => initialState)
    setError(undefined)
    setReady(false)
    setLoading(true)

    if (delay > 0) await promiseTimeout(delay)

    const _promise = typeof promise === 'function' ? promise(...args) : promise

    try {
      const data = await _promise
      setState(() => data)
      setReady(true)
      onSuccess(data)
    } catch (e) {
      setError(e)
      onError(e)
      if (throwError) throw e
    } finally {
      setLoading(false)
    }

    return state()
  }

  if (immediate) execute(delay)

  return {
    state,
    isReady,
    isLoading,
    error,
    execute
  }
}