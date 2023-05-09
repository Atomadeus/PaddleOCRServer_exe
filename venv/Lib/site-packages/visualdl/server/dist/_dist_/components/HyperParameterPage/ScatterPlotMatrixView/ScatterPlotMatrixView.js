import e,{useState as f}from"../../../../__snowpack__/pkg/react.js";import u from"../ColorMap.js";import h from"./ScatterPlotMatrix.js";import j from"../SessionTable.js";import x from"../View.js";import{rem as a}from"../../../utils/style.js";import d from"../../../../__snowpack__/pkg/styled-components.js";import{useGraph as g}from"../../../resource/hyper-parameter/index.js";const w=d.div`
    width: 100%;
    display: flex;
    font-size: ${a(12)};
    align-items: flex-start;
    justify-content: space-between;

    > .graph {
        flex: auto;
    }

    > .color-map {
        flex: none;
        height: ${a(180)};
    }
`,_=({indicators:t,list:r,data:o})=>{const{selectedIndicators:s,sessionData:l,onHover:n,onSelect:m,showMetricsGraph:c}=g(t,r),[p,i]=f([]);return e.createElement(e.Fragment,null,e.createElement(x,null,e.createElement(w,null,e.createElement(h,{className:"graph",indicators:s,data:o,list:r,colors:p,onHover:n,onSelect:m}),e.createElement(u,{className:"color-map",indicators:t,data:o,onChange:i}))),e.createElement(j,{indicators:t,data:l,showMetricsGraph:c}))};export default _;
