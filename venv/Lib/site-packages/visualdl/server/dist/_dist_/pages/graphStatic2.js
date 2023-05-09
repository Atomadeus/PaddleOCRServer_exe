import R,{AsideSection as s}from"../components/Aside.js";import fe from"../components/GraphPage/GraphStatic2.js";import e,{useImperativeHandle as Ee,useCallback as a,useEffect as N,useMemo as P,useRef as K,useState as o}from"../../__snowpack__/pkg/react.js";import Se from"../components/Select.js";import{actions as je}from"../store/index.js";import{primaryColor as ke,rem as c,size as Ce}from"../utils/style.js";import{useDispatch as we}from"../../__snowpack__/pkg/react-redux.js";import F from"../components/Button.js";import M from"../components/Checkbox.js";import xe from"../components/ContentXpaddle.js";import C from"../components/Field.js";import _e from"../../__snowpack__/pkg/react-spinners/HashLoader.js";import be from"../components/GraphPage/ModelPropertiesDialog.js";import De from"../components/GraphPage/NodeDocumentationSidebar.js";import ve from"../components/GraphPage/NodePropertiesSidebar.js";import Q from"../components/RadioButton.js";import Ge from"../components/RadioGroup.js";import ye from"../components/GraphPage/Search.js";import Re from"../components/Title.js";import Ne from"../components/GraphPage/Uploader.js";import m from"../../__snowpack__/pkg/styled-components.js";import Pe from"../hooks/useRequest.js";import{useTranslation as Fe}from"../../__snowpack__/pkg/react-i18next.js";const V=m(F)`
    width: 100%;
`,Me=m(Se)`
    width: 100%;
`,ze=m.div`
    display: flex;
    justify-content: space-between;

    > * {
        flex: 1 1 auto;

        &:not(:last-child) {
            margin-right: ${c(20)};
        }
    }
`,Ae=m(s)`
    max-height: calc(100% - ${c(40)});
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        padding-bottom: 0;
    }
`,Be=m.div`
    ${Ce("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${c(16)};
    line-height: ${c(60)};
`,$e=e.forwardRef(({changeRendered:z,show:p=!0},Y)=>{const{t:n}=Fe(["graph","common"]),A=we(),l=K(null),d=K(null),[u,Z]=o(),[w,ee]=o([]),[B,$]=o(""),{loading:x}=Pe(u?null:"/graph/graph"),i=a(t=>{A(je.graph.setModel(t)),Z(t)},[A]),h=a(()=>{d.current&&(d.current.value="",d.current.click())},[]),te=a(t=>{const r=t.target;r&&r.files&&r.files.length&&i(r.files)},[i]),oe=a(t=>{ee(t.graphs),$(t.selected||"")},[]),H=a(t=>{var r;$(t),(r=l.current)==null||r.changeGraph(t)},[]),[I,_]=o(""),[g,L]=o(!1),[T,U]=o({text:"",result:[]}),W=a(t=>{var r;_(t),(r=l.current)==null||r.search(t)},[]),q=a(t=>{var r;_(t.name),(r=l.current)==null||r.select(t)},[]),[f,ne]=o(!1),[E,re]=o(!0),[S,le]=o(!1),[b,ae]=o(!1),[se,O]=o(null),[j,D]=o(null),[v,k]=o(null),[G,ce]=o(!1),[X,ie]=o(0),[me,pe]=o(0),[J,y]=o(!0);N(()=>{_(""),U({text:"",result:[]})},[u,f,E,S]),N(()=>{X>1&&me===0&&(z&&z(),pe(1),k(null))},[X]),N(()=>{p?(y(!0),D(null)):y(!1)},[p]);const de=P(()=>g?null:e.createElement(V,{type:"primary",rounded:!0,onClick:h},n("graph:change-model")),[n,h,g]);Ee(Y,()=>({setModelFiles:t=>{i(t)},setNodeDocumentations:()=>{y(!1)},rendered:G}));const ue=P(()=>!G||x?null:v?e.createElement(R,{width:c(360)},e.createElement(De,{data:v,onClose:()=>k(null)})):j&&J?e.createElement(R,{width:c(360)},e.createElement(ve,{data:j,onClose:()=>D(null),showNodeDocumentation:()=>{var t;return(t=l.current)==null?void 0:t.showNodeDocumentation(j)}})):e.createElement(R,null,e.createElement(Ae,null,e.createElement(ye,{text:I,data:T,onChange:W,onSelect:q,onActive:()=>L(!0),onDeactive:()=>L(!1)})),!g&&e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement(V,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.showModelProperties()}},n("graph:model-properties"))),w.length>1&&e.createElement(s,null,e.createElement(C,{label:n("graph:subgraph")},e.createElement(Me,{list:w,value:B,onChange:H}))),e.createElement(s,null,e.createElement(C,{label:n("graph:display-data")},e.createElement("div",null,e.createElement(M,{checked:f,onChange:ne},n("graph:show-attributes"))),e.createElement("div",null,e.createElement(M,{checked:E,onChange:re},n("graph:show-initializers"))),e.createElement("div",null,e.createElement(M,{checked:S,onChange:le},n("graph:show-node-names"))))),e.createElement(s,null,e.createElement(C,{label:n("graph:direction")},e.createElement(Ge,{value:b,onChange:ae},e.createElement(Q,{value:!1},n("graph:vertical")),e.createElement(Q,{value:!0},n("graph:horizontal"))))),e.createElement(s,null,e.createElement(C,{label:n("graph:export-file")},e.createElement(ze,null,e.createElement(F,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.export("png")}},n("graph:export-png")),e.createElement(F,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.export("svg")}},n("graph:export-svg"))))))),[n,de,I,g,T,w,B,H,W,q,f,E,S,b,G,x,j,v,J]),he=P(()=>e.createElement(Ne,{onClickUpload:h,onDropFiles:i}),[h,i]),ge=u&&p;return e.createElement(e.Fragment,null,e.createElement(Re,null,n("common:graph")),e.createElement(be,{data:se,onClose:()=>O(null)}),e.createElement(xe,{show:p,aside:ge?ue:null},x?e.createElement(Be,null,e.createElement(_e,{size:"60px",color:ke})):e.createElement(fe,{ref:l,files:u,uploader:he,showAttributes:f,showInitializers:E,showNames:S,horizontal:b,onRendered:()=>{ce(!0),ie(t=>t+1)},onOpened:oe,onSearch:t=>{U(t)},onShowModelProperties:t=>O(t),onShowNodeProperties:t=>{D(t),k(null)},onShowNodeDocumentation:t=>k(t)}),e.createElement("input",{ref:d,type:"file",multiple:!1,onChange:te,style:{display:"none"}})))});export default $e;
