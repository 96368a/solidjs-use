import{b as d,c as r,i as p,t as h,M as i,a as C}from"./index-9e74c468.js";import{N as u}from"./Note-9d3dca74.js";import{u as o}from"./index-bea81022.js";import"./index-827a0387.js";import"./index-9c3baea2.js";import"./index-7493a0ce.js";import"./scheduler-3ae68f06.js";function y(n){const e=o("(prefers-contrast: more)",n),l=o("(prefers-contrast: less)",n),s=o("(prefers-contrast: custom)",n);return d(()=>e()?"more":l()?"less":s()?"custom":"no-preference")}const F=h("<code></code>",2),m=()=>{const n=y();return[r(u,{class:"mb-2",children:"Preferred contrast:"}),(()=>{const e=F.cloneNode(!0);return p(e,n),e})()]};function a(n){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span"},i(),n.components),{FunctionInfo:l,DemoContainer:s,ContextualNav:c}=e;return c||t("ContextualNav",!0),s||t("DemoContainer",!0),l||t("FunctionInfo",!0),r(e.div,{className:"markdown-body",get children(){return[r(e.h1,{children:"usePreferredContrast"}),`
`,r(l,{fn:"usePreferredContrast"}),`
`,r(e.p,{get children(){return["Reactive ",r(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast",children:"prefers-contrast"})," media query."]}}),`
`,r(e.h2,{children:"Demo"}),`
`,`
`,r(s,{get children(){return r(m,{})}}),`
`,r(e.h2,{children:"Usage"}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return r(e.code,{"data-language":"js","data-theme":"default",get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#86E1FC"},children:"import"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{ "}),r(e.span,{style:{color:"#C8D3F5"},children:"usePreferredContrast"}),r(e.span,{style:{color:"#B4C2F0"},children:" }"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"from"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),r(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,r(e.span,{className:"line",children:" "}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"const"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"preferredContrast"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#65BCFF"},children:"usePreferredContrast"}),r(e.span,{style:{color:"#B4C2F0"},children:"()"})]}})]}})}})}}),`
`,r(e.h2,{children:"Type Declarations"}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return r(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"type"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"ContrastType"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"more"}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"|"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"less"}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"|"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"custom"}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"|"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"no-preference"}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#7A88CF"},children:" * Reactive prefers-contrast media query."})}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"declare"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C099FF"},children:"function"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#82AAFF"},children:"usePreferredContrast"}),r(e.span,{style:{color:"#B4C2F0"},children:"("}),r(e.span,{style:{color:"#FCA7EA"},children:"options"}),r(e.span,{style:{color:"#86E1FC"},children:"?:"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"ConfigurableWindow"}),r(e.span,{style:{color:"#B4C2F0"},children:")"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"solid_js"}),r(e.span,{style:{color:"#86E1FC"},children:"."}),r(e.span,{style:{color:"#FFC777"},children:"Accessor"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FFC777"},children:"ContrastType"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,r(e.h2,{children:"Source"}),`
`,r(e.p,{get children(){return[r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/usePreferredContrast/index.ts",children:"Source"})," • ",r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/usePreferredContrast/demo.tsx",children:"Demo"})," • ",r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/usePreferredContrast/index.md",children:"Docs"})," • ",r(e.a,{href:"https://vueuse.org/core/usePreferredContrast",children:"VueUse Docs"})]}}),`
`,r(c,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function v(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?r(e,C(n,{get children(){return r(a,n)}})):a(n)}function t(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{v as default};