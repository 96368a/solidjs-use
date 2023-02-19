import{z as g,C as D,D as E,p as b,u as y,W as F,k,U as B,i as u,c as l,t as f,M as m,a as L}from"./index-178e8ff6.js";import{B as x}from"./BooleanDisplay-7f243952.js";import{u as S}from"./index-3eb9b54f.js";import{r as w}from"./index-30b3e300.js";import{u as N}from"./index-94731463.js";function v(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientHeight<n.scrollHeight||e.overflowY==="auto"&&n.clientWidth<n.scrollWidth)return!0;const o=n.parentNode;return!o||o.tagName==="BODY"?!1:v(o)}function A(n){const e=n||window.event,o=e.target;return v(o)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}function _(n,e=!1){const[o,s]=g(e);let c=null,t;D(E(w(n),r=>{if(r){const a=r;t=a.style.overflow,o()&&(a.style.overflow="hidden")}}));const i=()=>{const r=y(n);!r||o()||(F&&(c=N(r,"touchmove",a=>{A(a)},{passive:!1})),r.style.overflow="hidden",s(!0))},d=()=>{const r=y(n);!r||!o()||(F&&c?.(),r.style.overflow=t,s(!1))};return b(d),[o,r=>{r?i():d()}]}const j=f('<div class="flex flex-wrap gap-4"><div class="w-300px h-300px m-auto overflow-scroll bg-gray-500/5 rounded"><div class="w-500px h-400px relative"><div position="absolute left-0 top-0" bg="gray-500/5" p="x-2 y-1">TopLeft</div><div position="absolute left-0 bottom-0" bg="gray-500/5" p="x-2 y-1">BottomLeft</div><div position="absolute right-0 top-0" bg="gray-500/5" p="x-2 y-1">TopRight</div><div position="absolute right-0 bottom-0" bg="gray-500/5" p="x-2 y-1">BottomRight</div><div position="absolute left-1/3 top-1/3" bg="gray-500/5" p="x-2 y-1">Scroll Me</div></div></div><div class="m-auto px-6 py-4 rounded flex flex-col w-60 gap-2 bg-gray-500/5"><div><span opacity="75">isLocked</span>&nbsp;</div><button opacity="75"></button></div></div>',24),$=()=>{const[n,e]=g(null),o=_(n),[s,c]=S(o);return(()=>{const t=j.cloneNode(!0),i=t.firstChild,d=i.nextSibling,r=d.firstChild;r.firstChild.nextSibling;const h=r.nextSibling;return B(e,i),u(r,l(x,{get value(){return s()}}),null),h.$$click=()=>c(),u(h,()=>s()?"Unlock":"Lock"),t})()};k(["click"]);const M=f('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useScrollLock/demo.tsx" target="_blank">source</a></p>',4);function C(n){const e=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},m(),n.components),{FunctionInfo:o,DemoContainer:s,ContextualNav:c}=e;return c||p("ContextualNav",!0),s||p("DemoContainer",!0),o||p("FunctionInfo",!0),l(e.div,{className:"markdown-body",get children(){return[l(e.h1,{children:"useScrollLock"}),`
`,l(o,{fn:"useScrollLock"}),`
`,l(e.p,{children:"Lock scrolling of the element."}),`
`,l(e.h2,{children:"Demo"}),`
`,`
`,l(s,{get children(){return[M.cloneNode(!0),l($,{})]}}),`
`,l(e.h2,{children:"Usage"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"tsx","data-theme":"default",get children(){return l(e.code,{"data-language":"tsx","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"useScrollLock"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"createSignal"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solid-js"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"Demo"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF98A4"},children:"el"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"setEl"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"createSignal"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"HTMLElement"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF98A4"},children:"isLock"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"setIsLock"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"useScrollLock"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#C8D3F5"},children:"el"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"  "}),l(e.span,{style:{color:"#7A88CF"},children:"// setIsLock(true) // lock"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"  "}),l(e.span,{style:{color:"#7A88CF"},children:"// setIsLock(false) // unlock"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#86E1FC"},children:"return"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF757F"},children:"div "}),l(e.span,{style:{color:"#C099FF"},children:"ref"}),l(e.span,{style:{color:"#86E1FC"},children:"={"}),l(e.span,{style:{color:"#C8D3F5"},children:"setEl"}),l(e.span,{style:{color:"#86E1FC"},children:"}></"}),l(e.span,{style:{color:"#FF757F"},children:"div"}),l(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}})]}})}})}}),`
`,l(e.h2,{children:"Type Declarations"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return l(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" * Lock scrolling of the element."})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"declare"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"function"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"useScrollLock"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"element"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"HTMLElement"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"SVGElement"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Window"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Document"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"null"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"undefined"}),l(e.span,{style:{color:"#86E1FC"},children:">,"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FCA7EA"},children:"initialState"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"boolean"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Signal"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF966C"},children:"boolean"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,l(e.h2,{children:"Source"}),`
`,l(e.p,{get children(){return[l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useScrollLock/index.ts",children:"Source"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useScrollLock/demo.tsx",children:"Demo"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useScrollLock/index.md",children:"Docs"})," • ",l(e.a,{href:"https://vueuse.org/core/useScrollLock",children:"VueUse Docs"})]}}),`
`,l(c,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function W(n={}){const{wrapper:e}=Object.assign({},m(),n.components);return e?l(e,L(n,{get children(){return l(C,n)}})):C(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{W as default};