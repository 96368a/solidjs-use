import{O as s,d as f}from"./Observable-0ea24d77.js";import{d as l,e as u,c}from"./mapTo-5071007c.js";function o(r){return r&&typeof r.schedule=="function"}function g(r,e){return e?u(r,e):new s(l(r))}function m(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var n=r[r.length-1];return o(n)?(r.pop(),u(r,n)):g(r)}function i(r){return r===void 0&&(r=Number.POSITIVE_INFINITY),c(f,r)}function v(){return i(1)}function a(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];return v()(m.apply(void 0,r))}function d(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var n=r[r.length-1];return o(n)?(r.pop(),function(t){return a(r,t,n)}):function(t){return a(r,t)}}export{d as s};