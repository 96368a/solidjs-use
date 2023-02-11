import{k as b,z as i,U as C,i as d,g as A,t,M as D,c as e,a as N}from"./index-60a4a5ae.js";import{u}from"./index-955086f2.js";import"./index-b3a2a374.js";const v=t('<div style="--color: #7fa998; color: var(--color)">Sample text, </div>',2),V=t("<button>Change Color</button>",2),S=t("<div>Sample text, <!>: </div>",3),k=t("<button>Change Color Variable</button>",2),x=()=>{const[r,l]=i(null),[s,o]=u("--color",r),c=()=>{s()==="#df8543"?o("#7fa998"):o("#df8543")},[g,m]=i(null),[a,p]=i("--color"),[F]=u(a,g),f=()=>{a()==="--color"?p("--color-one"):p("--color")};return[(()=>{const n=v.cloneNode(!0);return n.firstChild,C(l,n),d(n,s,null),n})(),(()=>{const n=V.cloneNode(!0);return n.$$click=c,n})(),(()=>{const n=S.cloneNode(!0),B=n.firstChild,y=B.nextSibling;return y.nextSibling,C(m,n),n.style.setProperty("--color","#7fa998"),n.style.setProperty("--color-one","#df8543"),d(n,a,y),d(n,F,null),A(()=>n.style.setProperty("color",F())),n})(),(()=>{const n=k.cloneNode(!0);return n.$$click=f,n.style.setProperty("margin-left","0"),n})()]};b(["click"]);function E(r){const l=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},D(),r.components),{FunctionInfo:s,DemoContainer:o,ContextualNav:c}=l;return c||h("ContextualNav",!0),o||h("DemoContainer",!0),s||h("FunctionInfo",!0),e(l.div,{className:"markdown-body",get children(){return[e(l.h1,{children:"useCssVar"}),`
`,e(s,{fn:"useCssVar"}),`
`,e(l.p,{children:"Manipulate CSS variables"}),`
`,e(l.h2,{children:"Demo"}),`
`,`
`,e(o,{get children(){return e(x,{})}}),`
`,e(l.h2,{children:"Usage"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return e(l.code,{"data-language":"js","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"solid-js"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"useCssVar"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"el"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setEl"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"color"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"useCssVar"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"--color"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" el"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"elv"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setElv"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#7F85A3"},children:"null"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"key"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setKey"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"--color"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"colorVal"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"useCssVar"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#C8D3F5"},children:"key"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" elv"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"someEl"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setSomeEl"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#7F85A3"},children:"null"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"color"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"useCssVar"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"--color"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" someEl"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#4FD6BE"},children:"initialValue"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#A9B8E8"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"#eee"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#A9B8E8"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"})"})]}})]}})}})}}),`
`,e(l.h2,{children:"Type Declarations"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return e(l.code,{"data-language":"typescript","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"interface"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"UseCssVarOptions"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"extends"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C3E88D"},children:"ConfigurableWindow"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C8D3F5"},children:"    "}),e(l.span,{style:{color:"#4FD6BE"},children:"initialValue"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:" * Manipulate CSS variables."})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"declare"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"function"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"useCssVar"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"prop"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#86E1FC"},children:">,"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FCA7EA"},children:"target"}),e(l.span,{style:{color:"#86E1FC"},children:"?:"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"MaybeElementAccessor"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"{"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FCA7EA"},children:"window"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FCA7EA"},children:"initialValue"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"}"}),e(l.span,{style:{color:"#C8D3F5"},children:"?"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"UseCssVarOptions"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Signal"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF966C"},children:"string"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,e(l.h2,{children:"Source"}),`
`,e(l.p,{get children(){return[e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useCssVar/index.ts",children:"Source"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useCssVar/demo.tsx",children:"Demo"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useCssVar/index.md",children:"Docs"})," • ",e(l.a,{href:"https://vueuse.org/core/useCssVar",children:"VueUse Docs"})]}}),`
`,e(c,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function M(r={}){const{wrapper:l}=Object.assign({},D(),r.components);return l?e(l,N(r,{get children(){return e(E,r)}})):E(r)}function h(r,l){throw new Error("Expected "+(l?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{M as default};