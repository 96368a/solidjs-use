import{M as c,c as n,a as d,i as s,t as a}from"./index-24ac6e1e.js";const h=a('<h1 align="center">SOLIDJS-USE</h1>',2),o=a('<div align="center"></div>',2);function i(l){const e=Object.assign({div:"div",p:"p",a:"a",img:"img",strong:"strong",h2:"h2",ul:"ul",li:"li",pre:"pre",code:"code",span:"span"},c(),l.components),{ContextualNav:t}=e;return t||u("ContextualNav",!0),n(e.div,{className:"markdown-body",get children(){return[h.cloneNode(!0),`
`,(()=>{const r=o.cloneNode(!0);return s(r,n(e.p,{children:"Collection of SolidJS utilities inspired completely by VueUse."}),null),s(r,n(e.p,{get children(){return[n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/actions/workflows/ci.yml",get children(){return n(e.img,{src:"https://github.com/solidjs-use/solidjs-use/actions/workflows/ci.yml/badge.svg",alt:"CI status"})}})," ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/actions/workflows/docs.yml",get children(){return n(e.img,{src:"https://github.com/solidjs-use/solidjs-use/actions/workflows/docs.yml/badge.svg",alt:"Docs status"})}})," ",n(e.a,{href:"http://npmjs.org/package/solidjs-use",get children(){return n(e.img,{src:"https://img.shields.io/npm/v/solidjs-use?style=flat-square",alt:"NPM version"})}})," ",n(e.a,{href:"https://npmjs.org/package/solidjs-use",get children(){return n(e.img,{src:"https://img.shields.io/npm/dm/solidjs-use?style=flat-square",alt:"NPM downloads"})}})," ",n(e.img,{src:"https://img.shields.io/github/license/solidjs-use/solidjs-use?style=flat-square",alt:"GitHub"})]}}),null),r})(),`
`,(()=>{const r=o.cloneNode(!0);return s(r,n(e.p,{get children(){return n(e.strong,{get children(){return[n(e.a,{href:"/solidjs-use/",children:"Docs"})," • ",n(e.a,{href:"/solidjs-use-playground/",children:"Playground"})," • ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use-vite-starter",children:"Demo"})]}})}})),r})(),`
`,n(e.p,{get children(){return n(e.a,{href:"/solidjs-use",get children(){return n(e.img,{src:"./show.png",alt:""})}})}}),`
`,n(e.h2,{children:"🚀 Features"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return["🎛 ",n(e.strong,{children:"Feature Rich"}),": 300+ functions for you to choose from"]}}),`
`,n(e.li,{get children(){return["🎪 ",n(e.a,{href:"/solidjs-use",get children(){return n(e.strong,{children:"Interactive docs & demos"})}})]}}),`
`,n(e.li,{get children(){return["⚡ ",n(e.strong,{children:"Fully tree shakeable"}),": Only take what you want, ",n(e.a,{href:"/solidjs-use/export-size",children:"bundle size"})]}}),`
`,n(e.li,{get children(){return["🦾 ",n(e.strong,{children:"Type Strong"}),": Written in ",n(e.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),", with ",n(e.a,{href:"https://github.com/microsoft/tsdoc",children:"TS Docs"})]}}),`
`,n(e.li,{get children(){return["🔩 ",n(e.strong,{children:"Flexible"}),": Configurable event filters and targets"]}}),`
`]}}),`
`,n(e.h2,{children:"🦄 Usage"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return n(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"tsx","data-theme":"default",get children(){return n(e.code,{"data-language":"tsx","data-theme":"default",get children(){return[n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#86E1FC"},children:"import"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{ "}),n(e.span,{style:{color:"#C8D3F5"},children:"useMouse"}),n(e.span,{style:{color:"#B4C2F0"},children:" }"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"from"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"'"}),n(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),n(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,n(e.span,{className:"line",children:" "}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#C099FF"},children:"const"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#82AAFF"},children:"Demo"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"="}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"()"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#C099FF"},children:"=>"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#B4C2F0"},children:"  "}),n(e.span,{style:{color:"#C099FF"},children:"const"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"{"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#FF98A4"},children:"x"}),n(e.span,{style:{color:"#86E1FC"},children:","}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#FF98A4"},children:"y"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"}"}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"="}),n(e.span,{style:{color:"#B4C2F0"},children:" "}),n(e.span,{style:{color:"#65BCFF"},children:"useMouse"}),n(e.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#B4C2F0"},children:"  "}),n(e.span,{style:{color:"#86E1FC"},children:"return"}),n(e.span,{style:{color:"#B4C2F0"},children:" ("})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#B4C2F0"},children:"    "}),n(e.span,{style:{color:"#86E1FC"},children:"<"}),n(e.span,{style:{color:"#FF757F"},children:"h1"}),n(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#B4C2F0"},children:"      "}),n(e.span,{style:{color:"#86E1FC"},children:"{"}),n(e.span,{style:{color:"#65BCFF"},children:"x"}),n(e.span,{style:{color:"#B4C2F0"},children:"()"}),n(e.span,{style:{color:"#86E1FC"},children:"}"}),n(e.span,{style:{color:"#B4C2F0"},children:" x "}),n(e.span,{style:{color:"#86E1FC"},children:"{"}),n(e.span,{style:{color:"#65BCFF"},children:"y"}),n(e.span,{style:{color:"#B4C2F0"},children:"()"}),n(e.span,{style:{color:"#86E1FC"},children:"}"})]}}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#B4C2F0"},children:"    "}),n(e.span,{style:{color:"#86E1FC"},children:"</"}),n(e.span,{style:{color:"#FF757F"},children:"h1"}),n(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#B4C2F0"},children:"  )"})}}),`
`,n(e.span,{className:"line",get children(){return n(e.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,n(e.span,{className:"line",children:" "}),`
`,n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#86E1FC"},children:"export"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#86E1FC"},children:"default"}),n(e.span,{style:{color:"#C8D3F5"},children:" Demo"})]}})]}})}})}}),`
`,n(e.p,{get children(){return["Refer to ",n(e.a,{href:"/solidjs-use/",children:"documentations"})," for more details."]}}),`
`,n(e.h2,{children:"📦 Install"}),`
`,n(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return n(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"bash","data-theme":"default",get children(){return n(e.code,{"data-language":"bash","data-theme":"default",get children(){return n(e.span,{className:"line",get children(){return[n(e.span,{style:{color:"#FFC777"},children:"npm"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#C3E88D"},children:"i"}),n(e.span,{style:{color:"#C8D3F5"},children:" "}),n(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"})]}})}})}})}}),`
`,n(e.p,{get children(){return n(e.a,{href:"/solidjs-use/add-ons.html",children:"Add ons"})}}),`
`,n(e.h2,{children:"Demo"}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.a,{href:"https://github.com/solidjs-use/solidjs-use-vite-starter",children:"Vite + SolidJS + solidjs-use"})}}),`
`]}}),`
`,n(e.h2,{children:"🧱 Contribute"}),`
`,n(e.p,{get children(){return["See the ",n(e.a,{href:"/solidjs-use/contributing",get children(){return n(e.strong,{children:"Contributing Guide"})}})]}}),`
`,n(e.h2,{children:"🌸 Thanks"}),`
`,n(e.p,{children:"This project is heavily inspired by the following awesome projects."}),`
`,n(e.ul,{get children(){return[`
`,n(e.li,{get children(){return n(e.a,{href:"https://vueuse.org/",children:"vueuse"})}}),`
`,n(e.li,{get children(){return n(e.a,{href:"https://github.com/streamich/react-use",children:"streamich/react-use"})}}),`
`,n(e.li,{get children(){return n(e.a,{href:"https://github.com/u3u/vue-hooks",children:"u3u/vue-hooks"})}}),`
`,n(e.li,{get children(){return n(e.a,{href:"https://github.com/logaretm/vue-use-web",children:"logaretm/vue-use-web"})}}),`
`,n(e.li,{get children(){return n(e.a,{href:"https://github.com/kripod/react-hooks",children:"kripod/react-hooks"})}}),`
`]}}),`
`,n(e.p,{get children(){return["And thanks to ",n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/graphs/contributors",children:"all the contributors on GitHub"}),"!"]}}),`
`,n(e.h2,{children:"📄 License"}),`
`,n(e.p,{get children(){return[n(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/LICENSE",children:"MIT License"})," © 2023-PRESENT ",n(e.a,{href:"https://github.com/dream2023",children:"dream2023"})]}}),`
`,n(t,{links:[{href:"#features",label:"🚀 Features",indent:!1},{href:"#usage",label:"🦄 Usage",indent:!1},{href:"#install",label:"📦 Install",indent:!1},{href:"#demo",label:"Demo",indent:!1},{href:"#contribute",label:"🧱 Contribute",indent:!1},{href:"#thanks",label:"🌸 Thanks",indent:!1},{href:"#license",label:"📄 License",indent:!1}]})]}})}function g(l={}){const{wrapper:e}=Object.assign({},c(),l.components);return e?n(e,d(l,{get children(){return n(i,l)}})):i(l)}function u(l,e){throw new Error("Expected "+(e?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default};
