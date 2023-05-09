import e,{useMemo as u,useState as d}from"../../../__snowpack__/pkg/react.js";import{em as n,sameBorder as E,transitionProps as i}from"../../utils/style.js";import p from"../Icon.js";import f from"../../../__snowpack__/pkg/styled-components.js";const b=f.div`
    ${E({radius:!0})}

    & + & {
        margin-top: ${n(10)};
    }

    > .argument-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${n(8)} ${n(10)};
        line-height: 1.5;
        box-sizing: content-box;
        min-height: 1em;

        > .argument-text {
            flex: auto;
            overflow: hidden;
            word-break: break-all;
        }

        > .argument-raw {
            overflow: auto;
            width: 100%;

            pre {
                margin: 0;
            }
        }

        > .argument-operation {
            flex: none;
            cursor: pointer;
            font-size: ${n(14)};
            margin-left: ${n(10)};
            color: var(--text-lighter-color);
            ${i("color")}

            &:hover,
              &:active {
                color: var(--text-light-color);
            }
        }

        &:not(:first-child) {
            border-top: 1px solid var(--border-color);
            ${i("border-color")}
        }
    }
`,y=({value:r,expand:l,showNodeDocumentation:o})=>{var s;const[c,g]=d(l!=null?l:!1),m=u(()=>{const t=r;return!!(t.children&&t.children.length)},[r]);return e.createElement(b,null,e.createElement("div",{className:"argument-row"},e.createElement("span",{className:"argument-text"},r.name?e.createElement(e.Fragment,null,r.name,": ",e.createElement("b",null,r.value)):new String(r.value).split(`
`).map((t,a)=>e.createElement(e.Fragment,{key:a},a!==0&&e.createElement("br",null),t))),r.documentation&&e.createElement("a",{className:"argument-operation",onClick:()=>o==null?void 0:o()},e.createElement(p,{type:"question-circle"})),m&&e.createElement("a",{className:"argument-operation",onClick:()=>g(t=>!t)},e.createElement(p,{type:c?"minus":"plus"}))),m&&c&&((s=r==null?void 0:r.children)==null?void 0:s.map((t,a)=>e.createElement("div",{className:"argument-row",key:a},t.type==="raw"?e.createElement("span",{className:"argument-raw"},e.createElement("pre",null,t.value)):e.createElement("span",{className:"argument-text"},t.name?`${t.name}: `:"",e.createElement("b",null,t.type==="code"?e.createElement("code",null,t.value):t.value))))))};export default y;
