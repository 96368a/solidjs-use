import{r as w}from"./index-ca2e2657.js";import{b as g,u as m,z as f,C as p,D as S,q as z}from"./index-bb12af8a.js";import{u as v}from"./index-ecb879f6.js";function C(s,c={width:0,height:0},d={}){const{window:a=z,box:u="content-box"}=d,b=g(()=>m(s)?.namespaceURI?.includes("svg")),[x,r]=f(c.width),[l,i]=f(c.height);return v(s,([e])=>{const n=u==="border-box"?e.borderBoxSize:u==="content-box"?e.contentBoxSize:e.devicePixelContentBoxSize;if(a&&b()){const o=m(s);if(o){const t=a.getComputedStyle(o);r(parseFloat(t.width)),i(parseFloat(t.height))}}else if(n){const o=Array.isArray(n)?n:[n];r(o.reduce((t,{inlineSize:h})=>t+Number(h),0)),i(o.reduce((t,{blockSize:h})=>t+Number(h),0))}else r(e.contentRect.width),i(e.contentRect.height)},d),p(S(w(s),e=>{r(e?c.width:0),i(e?c.height:0)},{defer:!0})),{width:x,height:l}}export{C as u};