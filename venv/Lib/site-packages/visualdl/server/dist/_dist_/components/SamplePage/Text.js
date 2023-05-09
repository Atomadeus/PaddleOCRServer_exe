import e,{useCallback as v,useEffect as _,useState as j}from"../../../__snowpack__/pkg/react.js";import{borderRadius as $,ellipsis as C,em as T,rem as t,sameBorder as k,size as w,transitionProps as n}from"../../utils/style.js";import L,{useRunningRequest as N}from"../../hooks/useRequest.js";import R from"../Loader/ContentLoader.js";import q from"../Icon.js";import{TextChart as g}from"../Loader/ChartPage.js";import{getEntityUrl as I}from"./SampleChart.js";import z from"../../../__snowpack__/pkg/query-string.js";import p from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as O}from"../../../__snowpack__/pkg/react-i18next.js";const f=p.div`
    width: 100%;
`,E=p.h4`
    cursor: pointer;
    background-color: var(--text-chart-title-background-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${t(40)};
    margin: 0;
    padding: 0 ${t(20)} 0 ${t(12)};
    border-radius: ${$};
    font-weight: 400;
    font-size: ${T(14)};
    ${n("background-color")}

    .tag {
        flex: auto;
        font-weight: 700;

        &::before {
            content: '';
            display: inline-block;
            ${w(t(10),t(3))}
            margin-right: ${t(8)};
            border-radius: ${t(1.5)};
            vertical-align: middle;
            background-color: var(--text-chart-title-indicator-color);
            ${n("background-color")}
        }
    }

    .run {
        flex: none;
        color: var(--text-lighter-color);
        ${n("color")}
        ${C()}
         max-width: 50%;

        &::before {
            content: '';
            display: inline-block;
            ${w(t(9),t(9))}
            margin-right: ${t(8)};
            border-radius: ${t(4.5)};
            vertical-align: middle;
            background-color: ${r=>r.color};
        }
    }

    .steps {
        flex: none;
        color: var(--text-lighter-color);
        margin-left: ${t(12)};
    }

    .icon {
        margin-left: ${t(20)};
        font-size: ${t(10)};
        color: var(--text-lighter-color);
        transform: rotate(${r=>r.opened?"180":"0"}deg);
        ${n(["transform","color"])};
    }
`,s=p.div`
    height: ${t(40)};
    margin-top: ${t(12)};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    ${k(!0)}
    ${n("border-color")}
`,S=p.div`
     margin-top: ${t(12)};
     >div {
         ${k()}
         border-radius: ${$};
         margin-bottom: ${t(20)};
         > span {
             display:block;
             height: ${t(40)};
             line-height: 1.857142857;
             padding: ${t(7)} 0;
         }
     
         .step {
             padding-left: ${t(8)};
             padding-right: ${t(14)};
     
             > span {
                 display: inline-block;
                 width: atuo;
                 clear:both
                 color: var(--text-light-color);
                 background-color: var(--text-chart-tag-background-color);
                 padding: 0 ${t(8)};
                 border-radius: ${$};
                 ${n(["background-color","color"])}
             }
         }
     
         .text {
             padding-left: 1rem;
             padding-right: ${t(20)};
             display: block;
             overflow: hidden;
             white-space: normal;
             word-wrap: normal;
             height:auto;
     
             > * {
                 vertical-align: middle;
             }
         }
     }
 `,B=({run:r,tag:i,step:o,wallTime:u,index:c})=>{const{t:m}=O("sample"),{data:a,error:l,loading:d}=L(I("text",c,r,i,u),{dedupingInterval:5*60*1e3});return e.createElement("div",null,e.createElement("span",{className:"step"},e.createElement("span",null,m("common:time-mode.step")," ",o)),e.createElement("span",{className:"text",title:a!=null?a:""},d?e.createElement(R,{viewBox:"0 0 640 16",height:"16"},e.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:(c+1)*250%640,height:"16"})):l!=null?l:a))},F=({run:r,tag:i,opened:o,running:u})=>{var b;const[c,m]=j(o!=null?o:!1);_(()=>m(o!=null?o:!1),[o]);const a=v(()=>m(h=>!h),[]),{data:l,error:d,loading:y}=N(`/text/list?${z.stringify({run:r.label,tag:i})}`,!!u);return e.createElement(f,null,e.createElement(E,{color:r.colors[0],opened:c,onClick:a},e.createElement("span",{className:"tag"},i),e.createElement("span",{className:"run"},r.label),e.createElement("span",{className:"steps"},(b=l==null?void 0:l.length)!=null?b:0),e.createElement(q,{className:"icon",type:"chevron-down"})),c?y?e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement(g,{width:270})),e.createElement(s,null,e.createElement(g,{width:640}))):d?e.createElement(s,null,d):e.createElement(S,null,l==null?void 0:l.map((h,x)=>e.createElement(B,{key:x,...h,run:r.label,tag:i,index:x}))):null)};export default F;export const Loader=()=>e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement(E,{color:""}),e.createElement(s,null,e.createElement(g,{width:270})),e.createElement(s,null,e.createElement(g,{width:640}))),e.createElement(f,null,e.createElement(E,{color:""})));
