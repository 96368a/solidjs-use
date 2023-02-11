import{z as h,a1 as F,i as u,t as y,M as d,c as n,a as C}from"./index-9e74c468.js";function m(l){const[e,s]=h(0);if(typeof performance>"u")return e;const c=l?.every??10;let r=performance.now(),o=0;return F(()=>{if(o+=1,o>=c){const a=performance.now(),p=a-r;s(Math.round(1e3/(p/o))),r=a,o=0}}),e}const f=y("<div>FPS: </div>",2),g=()=>{const l=m();return(()=>{const e=f.cloneNode(!0);return e.firstChild,u(e,l,null),e})()};function i(l){const e=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},d(),l.components),{FunctionInfo:s,DemoContainer:c,ContextualNav:r}=e;return r||t("ContextualNav",!0),c||t("DemoContainer",!0),s||t("FunctionInfo",!0),n(e.div,{className:"markdown-body",get children(){return[n(e.h1,{children:"useFps"}),`
`,n(s,{fn:"useFps"}),`
`,n(e.p,{children:"Reactive FPS (frames per second)."}),`
`,n(e.h2,{children:"Demo"}),`
`,`
`,n(c,{get children(){return n(g,{})}}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return n(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return n(e.code,{"data-language":"js","data-theme":"default",get children(){return[n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#86E1FC"},children:"import"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{ "}),n(e.span,{style:{color:"#C8D3F5"},children:"useFps"}),n(e.span,{style:{color:"#B4C2F0"},children:" }"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"from"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"'"}),n(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),n(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,n(e.span,{className:"line",children:" "}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"const"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FF98A4"},children:"fps"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"="}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#65BCFF"},children:"useFps"}),n(e.span,{style:{color:"#B4C2F0"},children:"()"})]}})]}})}})}}),`
`,n(e.h2,{children:"Type Declarations"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return n(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return n(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"interface"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FFC777"},children:"UseFpsOptions"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C8D3F5"},children:"    "}),n(e.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:"     * Calculate the FPS on every x frames."})}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#7A88CF"},children:"     * "}),n(e.span,{style:{color:"#86E1FC"},children:"@"}),n(e.span,{style:{color:"#C099FF"},children:"default"}),n(e.span,{style:{color:"#7A88CF"},children:" "}),n(e.span,{style:{color:"#C8D3F5"},children:"10"})]}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C8D3F5"},children:"    "}),n(e.span,{style:{color:"#4FD6BE"},children:"every"}),n(e.span,{style:{color:"#86E1FC"},children:"?:"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FF966C"},children:"number"}),n(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"declare"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#C099FF"},children:"function"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#82AAFF"},children:"useFps"}),n(e.span,{style:{color:"#B4C2F0"},children:"("}),n(e.span,{style:{color:"#FCA7EA"},children:"options"}),n(e.span,{style:{color:"#86E1FC"},children:"?:"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FFC777"},children:"UseFpsOptions"}),n(e.span,{style:{color:"#B4C2F0"},children:")"}),n(e.span,{style:{color:"#86E1FC"},children:":"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FFC777"},children:"Accessor"}),n(e.span,{style:{color:"#86E1FC"},children:"<"}),n(e.span,{style:{color:"#FF966C"},children:"number"}),n(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,n(e.h2,{children:"Source"}),`
`,n(e.p,{get children(){return[n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useFps/index.ts",children:"Source"})," • ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useFps/demo.tsx",children:"Demo"})," • ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useFps/index.md",children:"Docs"})," • ",n(e.a,{href:"https://vueuse.org/core/useFps",children:"VueUse Docs"})]}}),`
`,n(r,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function b(l={}){const{wrapper:e}=Object.assign({},d(),l.components);return e?n(e,C(l,{get children(){return n(i,l)}})):i(l)}function t(l,e){throw new Error("Expected "+(e?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{b as default};