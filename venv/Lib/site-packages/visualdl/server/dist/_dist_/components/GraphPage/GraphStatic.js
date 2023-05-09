import*as V from"../../../__snowpack__/env.js";import a,{useCallback as W,useEffect as n,useImperativeHandle as q,useMemo as J,useRef as P,useState as x}from"../../../__snowpack__/pkg/react.js";import{contentHeight as Q,position as X,primaryColor as Y,rem as i,size as h,transitionProps as A}from"../../utils/style.js";import Z from"../ChartToolbox.js";import M from"../../../__snowpack__/pkg/react-spinners/HashLoader.js";import O from"../../assets/images/netron.png.proxy.js";import D from"../../../__snowpack__/link/packages/netron/dist/index.html.proxy.js";import c from"../../../__snowpack__/pkg/styled-components.js";import{toast as N}from"../../../__snowpack__/pkg/react-toastify.js";import S from"../../hooks/useTheme.js";import{useTranslation as ee}from"../../../__snowpack__/pkg/react-i18next.js";const _=V.SNOWPACK_PUBLIC_PATH;let G=`${window.location.protocol}//${window.location.host}`;if(_.startsWith("http")){const o=new URL(_);G=`${o.protocol}//${o.host}`}const B=i(40),te=c.div`
    position: relative;
    height: ${Q};
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${A("background-color")}
`,re=c.div`
    position: absolute;
    top: 0;
    left: 0;
    ${h("100%","100%")}
    opacity: ${o=>o.show?1:0};
    z-index: ${o=>o.show?0:-1};
    pointer-events: ${o=>o.show?"auto":"none"};
`,oe=c(Z)`
    height: ${B};
    border-bottom: 1px solid var(--border-color);
    padding: 0 ${i(20)};
    ${A("border-color")}
`,se=c.div`
    position: relative;
    height: calc(100% - ${B});

    > iframe {
        ${h("100%","100%")}
        // ${h("50%","100%")}
        border: none;
    }

    > .powered-by {
        display: block;
        ${X("absolute",null,null,i(20),i(30))}
        color: var(--graph-copyright-color);
        font-size: ${i(14)};
        user-select: none;

        img {
            height: 1em;
            filter: var(--graph-copyright-logo-filter);
            vertical-align: middle;
        }
    }
`,ae=c.div`
    ${h("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${i(16)};
    line-height: ${i(60)};
`,I=a.forwardRef(({files:o,uploader:w,showAttributes:z,showInitializers:E,showNames:j,horizontal:C,onRendered:l,onOpened:m,onSearch:p,onShowModelProperties:g,onShowNodeProperties:u,onShowNodeDocumentation:d},R)=>{const{t:v}=ee("graph"),H=S(),[t,U]=x(!1),[k,f]=x(!1),[y,K]=x(!1),L=P(null),b=W(r=>{if(r.data){const{type:$,data:s}=r.data;switch($){case"status":switch(s){case"ready":return U(!0);case"loading":return f(!0);case"rendered":f(!1),K(!0),l==null||l();return}return;case"opened":return m==null?void 0:m(s);case"search":return p==null?void 0:p(s);case"cancel":return f(!1);case"error":N.error(s),f(!1);return;case"show-model-properties":return g==null?void 0:g(s);case"show-node-properties":return u==null?void 0:u(s);case"show-node-documentation":return d==null?void 0:d(s)}}},[l,m,p,g,u,d]),e=W((r,$)=>{var s,T;(T=(s=L.current)==null?void 0:s.contentWindow)==null||T.postMessage({type:r,data:$},G)},[]);n(()=>(window.addEventListener("message",b),e("ready"),()=>{window.removeEventListener("message",b)}),[b,e]),n(()=>{console.log("GraphStaticss",o,t),t&&e("change-files",o)},[e,o,t]),n(()=>t&&e("toggle-attributes",z)||void 0,[e,z,t]),n(()=>t&&e("toggle-initializers",E)||void 0,[e,E,t]),n(()=>t&&e("toggle-names",j)||void 0,[e,j,t]),n(()=>t&&e("toggle-direction",C)||void 0,[e,C,t]),n(()=>t&&e("toggle-theme",H)||void 0,[e,H,t]),q(R,()=>({export(r){e("export",r)},changeGraph(r){e("change-graph",r)},search(r){e("search",r)},select(r){e("select",r)},showModelProperties(){e("show-model-properties")},showNodeDocumentation(r){e("show-node-documentation",r)}}));const F=J(()=>!t||k?a.createElement(ae,null,a.createElement(M,{size:"60px",color:Y})):t&&!y?w:null,[t,k,y,w]);return a.createElement(te,null,F,a.createElement(re,{show:!k&&y},a.createElement(oe,{items:[{icon:"zoom-in",tooltip:v("graph:zoom-in"),onClick:()=>e("zoom-in")},{icon:"zoom-out",tooltip:v("graph:zoom-out"),onClick:()=>e("zoom-out")},{icon:"restore-size",tooltip:v("graph:restore-size"),onClick:()=>e("zoom-reset")}],reversed:!0,tooltipPlacement:"bottom"}),a.createElement(se,null,a.createElement("iframe",{ref:L,src:_+D,frameBorder:0,scrolling:"no",marginWidth:0,marginHeight:0}),a.createElement("a",{className:"powered-by",href:"https://github.com/lutzroeder/netron",target:"_blank",rel:"noreferrer"},"Powered by ",a.createElement("img",{src:_+O,alt:"netron"})))))});I.displayName="Graph";export default I;
