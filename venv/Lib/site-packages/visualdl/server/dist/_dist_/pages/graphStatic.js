import R,{AsideSection as c}from"../components/Aside.js";import he from"../components/GraphPage/GraphStatic.js";import e,{useImperativeHandle as ge,useCallback as a,useEffect as P,useMemo as F,useRef as Y,useState as r}from"../../__snowpack__/pkg/react.js";import fe from"../components/Select.js";import{actions as Ee}from"../store/index.js";import{primaryColor as Se,rem as i,size as we}from"../utils/style.js";import{useDispatch as je}from"../../__snowpack__/pkg/react-redux.js";import N from"../components/Button.js";import z from"../components/Checkbox.js";import ke from"../components/Content.js";import j from"../components/Field.js";import xe from"../../__snowpack__/pkg/react-spinners/HashLoader.js";import Ce from"../components/GraphPage/ModelPropertiesDialog.js";import _e from"../components/GraphPage/NodeDocumentationSidebar.js";import be from"../components/GraphPage/NodePropertiesSidebar.js";import Z from"../components/RadioButton.js";import De from"../components/RadioGroup.js";import ve from"../components/GraphPage/Search.js";import Ge from"../components/Title.js";import ye from"../components/GraphPage/Uploader.js";import p from"../../__snowpack__/pkg/styled-components.js";import Re from"../hooks/useRequest.js";import{useTranslation as Pe}from"../../__snowpack__/pkg/react-i18next.js";const ee=p(N)`
    width: 100%;
`,Fe=p(fe)`
    width: 100%;
`,Ne=p.div`
    display: flex;
    justify-content: space-between;

    > * {
        flex: 1 1 auto;

        &:not(:last-child) {
            margin-right: ${i(20)};
        }
    }
`,ze=p(c)`
    max-height: calc(100% - ${i(40)});
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        padding-bottom: 0;
    }
`,Me=p.div`
    ${we("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${i(16)};
    line-height: ${i(60)};
`,Ae=e.forwardRef(({changeName:M,changeshowdata:A,Xpaddlae:te,show:B=!0},oe)=>{const{t:o}=Pe(["graph","common"]),$=je(),l=Y(null),d=Y(null),[u,H]=r(),h=a(t=>{$(Ee.graph.setModel(t));const n=t[0].name.substring(t[0].name.lastIndexOf(".")+1);M&&M(n),H(t),A&&A()},[$]),g=a(()=>{d.current&&(d.current.value="",d.current.click())},[]),ne=a(t=>{const n=t.target;n&&n.files&&n.files.length&&h(n.files)},[h]),{data:s,loading:k}=Re(u?null:"/graph/static_graph");P(()=>{var t;((t=s==null?void 0:s.data)==null?void 0:t.size)&&H([new File([s.data],s.filename||"unknown_model")])},[s]);const[x,re]=r([]),[I,L]=r(""),le=a(t=>{re(t.graphs),L(t.selected||"")},[]),O=a(t=>{var n;L(t),(n=l.current)==null||n.changeGraph(t)},[]),[T,C]=r(""),[f,U]=r(!1),[W,q]=r({text:"",result:[]}),J=a(t=>{var n;C(t),(n=l.current)==null||n.search(t)},[]),K=a(t=>{var n;C(t.name),(n=l.current)==null||n.select(t)},[]),[E,ae]=r(!1),[S,se]=r(!0),[w,ce]=r(!1),[_,ie]=r(!1),[me,Q]=r(null),[m,b]=r(null),[D,v]=r(null),[G,y]=r(!0);P(()=>{C(""),q({text:"",result:[]})},[u,E,S,w]),P(()=>{B?(y(!0),b(null)):y(!1)},[B]);const V=F(()=>f?null:e.createElement(ee,{type:"primary",rounded:!0,onClick:g},o("graph:change-model")),[o,g,f]),[X,pe]=r(!1);ge(oe,()=>({files:u,setNodeDocumentations:()=>{y(!1)}}));const de=F(()=>!X||k?null:D?e.createElement(R,{width:i(360)},e.createElement(_e,{data:D,onClose:()=>v(null)})):(console.log("nodeData && renderedflag3",m,G),m&&G?e.createElement(R,{width:i(360)},e.createElement(be,{data:m,onClose:()=>b(null),showNodeDocumentation:()=>{var t;return(t=l.current)==null?void 0:t.showNodeDocumentation(m)}})):e.createElement(R,{bottom:V},e.createElement(ze,null,e.createElement(ve,{text:T,data:W,onChange:J,onSelect:K,onActive:()=>U(!0),onDeactive:()=>U(!1)})),!f&&e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement(ee,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.showModelProperties()}},o("graph:model-properties"))),x.length>1&&e.createElement(c,null,e.createElement(j,{label:o("graph:subgraph")},e.createElement(Fe,{list:x,value:I,onChange:O}))),e.createElement(c,null,e.createElement(j,{label:o("graph:display-data")},e.createElement("div",null,e.createElement(z,{checked:E,onChange:ae},o("graph:show-attributes"))),e.createElement("div",null,e.createElement(z,{checked:S,onChange:se},o("graph:show-initializers"))),e.createElement("div",null,e.createElement(z,{checked:w,onChange:ce},o("graph:show-node-names"))))),e.createElement(c,null,e.createElement(j,{label:o("graph:direction")},e.createElement(De,{value:_,onChange:ie},e.createElement(Z,{value:!1},o("graph:vertical")),e.createElement(Z,{value:!0},o("graph:horizontal"))))),e.createElement(c,null,e.createElement(j,{label:o("graph:export-file")},e.createElement(Ne,null,e.createElement(N,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.export("png")}},o("graph:export-png")),e.createElement(N,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.export("svg")}},o("graph:export-svg")))))))),[o,V,T,f,W,x,I,O,J,K,E,S,w,_,X,k,m,D,G]),ue=F(()=>e.createElement(ye,{onClickUpload:g,onDropFiles:h,Xpaddlae:te}),[g,h]);return e.createElement(e.Fragment,null,e.createElement(Ge,null,o("common:graph")),e.createElement(Ce,{data:me,onClose:()=>Q(null)}),e.createElement(ke,{aside:de},k?e.createElement(Me,null,e.createElement(xe,{size:"60px",color:Se})):e.createElement(he,{ref:l,files:u,uploader:ue,showAttributes:E,showInitializers:S,showNames:w,horizontal:_,onRendered:()=>pe(!0),onOpened:le,onSearch:t=>{q(t)},onShowModelProperties:t=>Q(t),onShowNodeProperties:t=>{b(t),v(null)},onShowNodeDocumentation:t=>v(t)}),e.createElement("input",{ref:d,type:"file",multiple:!1,onChange:ne,style:{display:"none"}})))});export default Ae;
