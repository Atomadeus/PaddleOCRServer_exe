import*as q from"../../../__snowpack__/env.js";import a,{useCallback as W,useEffect as n,useImperativeHandle as J,useMemo as P,useRef as Q,useState as w}from"../../../__snowpack__/pkg/react.js";import{contentHeight as X,position as Y,primaryColor as Z,rem as i,size as h,transitionProps as A}from"../../utils/style.js";import M from"../ChartToolbox.js";import O from"../../../__snowpack__/pkg/react-spinners/HashLoader.js";import D from"../../assets/images/netron.png.proxy.js";import N from"../../../__snowpack__/link/packages/netron/dist/index.html.proxy.js";import c from"../../../__snowpack__/pkg/styled-components.js";import{toast as S}from"../../../__snowpack__/pkg/react-toastify.js";import ee from"../../hooks/useTheme.js";import{useTranslation as te}from"../../../__snowpack__/pkg/react-i18next.js";const _=q.SNOWPACK_PUBLIC_PATH;let G=`${window.location.protocol}//${window.location.host}`;if(_.startsWith("http")){const r=new URL(_);G=`${r.protocol}//${r.host}`}const B=i(40),re=c.div`
    position: relative;
    height: ${X};
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${A("background-color")}
`,oe=c.div`
    position: absolute;
    top: 0;
    left: 0;
    ${h("100%","100%")}
    opacity: ${r=>r.show?1:0};
    z-index: ${r=>r.show?0:-1};
    pointer-events: ${r=>r.show?"auto":"none"};
`,se=c(M)`
    height: ${B};
    border-bottom: 1px solid var(--border-color);
    padding: 0 ${i(20)};
    ${A("border-color")}
`,ae=c.div`
    position: relative;
    height: calc(100% - ${B});

    > iframe {
        ${h("100%","100%")}
        // ${h("50%","100%")}
        border: none;
    }

    > .powered-by {
        display: block;
        ${Y("absolute",null,null,i(20),i(30))}
        color: var(--graph-copyright-color);
        font-size: ${i(14)};
        user-select: none;

        img {
            height: 1em;
            filter: var(--graph-copyright-logo-filter);
            vertical-align: middle;
        }
    }
`,ne=c.div`
    ${h("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${i(16)};
    line-height: ${i(60)};
`,I=a.forwardRef(({files:r,uploader:v,showAttributes:z,showInitializers:E,showNames:j,horizontal:C,onRendered:l,onOpened:m,onSearch:p,onShowModelProperties:g,onShowNodeProperties:u,onShowNodeDocumentation:d},R)=>{const{t:k}=te("graph"),H=ee(),[t,U]=w(!1),[y,f]=w(!1),[b,K]=w(!1),L=Q(null),$=W(o=>{if(o.data){const{type:x,data:s}=o.data;switch(x){case"status":switch(s){case"ready":return U(!0);case"loading":return f(!0);case"rendered":f(!1),K(!0),l==null||l(!0);return}return;case"opened":return m==null?void 0:m(s);case"search":return p==null?void 0:p(s);case"cancel":return f(!1);case"error":S.error(s),f(!1);return;case"show-model-properties":return g==null?void 0:g(s);case"show-node-properties":return u==null?void 0:u(s);case"show-node-documentation":return d==null?void 0:d(s)}}},[l,m,p,g,u,d]),e=W((o,x)=>{var s,T;(T=(s=L.current)==null?void 0:s.contentWindow)==null||T.postMessage({type:o,data:x},G)},[]);n(()=>(window.addEventListener("message",$),e("ready"),()=>{window.removeEventListener("message",$)}),[$,e]),n(()=>{console.log("GraphStaticss",r,t),t&&e("change-files",r)},[e,r,t]),n(()=>t&&e("toggle-attributes",z)||void 0,[e,z,t]),n(()=>t&&e("toggle-initializers",E)||void 0,[e,E,t]),n(()=>t&&e("toggle-names",j)||void 0,[e,j,t]),n(()=>t&&e("toggle-direction",C)||void 0,[e,C,t]),n(()=>t&&e("toggle-theme",H)||void 0,[e,H,t]),J(R,()=>({export(o){e("export",o)},changeGraph(o){e("change-graph",o)},search(o){e("search",o)},select(o){e("select",o)},showModelProperties(){e("show-model-properties")},showNodeDocumentation(o){e("show-node-documentation",o)}}));const F=P(()=>!t||y?a.createElement(ne,null,a.createElement(O,{size:"60px",color:Z})):!r||t&&!b?v:null,[t,y,b,v,r]),V=!y&&b&&r;return a.createElement(re,null,F,a.createElement(oe,{show:!!V},a.createElement(se,{items:[{icon:"zoom-in",tooltip:k("graph:zoom-in"),onClick:()=>e("zoom-in")},{icon:"zoom-out",tooltip:k("graph:zoom-out"),onClick:()=>e("zoom-out")},{icon:"restore-size",tooltip:k("graph:restore-size"),onClick:()=>e("zoom-reset")}],reversed:!0,tooltipPlacement:"bottom"}),a.createElement(ae,null,a.createElement("iframe",{ref:L,src:_+N,frameBorder:0,scrolling:"no",marginWidth:0,marginHeight:0}),a.createElement("a",{className:"powered-by",href:"https://github.com/lutzroeder/netron",target:"_blank",rel:"noreferrer"},"Powered by ",a.createElement("img",{src:_+D,alt:"netron"})))))});I.displayName="Graph";export default I;
