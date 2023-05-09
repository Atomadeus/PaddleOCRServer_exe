import o from"../../../__snowpack__/pkg/react.js";import{em as e,transitionProps as r,zIndexes as c}from"../../utils/style.js";import n from"../Icon.js";import s from"./Properties.js";import i from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as d}from"../../../__snowpack__/pkg/react-i18next.js";const m=i.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overscroll-behavior: none;
    background-color: var(--mask-color);
    z-index: ${c.dialog};
    ${r("background-color")}

    > .modal {
        width: ${e(536)};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.08);

        > .modal-header {
            padding: 0 ${e(40,18)};
            height: ${e(47,18)};
            background-color: var(--model-header-background-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: ${e(18)};
            ${r("background-color")}

            > .modal-title {
                flex: auto;
            }

            > .modal-close {
                flex: none;
                font-size: ${e(16,18)};
                cursor: pointer;
                color: var(--text-color);
                ${r("color")}

                &:hover {
                    color: var(--text-light-color);
                }

                &:active {
                    color: var(--text-lighter-color);
                }
            }
        }

        > .modal-body {
            padding: ${e(40)};
            background-color: var(--background-color);
            overflow: auto;
            max-height: calc(80vh - ${e(47)});
            ${r("background-color")}
        }
    }
`,p=({data:a,onClose:t})=>{const{t:l}=d("graph");return a?o.createElement(m,null,o.createElement("div",{className:"modal"},o.createElement("div",{className:"modal-header"},o.createElement("span",{className:"modal-title"},l("graph:model-properties")),o.createElement("a",{className:"modal-close",onClick:()=>t==null?void 0:t()},o.createElement(n,{type:"close"}))),o.createElement("div",{className:"modal-body"},o.createElement(s,{...a,expand:!0})))):null};export default p;
