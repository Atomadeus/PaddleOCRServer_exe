import t from"../../__snowpack__/pkg/react.js";import{em as a,half as e,transitionProps as i}from"../utils/style.js";import l from"../../__snowpack__/pkg/styled-components.js";const r=a(36),n=l.span`
    padding: 0 ${a(16)};
    height: ${r};
    line-height: ${r};
    display: inline-block;
    border-radius: ${e(r)};
    color: ${o=>o.active?"var(--background-color)":"var(--primary-color)"};
    background-color: ${o=>o.active?"var(--primary-color)":"var(--tag-background-color)"};
    cursor: pointer;
    ${i(["color","background-color"])}

    &:hover {
        background-color: ${o=>o.active?"var(--primary-color)":"var(--tag-focused-background-color)"};
    }

    &:active {
        background-color: ${o=>o.active?"var(--primary-color)":"var(--tag-active-background-color)"};
    }
`,s=({children:o,...c})=>t.createElement(n,{...c},o);export default s;
