import o,{useCallback as u}from"../../__snowpack__/pkg/react.js";import{ellipsis as $,em as t,half as M,math as v,position as N,sameBorder as y,size as n,transitionProps as l}from"../utils/style.js";import c from"../../__snowpack__/pkg/styled-components.js";const s=t(20),g=t(16),x="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAxMSA4IiB3aWR0aD0iMTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTkuNDc5NDI3MDggMTAuMTg3NWgtNS4yNXYtMS4zMTI1aDMuOTM3bC4wMDA1LTcuODc1aDEuMzEyNXoiIGZpbGw9IiNmNWY1ZjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNzEwNjc4IC43MDcxMDY3OCAtLjcwNzEwNjc4IC43MDcxMDY3OCA0Ljk2Mjk5NCAtNi4yMDg0NCkiLz48L3N2Zz4=",d=c.label`
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,I=c.input.attrs(e=>({type:"checkbox",disabled:!!e.disabled}))`
    ${n(0)}
    ${N("absolute",0,null,null,0)}
     opacity: 0;
    pointer-events: none;
`,D=c.div`
    color: ${e=>e.checked?"var(--text-invert-color)":"transparent"};
    flex-shrink: 0;
    ${e=>n(v(`${g} * ${e.size==="small"?.875:1}`))}
    margin: ${M(`${s} - ${g}`)} 0;
    margin-right: ${t(10)};
    ${e=>y({color:e.disabled||!e.checked?"var(--text-lighter-color)":"var(--primary-color)"})};
    background-color: ${e=>e.disabled?e.checked?"var(--text-lighter-color)":"transparent":e.checked?"var(--primary-color)":"var(--background-color)"};
    background-image: ${e=>e.checked?`url("${x}")`:"none"};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: ${t(10)} ${t(8)};
    position: relative;
    ${l(["border-color","background-color","color"])}

    ${d}:hover > & {
        border-color: ${e=>e.disabled?"var(--text-lighter-color)":e.checked?"var(--primary-color)":"var(--text-lighter-color)"};
    }
`,Z=c.div`
    line-height: ${s};
    flex-grow: 1;
    ${e=>e.disabled?"color: var(--text-lighter-color);":""}
    ${l("color")}
     ${$()}
`,z=({value:e,checked:i,children:k,size:m,disabled:r,className:p,title:b,onChange:a})=>{const h=u(()=>{r||a&&a(e)},[r,a]);return o.createElement(d,{disabled:r,className:p,title:b},o.createElement(I,{onChange:h,checked:i,disabled:r}),o.createElement(D,{checked:i,size:m,disabled:r}),o.createElement(Z,{disabled:r},k))};export default z;
