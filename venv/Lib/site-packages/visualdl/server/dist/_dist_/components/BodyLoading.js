import o from"../../__snowpack__/pkg/react.js";import{position as r,primaryColor as t,rem as n,size as s,transitionProps as a,zIndexes as i}from"../utils/style.js";import l from"../../__snowpack__/pkg/react-spinners/HashLoader.js";import c from"../../__snowpack__/pkg/styled-components.js";const p=c.div`
    ${s("100vh","100vw")}
    ${r("fixed",0,0,0,0)}
    background-color: var(--mask-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    ${a("background-color")}
    z-index: ${i.component};

    > .loading-detail {
        margin-top: ${n(20)};
    }
`,m=({children:e})=>o.createElement(p,null,o.createElement(l,{size:"60px",color:t}),e?o.createElement("div",{className:"loading-detail"},e):null);export default m;
