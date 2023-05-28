import{n as d,c as l,T as p,t as a,M as i,a as h}from"./index-318a2ebc.js";import{N as y}from"./Note-b89a7a28.js";import{o as F}from"./index-c045d90c.js";import"./index-9313c660.js";const C=a('<input type="text" placeholder="Start typing to focus">'),u=()=>{const[n,e]=d(null);return F(()=>{n().focus()}),[l(y,{children:"Type anything"}),(()=>{const r=C();return p(e,r),r})()]},g=u,m=a('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/onStartTyping/demo.tsx" target="_blank">source');function t(n){const e=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},i(),n.components),{FunctionInfo:r,DemoContainer:o,ContextualNav:c}=e;return c||s("ContextualNav",!0),o||s("DemoContainer",!0),r||s("FunctionInfo",!0),l(e.div,{className:"markdown-body",get children(){return[l(e.h1,{children:"onStartTyping"}),`
`,l(r,{fn:"onStartTyping"}),`
`,l(e.p,{children:"Fires when users start typing on non-editable elements."}),`
`,l(e.h2,{children:"Demo"}),`
`,`
`,l(o,{get children(){return[m(),l(g,{})]}}),`
`,l(e.h2,{children:"Usage"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"tsx","data-theme":"default",get children(){return l(e.code,{"data-language":"tsx","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"onStartTyping"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"createSignal"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solid-js"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"Demo"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF98A4"},children:"input"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"setInput"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"createSignal"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"HTMLInputElement"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"null"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#7F85A3"},children:"null"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#65BCFF"},children:"onStartTyping"}),l(e.span,{style:{color:"#B4C2F0"},children:"(() "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#B4C2F0"},children:" {"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    "}),l(e.span,{style:{color:"#65BCFF"},children:"input"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#86E1FC"},children:"!."}),l(e.span,{style:{color:"#65BCFF"},children:"focus"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"  })"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#86E1FC"},children:"return"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF757F"},children:"input "}),l(e.span,{style:{color:"#C099FF"},children:"ref"}),l(e.span,{style:{color:"#86E1FC"},children:"={"}),l(e.span,{style:{color:"#C8D3F5"},children:"setInput"}),l(e.span,{style:{color:"#86E1FC"},children:"}"}),l(e.span,{style:{color:"#FF757F"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"type"}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#86E1FC"},children:'"'}),l(e.span,{style:{color:"#C3E88D"},children:"text"}),l(e.span,{style:{color:"#86E1FC"},children:'"'}),l(e.span,{style:{color:"#FF757F"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"placeholder"}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#86E1FC"},children:'"'}),l(e.span,{style:{color:"#C3E88D"},children:"Start typing to focus"}),l(e.span,{style:{color:"#86E1FC"},children:'"'}),l(e.span,{style:{color:"#FF757F"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"/>"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}})]}})}})}}),`
`,l(e.h2,{children:"Type Declarations"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return l(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" * Fires when users start typing on non-editable elements."})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" *"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#7A88CF"},children:" * "}),l(e.span,{style:{color:"#86E1FC"},children:"@"}),l(e.span,{style:{color:"#C099FF"},children:"see"}),l(e.span,{style:{color:"#7A88CF"},children:" "}),l(e.span,{style:{color:"#C8D3F5"},children:"https://solidjs-use.github.io/solidjs-use/core/onStartTyping"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"declare"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"function"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"onStartTyping"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#82AAFF"},children:"callback"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"event"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"KeyboardEvent"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"void"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FCA7EA"},children:"options"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"ConfigurableDocument"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"void"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}})]}})}})}}),`
`,l(e.h2,{children:"Source"}),`
`,l(e.p,{get children(){return[l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/onStartTyping/index.ts",children:"Source"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/onStartTyping/demo.tsx",children:"Demo"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/onStartTyping/index.md",children:"Docs"})," • ",l(e.a,{href:"https://vueuse.org/core/onStartTyping",children:"VueUse Docs"})]}}),`
`,l(c,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function b(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?l(e,h(n,{get children(){return l(t,n)}})):t(n)}function s(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{b as default};