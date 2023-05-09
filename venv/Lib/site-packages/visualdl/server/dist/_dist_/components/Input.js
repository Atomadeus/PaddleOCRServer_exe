import{em as t,half as p,sameBorder as u,transitionProps as e}from"../utils/style.js";import l from"../../__snowpack__/pkg/react.js";import m from"../../__snowpack__/pkg/styled-components.js";export const padding=t(10),height=t(36);const b=m.input`
    padding: ${padding};
    height: ${height};
    line-height: ${height};
    display: inline-block;
    outline: none;
    ${o=>u({radius:!o.rounded||p(height)})};
    background-color: var(--input-background-color);
    color: var(--text-color);
    caret-color: var(--text-color);
    ${e(["border-color","background-color","caret-color","color"])}

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
        border-color: var(--border-focused-color);
    }

    &::placeholder {
        color: var(--text-lighter-color);
        ${e("color")}
    }

    &:disabled {
        cursor: not-allowed;
        color: var(--text-lighter-color);
    }
`,c=l.forwardRef(({rounded:o,value:a,onChange:r,className:d,...s},i)=>l.createElement(b,{ref:i,rounded:o,value:a,type:"text",className:d,onChange:n=>r==null?void 0:r(n.target.value),...s}));c.displayName="Input";export default c;
