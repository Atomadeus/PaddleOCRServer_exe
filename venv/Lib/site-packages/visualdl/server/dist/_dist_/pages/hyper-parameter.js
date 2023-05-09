import C,{AsideSection as F}from"../components/Aside.js";import e,{useCallback as T,useMemo as o,useState as y}from"../../__snowpack__/pkg/react.js";import{asideWidth as H,rem as I}from"../utils/style.js";import{filter as S,format as q,formatIndicators as j}from"../resource/hyper-parameter/index.js";import B from"../components/BodyLoading.js";import E from"../components/Button.js";import L from"../components/Content.js";import A from"../components/HyperParameterPage/Empty.js";import M from"../components/Field.js";import R from"../components/HyperParameterPage/IndicatorFilter/IndicatorFilter.js";import W from"../components/HyperParameterPage/ParallelCoordinatesView/index.js";import $ from"../components/HyperParameterPage/ScatterPlotMatrixView/index.js";import U from"../components/Tab.js";import z from"../components/HyperParameterPage/TableView/index.js";import D from"../components/Title.js";import G from"../../__snowpack__/pkg/query-string.js";import J from"../utils/saveFile.js";import u from"../../__snowpack__/pkg/styled-components.js";import P from"../hooks/useRequest.js";import{useTranslation as K}from"../../__snowpack__/pkg/react-i18next.js";H;const N=u.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > * {
        flex-grow: 1;

        &:not(:last-child) {
            margin-right: ${I(16)};
        }
    }
`,O=u.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
`,Q=u.div`
    width: 100%;
    flex-grow: 1;
    position: relative;
`,X=()=>{const{t:a}=K(["hyper-parameter","common"]),{data:t,loading:f}=P("/hparams/indicators"),_=o(()=>{if(t){const{hparams:r,metrics:c}=t;return r.length===0||c.length===0}return!0},[t]),n=o(()=>{var r,c;return[...j((r=t==null?void 0:t.hparams)!=null?r:[],"hparams"),...j((c=t==null?void 0:t.metrics)!=null?c:[],"metrics")]},[t]),{data:s,loading:g}=P("/hparams/list"),[i,x]=y(n),l=o(()=>S(s!=null?s:[],i),[i,s]),w=o(()=>q(l,n),[l,n]),b=o(()=>f||g,[f,g]),h=o(()=>["table","parallel-coordinates","scatter-plot-matrix"].map(r=>({value:r,label:a(`hyper-parameter:views.${r}`)})),[a]),[p,v]=y(h[0].value),m=o(()=>({indicators:i,list:w,data:l}),[i,l,w]),k=o(()=>{switch(p){case"table":return e.createElement(z,{...m});case"parallel-coordinates":return e.createElement(W,{...m});case"scatter-plot-matrix":return e.createElement($,{...m});default:return null}},[p,m]),d=T(r=>J(G.stringifyUrl({url:"/hparams/data",query:{type:r}}),`visualdl-hyper-parameters.${r}`),[]),V=o(()=>e.createElement(C,{bottom:e.createElement(e.Fragment,null,e.createElement(F,null,e.createElement(M,{label:a("common:download-data")},e.createElement(N,null,e.createElement(E,{rounded:!0,outline:!0,onClick:()=>d("csv")},a("common:download-data-format",{format:"CSV"})),e.createElement(E,{rounded:!0,outline:!0,onClick:()=>d("tsv")},a("common:download-data-format",{format:"TSV"}))))))},e.createElement(R,{indicators:n,onChange:x})),[d,n,a]);return e.createElement(e.Fragment,null,e.createElement(D,null,a("common:hyper-parameter")),e.createElement(L,{aside:V},b?e.createElement(B,null):null,e.createElement(O,null,e.createElement(U,{list:h,value:p,onChange:v}),e.createElement(Q,null,_?e.createElement(A,null):k))))};export default X;
