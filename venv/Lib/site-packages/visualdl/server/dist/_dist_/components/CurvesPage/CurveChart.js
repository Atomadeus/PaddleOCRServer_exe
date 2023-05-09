import B from"../LineChart.js";import o,{useCallback as G,useMemo as v,useRef as H,useState as J}from"../../../__snowpack__/pkg/react.js";import{options as x,nearestPoint as K}from"../../resource/curves/index.js";import{rem as l,size as C}from"../../utils/style.js";import k from"../Chart.js";import{Chart as z}from"../Loader/ChartPage.js";import N from"../ChartToolbox.js";import Q from"../TooltipTable.js";import{cycleFetcher as U}from"../../utils/fetch.js";import{format as E}from"../../../__snowpack__/pkg/d3-format.js";import V from"../../../__snowpack__/pkg/query-string.js";import{renderToStaticMarkup as X}from"../../../__snowpack__/pkg/react-dom/server.js";import h from"../../../__snowpack__/pkg/styled-components.js";import{useRunningRequest as Y}from"../../hooks/useRequest.js";import{useTranslation as Z}from"../../../__snowpack__/pkg/react-i18next.js";import ee from"../../../__snowpack__/pkg/lodash/zip.js";const T=E(".4f"),te=E(".2f"),oe=h.div`
    ${C("100%","100%")}
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
`,re=h(B)`
    flex-grow: 1;
`,ie=h(N)`
    margin-left: ${l(20)};
    margin-right: ${l(20)};
    margin-bottom: ${l(18)};
`,ne=h.div`
    ${C("100%","100%")}
    display: flex;
    justify-content: center;
    align-items: center;
`,s={width:430,height:337},w={width:l(s.width),height:l(s.height)},ae=({type:S,runs:n,tag:y,running:R})=>{const{t}=Z(["curves","common"]),d=H(null),{data:m,error:$,loading:L}=Y(n.map(e=>`/${S}-curve/list?${V.stringify({run:e.label,tag:y})}`),!!R,(...e)=>U(e)),[q,A]=J(!1),p=v(()=>n.map((e,a)=>{var u,r;const[i,f,...g]=(r=(u=m==null?void 0:m[a])==null?void 0:u.find(c=>c[1]===e.steps[e.index]))!=null?r:[0,0,[],[],[],[],[],[],[]];return[i,f,ee(...g)]}),[m,n]),b=v(()=>p.map((e,a)=>{const i=n[a];return{name:i.label,z:a,itemStyle:{color:i.colors[0]},lineStyle:{color:i.colors[0]},data:e[2],encode:{x:[1],y:[0]}}}),[p,n]),j=G(e=>{const a=Array.isArray(e)?e[0].data:e.data,i=K(p.map(r=>r[2]),a[1]),f=[{label:t("curves:threshold")},{label:t("curves:precision")},{label:t("curves:recall")},{label:t("curves:true-positives")},{label:t("curves:false-positives")},{label:t("curves:true-negatives")},{label:t("curves:false-negatives")}],g=i.reduce((r,c,_)=>(r.push(...new Array(c.length).fill(n[_])),r),[]),u=i.reduce((r,c)=>(r.push(...c.map(([_,D,I,M,P,O,W])=>[te(W),T(_),T(D),I,M,P,O])),r),[]);return X(o.createElement(Q,{run:t("common:runs"),runs:g,columns:f,data:u}))},[p,n,t]),F=v(()=>({...x,tooltip:{...x.tooltip,formatter:j,hideDelay:300,enterable:!0}}),[j]);return!b&&$?o.createElement(ne,null,t("common:error")):o.createElement(k,{maximized:q,...w},o.createElement(oe,null,o.createElement(re,{ref:d,title:y,options:F,data:b,loading:L,zoom:!0}),o.createElement(ie,{items:[{icon:"maximize",activeIcon:"minimize",tooltip:t("common:maximize"),activeTooltip:t("common:minimize"),toggle:!0,onClick:()=>A(e=>!e)},{icon:"restore-size",tooltip:t("common:restore"),onClick:()=>{var e;return(e=d.current)==null?void 0:e.restore()}},{icon:"download",tooltip:t("common:download-image"),onClick:()=>{var e;return(e=d.current)==null?void 0:e.saveAsImage()}}]})))};export default ae;export const Loader=()=>o.createElement(o.Fragment,null,o.createElement(k,{...w},o.createElement(z,{width:s.width-2,height:s.height-2})),o.createElement(k,{...w},o.createElement(z,{width:s.width-2,height:s.height-2})));
