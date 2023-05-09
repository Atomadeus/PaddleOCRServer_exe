import t,{Fragment as p}from"../../../../__snowpack__/pkg/react.js";import{rem as e}from"../../../utils/style.js";import u from"../../../../__snowpack__/pkg/styled-components.js";import l from"../../BarsChart.js";import{Tabs as o}from"../../../../__snowpack__/pkg/antd.js";const $=u.div`
    border: 1px solid #dddddd;
    border-radius: ${e(4)};
    width: 100%;
    height: ${e(378)};
    .titles {
        height: ${e(63)};
        display: flex;
        justify-content: flex-end;
        padding-right: ${e(30)};
        .legend {
            display: flex;
            align-items: center;
            margin-left: ${e(20)};
            .labels {
                width: ${e(17)};
                height: ${e(5)};
                border-radius: ${e(2.5)};
                background: yellow;
                line-height: ${e(22)};
            }
            .legend_name {
                margin-left: ${e(8)};
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #666666;
                letter-spacing: 0;
                line-height: ${e(14)};
                font-weight: 400;
            }
        }
    }
    .chartContent {
        width: 100%;
        height: ${e(315)};
        display: flex;
        padding: ${e(0)} ${e(24)};
        .chart {
            .Content {
                height: 100%;
            }
            flex: 1;
            margin-right: ${e(43)};
        }
    }
`,{TabPane:_}=o,y=({performanceData:a,units:g})=>{const h=["#2932E1","#00CC88","#981EFF","#FF6D6D","#25C9FF","#E71ED5","#FFAA00","#00307D"];return t.createElement(p,null,t.createElement(o,{defaultActiveKey:"1",centered:!0},a&&a.order.map((n,E)=>{var s,r,i,d,c;return t.createElement(_,{tab:n,key:E},t.createElement($,null,t.createElement("div",{className:"titles"},(r=(s=a[n])==null?void 0:s.calling_times)==null?void 0:r.key.map((f,m)=>t.createElement("div",{className:"legend",key:m},t.createElement("div",{className:"labels",style:{background:`${h[m]}`}}),t.createElement("div",{className:"legend_name"},f)))),t.createElement("div",{className:"chartContent"},t.createElement("div",{className:"chart"},t.createElement(l,{className:"Content",data:(i=a[n])==null?void 0:i.calling_times,text:1,isLegend:!1})),t.createElement("div",{className:"chart"},t.createElement(l,{className:"Content",data:(d=a[n])==null?void 0:d.durations,text:2,isLegend:!1,units:g})),t.createElement("div",{className:"chart",style:{marginRight:`${e(0)}`}},t.createElement(l,{className:"Content",data:(c=a[n])==null?void 0:c.ratios,text:3,isLegend:!0})))))})))};export default y;
