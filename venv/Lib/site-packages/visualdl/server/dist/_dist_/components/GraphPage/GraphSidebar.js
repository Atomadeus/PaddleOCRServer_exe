import e from"../../../__snowpack__/pkg/react.js";import{rem as t,transitionProps as n}from"../../utils/style.js";import r from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as s}from"../../../__snowpack__/pkg/react-i18next.js";const i=r.div`
    height: 100%;
    background-color: var(--background-color);
`,m=r.div`
    height: ${t(60)};
    font-size: ${t(16)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    margin: 0 ${t(20)};
    ${n("border-color")}

    > .close {
        flex: none;
        color: var(--text-light-color);
        cursor: pointer;
        ${n("color")}
    }
`,p=r.div`
    padding: ${t(20)};
    height: ${t(600)};
    overflow: auto;
`,d=({title:c,onClose:o,children:l})=>{const{t:a}=s("common");return e.createElement(i,null,e.createElement(m,null,e.createElement("span",null,c),e.createElement("a",{className:"close",onClick:()=>o==null?void 0:o()},a("common:close"))),e.createElement(p,null,l))};export default d;
