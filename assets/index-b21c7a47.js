import{N as B,r as l,b as p,O as D,K as F}from"./index-4206062e.js";import{c as M}from"./index-fa7b8d71.js";const N=e=>e,I=(e,s)=>e(s);function J(e){return e?typeof e=="function"?e:M:N}function K(e){return e?typeof e=="function"?e:M:N}function T(e,s={}){const[i,O]=B(e),{clone:S=!1,dump:U=J(S),parse:V=K(S),setSource:_=I}=s;function m(){return{snapshot:U(i()),timestamp:F()}}const[r,d]=l(m()),[o,a]=l([]),[c,u]=l([]),f=t=>{_(O,V(t.snapshot)),d(t)},h=()=>{a(t=>[r(),...t]),d(m()),s.capacity&&o().length>s.capacity&&a(([...t])=>(t.splice(s.capacity,1/0),t)),c().length&&u(([...t])=>(t.splice(0,c().length),t))},y=()=>{a([]),u([])},b=()=>{const t=o()[0];a(([...n])=>(n.shift(),n)),t&&(u(n=>[r(),...n]),f(t))},v=()=>{const t=c()[0];u(([...n])=>(n.shift(),n)),t&&(a(n=>[r(),...n]),f(t))},x=()=>{f(r())},g=p(()=>[r(),...o()]),R=p(()=>o().length>0),H=p(()=>c().length>0);return D(e)?{source:i,undoStack:o,redoStack:c,last:r,history:g,canUndo:R,canRedo:H,clear:y,commit:h,reset:x,undo:b,redo:v}:{source:i,undoStack:o,redoStack:c,last:r,history:g,canUndo:R,canRedo:H,clear:y,commit:h}}export{T as u};