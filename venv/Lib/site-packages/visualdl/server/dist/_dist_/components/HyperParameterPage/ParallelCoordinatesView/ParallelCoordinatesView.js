import e,{useState as f}from"../../../../__snowpack__/pkg/react.js";import{useGraph as h,useIndicatorOrder as u}from"../../../resource/hyper-parameter/index.js";import C from"../ColorMap.js";import _ from"./ParallelCoordinatesGraph/index.js";import j from"../SessionTable.js";import w from"../View.js";import{rem as E}from"../../../utils/style.js";import g from"../../../../__snowpack__/pkg/styled-components.js";const y=g.div`
    width: 100%;
    display: flex;
    font-size: ${E(12)};
    align-items: stretch;
    justify-content: space-between;

    > .graph {
        flex: auto;
    }

    > .color-map {
        flex: none;
    }
`,x="hyper-parameter-parallel-coordinates-view-column-order",O=({indicators:r,list:o,data:t})=>{const{selectedIndicators:a,sessionData:s,onHover:l,onSelect:n,showMetricsGraph:m}=h(r,o),[c,p]=f([]),[i,d]=u(x,r);return e.createElement(e.Fragment,null,e.createElement(w,null,e.createElement(y,null,e.createElement(_,{className:"graph",indicators:a,list:o,data:t,colors:c,order:i,onHover:l,onSelect:n,onChangeOrder:d}),e.createElement(C,{className:"color-map",indicators:r,data:t,onChange:p}))),e.createElement(j,{indicators:r,data:s,showMetricsGraph:m}))};export default O;
