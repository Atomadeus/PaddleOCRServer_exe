import e from"../../__snowpack__/pkg/react.js";import{rem as c,size as l}from"../utils/style.js";import o from"../../__snowpack__/pkg/styled-components.js";import{useTranslation as s}from"../../__snowpack__/pkg/react-i18next.js";const i=[["zh","\u4E2D"],["en","En"]],m=o.span`
    display: inline-block;
    color: currentColor;
    opacity: ${t=>t.active?1:.29};
`,p=o.span`
    display: inline-block;
    margin: 0 ${c(5)};
    ${l("1em","1px")}
    background-color: currentColor;
`,_=()=>{const{i18n:t}=s();return e.createElement(e.Fragment,null,i.map(([r,n],a)=>e.createElement(e.Fragment,{key:n},a!==0&&e.createElement(p,null),e.createElement(m,{active:r===t.language},n))))};export default _;
