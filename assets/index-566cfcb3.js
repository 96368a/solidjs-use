import{b as O,q as r,$ as y,r as S,w as x,n as o,o as M,p as W}from"./index-4206062e.js";import{u as q}from"./index-081a48bc.js";function N(f,d,m={}){const{root:h,rootMargin:v="0px",threshold:b=.1,window:n=W,immediate:a=!0}=m,i=q(()=>n&&"IntersectionObserver"in n),w=O(()=>{const e=r(f);return(Array.isArray(e)?e:[e]).map(r).filter(y)});let t=o;const[c,s]=S(a),g=i()?x(()=>[w(),r(h),c],([e,A,I])=>{if(t(),!I||!e.length)return;const p=new IntersectionObserver(d,{root:r(A),rootMargin:v,threshold:b});e.forEach(l=>l&&p.observe(l)),t=()=>{p.disconnect(),t=o}},{defer:!a}):o,u=()=>{t(),g(),s(!1)};return M(u),{isSupported:i,isActive:c,pause(){t(),s(!1)},resume(){s(!0)},stop:u}}export{N as u};