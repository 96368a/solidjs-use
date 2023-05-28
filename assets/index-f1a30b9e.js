import{n as d,c as n,i as p,t as i,M as a,a as h}from"./index-318a2ebc.js";import{N as u}from"./Note-b89a7a28.js";import{u as F}from"./index-8624aca9.js";import{i as y}from"./interval-f7f1ecae.js";import"./Observable-551bfbb9.js";const C=i("<p>Counter: "),m=()=>{const[l,e]=d(0);return F(y(1e3).subscribe(()=>{e(r=>r+1)})),[n(u,{children:"Update every 1s"}),(()=>{const r=C();return r.firstChild,p(r,l,null),r})()]},g=m,b=i('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/useSubscription/demo.tsx" target="_blank">source');function t(l){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",span:"span"},a(),l.components),{FunctionInfo:r,DemoContainer:o,ContextualNav:c}=e;return c||s("ContextualNav",!0),o||s("DemoContainer",!0),r||s("FunctionInfo",!0),n(e.div,{className:"markdown-body",get children(){return[n(e.h1,{children:"useSubscription"}),`
`,n(r,{fn:"useSubscription"}),`
`,n(e.p,{get children(){return["Use an RxJS ",n(e.a,{href:"https://rxjs.dev/guide/subscription",get children(){return n(e.code,{children:"Subscription"})}})," without worrying about unsubscribing from it or creating memory leaks."]}}),`
`,n(e.h2,{children:"Demo"}),`
`,`
`,n(o,{get children(){return[b(),n(g,{})]}}),`
`,n(e.p,{get children(){return["Available in the ",n(e.a,{href:"/solidjs-use/rxjs/README",children:"@solidjs-use/rxjs"})," add-on."]}}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return n(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return n(e.code,{"data-language":"ts","data-theme":"default",get children(){return[n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#86E1FC"},children:"import"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{ "}),n(e.span,{style:{color:"#C8D3F5"},children:"useSubscription"}),n(e.span,{style:{color:"#B4C2F0"},children:" }"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"from"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"'"}),n(e.span,{style:{color:"#C3E88D"},children:"@solidjs-use/rxjs"}),n(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#86E1FC"},children:"import"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{ "}),n(e.span,{style:{color:"#C8D3F5"},children:"interval"}),n(e.span,{style:{color:"#B4C2F0"},children:" }"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"from"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"'"}),n(e.span,{style:{color:"#C3E88D"},children:"rxjs"}),n(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#86E1FC"},children:"import"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{ "}),n(e.span,{style:{color:"#C8D3F5"},children:"createSignal"}),n(e.span,{style:{color:"#B4C2F0"},children:" }"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"from"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"'"}),n(e.span,{style:{color:"#C3E88D"},children:"solid-js"}),n(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,n(e.span,{className:"line",children:" "}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"const"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"["}),n(e.span,{style:{color:"#FF98A4"},children:"count"}),n(e.span,{style:{color:"#86E1FC"},children:","}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FF98A4"},children:"setCount"}),n(e.span,{style:{color:"#86E1FC"},children:"]"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"="}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#65BCFF"},children:"createSignal"}),n(e.span,{style:{color:"#B4C2F0"},children:"("}),n(e.span,{style:{color:"#FF966C"},children:"0"}),n(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,n(e.span,{className:"line",children:" "}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:"// useSubscription call unsubscribe method before unmount the component"})}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#65BCFF"},children:"useSubscription"}),n(e.span,{style:{color:"#B4C2F0"},children:"("})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C8D3F5"},children:"  "}),n(e.span,{style:{color:"#65BCFF"},children:"interval"}),n(e.span,{style:{color:"#B4C2F0"},children:"("}),n(e.span,{style:{color:"#FF966C"},children:"1000"}),n(e.span,{style:{color:"#B4C2F0"},children:")"}),n(e.span,{style:{color:"#86E1FC"},children:"."}),n(e.span,{style:{color:"#65BCFF"},children:"subscribe"}),n(e.span,{style:{color:"#B4C2F0"},children:"(()"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#C099FF"},children:"=>"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#B4C2F0"},children:"    "}),n(e.span,{style:{color:"#65BCFF"},children:"setCount"}),n(e.span,{style:{color:"#B4C2F0"},children:"("}),n(e.span,{style:{color:"#FCA7EA"},children:"state"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#C099FF"},children:"=>"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#C8D3F5"},children:"state"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"+"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#FF966C"},children:"1"}),n(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#B4C2F0"},children:"  })"})}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#B4C2F0"},children:")"})}})]}})}})}}),`
`,n(e.h2,{children:"Type Declarations"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return n(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return n(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:" * Use an RxJS Subscription without worrying about unsubscribing from it or creating memory leaks."})}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:" *"})}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#7A88CF"},children:" * "}),n(e.span,{style:{color:"#86E1FC"},children:"@"}),n(e.span,{style:{color:"#C099FF"},children:"see"}),n(e.span,{style:{color:"#7A88CF"},children:" "}),n(e.span,{style:{color:"#C8D3F5"},children:"https://solidjs-use.github.io/solidjs-use/rxjs/useSubscription"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#7A88CF"},children:" * "}),n(e.span,{style:{color:"#86E1FC"},children:"@"}),n(e.span,{style:{color:"#C099FF"},children:"see"}),n(e.span,{style:{color:"#7A88CF"},children:" "}),n(e.span,{style:{color:"#C8D3F5"},children:"https://rxjs.dev/guide/subscription"})]}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"declare"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#C099FF"},children:"function"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#82AAFF"},children:"useSubscription"}),n(e.span,{style:{color:"#B4C2F0"},children:"("}),n(e.span,{style:{color:"#FCA7EA"},children:"subscription"}),n(e.span,{style:{color:"#86E1FC"},children:":"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FFC777"},children:"Unsubscribable"}),n(e.span,{style:{color:"#B4C2F0"},children:")"}),n(e.span,{style:{color:"#86E1FC"},children:":"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#FF966C"},children:"void"}),n(e.span,{style:{color:"#86E1FC"},children:";"})]}})]}})}})}}),`
`,n(e.h2,{children:"Source"}),`
`,n(e.p,{get children(){return[n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/useSubscription/index.ts",children:"Source"})," • ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/useSubscription/demo.tsx",children:"Demo"})," • ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/useSubscription/index.md",children:"Docs"})," • ",n(e.a,{href:"https://vueuse.org/rxjs/useSubscription",children:"VueUse Docs"})]}}),`
`,n(c,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function x(l={}){const{wrapper:e}=Object.assign({},a(),l.components);return e?n(e,h(l,{get children(){return n(t,l)}})):t(l)}function s(l,e){throw new Error("Expected "+(e?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{x as default};