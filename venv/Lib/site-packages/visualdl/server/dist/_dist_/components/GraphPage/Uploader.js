import e,{useCallback as p,useState as f}from"../../../__snowpack__/pkg/react.js";import{em as l,sameBorder as h,size as v,transitionProps as c}from"../../utils/style.js";import E from"../Button.js";import y from"../Icon.js";import i from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as x}from"../../../__snowpack__/pkg/react-i18next.js";const $=i.div`
    ${a=>h({width:"1px",type:"dashed",radius:l(16),color:a.active?"var(--primary-color)":void 0})}
    background-color: ${a=>a.active?"var(--graph-uploader-active-background-color)":"var(--graph-uploader-background-color)"};
    ${v("43.2%","68%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${c("border-color","background-color")}

    > .upload-icon {
        font-size: ${l(64)};
        color: var(--primary-color);
        ${c("color")}
    }

    > span {
        font-size: ${l(18)};
        line-height: 3.2;
    }

    > .upload-button {
        min-width: ${l(155)};
    }
`,_=i.table`
    max-width: 68%;
    margin-top: ${l(32)};

    td {
        vertical-align: text-top;
        line-height: 2;

        &:first-of-type {
            color: var(--text-light-color);
            text-align: right;
            padding-right: ${l(10)};
            font-size: ${l(16)};
            width: ${l(250)};
            ${c("color")}
        }
    }
`,b=({onClickUpload:a,onDropFiles:o,Xpaddlae:s})=>{const{t:r}=x("graph"),[d,n]=f(!1),u=p(()=>a==null?void 0:a(),[a]),m=p(t=>{t.preventDefault(),n(!1),t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files.length&&(o==null||o(t.dataTransfer.files))},[o]),g=p(t=>{t.preventDefault(),!t.currentTarget.contains(t.relatedTarget)&&n(!1)},[]);return e.createElement(e.Fragment,null,e.createElement($,{active:d,onDrop:m,onDragOver:t=>t.preventDefault(),onDragEnter:()=>n(!0),onDragLeave:g},e.createElement(y,{type:"upload",className:"upload-icon"}),s?e.createElement("span",null,r("graph:upload-tip2")):e.createElement("span",null,r("graph:upload-tip")),e.createElement(E,{type:"primary",rounded:!0,className:"upload-button",onClick:u},r("graph:upload-model"))),e.createElement(_,null,s?e.createElement("div",{style:{display:"flex",fontSize:"18px"}},e.createElement("div",null,r("graph:supported-model")),e.createElement("div",null,r("graph:supported-model-list-xpaddle"))):e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,r("graph:supported-model")),e.createElement("td",null,r("graph:supported-model-list"))),e.createElement("tr",null,e.createElement("td",null,r("graph:experimental-supported-model")),e.createElement("td",null,r("graph:experimental-supported-model-list"))))))};export default b;
