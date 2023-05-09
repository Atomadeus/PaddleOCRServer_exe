import L,{AsideSection as h}from"./Aside.js";import o,{useCallback as g,useMemo as d,useState as N}from"../../__snowpack__/pkg/react.js";import{asideWidth as T,ellipsis as I,em as s,rem as f,size as W}from"../utils/style.js";import k from"./Checkbox.js";import z from"./Field.js";import q from"./Loader/RunList.js";import B from"./RunningToggle.js";import D from"./SearchInput.js";import F from"../../__snowpack__/pkg/styled-components.js";import O from"../../__snowpack__/pkg/lodash/uniqBy.js";import G from"../hooks/useLocalStorage.js";import{useTranslation as H}from"../../__snowpack__/pkg/react-i18next.js";const K="run_aside_width",M=F(L)`
    ${h}.run-section {
        flex: auto;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 0;

        .run-select {
            flex: auto;
            overflow-x: hidden;
            overflow-y: auto;
            display: flex;
            flex-direction: column;

            > * {
                flex: none;
            }

            .search-input {
                margin-bottom: ${f(15)};
            }

            .run-list {
                flex: auto;
                overflow-x: hidden;
                overflow-y: auto;

                margin-top: ${f(5)};

                > div {
                    margin-top: ${f(11)};

                    > * {
                        width: 100%;
                    }

                    .run-item {
                        display: flex;
                        align-items: center;
                        ${I()}

                        > i {
                            display: inline-block;
                            ${W(s(12),s(12))};
                            border-radius: ${s(6)};
                            margin-right: ${s(8)};
                        }
                    }
                }
            }
        }
    }
`,Y=({runs:t,selectedRuns:l,onChangeRuns:i,running:n,onToggleRunning:_,loading:x,children:y})=>{const{t:p}=H("common"),[c,E]=N(""),w=d(()=>(t==null?void 0:t.length)===(l==null?void 0:l.length),[t,l]),j=g(e=>{i==null||i(e?t!=null?t:[]:[])},[i,t]),S=d(()=>{var e;return(e=c?t==null?void 0:t.filter(r=>r.label.indexOf(c)>=0):t)!=null?e:[]},[t,c]),v=g((e,r)=>{let a=l!=null?l:[];r?a=O([...a,e],m=>m.label):a=a.filter(m=>m.label!==e.label),i==null||i(a)},[i,l]),A=d(()=>o.createElement(B,{className:"running-toggle",running:n,onToggle:_}),[n,_]),[b,$]=G(K);return o.createElement(M,{bottom:A,resizable:"left",width:b==null?T:+b,minWidth:260,onResized:e=>$(e+"")},y,o.createElement(h,{className:"run-section"},o.createElement(z,{className:"run-select",label:p("common:select-runs")},o.createElement(D,{className:"search-input",value:c,onChange:E,placeholder:p("common:search-runs"),rounded:!0}),o.createElement(k,{checked:w,onChange:j},p("common:select-all")),o.createElement("div",{className:"run-list"},x?o.createElement(q,null):S.map((e,r)=>{var a;return o.createElement("div",{key:r},o.createElement(k,{checked:(a=l==null?void 0:l.map(m=>m.label))==null?void 0:a.includes(e.label),title:e.label,onChange:m=>v(e,m)},o.createElement("span",{className:"run-item"},o.createElement("i",{style:{backgroundColor:e.colors[0]}}),e.label)))})))))};export default Y;
