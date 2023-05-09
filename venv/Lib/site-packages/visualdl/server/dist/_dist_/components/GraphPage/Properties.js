import e from"../../../__snowpack__/pkg/react.js";import c from"./Property.js";import{em as o}from"../../utils/style.js";import k from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as f}from"../../../__snowpack__/pkg/react-i18next.js";const y=k.div`
    font-size: ${o(16)};
    font-weight: 700;
    padding: ${o(10)} 0;
`,d=({properties:a,groups:n,expand:p,showNodeDocumentation:r})=>{const{t:l}=f("graph");return e.createElement(e.Fragment,null,a==null?void 0:a.map((t,m)=>e.createElement(c,{name:l(`graph:properties.${t.name}`),values:t.values,key:m,showNodeDocumentation:r})),n==null?void 0:n.map((t,m)=>{var s;return e.createElement(e.Fragment,{key:m},e.createElement(y,null,l(`graph:properties.${t.name}`)),(s=t.properties)==null?void 0:s.map((_,i)=>e.createElement(c,{..._,key:i,expand:p,showNodeDocumentation:r})))}))};export default d;
