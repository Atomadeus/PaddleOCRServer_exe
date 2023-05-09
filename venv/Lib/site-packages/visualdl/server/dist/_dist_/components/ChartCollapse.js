import e,{useState as m}from"../../__snowpack__/pkg/react.js";import{borderRadius as g,em as r,rem as c,size as u,transitionProps as o}from"../utils/style.js";import $ from"./Icon.js";import t from"../../__snowpack__/pkg/styled-components.js";const f=t.div`
    background-color: var(--background-color);
    border-radius: ${g};
    ${o("background-color")}

    & + & {
        margin-top: ${c(4)};
    }
`,b=t.div`
    height: ${r(40)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${r(20)};
    color: var(--text-lighter-color);
    cursor: pointer;
    ${o("color")}

    > h3 {
        color: var(--text-color);
        flex-grow: 1;
        margin: 0;
        font-weight: 700;
        ${o("color")}
    }

    > .total {
        margin-right: ${r(20)};
    }
`,h=t.div`
    border-top: 1px solid var(--border-color);
    padding: ${c(20)};
    ${o("border-color")}
`,k=t($)`
    ${u(r(14))}
    display: block;
    flex-shrink: 0;
    transform: rotate(${n=>n.opened?"180":"0"}deg) scale(${10/14});
    ${o("transform")}
`,v=({opened:n,title:s,total:l,children:i})=>{const[a,d]=m(n!==!1);return e.createElement(f,null,e.createElement(b,{onClick:()=>d(p=>!p)},e.createElement("h3",null,s),l!=null?e.createElement("span",{className:"total"},l):null,e.createElement(k,{type:"chevron-down",opened:a})),a?e.createElement(h,null,i):null)};export default v;
