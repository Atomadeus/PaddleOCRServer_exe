import*as ge from"../../../__snowpack__/env.js";import l,{useCallback as X,useEffect as n,useImperativeHandle as ue,useMemo as B,useRef as fe,useState as c}from"../../../__snowpack__/pkg/react.js";import{contentHeight as me,position as he,primaryColor as _e,rem as u,size as M,transitionProps as Y}from"../../utils/style.js";import $e from"../ChartToolbox.js";import ye from"../../../__snowpack__/pkg/react-spinners/HashLoader.js";import xe from"../../assets/images/netron.png.proxy.js";import ke from"../../../__snowpack__/link/packages/netron/dist/index.html.proxy.js";import $ from"../../../__snowpack__/pkg/styled-components.js";import{toast as ve}from"../../../__snowpack__/pkg/react-toastify.js";import{fetcher as f}from"../../utils/fetch.js";import be from"../../hooks/useTheme.js";import{useTranslation as we}from"../../../__snowpack__/pkg/react-i18next.js";const E=ge.SNOWPACK_PUBLIC_PATH;let Z=`${window.location.protocol}//${window.location.host}`;if(E.startsWith("http")){const s=new URL(E);Z=`${s.protocol}//${s.host}`}const D=u(40),Ce=$.div`
    position: relative;
    height: ${me};
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${Y("background-color")}
`,Ee=$.div`
    position: absolute;
    top: 0;
    left: 0;
    ${M("100%","100%")}
    opacity: ${s=>s.show?1:0};
    z-index: ${s=>s.show?0:-1};
    pointer-events: ${s=>s.show?"auto":"none"};
`,Le=$($e)`
    height: ${D};
    border-bottom: 1px solid var(--border-color);
    padding: 0 ${u(20)};
    ${Y("border-color")}
`,je=$.div`
    position: relative;
    height: calc(100% - ${D});

    > iframe {
        ${M("100%","100%")}
        border: none;
    }

    > .powered-by {
        display: block;
        ${he("absolute",null,null,u(20),u(30))}
        color: var(--graph-copyright-color);
        font-size: ${u(14)};
        user-select: none;

        img {
            height: 1em;
            filter: var(--graph-copyright-logo-filter);
            vertical-align: middle;
        }
    }
`,ze=$.div`
    ${M("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${u(16)};
    line-height: ${u(60)};
`,O=l.forwardRef(({uploader:s,showAttributes:G,runs:U,selectedRuns:d,isKeepData:N,showInitializers:R,showNames:q,horizontal:F,onRendered:y,onOpened:x,onSearch:k,onShowModelProperties:v,onShowNodeProperties:b,onShowNodeDocumentation:w},S)=>{const{t:C,i18n:ee}=we("graph"),K=ee.language,V=be(),[o,te]=c(!1),[J,re]=c(!1),[m,i]=c(!0),[P,p]=c(),[L,oe]=c(0),[j,ne]=c(0),[z,h]=c(),[A,se]=c(),[I,H]=c(),[T,ae]=c(),Q=fe(null),W=X(e=>{if(e.data){const{type:a,data:r}=e.data;switch(a){case"status":switch(r){case"ready":return te(!0);case"loading":return 1;case"rendered":i(!1),re(!0),y==null||y();return}return;case"opened":return x==null?void 0:x(r);case"search":return k==null?void 0:k(r);case"cancel":return i(!1);case"error":ve.error(r),i(!1);return;case"show-model-properties":return v==null?void 0:v(r);case"show-node-properties":return b==null?void 0:b(r);case"show-node-documentation":return w==null?void 0:w(r);case"nodeId":return H==null?void 0:H(r);case"selectItem":return p==null?void 0:p(r)}}},[y,x,k,v,b,w]),t=X((e,a)=>{var r,g;(g=(r=Q.current)==null?void 0:r.contentWindow)==null||g.postMessage({type:e,data:a},Z)},[]);n(()=>{le()},[]),n(()=>(window.addEventListener("message",W),t("ready"),()=>{window.removeEventListener("message",W)}),[W,t]),n(()=>{d&&(i(!0),ce())},[d]),n(()=>{L&&(i(!0),f(`/graph/graph?run=${d}&refresh=${!1}&expand_all=${!0}`).then(r=>{p(null),h(r)}))},[L]),n(()=>{j&&(i(!0),f(`/graph/graph?run=${d}&refresh=${!0}&expand_all=${!1}`).then(r=>{p(null),h(r)}))},[j]),n(()=>{o&&t("change-select",P)},[t,P,o]),n(()=>{!A||o&&t("change-allGraph",A)},[t,A,o]),n(()=>{!z||o&&t("change-graph",z)},[t,z,o]),n(()=>{if(!I)return;i(!0);const e=I;f(`/graph/manipulate?run=${d}&nodeid=${e.nodeId}&expand=${e.expand}&keep_state=${N}`).then(a=>{h(a)})},[I]),n(()=>{if(!T)return;i(!0);const e=T,a=e.type==="node";f(`/graph/search?run=${d}&nodeid=${e.name}&keep_state=${N}&is_node=${a}`).then(r=>{h(r)})},[T]),n(()=>o&&t("toggle-attributes",G)||void 0,[t,G,o]),n(()=>o&&t("toggle-initializers",R)||void 0,[t,R,o]),n(()=>o&&t("toggle-names",q)||void 0,[t,q,o]),n(()=>o&&t("toggle-direction",F)||void 0,[t,F,o]),n(()=>o&&t("toggle-theme",V)||void 0,[t,V,o]),n(()=>o&&t("toggle-Language",K)||void 0,[t,K,o]),ue(S,()=>({export(e){t("export",e)},changeGraph(e){t("change-graph",e)},search(e){t("search",e)},setSelectItems(e){p(e)},setLoadings(e){i(e)},select(e){var g;const r=(g=document.querySelector("iframe").contentWindow)==null?void 0:g.document;if(e.type==="node"){for(const _ of r.getElementsByClassName("cluster"))if(_.getAttribute("id")===`node-${e.name}`){t("select",e);return}for(const _ of r.getElementsByClassName("node"))if(_.getAttribute("id")===`node-${e.name}`){t("select",e);return}}else if(e.type==="input"){for(const _ of r.getElementsByClassName("edge-path"))if(_.getAttribute("id")===`edge-${e.name}`){t("select",e);return}}p(e),ae(e)},showModelProperties(){t("show-model-properties")},showNodeDocumentation(e){t("show-node-documentation",e)}}));const le=()=>{document.addEventListener("keydown",e=>{(e.code==="MetaLeft"||e.code==="MetaRight"||e.code==="ControlLeft"||e.code==="AltLeft"||e.code==="AltRight")&&t("isAlt",!0)}),document.addEventListener("keyup",e=>{(e.code==="MetaLeft"||e.code==="MetaRight"||e.code==="ControlLeft"||e.code==="AltLeft"||e.code==="AltRight")&&t("isAlt",!1)})},ce=async()=>{const r=await f(`/graph/graph?run=${d}&refresh=${!0}&expand_all=${!1}`),g=await f(`/graph/get_all_nodes?run=${d}`);p(null),r&&h(r),g&&se(g)},ie=B(()=>m?l.createElement(ze,null,l.createElement(ye,{size:"60px",color:_e})):null,[m]),de=B(()=>{if(!U&&!m)return s},[U,m,s]),pe=B(()=>l.createElement(je,null,l.createElement("iframe",{ref:Q,src:E+ke,frameBorder:0,scrolling:"yes",marginWidth:0,marginHeight:0}),l.createElement("a",{className:"powered-by",href:"https://github.com/lutzroeder/netron",target:"_blank",rel:"noreferrer"},"Powered by ",l.createElement("img",{src:E+xe,alt:"netron"}))),[J]);return l.createElement(Ce,null,ie,de,l.createElement(Ee,{show:!m&&J},l.createElement(Le,{items:[{icon:"zoom-in",tooltip:C("graph:zoom-in"),onClick:()=>t("zoom-in")},{icon:"zoom-out",tooltip:C("graph:zoom-out"),onClick:()=>t("zoom-out")},{icon:"restore-size",tooltip:C("expend-size"),onClick:()=>{const e=L+1;oe(e)}},{icon:"shrink",tooltip:C("restore-size"),onClick:()=>{const e=j+1;ne(e)}}],reversed:!0,tooltipPlacement:"bottom"}),pe))});O.displayName="Graph";export default O;
