import*as $ from"../../../__snowpack__/pkg/d3.js";import s,{useEffect as b,useMemo as i}from"../../../__snowpack__/pkg/react.js";import{borderRadius as j,rem as t,tint as k,transitionProps as w}from"../../utils/style.js";import x from"../BarChart.js";import E from"../Icon.js";import{colors as l}from"../../utils/theme.js";import p from"../../../__snowpack__/pkg/styled-components.js";import R from"../../hooks/useRequest.js";import{useTranslation as I}from"../../../__snowpack__/pkg/react-i18next.js";const z=[k(.6,l.primary.default),l.primary.default],B=p.div`
    width: ${t(450)};
    height: ${t(370)};
    background-color: var(--background-color);
    border-radius: ${j};
    box-shadow: 0 ${t(4)} ${t(12)} 0 rgba(0, 0, 0, 0.16);
    display: ${e=>e.visible?"inline-block":"none"};
    position: relative;
    padding: ${t(20)};
    z-index: 1;

    > .close {
        position: absolute;
        top: ${t(20)};
        right: ${t(20)};
        font-size: ${t(12)};
        cursor: pointer;
        color: var(--text-lighter-color);
        ${w("color")}

        &:hover {
            color: var(--text-light-color);
        }

        &:active {
            color: var(--text-color);
        }
    }
`,D=p(x)`
    width: 100%;
    height: 100%;
`,M=({visible:e,onClickClose:n,className:d})=>{const{t:u}=I(["hyper-parameter","common"]),{data:c,mutate:m,isValidating:h}=R("/hparams/importance",{revalidateOnMount:!1});b(()=>{e&&m()},[m,e]);const o=i(()=>{if(!c)return[];const r=[...c];return r.reverse(),r},[c]),g=i(()=>({animation:!1,tooltip:{show:!1}}),[]),f=i(()=>{var r;return(r=o.map(a=>a.name))!=null?r:[]},[o]),_=i(()=>{var a;const r=$.scaleLinear().domain([0,o.length]).range(z);return[{barMaxWidth:14,data:(a=o.map((v,y)=>({value:v.value,itemStyle:{color:r(y)}})))!=null?a:[],type:"bar"}]},[o]);return s.createElement(B,{visible:!!e,className:d},s.createElement(D,{title:u("hyper-parameter:parameter-importance"),direction:"horizontal",options:g,categories:f,data:_,loading:h}),s.createElement("a",{className:"close",onClick:()=>n==null?void 0:n()},s.createElement(E,{type:"close"})))};export default M;
