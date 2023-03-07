import{z as C,r as u,aa as D,q as E,i as h,t as i,M as F,c as e,a as m}from"./index-bb12af8a.js";import{s as g}from"./index-4d16561d.js";import{o as f}from"./index-491744ff.js";import{u as t}from"./index-18c643bd.js";const y={x:0,y:0,pointerId:0,pressure:0,tiltX:0,tiltY:0,width:0,height:0,twist:0,pointerType:null},b=Object.keys(y);function N(n={}){const{target:l=E}=n,[o,c]=C(!1),r=u(n.initialValue??{});Object.assign(r,y);const s=d=>{c(!0),!(n.pointerTypes&&!n.pointerTypes.includes(d.pointerType))&&Object.assign(r,f(d,b,!1))};return l&&(t(l,"pointerdown",s,{passive:!0}),t(l,"pointermove",s,{passive:!0}),t(l,"pointerleave",()=>c(!1),{passive:!0})),{...D(r),isInside:o}}const A=i('<pre class="select-none" style="touch-action: none"></pre>',2),B=()=>{const n=N();return(()=>{const l=A.cloneNode(!0);return h(l,()=>g(n)),l})()},P=i('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/usePointer/demo.tsx" target="_blank">source</a></p>',4),j=i("<details><summary op50 italic>Show Type Declarations</summary></details>",4);function p(n){const l=Object.assign({div:"div",h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span"},F(),n.components),{FunctionInfo:o,DemoContainer:c,ContextualNav:r}=l;return r||a("ContextualNav",!0),c||a("DemoContainer",!0),o||a("FunctionInfo",!0),e(l.div,{className:"markdown-body",get children(){return[e(l.h1,{children:"usePointer"}),`
`,e(o,{fn:"usePointer"}),`
`,e(l.p,{get children(){return["Reactive ",e(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",children:"pointer state"}),"."]}}),`
`,e(l.h2,{children:"Demo"}),`
`,`
`,e(c,{get children(){return[P.cloneNode(!0),e(B,{})]}}),`
`,e(l.h2,{children:"Basic Usage"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return e(l.code,{"data-language":"js","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"usePointer"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"{"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"x"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"y"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"pressure"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"pointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"}"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"usePointer"}),e(l.span,{style:{color:"#B4C2F0"},children:"()"})]}})]}})}})}}),`
`,e(l.h2,{children:"Type Declarations"}),`
`,(()=>{const s=j.cloneNode(!0);return s.firstChild,h(s,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return e(l.code,{"data-language":"typescript","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"interface"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"UsePointerState"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"extends"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C3E88D"},children:"Position"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"pressure"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"pointerId"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"tiltX"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"tiltY"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"width"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"height"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"twist"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"pointerType"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"interface"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"UsePointerOptions"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"extends"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C3E88D"},children:"ConfigurableWindow"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Pointer types that listen to."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"['mouse',"}),e(l.span,{style:{color:"#7A88CF"},children:" 'touch', 'pen']"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"pointerTypes"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#86E1FC"},children:"[];"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     * Initial values"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"initialValue"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"Partial"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"UsePointerState"}),e(l.span,{style:{color:"#86E1FC"},children:">>;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#7A88CF"},children:"     * "}),e(l.span,{style:{color:"#86E1FC"},children:"@"}),e(l.span,{style:{color:"#C099FF"},children:"default"}),e(l.span,{style:{color:"#7A88CF"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"window"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"target"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"EventTarget"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"undefined"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Document"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Window"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:" * Reactive pointer state."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"declare"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"function"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"usePointer"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"options"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"UsePointerOptions"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"isInside"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"boolean"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"x"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"y"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"height"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"width"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"pressure"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"pointerId"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"tiltX"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"tiltY"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"twist"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"pointerType"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"solid_js"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"number"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"PointerType"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"}"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"type"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"UsePointerReturn"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"ReturnType"}),e(l.span,{style:{color:"#86E1FC"},children:"<typeof"}),e(l.span,{style:{color:"#C8D3F5"},children:" usePointer"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),null),s})(),`
`,e(l.h2,{children:"Source"}),`
`,e(l.p,{get children(){return[e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/usePointer/index.ts",children:"Source"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/usePointer/demo.tsx",children:"Demo"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/usePointer/index.md",children:"Docs"})," • ",e(l.a,{href:"https://vueuse.org/core/usePointer",children:"VueUse Docs"})]}}),`
`,e(r,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#basic-usage",label:"Basic Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function x(n={}){const{wrapper:l}=Object.assign({},F(),n.components);return l?e(l,m(n,{get children(){return e(p,n)}})):p(n)}function a(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{x as default};