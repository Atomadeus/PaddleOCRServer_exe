import*as l from"../../../__snowpack__/env.js";import o from"../../../__snowpack__/pkg/react.js";import{ellipsis as g,rem as t,transitionProps as n}from"../../utils/style.js";import c from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as p}from"../../../__snowpack__/pkg/react-i18next.js";const m=l.SNOWPACK_PUBLIC_PATH,u=c.div`
    width: 100%;
    text-align: center;
    font-size: ${t(14)};
    color: var(--text-lighter-color);
    line-height: ${t(20)};
    height: auto;
    padding: ${t(170)} 0 ${t(50)};
    background-color: var(--background-color);
    background-image: url(${`${m}/images/empty.svg`});
    background-repeat: no-repeat;
    background-position: calc(50% + ${t(12)}) ${t(50)};
    background-size: ${t(140)} ${t(122)};
    ${n(["color","background-color"])}
`,_=c.ul`
    list-style: none;
    line-height: 2.3;
    padding-left: 0;
    margin: 0;

    > li {
        list-style: none;

        > a {
            cursor: pointer;
            ${g()}
            display: block;
            padding: 0 ${t(20)};
            ${n("background-color")}

            &:hover {
                background-color: var(--background-focused-color);
            }
        }
    }
`,k=({list:r,onHovered:e})=>{const{t:s}=p("high-dimensional");return r.length?o.createElement(_,{onMouseLeave:()=>e==null?void 0:e()},r.map((i,a)=>o.createElement("li",{key:a},o.createElement("a",{onMouseEnter:()=>e==null?void 0:e(a)},i)))):o.createElement(u,null,s("high-dimensional:search-empty"))};export default k;
