import{b as M,N as L,o as O,p as E,r as j,x as B,u as D}from"./index-4b9699b6.js";import{w as N}from"./computed-7e51e667.js";import{u as V,g as q}from"./index-8d2964b0.js";import{u as z}from"./index-3f623e4c.js";import{I as K}from"./index-d277366d.js";function P(t){return z("(prefers-color-scheme: dark)",t)}function J(t={}){const{selector:C="html",attribute:y="class",initialValue:l="auto",window:o=B,storage:S,storageKey:u="solidjs-use-color-scheme",listenToStorageChanges:w=!0,storageSignal:b,emitAuto:x,disableTransition:c=!0}=t,d={auto:"",light:"light",dark:"dark",...t.modes??{}},T=P({window:o}),m=M(()=>T()?"dark":"light"),[i,p]=b??(u==null?L(l):V(u,l,S,{window:o,listenToStorageChanges:w})),s=M(()=>{const e=i();return e==="auto"?m():e}),v=q("updateHTMLAttrs",(e,h,k)=>{const a=typeof e=="string"?o?.document.querySelector(e):D(e);if(!a)return;let r;if(c&&(r=o.document.createElement("style"),r.type="text/css",r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),o.document.head.appendChild(r)),h==="class"){const I=k.split(/\s/g);Object.values(d).flatMap(n=>(n||"").split(/\s/g)).filter(Boolean).forEach(n=>{I.includes(n)?a.classList.add(n):a.classList.remove(n)})}else a.setAttribute(h,k);c&&(o.getComputedStyle(r).opacity,document.head.removeChild(r))});function f(e){v(C,y,d[e]??e)}function g(e){t.onChanged?t.onChanged(e,f):f(e)}O(E(s,g)),j(()=>g(s()));const[A,H]=N({get(){return x?i():s()},set(e){p(e)}});return{mode:A,setMode:H,store:i,setStore:p,system:m,state:s}}function U(t){return K({a:{viewBox:"0 0 512 512"},c:'<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/>'},t)}export{U as I,P as a,J as u};
