import S,{XAxisType as _,YAxisType as n}from"./LineChart.js";import r,{useCallback as k,useMemo as x,useRef as E,useState as b}from"../../__snowpack__/pkg/react.js";import{rem as i,size as L}from"../utils/style.js";import $ from"./Chart.js";import I from"./ChartToolbox.js";import M from"./TooltipTable.js";import{format as Y}from"../../__snowpack__/pkg/d3-format.js";import{renderToStaticMarkup as V}from"../../__snowpack__/pkg/react-dom/server.js";import m from"../../__snowpack__/pkg/styled-components.js";import{useTranslation as F}from"../../__snowpack__/pkg/react-i18next.js";const O=Y(".8"),P=m.div`
    ${L("100%","100%")}
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
`,R=m(S)`
    flex-grow: 1;
`,W=m(I)`
    margin-left: ${i(20)};
    margin-right: ${i(20)};
    margin-bottom: ${i(18)};
`;export const chartSize={width:430,height:337},chartSizeInRem={width:i(chartSize.width),height:i(chartSize.height)},DownloadDataTypes={csv:"csv",tsv:"tsv"};const X=({title:y,data:C,loading:v,xAxisType:e,xRange:c,yRange:p,getTooltipTableData:d,downloadData:a})=>{const{t}=F("common"),l=E(null),[w,j]=b(!1),[u,g]=b(n.value),f=k(()=>{g(o=>o===n.log?n.value:n.log)},[g]),h=k(o=>{console.log("params",o);const s=Array.isArray(o)?o[0].data:o.data,A=Array.isArray(o)?o[0].axisValue:o.axisValue;return V(r.createElement(M,{run:t("common:runs"),...d(s,A)}))},[d,t]),z=x(()=>({legend:{data:[]},tooltip:{position:["10%","100%"],formatter:h,hideDelay:300,enterable:!0},xAxis:{type:e!=null?e:_.value,...c,axisPointer:{label:{formatter:e===_.time?void 0:({value:o})=>O(o)}}},yAxis:{type:u,...p}}),[h,e,c,u,p]),T=x(()=>[{icon:"maximize",activeIcon:"minimize",tooltip:t("common:maximize"),activeTooltip:t("common:minimize"),toggle:!0,onClick:()=>j(o=>!o)},{icon:"restore-size",tooltip:t("common:restore"),onClick:()=>{var o;return(o=l.current)==null?void 0:o.restore()}},{icon:"log-axis",tooltip:t("common:toggle-log-axis"),toggle:!0,onClick:f},{icon:"download",menuList:[{label:t("common:download-image"),onClick:()=>{var o;return(o=l.current)==null?void 0:o.saveAsImage()}},...a?[{label:t("common:download-data"),children:Object.keys(DownloadDataTypes).sort((o,s)=>o.localeCompare(s)).map(o=>({label:t("common:download-data-format",{format:o}),onClick:()=>a(o)}))}]:[]]}],[a,t,f]);return r.createElement($,{maximized:w,...chartSizeInRem},r.createElement(P,null,r.createElement(R,{ref:l,title:y,options:z,data:C,loading:v,zoom:!0}),r.createElement(W,{items:T})))};export default X;
