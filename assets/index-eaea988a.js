import{o as F,i as o,c as e,S as i,k as y,t,M as p,a as C}from"./index-d8935530.js";import{a as u}from"./index-7b41fa60.js";import{F as m}from"./index-3ba001d4.js";import{u as g,I as E}from"./index-d1119031.js";import{u as D}from"./index-32ccb862.js";import"./index-d2637a1a.js";import"./computed-7e51e667.js";import"./index-7b577c49.js";import"./index-106bb595.js";import"./index-054b24e7.js";import"./filters-0288cde3.js";import"./scheduler-3ae68f06.js";import"./index-c57ce4e0.js";import"./index-767c7487.js";import"./index-2cc65a38.js";import"./index-2e7b6636.js";import"./index-3b4d68b8.js";const A=t('<button><span class="ml-2 capitalize align-middle">'),N=t('<span class="p-4 opacity-50">← Click to change the color mode'),f=()=>{const{mode:n,setMode:l}=g({emitAuto:!0,initialValue:document.body.className.replace("hope-ui-","")}),{state:c,next:a}=D(["dark","light","auto"],{initialValue:[n,l]});return F(()=>{document.documentElement.className=n(),document.body.className=`hope-ui-${n()==="auto"?"light":n()}`}),[(()=>{const r=A(),s=r.firstChild;return r.$$click=()=>a(),o(r,e(i,{get when(){return c()==="dark"},get children(){return e(m,{class:"inline-block align-middle"})}}),s),o(r,e(i,{get when(){return c()==="light"},get children(){return e(E,{class:"inline-block align-middle"})}}),s),o(r,e(i,{get when(){return c()==="auto"},get children(){return e(u,{class:"inline-block align-middle"})}}),s),o(s,c),r})(),N()]},B=f;y(["click"]);const b=t('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useColorMode/demo.tsx" target="_blank">source'),k=t("<details><summary op50 italic>Show Type Declarations");function h(n){const l=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},p(),n.components),{FunctionInfo:c,DemoContainer:a,ContextualNav:r}=l;return r||d("ContextualNav",!0),a||d("DemoContainer",!0),c||d("FunctionInfo",!0),e(l.div,{className:"markdown-body",get children(){return[e(l.h1,{children:"useColorMode"}),`
`,e(c,{fn:"useColorMode"}),`
`,e(l.p,{children:"Reactive color mode (dark / light / customs) with auto data persistence."}),`
`,e(l.h2,{children:"Demo"}),`
`,`
`,e(a,{get children(){return[b(),e(B,{})]}}),`
`,e(l.h2,{children:"Basic Usage"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return e(l.code,{"data-language":"js","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"useColorMode"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"mode"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setMode"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"useColorMode"}),e(l.span,{style:{color:"#B4C2F0"},children:"()"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#7A88CF"},children:"// Signal<'dark' | 'light'>"})]}})]}})}})}}),`
`,e(l.p,{get children(){return["By default, it will match with users' browser preference using ",e(l.a,{href:"/solidjs-use/core/usePreferredDark/",get children(){return e(l.code,{children:"usePreferredDark"})}})," (a.k.a ",e(l.code,{children:"auto"})," mode). When reading the ref, it will by default return the current color mode (",e(l.code,{children:"dark"}),", ",e(l.code,{children:"light"})," or your custom modes). The ",e(l.code,{children:"auto"})," mode can be included in the returned modes by enabling the ",e(l.code,{children:"emitAuto"})," option. When writing to the ref, it will trigger DOM updates and persist the color mode to local storage (or your custom storage). You can pass ",e(l.code,{children:"auto"})," to set back to auto mode."]}}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return e(l.code,{"data-language":"ts","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#65BCFF"},children:"mode"}),e(l.span,{style:{color:"#B4C2F0"},children:"()"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#7A88CF"},children:"// 'dark' | 'light'"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#65BCFF"},children:"setMode"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"dark"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#7A88CF"},children:"// change to dark mode and persist"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#65BCFF"},children:"setMode"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"auto"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#7A88CF"},children:"// change to auto mode"})]}})]}})}})}}),`
`,e(l.h2,{children:"Config"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return e(l.code,{"data-language":"js","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"useColorMode"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"mode"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setMode"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"useColorMode"}),e(l.span,{style:{color:"#B4C2F0"},children:"({"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"  "}),e(l.span,{style:{color:"#4FD6BE"},children:"attribute"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#A9B8E8"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"theme"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"  "}),e(l.span,{style:{color:"#4FD6BE"},children:"modes"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#A9B8E8"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"// custom colors"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#A9B8E8"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"dim"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#A9B8E8"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"dim"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#A9B8E8"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"cafe"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#A9B8E8"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"cafe"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#A9B8E8"},children:"  "}),e(l.span,{style:{color:"#B4C2F0"},children:"}"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"})"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#7A88CF"},children:"// Signal<'dark' | 'light' | 'dim' | 'cafe'>"})]}})]}})}})}}),`
`,e(l.h2,{children:"Type Declarations"}),`
`,(()=>{const s=k();return s.firstChild,o(s,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return e(l.code,{"data-language":"typescript","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"type"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorMode"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"light"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"dark"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"type"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorSchema"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorMode"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"auto"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"interface"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"UseColorModeOptions"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"extends"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorMode"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"extends"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C3E88D"},children:"UseStorageOptions"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorMode"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * CSS Selector for the target element applying to"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C8D3F5"},children:"html"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"selector"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"MaybeElementAccessor"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * HTML attribute applying the target element"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C8D3F5"},children:"class"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"attribute"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * The initial color mode"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C8D3F5"},children:"auto"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"initialValue"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorSchema"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Prefix when adding value to the attribute"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"modes"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Partial"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"Record"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorSchema"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#86E1FC"},children:">>;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * A custom handler for handle the updates."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * When specified, the default behavior will be overridden."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"undefined"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#82AAFF"},children:"onChanged"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"mode"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorMode"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"defaultHandler"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"mode"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorMode"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"void"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"void"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Custom storage Signal"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * When provided, `useStorage` will be skipped"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"storageSignal"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Signal"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorSchema"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Key to persist the data into localStorage/sessionStorage."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Pass `null` to disable persistence"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C8D3F5"},children:"solidjs-use-color-scheme"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"storageKey"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Storage object, can be localStorage or sessionStorage"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"localStorage"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"storage"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"StorageLike"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Emit `auto` mode from state"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * When set to `true`, preferred mode won't be translated into `light` or `dark`."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * This is useful when the fact that `auto` mode was selected needs to be known."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"undefined"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"deprecated"}),e(l.span,{style:{color:"#7A88CF"},children:" use `store()` when `auto` mode needs to be known"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"emitAuto"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"boolean"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Disable transition on switch"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"see"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"https://paco.me/writing/disable-theme-transitions"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"true"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"disableTransition"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"boolean"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:" * Reactive color mode with auto data persistence."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:" *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:" * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"see"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"https://solidjs-use.github.io/solidjs-use/core/useColorMode"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"declare"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"function"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"useColorMode"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"extends"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorMode"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"options"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"UseColorModeOptions"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"mode"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorSchema"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"setMode"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"_solidjs_use_shared_solid_to_vue"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"ComputedSetter"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorSchema"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"store"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorSchema"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"setStore"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Setter"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"BasicColorSchema"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"system"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#86E1FC"},children:'"'}),e(l.span,{style:{color:"#C3E88D"},children:"dark"}),e(l.span,{style:{color:"#86E1FC"},children:'"'}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:'"'}),e(l.span,{style:{color:"#C3E88D"},children:"light"}),e(l.span,{style:{color:"#86E1FC"},children:'"'}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"state"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#86E1FC"},children:'"'}),e(l.span,{style:{color:"#C3E88D"},children:"dark"}),e(l.span,{style:{color:"#86E1FC"},children:'"'}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:'"'}),e(l.span,{style:{color:"#C3E88D"},children:"light"}),e(l.span,{style:{color:"#86E1FC"},children:'"'}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"}"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}})]}})}})}}),null),s})(),`
`,e(l.h2,{children:"Source"}),`
`,e(l.p,{get children(){return[e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useColorMode/index.ts",children:"Source"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useColorMode/demo.tsx",children:"Demo"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useColorMode/index.md",children:"Docs"})," • ",e(l.a,{href:"https://vueuse.org/core/useColorMode",children:"VueUse Docs"})]}}),`
`,e(r,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#basic-usage",label:"Basic Usage",indent:!1},{href:"#config",label:"Config",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function H(n={}){const{wrapper:l}=Object.assign({},p(),n.components);return l?e(l,C(n,{get children(){return e(h,n)}})):h(n)}function d(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};