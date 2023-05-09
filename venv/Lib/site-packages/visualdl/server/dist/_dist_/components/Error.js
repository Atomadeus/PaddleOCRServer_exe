import*as d from"../../__snowpack__/env.js";import e from"../../__snowpack__/pkg/react.js";import{Trans as o,useTranslation as s}from"../../__snowpack__/pkg/react-i18next.js";import{em as g,link as p,rem as n,size as u,transitionProps as l}from"../utils/style.js";import E from"../../__snowpack__/pkg/styled-components.js";const _=d.SNOWPACK_PUBLIC_PATH,h=E.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color);
    height: 100%;
    width: 100%;
    ${l("background-color")}

    > .image {
        background-image: url(${`${_}/images/empty.svg`});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        ${u(n(244),n(280))}
    }

    > .inner {
        width: max(calc(50% - ${n(280)}), ${n(280)});
        color: var(--text-light-color);
        ${l("color")}
        ${p}

        h4 {
            color: var(--text-color);
            font-size: ${g(18)};
            font-weight: 700;
            ${l("color")}
        }

        p {
            margin: 0;
        }

        ol,
        ul {
            padding-left: 2em;
            line-height: 1.857142857;
        }
    }
`,b=()=>window.location.reload(),f={zh:"https://github.com/PaddlePaddle/VisualDL/blob/develop/README_CN.md",en:"https://github.com/PaddlePaddle/VisualDL/blob/develop/README.md"},k={zh:"https://github.com/PaddlePaddle/VisualDL/blob/develop/docs/components/README_CN.md",en:"https://github.com/PaddlePaddle/VisualDL/blob/develop/docs/components/README.md"},m=({map:t,children:a})=>{var c,i;const{i18n:r}=s();return e.createElement("a",{href:(i=(c=t[r.language])!=null?c:t[String(r.options.fallbackLng)])!=null?i:t.en,target:"_blank",rel:"noreferrer"},a)},P=({className:t,children:a})=>{const{t:r}=s("errors");return e.createElement(h,{className:t},e.createElement("div",{className:"image"}),e.createElement("div",{className:"inner"},a||e.createElement(e.Fragment,null,e.createElement("h4",null,r("errors:common.title")),e.createElement("p",null,r("errors:common.description")),e.createElement("ol",null,e.createElement("li",null,e.createElement(o,{i18nKey:"errors:common.1"},"Log files are not generated. Please refer to\xA0",e.createElement(m,{map:f},"README"),"\xA0to create log files.")),e.createElement("li",null,e.createElement(o,{i18nKey:"errors:common.2"},"Log files are generated but data is not written yet. Please refer to\xA0",e.createElement(m,{map:k},"VisualDL User Guide"),"\xA0to write visualized data.")),e.createElement("li",null,e.createElement(o,{i18nKey:"errors:common.3"},"Log files are generated and data is written. Please try to\xA0",e.createElement("a",{onClick:b},"Refresh"),".")),e.createElement("li",null,e.createElement(o,{i18nKey:"errors:common.4"},"Log files are generated but path to log directory is wrong. Please check your directory and try again."))))))};export default P;
