import e,{useCallback as r,useEffect as S,useRef as u,useState as N}from"../../../__snowpack__/pkg/react.js";import{Trans as f,useTranslation as T}from"../../../__snowpack__/pkg/react-i18next.js";import{borderRadius as j,em as l,rem as o,size as I,transitionProps as h,zIndexes as P}from"../../utils/style.js";import g from"../Button.js";import z from"../Icon.js";import E from"../../../__snowpack__/pkg/styled-components.js";const L=E.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overscroll-behavior: none;
    background-color: var(--dark-mask-color);
    z-index: ${P.dialog};
    ${h("background-color")}

    > .modal {
        width: ${o(700)};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.08);
        background-color: var(--background-color);
        border-radius: ${j};
        ${h("background-color")}

        > .modal-header {
            padding: 0 ${l(40,16)};
            height: ${l(55,16)};
            line-height: ${l(55,16)};
            text-align: center;
            font-size: ${l(16)};
            font-weight: 700;
            position: relative;
            border-bottom: 1px solid var(--border-color);

            > .modal-close {
                position: absolute;
                right: 0;
                ${I(l(55,16),l(55,16))}
                line-height: ${l(55,16)};
                font-size: ${l(20,16)};
                text-align: center;
                cursor: pointer;
                color: var(--text-lighter-color);
            }
        }

        > .modal-body {
            margin: ${o(40)} 0;
            height: ${o(314)};
        }
    }
`,R=`0.1\\t0.2\\t0.5\\t0.9
0.2\\t0.1\\t5.0\\t0.2
0.4\\t0.1\\t7.0\\t0.8`,A=`Pok\xE9mon\\tSpecies
Wartortle\\tTurtle
Venusaur\\tSeed
Charmeleon\\tFlame`,B=E.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;

    > .item {
        flex: 1;
        padding: 0 ${o(40)};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        &:not(:last-child) {
            border-right: 1px solid var(--border-color);
        }

        .desc {
            height: 30%;
            line-height: 1.7;

            .tip {
                color: var(--text-light-color);
            }
        }

        pre {
            height: 40%;
            margin: 0;
            padding: ${o(30)} ${o(40)};
            color: var(--code-color);
            background-color: var(--code-background-color);
        }
    }
`,D=({open:m,hasVector:b,onClose:a,onChangeVectorFile:i,onChangeMetadataFile:n})=>{const{t:d}=T("high-dimensional"),[v,k]=N(!!m);S(()=>k(!!m),[m]);const y=r(()=>a==null?void 0:a(),[a]),c=u(null),s=u(null),x=r(p=>{const t=p.target;t&&t.files&&t.files.length&&(i==null||i(t.files[0]))},[i]),$=r(p=>{const t=p.target;t&&t.files&&t.files.length&&(n==null||n(t.files[0]))},[n]),w=r(()=>{c.current&&(c.current.value="",c.current.click())},[]),_=r(()=>{s.current&&(s.current.value="",s.current.click())},[]);return v?e.createElement(L,null,e.createElement("div",{className:"modal"},e.createElement("div",{className:"modal-header"},d("high-dimensional:upload-from-computer"),e.createElement("a",{className:"modal-close",onClick:y},e.createElement(z,{type:"close"}))),e.createElement("div",{className:"modal-body"},e.createElement(B,null,e.createElement("div",{className:"item"},e.createElement("div",{className:"desc"},e.createElement(f,{i18nKey:"high-dimensional:upload.step1"},"Step 1: Load a TSV file of vectors.",e.createElement("br",null),"Example of 3 vectors with dimension 4:")),e.createElement("pre",null,R),e.createElement(g,{type:"primary",onClick:w},d("high-dimensional:select-file"))),e.createElement("div",{className:"item"},e.createElement("div",{className:"desc"},e.createElement(f,{i18nKey:"high-dimensional:upload.step2"},"Step 2 (optional): Load a TSV file of metadata.",e.createElement("br",null),"Example of 3 data points and 2 columns.",e.createElement("br",null),e.createElement("span",{className:"tip"},"Note: If there is more than one column, the first row will be parsed as column labels."))),e.createElement("pre",null,A),e.createElement(g,{type:"primary",disabled:!b,onClick:_},d("high-dimensional:select-file")))))),e.createElement("input",{ref:c,type:"file",multiple:!1,onChange:x,style:{display:"none"}}),e.createElement("input",{ref:s,type:"file",multiple:!1,onChange:$,style:{display:"none"}})):null};export default D;
