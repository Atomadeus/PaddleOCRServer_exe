import I,{padding as o}from"./Input.js";import r,{useCallback as k,useRef as v}from"../../__snowpack__/pkg/react.js";import{math as s,position as i,transitionProps as a}from"../utils/style.js";import p from"./Icon.js";import e from"../../__snowpack__/pkg/styled-components.js";const m="1.142857143",u="0.857142857",y=e(I)`
    padding-left: ${s(`1em * ${m} + ${o} * 2`)};
    padding-right: ${s(`1em * ${u} + ${o} * 2`)};
    width: 100%;
`,_=e.div`
    position: relative;
`,b=e(p)`
    display: block;
    transform: translateY(-50%) scale(${m});
    transform-origin: center;
    ${i("absolute","50%",null,null,o)}
    pointer-events: none;
    color: var(--text-lighter-color);
    ${a("color")}
`,g=e(p)`
    display: block;
    transform: translateY(-50%) scale(${u});
    transform-origin: center;
    ${i("absolute","50%",o,null,null)}
    cursor: pointer;
    color: var(--text-lighter-color);
    ${a("color")}

    &:hover {
        color: var(--text-light-color);
    }

    &:active {
        color: var(--text-color);
    }
`,h=({className:d,value:c,onChange:t,...f})=>{const l=v(null),$=k(()=>{var n;t==null||t(""),(n=l.current)==null||n.focus()},[t]);return r.createElement(_,{className:d},r.createElement(b,{type:"search"}),r.createElement(y,{ref:l,value:c,onChange:t,...f}),!!c&&r.createElement(g,{type:"close",onClick:$}))};export default h;
