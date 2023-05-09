import c,{useCallback as M,useEffect as N,useState as y}from"../../__snowpack__/pkg/react.js";import{ellipsis as v,em as r,half as x,math as I,position as D,sameBorder as Z,size as s,transitionProps as d}from"../utils/style.js";import i from"../../__snowpack__/pkg/styled-components.js";const g=r(20),k=r(16),z="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAxMSA4IiB3aWR0aD0iMTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTkuNDc5NDI3MDggMTAuMTg3NWgtNS4yNXYtMS4zMTI1aDMuOTM3bC4wMDA1LTcuODc1aDEuMzEyNXoiIGZpbGw9IiNmNWY1ZjUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNzEwNjc4IC43MDcxMDY3OCAtLjcwNzEwNjc4IC43MDcxMDY3OCA0Ljk2Mjk5NCAtNi4yMDg0NCkiLz48L3N2Zz4=",h=i.label`
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    cursor: ${e=>e.disabled?"not-allowed":"pointer"};
`,w=i.input.attrs(e=>({type:"checkbox",disabled:!!e.disabled}))`
    ${s(0)}
    ${D("absolute",0,null,null,0)}
    opacity: 0;
    pointer-events: none;
`,f=i.div`
    color: ${e=>e.checked?"var(--text-invert-color)":"transparent"};
    flex-shrink: 0;
    ${e=>s(I(`${k} * ${e.size==="small"?.875:1}`))}
    margin: ${x(`${g} - ${k}`)} 0;
    margin-right: ${r(10)};
    ${e=>Z({color:e.disabled||!e.checked?"var(--text-lighter-color)":"var(--primary-color)"})};
    background-color: ${e=>e.disabled?e.checked?"var(--text-lighter-color)":"transparent":e.checked?"var(--primary-color)":"var(--background-color)"};
    background-image: ${e=>e.checked?`url("${z}")`:"none"};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: ${r(10)} ${r(8)};
    position: relative;
    ${d(["border-color","background-color","color"])}

    ${h}:hover > & {
        border-color: ${e=>e.disabled?"var(--text-lighter-color)":e.checked?"var(--primary-color)":"var(--text-lighter-color)"};
    }
`,j=i.div`
    line-height: ${g};
    flex-grow: 1;
    ${e=>e.disabled?"color: var(--text-lighter-color);":""}
    ${d("color")}
    ${v()}
`,C=({checked:e,children:m,size:p,disabled:t,className:b,title:u,onChange:o})=>{const[a,l]=y(!!e);N(()=>l(!!e),[e]);const $=M(n=>{t||(l(n.target.checked),o==null||o(n.target.checked))},[t,o]);return c.createElement(h,{disabled:t,className:b,title:u},c.createElement(w,{onChange:$,checked:a,disabled:t}),c.createElement(f,{checked:a,size:p,disabled:t}),c.createElement(j,{disabled:t},m))};export default C;
