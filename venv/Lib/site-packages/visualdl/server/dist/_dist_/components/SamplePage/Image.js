import e,{useCallback as h}from"../../../__snowpack__/pkg/react.js";import d from"./SampleChart.js";import{rem as s,size as f,transitionProps as w}from"../../utils/style.js";import o from"../Chart.js";import C from"../Image.js";import j from"./ImagePreviewer.js";import{SampleChart as c}from"../Loader/ChartPage.js";import E from"../../../__snowpack__/pkg/styled-components.js";const _=E(C)`
    ${f("100%")}
    filter: brightness(${t=>{var r;return(r=t.brightness)!=null?r:1}}) contrast(${t=>{var r;return(r=t.contrast)!=null?r:1}});
    ${w("filter")}
    object-fit: ${t=>t.fit?"contain":"scale-down"};
    flex-shrink: 1;
`,I=5*60*1e3,a={width:430,height:406},i={width:s(a.width),height:s(a.height)},S=({brightness:t,contrast:r,fit:n,...l})=>{const p=h(m=>e.createElement(_,{...m,brightness:t,contrast:r,fit:n}),[t,r,n]),g=h(m=>e.createElement(j,{...m}),[]);return e.createElement(o,{...i},e.createElement(d,{type:"image",cache:I,renderContent:p,renderPreviewer:g,...l}))};export default S;export const Loader=()=>e.createElement(e.Fragment,null,e.createElement(o,{...i},e.createElement(c,{width:a.width-2,height:a.height-2})),e.createElement(o,{...i},e.createElement(c,{width:a.width-2,height:a.height-2})));
