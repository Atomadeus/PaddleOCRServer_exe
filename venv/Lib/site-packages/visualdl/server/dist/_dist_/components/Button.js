import n,{useCallback as v,useMemo as y}from"../../__snowpack__/pkg/react.js";import{borderRadius as g,ellipsis as $,em as i,half as h,transitionProps as x}from"../utils/style.js";import k from"./Icon.js";import{colors as _}from"../utils/theme.js";import p from"../../__snowpack__/pkg/styled-components.js";import j from"../hooks/useClassNames.js";const c=i(36),e={..._,default:{default:"var(--border-color)",focused:"var(--border-focused-color)",active:"var(--border-active-color)",text:"var(--text-color)"}},w=p.a`
    height: ${c};
    line-height: ${c};
    border-radius: ${g};
    background-color: ${o=>e[o.type].default};
    color: ${o=>e[o.type].text};
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    padding: 0 ${i(20)};
    ${x(["background-color","border-color","color"])}
    ${$()}

    &:hover,
    &:focus {
        background-color: ${o=>e[o.type].focused};
    }

    &:active {
        background-color: ${o=>e[o.type].active};
    }

    &.rounded {
        border-radius: ${h(c)};
    }

    &.outline {
        color: ${o=>e[o.type][o.type==="default"?"text":"default"]};
        background-color: transparent;
        border: 1px solid ${o=>e[o.type].default};

        &:hover,
        &:focus {
            color: ${o=>e[o.type][o.type==="default"?"text":"focused"]};
            border-color: ${o=>e[o.type].focused};
        }

        &:active {
            color: ${o=>e[o.type][o.type==="default"?"text":"active"]};
            border-color: ${o=>e[o.type].active};
        }
    }

    &.disabled {
        &,
        &:hover,
        &:focus,
        &:active {
            color: var(--text-lighter-color);
            background-color: var(--border-color);

            &.outline {
                border-color: var(--border-color);
            }
        }
        cursor: not-allowed;
    }
`,I=p(k)`
    margin-right: 4px;
`,N=({disabled:o,rounded:a,outline:l,icon:s,type:u,children:f,className:d,onClick:r})=>{const m=v(()=>{o||r==null||r()},[o,r]),t=y(()=>u||"default",[u]),b=j(d,{rounded:a,disabled:o,outline:t==="default"||l},[d,a,o,t,l]);return n.createElement(w,{className:b,type:t,onClick:m},s&&n.createElement(I,{type:s}),f)};export default N;
