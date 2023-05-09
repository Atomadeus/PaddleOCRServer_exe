import s,{Suspense as r,useMemo as m}from"../../__snowpack__/pkg/react.js";import c from"../../__snowpack__/link/packages/icons/index.js";import l from"../../__snowpack__/pkg/styled-components.js";import p from"../hooks/useClassNames.js";const i=l.i`
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
`,_=({type:e,onClick:n,className:o})=>{const t=m(()=>s.lazy(()=>c(e)),[e]),a=p("vdl-icon",`icon-${e}`,o,[e,o]);return s.createElement(i,{className:a,onClick:()=>n==null?void 0:n()},s.createElement(r,{fallback:""},s.createElement(t,null)))};export default _;
