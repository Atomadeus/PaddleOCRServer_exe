import t,{useCallback as k,useContext as v,useMemo as g,useState as _}from"../../__snowpack__/pkg/react.js";import{em as $,rem as b,transitionProps as h}from"../utils/style.js";import E from"./Icon.js";import i from"../../__snowpack__/pkg/@tippyjs/react.js";import u from"../../__snowpack__/pkg/styled-components.js";const w=u.div`
    font-size: ${$(16)};
    line-height: 1;
    height: 1em;
    display: grid;
    grid-template-columns: ${e=>e.size==null?"repeat(auto-fill, 1em)":`repeat(${e.size}, 1em)`};
    grid-gap: ${b(14)};
    place-items: center;
    justify-content: ${e=>e.reversed?"end":"start"};
    align-content: center;
`,j=u.a`
    cursor: pointer;
    color: ${e=>e.active?"var(--primary-color)":"var(--text-lighter-color)"};
    ${h("color")}

    &:hover {
        color: ${e=>e.active?"var(--primary-focused-color)":"var(--text-light-color)"};
    }

    &:active {
        color: ${e=>e.active?"var(--primary-active-color)":"var(--text-color)"};
    }
`,d=u.div`
    background-color: var(--background-color);
    ${h("background-color")};

    > a {
        cursor: pointer;
        display: block;
        padding: ${b(10)};
        background-color: var(--background-color);
        ${h(["color","background-color"])};

        &:hover {
            background-color: var(--background-focused-color);
        }
    }
`,I=u(E)`
    vertical-align: middle;
    font-size: 78%;
    margin-left: 0.6em;
`,p=t.forwardRef(({toggle:e,icon:o,activeIcon:r,activeStatus:n,onClick:a},c)=>t.createElement(j,{ref:c,active:e&&!r&&n,onClick:()=>a==null?void 0:a()},t.createElement(E,{type:e&&n&&r||o})));p.displayName="ChartToolboxIcon";const f=t.createContext({tooltipPlacement:"top"}),z=({icon:e,tooltip:o,onClick:r})=>{const n=g(()=>t.createElement(p,{icon:e,onClick:r}),[e,r]),{tooltipPlacement:a}=v(f);return o?t.createElement(i,{content:o,placement:a||"top",theme:"tooltip"},n):n},C=({icon:e,tooltip:o,activeIcon:r,activeTooltip:n,onClick:a})=>{const[c,s]=_(!1),m=k(()=>{a==null||a(!c),s(T=>!T)},[c,a]),l=g(()=>t.createElement(p,{icon:e,activeIcon:r,activeStatus:c,toggle:!0,onClick:m}),[e,r,c,m]),{tooltipPlacement:x}=v(f);return o?t.createElement(i,{content:c&&n||o,placement:x||"top",theme:"tooltip"},l):l},y=({label:e,onClick:o,children:r})=>r?t.createElement(i,{content:t.createElement(d,null,r.map((n,a)=>t.createElement(y,{...n,key:a}))),placement:"right-start",animation:"shift-away-subtle",interactive:!0,hideOnClick:!1,arrow:!1,role:"menu",theme:"menu",offset:[0,0]},t.createElement("a",null,e," ",t.createElement(I,{type:"chevron-right"}))):t.createElement(d,null,t.createElement("a",{onClick:()=>o==null?void 0:o()},e)),M=({icon:e,menuList:o})=>t.createElement(i,{content:t.createElement(d,null,o.map((r,n)=>t.createElement(y,{...r,key:n}))),placement:"right-start",animation:"shift-away-subtle",interactive:!0,hideOnClick:!1,arrow:!1,role:"menu",theme:"menu"},t.createElement(p,{icon:e})),P=({tooltipPlacement:e,items:o,reversed:r,className:n})=>{const a=g(()=>({tooltipPlacement:e}),[e]);return t.createElement(t.Fragment,null,t.createElement(w,{className:n,size:o.length,reversed:r},t.createElement(f.Provider,{value:a},o.map((c,s)=>{if(c.menuList){const l=c;return t.createElement(M,{...l,key:s})}if(c.toggle){const l=c;return t.createElement(C,{...l,key:s})}const m=c;return t.createElement(z,{...m,key:s})}))))};export default P;
