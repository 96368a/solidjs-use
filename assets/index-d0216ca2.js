import{r as p,G as I,n as M,q as a}from"./index-cee51929.js";import{u as P}from"./index-b107f90a.js";import{u as j}from"./index-5f90e69e.js";import{w as X}from"./computed-7e51e667.js";import{u as _}from"./index-d0da7664.js";const w=1;function N(i,R={}){const{throttle:f=0,idle:Y=200,onStop:A=M,onScroll:C=M,offset:c={left:0,right:0,top:0,bottom:0},eventListenerOptions:d={capture:!1,passive:!0},behavior:F="auto"}=R,[u,O]=p(0),[m,V]=p(0),[g,W]=X({get(){return u()},set(t){h(t,void 0)}}),[b,q]=X({get(){return m()},set(t){h(void 0,t)}});function h(t,s){const r=a(i);r&&(r instanceof Document?document.body:r)?.scrollTo({top:a(s)??b(),left:a(t)??g(),behavior:a(F)})}const[S,v]=p(!1),o=I({left:!0,right:!1,top:!0,bottom:!1}),e=I({left:!1,right:!1,top:!1,bottom:!1}),T=t=>{S()&&(v(!1),e.left=!1,e.right=!1,e.top=!1,e.bottom=!1,A(t))},G=P(T,f+Y),E=t=>{const s=t.target===document?t.target.documentElement:t.target,{display:r,flexDirection:D}=getComputedStyle(s),n=s.scrollLeft;e.left=n<u(),e.right=n>u();const L=Math.abs(n)<=0+(c.left??0),x=Math.abs(n)+s.clientWidth>=s.scrollWidth-(c.right??0)-w;r==="flex"&&D==="row-reverse"?(o.left=x,o.right=L):(o.left=L,o.right=x),O(n);let l=s.scrollTop;t.target===document&&!l&&(l=document.body.scrollTop),e.top=l<m(),e.bottom=l>m();const y=Math.abs(l)<=0+(c.top??0),H=Math.abs(l)+s.clientHeight>=s.scrollHeight-(c.bottom??0)-w;r==="flex"&&D==="column-reverse"?(o.top=H,o.bottom=y):(o.top=y,o.bottom=H),V(l),v(!0),G(t),C(t)};return _(i,"scroll",f?j(E,f,!0,!1):E,d),_(i,"scrollend",T,d),{x:g,setX:W,y:b,setY:q,isScrolling:S,arrivedState:o,directions:e}}export{N as u};
