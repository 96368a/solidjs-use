import{r as c,P as m,o as p,q as d}from"./index-4206062e.js";function P(u,a,l={}){const{immediate:o=!0}=l,[r,t]=c(!1);let e=null;function n(){e&&(clearTimeout(e),e=null)}function i(){t(!1),n()}function s(...f){n(),t(!0),e=setTimeout(()=>{t(!1),e=null,u(...f)},d(a))}return o&&(t(!0),m&&s()),p(i),{isPending:r,start:s,stop:i}}export{P as u};