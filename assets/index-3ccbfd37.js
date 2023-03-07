import{z as c,A as E,X as B,B as v,i as N,t as h,M as p,c as r,a as A}from"./index-bb12af8a.js";import{s as T}from"./index-4d16561d.js";import{u as j}from"./index-18c643bd.js";import{u as w}from"./index-054d06b3.js";import"./index-62711f23.js";import"./scheduler-3ae68f06.js";function k({navigator:l=B}={}){const e=["chargingchange","chargingtimechange","dischargingtimechange","levelchange"],n=w(()=>l&&"getBattery"in l),[s,t]=c(!1),[y,F]=c(0),[u,g]=c(0),[C,m]=c(1);let o;function i(){t(this.charging),F(this.chargingTime||0),g(this.dischargingTime||0),m(this.level)}const D=v();return n()&&l.getBattery().then(b=>{o=b,i.call(o);for(const f of e)E(D,()=>{j(o,f,i,{passive:!0})})}),{isSupported:n,charging:s,chargingTime:y,dischargingTime:u,level:C}}const _=h('<div><pre lang="yaml"></pre></div>',4),S=()=>{const l=k();return(()=>{const e=_.cloneNode(!0),n=e.firstChild;return N(n,()=>T(l)),e})()},x=h('<p class="demo-source-link"><a href="https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useBattery/demo.tsx" target="_blank">source</a></p>',4);function d(l){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},p(),l.components),{FunctionInfo:n,DemoContainer:s,ContextualNav:t}=e;return t||a("ContextualNav",!0),s||a("DemoContainer",!0),n||a("FunctionInfo",!0),r(e.div,{className:"markdown-body",get children(){return[r(e.h1,{children:"useBattery"}),`
`,r(n,{fn:"useBattery"}),`
`,r(e.p,{get children(){return["Reactive ",r(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API",children:"Battery Status API"}),", more often referred to as the Battery API, provides information about the system's battery charge level and lets you be notified by events that are sent when the battery level or charging status change. This can be used to adjust your app's resource usage to reduce battery drain when the battery is low, or to save changes before the battery runs out in order to prevent data loss."]}}),`
`,r(e.h2,{children:"Demo"}),`
`,`
`,r(s,{get children(){return[x.cloneNode(!0),r(S,{})]}}),`
`,r(e.h2,{children:"Usage"}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return r(e.code,{"data-language":"js","data-theme":"default",get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#86E1FC"},children:"import"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{ "}),r(e.span,{style:{color:"#C8D3F5"},children:"useBattery"}),r(e.span,{style:{color:"#B4C2F0"},children:" }"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"from"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),r(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,r(e.span,{className:"line",children:" "}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"const"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"{"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"charging"}),r(e.span,{style:{color:"#86E1FC"},children:","}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"chargingTime"}),r(e.span,{style:{color:"#86E1FC"},children:","}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"dischargingTime"}),r(e.span,{style:{color:"#86E1FC"},children:","}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF98A4"},children:"level"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"}"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#65BCFF"},children:"useBattery"}),r(e.span,{style:{color:"#B4C2F0"},children:"()"})]}})]}})}})}}),`
`,r(e.table,{get children(){return[r(e.thead,{get children(){return r(e.tr,{get children(){return[r(e.th,{children:"State"}),r(e.th,{children:"Type"}),r(e.th,{children:"Description"})]}})}}),r(e.tbody,{get children(){return[r(e.tr,{get children(){return[r(e.td,{children:"charging"}),r(e.td,{get children(){return r(e.code,{children:"Boolean"})}}),r(e.td,{children:"If the device is currently charging."})]}}),r(e.tr,{get children(){return[r(e.td,{children:"chargingTime"}),r(e.td,{get children(){return r(e.code,{children:"Number"})}}),r(e.td,{children:"The number of seconds until the device becomes fully charged."})]}}),r(e.tr,{get children(){return[r(e.td,{children:"dischargingTime"}),r(e.td,{get children(){return r(e.code,{children:"Number"})}}),r(e.td,{children:"The number of seconds before the device becomes fully discharged."})]}}),r(e.tr,{get children(){return[r(e.td,{children:"level"}),r(e.td,{get children(){return r(e.code,{children:"Number"})}}),r(e.td,{children:"A number between 0 and 1 representing the current charge level."})]}})]}})]}}),`
`,r(e.h2,{children:"Use-cases"}),`
`,r(e.p,{children:"Our applications normally are not empathetic to battery level, we can make a few adjustments to our applications that will be more friendly to low battery users."}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{children:'Trigger a special "dark-mode" battery saver theme settings.'}),`
`,r(e.li,{children:"Stop auto playing videos in news feeds."}),`
`,r(e.li,{children:"Disable some background workers that are not critical."}),`
`,r(e.li,{children:"Limit network calls and reduce CPU/Memory consumption."}),`
`]}}),`
`,r(e.h2,{children:"Type Declarations"}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return r(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"interface"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"BatteryManager"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C099FF"},children:"extends"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C3E88D"},children:"EventTarget"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"charging"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF966C"},children:"boolean"}),r(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"chargingTime"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF966C"},children:"number"}),r(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"dischargingTime"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF966C"},children:"number"}),r(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"level"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FF966C"},children:"number"}),r(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#7A88CF"},children:" * Reactive Battery Status API."})}}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"declare"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C099FF"},children:"function"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#82AAFF"},children:"useBattery"}),r(e.span,{style:{color:"#B4C2F0"},children:"("}),r(e.span,{style:{color:"#86E1FC"},children:"{"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FCA7EA"},children:"navigator"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"}"}),r(e.span,{style:{color:"#C8D3F5"},children:"?"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"ConfigurableNavigator"}),r(e.span,{style:{color:"#B4C2F0"},children:")"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"isSupported"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"solid_js"}),r(e.span,{style:{color:"#86E1FC"},children:"."}),r(e.span,{style:{color:"#FFC777"},children:"Accessor"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FF966C"},children:"boolean"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"charging"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"solid_js"}),r(e.span,{style:{color:"#86E1FC"},children:"."}),r(e.span,{style:{color:"#FFC777"},children:"Accessor"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FF966C"},children:"boolean"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"chargingTime"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"solid_js"}),r(e.span,{style:{color:"#86E1FC"},children:"."}),r(e.span,{style:{color:"#FFC777"},children:"Accessor"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FF966C"},children:"number"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"dischargingTime"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"solid_js"}),r(e.span,{style:{color:"#86E1FC"},children:"."}),r(e.span,{style:{color:"#FFC777"},children:"Accessor"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FF966C"},children:"number"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C8D3F5"},children:"    "}),r(e.span,{style:{color:"#4FD6BE"},children:"level"}),r(e.span,{style:{color:"#86E1FC"},children:":"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"solid_js"}),r(e.span,{style:{color:"#86E1FC"},children:"."}),r(e.span,{style:{color:"#FFC777"},children:"Accessor"}),r(e.span,{style:{color:"#86E1FC"},children:"<"}),r(e.span,{style:{color:"#FF966C"},children:"number"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#B4C2F0"},children:"}"}),r(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#C099FF"},children:"type"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"UseBatteryReturn"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"="}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#FFC777"},children:"ReturnType"}),r(e.span,{style:{color:"#86E1FC"},children:"<typeof"}),r(e.span,{style:{color:"#C8D3F5"},children:" useBattery"}),r(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,r(e.h2,{children:"Source"}),`
`,r(e.p,{get children(){return[r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useBattery/index.ts",children:"Source"})," • ",r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useBattery/demo.tsx",children:"Demo"})," • ",r(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useBattery/index.md",children:"Docs"})," • ",r(e.a,{href:"https://vueuse.org/core/useBattery",children:"VueUse Docs"})]}}),`
`,r(t,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#use-cases",label:"Use-cases",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function $(l={}){const{wrapper:e}=Object.assign({},p(),l.components);return e?r(e,A(l,{get children(){return r(d,l)}})):d(l)}function a(l,e){throw new Error("Expected "+(e?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{$ as default};