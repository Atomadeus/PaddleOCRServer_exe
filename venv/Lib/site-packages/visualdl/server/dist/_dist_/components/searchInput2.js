import y,{padding as l}from"./Input.js";import o,{useCallback as I,useRef as h}from"../../__snowpack__/pkg/react.js";import{math as c,position as a,transitionProps as p}from"../utils/style.js";import{rem as m}from"../utils/style.js";import u from"./Icon.js";import r from"../../__snowpack__/pkg/styled-components.js";const n="0.962857143",f="0.857142857",k=r(y)`
    // padding-left: ${c(`1em * ${n} + ${l} * 2`)};
    // padding-right: ${c(`1em * ${f} + ${l} * 2`)};
    width: 100%;
    font-size: ${m("14px")};
    border-radius: ${m("4px")};
    font-family: PingFangSC-Regular;
    color: #999999;
    letter-spacing: 0;
    line-height: 14px;
    font-weight: 400;
`,x=r.div`
    position: relative;
`,_=r(u)`
    display: block;
    transform: translateY(-50%) scale(${n});
    transform-origin: center;
    ${a("absolute","53%",`${c(`1em * ${n}`)}`,null,null)}
    pointer-events: none;
    color: var(--text-lighter-color);
    ${p("color")}
`,v=r(u)`
    display: block;
    transform: translateY(-50%) scale(${f});
    transform-origin: center;
    ${a("absolute","50%",l,null,null)}
    cursor: pointer;
    color: var(--text-lighter-color);
    ${p("color")}

    &:hover {
        color: var(--text-light-color);
    }

    &:active {
        color: var(--text-color);
    }
`,b=({className:d,value:e,onChange:t,...$})=>{const s=h(null),g=I(()=>{var i;t==null||t(""),(i=s.current)==null||i.focus()},[t]);return o.createElement(x,{className:d},o.createElement(k,{ref:s,value:e,onChange:t,...$}),!!e&&o.createElement(v,{type:"close",onClick:g}),!e&&o.createElement(_,{type:"search"}))};export default b;
