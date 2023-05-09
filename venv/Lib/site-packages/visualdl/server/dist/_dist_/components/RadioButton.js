import{EventContext as g,ValueContext as u}from"./RadioGroup.js";import h,{useCallback as b,useContext as n}from"../../__snowpack__/pkg/react.js";import{borderRadius as s,borderRadiusShortHand as i,ellipsis as $,em as e,sameBorder as f,transitionProps as x}from"../utils/style.js";import k from"../../__snowpack__/pkg/styled-components.js";const l=e(36),y=e(72),v=e(144),_=k.a`
    cursor: pointer;
    background-color: ${o=>o.selected?"var(--primary-color)":"var(--background-color)"};
    color: ${o=>o.selected?"var(--primary-text-color)":"var(--text-color)"};
    height: ${l};
    line-height: calc(${l} - 2px);
    min-width: ${y};
    padding: 0 ${e(8)};
    text-align: center;
    ${$(v)}
    ${o=>f({color:o.selected?"var(--primary-color)":"var(--border-color)"})};
    ${x(["color","border-color","background-color"])}

    /* bring selected one to top in order to cover the sibling's border */
    ${o=>o.selected?"position: relative;":""}

    &:hover {
        border-color: ${o=>o.selected?"var(--primary-color)":"var(--border-focused-color)"};
    }

    &:first-of-type {
        ${i("left",s)}
    }

    &:last-of-type {
        ${i("right",s)}
    }

    & + & {
        margin-left: -1px;
    }
`,C=({className:o,value:r,selected:a,title:d,children:p})=>{const t=n(u),c=n(g),m=b(()=>{r!=null&&c&&t!==r&&c(r)},[r,c,t]);return h.createElement(_,{className:o,title:d,selected:t===r||a,onClick:m},p)};export default C;
