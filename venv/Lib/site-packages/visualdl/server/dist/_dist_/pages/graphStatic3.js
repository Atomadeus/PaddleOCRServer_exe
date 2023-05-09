import F,{AsideSection as c}from"../components/Aside.js";import je from"../components/GraphPage/GraphStatic3.js";import e,{useImperativeHandle as we,useCallback as s,useEffect as b,useMemo as M,useRef as le,useState as r}from"../../__snowpack__/pkg/react.js";import ke from"../components/Select.js";import{actions as Ce}from"../store/index.js";import{primaryColor as be,rem as i,size as _e}from"../utils/style.js";import{useDispatch as ve}from"../../__snowpack__/pkg/react-redux.js";import De from"../components/Onnx2PaddleUpload.js";import Ge from"../components/Paddle2OnnxUpload.js";import A from"../components/Button.js";import B from"../components/Checkbox.js";import ye from"../components/ContentXpaddle.js";import _ from"../components/Field.js";import Pe from"../../__snowpack__/pkg/react-spinners/HashLoader.js";import Re from"../components/GraphPage/ModelPropertiesDialog.js";import Ne from"../components/GraphPage/NodeDocumentationSidebar.js";import ze from"../components/GraphPage/NodePropertiesSidebar.js";import se from"../components/RadioButton.js";import Fe from"../components/RadioGroup.js";import Me from"../components/GraphPage/Search.js";import Ae from"../components/Title.js";import p from"../../__snowpack__/pkg/styled-components.js";import Be from"../hooks/useRequest.js";import{useTranslation as Oe}from"../../__snowpack__/pkg/react-i18next.js";const ae=p(A)`
    width: 100%;
`,$e=p(ke)`
    width: 100%;
`,He=p.div`
    display: flex;
    justify-content: space-between;

    > * {
        flex: 1 1 auto;

        &:not(:last-child) {
            margin-right: ${i(20)};
        }
    }
`,Ie=p(c)`
    max-height: calc(100% - ${i(40)});
    display: flex;
    flex-direction: column;

    &:not(:last-child) {
        padding-bottom: 0;
    }
`,Ue=p.div`
    ${_e("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${i(16)};
    line-height: ${i(60)};
`,Te=e.forwardRef(({changeName:O,changeshowdata:$,Xpaddlae:We,show:d=!0,changeFlags:u,changeLoading:h,changeFiles2:H,downloadEvent:I,ModelValue:v},ce)=>{const{t:o}=Oe(["graph","common"]),U=ve(),l=le(null),f=le(null),[m,g]=r(),T=s(t=>{U(Ce.graph.setModel(t));const n=t[0].name.substring(t[0].name.lastIndexOf(".")+1);O&&O(n),g(t),u(!0),$&&$()},[U]),W=t=>{oe(!1),g(t)},X=s(()=>{f.current&&(f.current.value="",f.current.click())},[]),ie=s(t=>{const n=t.target;n&&n.files&&n.files.length&&T(n.files)},[T]),{loading:D}=Be(m?null:"/graph/graph"),[G,me]=r([]),[q,J]=r(""),pe=s(t=>{me(t.graphs),J(t.selected||"")},[]),K=s(t=>{var n;J(t),(n=l.current)==null||n.changeGraph(t)},[]),[L,y]=r(""),[E,Q]=r(!1),[Y,Z]=r({text:"",result:[]}),V=s(t=>{var n;y(t),(n=l.current)==null||n.search(t)},[]),ee=s(t=>{var n;y(t.name),(n=l.current)==null||n.select(t)},[]),[S,de]=r(!1),[x,ue]=r(!0),[j,he]=r(!1),[P,fe]=r(!1),[ge,te]=r(null),[a,R]=r(null),[w,N]=r(null),[k,z]=r(!0),[C,oe]=r(!1);b(()=>{y(""),Z({text:"",result:[]})},[m,S,x,j]),b(()=>{d?(z(!0),R(null)):z(!1)},[d]),b(()=>{g(void 0)},[v]),b(()=>{C&&(u(!0),h&&h(!1))},[C]);const Ee=M(()=>E?null:e.createElement(ae,{type:"primary",rounded:!0,onClick:X},o("graph:change-model")),[o,X,E]);we(ce,()=>({files:m,setnewfiles:()=>{g(void 0)},setNodeDocumentations:()=>{z(!1)}}));const ne=M(()=>!C||D?null:w?e.createElement(F,{width:i(360)},e.createElement(Ne,{data:w,onClose:()=>{u(!0),N(null)}})):(console.log("nodeData && renderedflag3",a,k),a&&k?e.createElement(F,{width:i(360)},e.createElement(ze,{data:a,onClose:()=>{u(!0),R(null)},showNodeDocumentation:()=>{var t;return(t=l.current)==null?void 0:t.showNodeDocumentation(a)}})):e.createElement(F,null,e.createElement(Ie,null,e.createElement(Me,{text:L,data:Y,onChange:V,onSelect:ee,onActive:()=>Q(!0),onDeactive:()=>Q(!1)})),!E&&e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement(ae,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.showModelProperties()}},o("graph:model-properties"))),G.length>1&&e.createElement(c,null,e.createElement(_,{label:o("graph:subgraph")},e.createElement($e,{list:G,value:q,onChange:K}))),e.createElement(c,null,e.createElement(_,{label:o("graph:display-data")},e.createElement("div",null,e.createElement(B,{checked:S,onChange:de},o("graph:show-attributes"))),e.createElement("div",null,e.createElement(B,{checked:x,onChange:ue},o("graph:show-initializers"))),e.createElement("div",null,e.createElement(B,{checked:j,onChange:he},o("graph:show-node-names"))))),e.createElement(c,null,e.createElement(_,{label:o("graph:direction")},e.createElement(Fe,{value:P,onChange:fe},e.createElement(se,{value:!1},o("graph:vertical")),e.createElement(se,{value:!0},o("graph:horizontal"))))),e.createElement(c,null,e.createElement(_,{label:o("graph:export-file")},e.createElement(He,null,e.createElement(A,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.export("png")}},o("graph:export-png")),e.createElement(A,{onClick:()=>{var t;return(t=l.current)==null?void 0:t.export("svg")}},o("graph:export-svg")))))))),[o,Ee,L,E,Y,G,q,K,V,ee,S,x,j,P,C,D,a,w,k]),Se=M(()=>v===1?e.createElement(Ge,{changeLoading:h,downloadEvent:I,setFiles:W,changeFiles2:H}):e.createElement(De,{changeLoading:h,downloadEvent:I,setFiles:W,changeFiles2:H}),[v]),re=m&&d;console.log("flags",re,ne);const xe=!!(a&&k||w);return e.createElement(e.Fragment,null,e.createElement(Ae,null,o("common:graph")),e.createElement(Re,{data:ge,onClose:()=>te(null)}),e.createElement(ye,{show:d,nodeShow:xe,aside:re?ne:null},D?e.createElement(Ue,null,e.createElement(Pe,{size:"60px",color:be})):e.createElement(je,{ref:l,files:m,uploader:Se,showAttributes:S,showInitializers:x,showNames:j,horizontal:P,onRendered:t=>oe(t),onOpened:pe,onSearch:t=>{Z(t)},onShowModelProperties:t=>te(t),onShowNodeProperties:t=>{R(t),N(null)},onShowNodeDocumentation:t=>N(t)}),e.createElement("input",{ref:f,type:"file",multiple:!1,onChange:ie,style:{display:"none"}})))});export default Te;
