import{b as l,u as i,w as v,r as m,x as w}from"./index-d8935530.js";import{u as O}from"./index-2e7b6636.js";function R(s,c,p={}){const{window:o=w,...u}=p;let e;const r=O(()=>o&&"ResizeObserver"in o),t=()=>{e&&(e.disconnect(),e=void 0)},f=l(()=>Array.isArray(s)?s.map(i):[i(s)]),d=v(f,b=>{if(t(),r()&&o){e=new ResizeObserver(c);for(const a of b)a&&e.observe(a,u)}},{defer:!1}),n=()=>{t(),d()};return m(n),{isSupported:r,stop:n}}export{R as u};