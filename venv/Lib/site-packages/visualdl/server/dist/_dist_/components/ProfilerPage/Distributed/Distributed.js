import*as P from"../../../../__snowpack__/env.js";import e,{useState as c,useEffect as _,useCallback as j}from"../../../../__snowpack__/pkg/react.js";import S from"../../StackColumnChart.js";import p from"../../../../__snowpack__/pkg/styled-components.js";import{useTranslation as D}from"../../../../__snowpack__/pkg/react-i18next.js";import{fetcher as f}from"../../../utils/fetch.js";import{Configure as v,EchartPie as T,ArgumentOperation as W,Title as L,ViewWrapper as A,FullWidthSelect as B}from"../../components.js";import{asideWidth as I,rem as a}from"../../../utils/style.js";import{Popover as z}from"../../../../__snowpack__/pkg/antd.js";import H from"../../../assets/images/question-circle.svg.proxy.js";I;const O=p(v)`
    .border {
        border-top: none;
    }
`,U=p.div`
    width: 100%;
    height: ${a(142)};
    border: 1px solid #dddddd;
    font-family: PingFangSC-Regular;
    font-size: ${a(14)};
    font-weight: 400;
    display: flex;
    .item_list {
        flex: 1;
        display: flex;
        align-items: center;
        div:nth-of-type(1) {
            padding-left: ${a(20)};
        }
        div:nth-of-type(3) {
            border-right: none;
        }
        .items {
            padding-left: ${a(30)};
            padding-right: ${a(30)};
        }
        .items:nth-of-type(2) {
            border-right: 1px solid #dddddd;
            border-left: 1px solid #dddddd;
        }
    }
    .info_list {
        flex: 1;
        .items:nth-of-type(1) {
            margin-top: ${a(14)};
        }
        .items {
            display: flex;
            margin-top: ${a(8)};
            justify-content: center;
            .label {
                width: ${a(220)};
                padding-right: ${a(30)};
                text-align: right;
                color: #666666;
            }
            .info {
                width: ${a(220)};
                text-align: left;
                color: #000000;
            }
        }
    }
`,V=p(T)`
    padding: ${a(24)};
    border: 1px solid #dddddd;
    height: ${a(366)};
`,F=P.SNOWPACK_PUBLIC_PATH,K=({runs:i,views:h,workers:n,spans:r,units:s,descriptions:d})=>{const{t:o}=D(["profiler","common"]),[N,$]=c(),[g,b]=c(),[y,C]=c(),[m,u]=c();_(()=>{i&&n&&r&&(f(`/profiler/distributed/info?run=${i}&worker=${n}&span=${r}`).then(t=>{b(t)}),f(`/profiler/distributed/steps?run=${i}&worker=${n}&span=${r}`).then(t=>{const l=t,w=l.map(E=>({label:E+"",value:E+""}));C(w),u(l[0]+"")}))},[i,n,r]),_(()=>{i&&n&&r&&m&&s&&f(`/profiler/distributed/histogram?run=${i}&worker=${n}&span=${r}&step=${m}&time_unit=${s}`).then(t=>{$(t)})},[i,n,r,h,m,s]);const x=j(t=>e.createElement("div",{style:{width:a(700),color:"#333333",fontWeight:400},dangerouslySetInnerHTML:{__html:d?d[t]:""}}),[d]),k=t=>t.parentElement;return e.createElement(A,null,e.createElement(L,null,o("Distribution-view")),e.createElement(O,{style:{marginTop:`${a(24)}`}},e.createElement("div",{className:"titleContent"},e.createElement("div",{className:"titles"},e.createElement("div",null,o("Device-Information")))),e.createElement("div",null,g&&g.map((t,l)=>e.createElement(U,{className:l===1?"border":"",key:l},e.createElement("div",{className:"item_list"},e.createElement("div",{className:"items"},t.worker_name),e.createElement("div",{className:"items"},t.process_id),e.createElement("div",{className:"items"},t.device_id)),e.createElement("div",{className:"info_list"},e.createElement("div",{className:"items"},e.createElement("div",{className:"label"},"Name:"),e.createElement("div",{className:"info"},t.name)),e.createElement("div",{className:"items"},e.createElement("div",{className:"label"},"Memory:"),e.createElement("div",{className:"info"},t.memory)),e.createElement("div",{className:"items"},e.createElement("div",{className:"label"},"ComputeCapability:"),e.createElement("div",{className:"info"},t.computeCapability)),e.createElement("div",{className:"items"},e.createElement("div",{className:"label"},"Utilization:"),e.createElement("div",{className:"info"},t.utilization))))))),e.createElement(v,{style:{marginBottom:`${a(20)}`}},e.createElement("div",{className:"titleContent",style:{marginBottom:a(15)}},e.createElement("div",{className:"titles",style:{marginBottom:`${a(0)}`}},e.createElement("div",null,o("comparisons")),e.createElement(z,{content:x("distributed_histogram"),getPopupContainer:k,placement:"right"},e.createElement(W,null,e.createElement("img",{src:F+H,alt:""})))),e.createElement("div",{className:"searchContent"},e.createElement("div",{className:"select_label"},o("training-steps")),e.createElement("div",{className:"select_wrapper"},e.createElement(B,{list:y,value:m,onChange:u})))),e.createElement(V,null,e.createElement(S,{className:"Content",data:N,isWorkerName:!0,units:s,istotal:!0}))))};export default K;
