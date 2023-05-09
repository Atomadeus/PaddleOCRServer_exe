import*as w from"../../../../__snowpack__/env.js";import t,{Fragment as k}from"../../../../__snowpack__/pkg/react.js";import{rem as l}from"../../../utils/style.js";import{Configure as x,ArgumentOperation as j}from"../../components.js";import{useTranslation as S}from"../../../../__snowpack__/pkg/react-i18next.js";import s from"../../../../__snowpack__/pkg/styled-components.js";import T from"../../../assets/images/question-circle.svg.proxy.js";const A=w.SNOWPACK_PUBLIC_PATH;import{Popover as F}from"../../../../__snowpack__/pkg/antd.js";const L=s.div`
    background: #f3f8fe;
    border-radius: ${l(4)};
    padding-left: ${l(20)};
    height: ${l(60)};
    display: flex;
    align-items: center;
`,y=s.div`
    display: flex;
    padding-right: ${l(50)};
    border-right: 1px solid #dddddd;
`,U=s.div`
    margin-right: ${l(20)};
    color: #666666;
    font-size: 14px;
    line-height: ${l(30)};
`,b=s.div`
    font-size: 18px;
    color: #333333;
    line-height: ${l(32)};
`,H=s.div`
    border: 1px solid #dddddd;
    border-radius: ${l(4)};
    height: ${l(150)};
    width: 100%;
    padding-top: ${l(24)};
    padding-left: ${l(20)};
    padding-bottom: ${l(20)};
    display: flex;
    .CPU_content {
        flex: 1;
        padding-right: ${l(30)};
        border-right: 1px solid #dddddd;
    }
    .CPU_title {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        text-align: left;
        line-height: ${l(16)};
        font-weight: 600;
        margin-bottom: ${l(20)};
    }
    .GPU_content {
        flex: 2;
        padding-left: ${l(20)};
        padding-right: ${l(20)};
        .Gpudetail {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #999999;
            text-align: left;
            line-height: ${l(24)};
            font-weight: 500;
        }
    }
    .GPU_title {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #333333;
        text-align: left;
        line-height: ${l(16)};
        font-weight: 600;
        margin-bottom: ${l(20)};
        margin-left: ${l(49)};
        display: flex;
        justify-content: space-between;
        .title_list {
            font-size: 12px;
            color: #666666;
            display: flex;
            .list_items {
                padding-right: ${l(10)};
                padding-left: ${l(10)};
                border-right: 1px solid #dddddd;
            }
        }
    }
    .itemlist {
        display: flex;
        .items {
            margin-right: ${l(82)};
            .percentage {
                text-align: center;
                font-size: 28px;
                color: #333333;
            }
            .items_label {
                font-size: 12px;
                color: #999999;
                text-align: center;
            }
        }
        .items_last {
            margin-right: 0px;
        }
    }
    .GPU_itemlist {
        display: flex;
        .items {
            flex: 1;
            .percentage {
                text-align: center;
                font-size: 28px;
                color: #333333;
            }
            .items_label {
                font-size: ${l(12)};
                color: #999999;
                text-align: center;
            }
        }
        .itemt_last {
            margin-right: 0px;
        }
    }
`,I=({environment:e,hasGpu:$,descriptions:c})=>{var i,d,r,p,m,g,o,_,f,E,u,P,h,N;const{t:a}=S(["profiler","common"]),G=t.createElement("div",{style:{width:l(700),color:"#333333",fontWeight:400},dangerouslySetInnerHTML:{__html:c||""}}),C=z=>z.parentElement;return t.createElement(k,null,t.createElement(x,null,t.createElement("div",{className:"titleContent"},t.createElement("div",{className:"titles"},t.createElement("div",null,a("profiler:Configuration-details")))),t.createElement(L,null,t.createElement(y,null,t.createElement(U,null,a("number-processes")),t.createElement(b,null,e==null?void 0:e.num_workers)),t.createElement(y,{style:{paddingLeft:`${l(50)}`,borderRight:"none"}},t.createElement(U,null,a("Equipment-type")),t.createElement(b,null,e==null?void 0:e.device_type)))),t.createElement(x,null,t.createElement("div",{className:"titleContent"},t.createElement("div",{className:"titles"},t.createElement("div",null,a("Device-Details")),t.createElement(F,{content:G,overlayClassName:"newTooltip",getPopupContainer:C,placement:"right"},t.createElement(j,null,t.createElement("img",{src:A+T,alt:""}))))),t.createElement(H,null,t.createElement("div",{className:"CPU_content"},t.createElement("div",{className:"CPU_title"},"CPU"),t.createElement("div",{className:"itemlist"},t.createElement("div",{className:"items"},t.createElement("div",{className:"percentage"},e==null?void 0:e.CPU.process_utilization,"%"),t.createElement("div",{className:"items_label"},a("Process-utilization"))),t.createElement("div",{className:"items items_last"},t.createElement("div",{className:"percentage"},e==null?void 0:e.CPU.system_utilization,"%"),t.createElement("div",{className:"items_label"},a("system-utilization"))))),$?t.createElement("div",{className:"GPU_content"},t.createElement("div",{className:"GPU_title"},t.createElement("div",null,"GPU"),t.createElement("div",{className:"title_list"},t.createElement("div",{className:"list_items"},((i=e==null?void 0:e.GPU)==null?void 0:i.name)?(d=e==null?void 0:e.GPU)==null?void 0:d.name:"--"),t.createElement("div",{className:"list_items"},((r=e==null?void 0:e.GPU)==null?void 0:r.memory)?(p=e==null?void 0:e.GPU)==null?void 0:p.memory:"--"),t.createElement("div",{className:"list_items",style:{borderRight:"none"}},a("computing-power"),((m=e==null?void 0:e.GPU)==null?void 0:m.compute_capability)!==void 0?(g=e==null?void 0:e.GPU)==null?void 0:g.compute_capability:"--"))),t.createElement("div",{className:"GPU_itemlist"},t.createElement("div",{className:"items"},t.createElement("div",{className:"percentage"},((o=e==null?void 0:e.GPU)==null?void 0:o.utilization)!==void 0?((_=e==null?void 0:e.GPU)==null?void 0:_.utilization)+"%":"--"),t.createElement("div",{className:"items_label"},a("Utilization"))),t.createElement("div",{className:"items"},t.createElement("div",{className:"percentage"},((f=e==null?void 0:e.GPU)==null?void 0:f.sm_efficiency)!==void 0?((E=e==null?void 0:e.GPU)==null?void 0:E.sm_efficiency)+"%":"--"),t.createElement("div",{className:"items_label"},a("Traffic-Processor-Efficiency"))),t.createElement("div",{className:"items"},t.createElement("div",{className:"percentage"},((u=e==null?void 0:e.GPU)==null?void 0:u.achieved_occupancy)!==void 0?((P=e==null?void 0:e.GPU)==null?void 0:P.achieved_occupancy)+"%":"--"),t.createElement("div",{className:"items_label"},a("Traffic-processor-occupancy"))),t.createElement("div",{className:"items items_last"},t.createElement("div",{className:"percentage"},((h=e==null?void 0:e.GPU)==null?void 0:h.tensor_core_percentage)!==void 0?((N=e==null?void 0:e.GPU)==null?void 0:N.tensor_core_percentage)+"%":"--"),t.createElement("div",{className:"items_label"},a("usage-time"))))):t.createElement("div",{className:"GPU_content"},t.createElement("div",{className:"Gpudetail"},t.createElement("div",null,a("NoGPUdata")))))))};export default I;
