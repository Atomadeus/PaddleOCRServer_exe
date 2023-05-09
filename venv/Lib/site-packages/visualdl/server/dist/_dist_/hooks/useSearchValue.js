import o from"./useDebounce.js";const t=r=>Array.isArray(r)&&!r.length||typeof r=="string"&&r==="",s=(r,n=275)=>{const e=o(r,n);return t(r)||t(e)?r:e};export default s;
