import{u as A}from"./index-06d6e86c.js";import{p as B}from"./index-9cc34db9.js";import{r,n as h,z as I}from"./index-4206062e.js";function _(n,s,w){const{immediate:p=!0,delay:y=0,onError:g=h,onSuccess:E=h,resetOnExecute:x=!0,throwError:L}=w??{},[a,i]=r(s),[S,c]=r(!1),[u,f]=r(!1),[v,l]=r(void 0);async function d(t=0,...o){x&&i(()=>s),l(void 0),c(!1),f(!0),t>0&&await B(t);const z=typeof n=="function"?n(...o):n;try{const e=await z;i(()=>e),c(!0),E(e)}catch(e){if(l(e),g(e),L)throw e}finally{f(!1)}return a()}p&&d(y);const m={state:a,isReady:S,isLoading:u,error:v,execute:d},O=I();function R(){return new Promise((t,o)=>{A(u,O).toBe(!1).then(()=>t(m)).catch(o)})}return{...m,then(t,o){return R().then(t,o)}}}export{_ as u};