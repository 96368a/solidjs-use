import{z as a,q as m}from"./index-9e74c468.js";import{u}from"./index-f71e8382.js";function s(n={}){const{window:e=m}=n,t=n.document??e?.document,[c,r]=a(t?.activeElement);return e&&(u(e,"blur",i=>{i.relatedTarget===null&&r(()=>t?.activeElement)},!0),u(e,"focus",()=>{r(()=>t?.activeElement)},!0)),c}export{s as u};