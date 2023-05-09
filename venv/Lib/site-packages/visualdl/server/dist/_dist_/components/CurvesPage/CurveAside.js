import s,{useCallback as C,useEffect as m,useMemo as M,useState as u}from"../../../__snowpack__/pkg/react.js";import{rem as x,transitionProps as L}from"../../utils/style.js";import{AsideSection as p}from"../Aside.js";import P from"../Field.js";import W from"../RunAside.js";import z from"./StepSlider.js";import B from"../Loader/curves/StepSlider.js";import D from"../TimeModeSelect.js";import{TimeType as G}from"../../resource/curves/index.js";import{cycleFetcher as H}from"../../utils/fetch.js";import J from"../../../__snowpack__/pkg/query-string.js";import K from"../../../__snowpack__/pkg/styled-components.js";import{useRunningRequest as N}from"../../hooks/useRequest.js";import O from"../../hooks/useTagFilter.js";import{useTranslation as Q}from"../../../__snowpack__/pkg/react-i18next.js";const U=K.div`
    max-height: 30vh;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    flex-shrink: 0;

    > ${p}:last-child {
        padding-bottom: ${x(20)};
        margin-bottom: 0;
    }

    + .run-section {
        border-top: 1px solid var(--border-color);
        margin-top: 0;
        padding-top: ${x(20)};
        ${L("border-color")}
    }

    &:empty + .run-section {
        border-top: none;
    }
`,V=({type:d,onChangeLoading:g,onChangeSteps:f,onToggleRunning:b})=>{const{t:E}=Q("curves"),[l,R]=u(!0),{runs:w,tags:v,runsInTags:n,selectedRuns:$,onChangeRuns:A,loading:i}=O(`${d}-curve`,l),{data:r}=N(n.map(e=>`/${d}-curve/steps?${J.stringify({run:e.label})}`),!!l,(...e)=>H(e)),[_,j]=u({}),F=C((e,t)=>j(o=>({...o,[e]:t})),[]);m(()=>j(e=>n.reduce((t,o)=>(e[o.label]!=null&&(t[o.label]=e[o.label]),t),{})),[n]);const c=M(()=>n.map((e,t)=>{var o,S,h,k,T;return{...e,index:(S=_[e.label])!=null?S:((o=r==null?void 0:r[t].length)!=null?o:1)-1,steps:(h=r==null?void 0:r[t].map(a=>a[1]))!=null?h:[],wallTimes:(k=r==null?void 0:r[t].map(a=>Math.floor(a[0])))!=null?k:[],relatives:(T=r==null?void 0:r[t].map(a=>a[0]-r[t][0][0]))!=null?T:[]}}),[n,r,_]),[y,q]=u(G.Step);return m(()=>{f(v.map(e=>({...e,runs:e.runs.map(t=>({...t,index:0,steps:[],wallTimes:[],relatives:[],...c.find(o=>o.label===t.label)}))})))},[v,c,f]),m(()=>{g(i)},[i,g]),m(()=>{b(l)},[b,l]),s.createElement(W,{runs:w,selectedRuns:$,onChangeRuns:A,running:l,onToggleRunning:R,loading:i},s.createElement(p,null,s.createElement(P,{label:E("curves:time-display-type")},s.createElement(D,{value:y,onChange:q}))),s.createElement(U,null,i?s.createElement(p,null,s.createElement(B,null)):c.map(e=>s.createElement(p,{key:e.label},s.createElement(z,{run:e,type:y,onChange:t=>F(e.label,t)})))))};export default V;
