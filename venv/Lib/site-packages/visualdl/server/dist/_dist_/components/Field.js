import e from"../../__snowpack__/pkg/react.js";import{rem as o}from"../utils/style.js";import r from"../../__snowpack__/pkg/styled-components.js";const n=r.div`
    & + & {
        margin-top: ${o(20)};
    }
`,p=r.div`
    margin-bottom: ${o(10)};
`,a=({label:t,children:m,className:s})=>e.createElement(n,{className:s},t&&e.createElement(p,null,t),m);export default a;
