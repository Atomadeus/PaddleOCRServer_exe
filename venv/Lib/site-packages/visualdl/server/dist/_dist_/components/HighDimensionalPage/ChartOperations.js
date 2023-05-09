import e from"../../../__snowpack__/pkg/react.js";import{rem as t,sameBorder as l}from"../../utils/style.js";import i from"../Icon.js";import n from"../../../__snowpack__/pkg/@tippyjs/react.js";import p from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as m}from"../../../__snowpack__/pkg/react-i18next.js";const s=p.div`
    --operation-height: ${t(36)};

    display: flex;
    align-items: center;
    height: var(--operation-height);
    ${l({radius:"calc(var(--operation-height) / 2)"})}
    overflow: hidden;

    > a {
        cursor: pointer;
        font-size: ${t(16)};
        line-height: calc(var(--operation-height) - 2px);

        > span {
            vertical-align: middle;
            display: inline-block;
            padding: 0 0.857142857rem;
            height: ${t(20)};
            line-height: ${t(20)};

            > * {
                vertical-align: middle;
            }
        }

        & + a > span {
            border-left: 1px solid var(--border-color);
        }

        &:hover {
            color: var(--primary-focused-color);
        }

        &:active {
            color: var(--primary-active-color);
        }

        &.active {
            background-color: var(--primary-color);
            color: var(--primary-text-color);

            &:hover,
            &:active {
                color: var(--primary-text-color);
            }

            + a > span {
                border-left-color: transparent;
            }
        }
    }
`,h=({labelCloud:c,onToggleLabelCloud:r,onReset:a})=>{const{t:o}=m("high-dimensional");return e.createElement(s,null,e.createElement(n,{content:o("high-dimensional:3d-label"),placement:"bottom",theme:"tooltip"},e.createElement("a",{onClick:()=>r==null?void 0:r(),className:c?"active":""},e.createElement("span",null,e.createElement(i,{type:"a"})))),e.createElement(n,{content:o("high-dimensional:reset-zoom"),placement:"bottom",theme:"tooltip"},e.createElement("a",{onClick:()=>a==null?void 0:a()},e.createElement("span",null,e.createElement(i,{type:"reset"})))))};export default h;
