import*as P from"../../../__snowpack__/env.js";import s,{useCallback as T,useEffect as a,useImperativeHandle as Q,useMemo as X,useRef as Y,useState as $}from"../../../__snowpack__/pkg/react.js";import{contentHeight as Z,position as M,primaryColor as W,rem as i,size as h,transitionProps as A}from"../../utils/style.js";import O from"../ChartToolbox.js";import G from"../../../__snowpack__/pkg/react-spinners/HashLoader.js";import D from"../../assets/images/netron.png.proxy.js";import N from"../../../__snowpack__/link/packages/netron2/dist/index.html.proxy.js";import S from"../../../__snowpack__/link/packages/netron/dist/index.html.proxy.js";import l from"../../../__snowpack__/pkg/styled-components.js";import{toast as ee}from"../../../__snowpack__/pkg/react-toastify.js";import te from"../../hooks/useTheme.js";import{useTranslation as re}from"../../../__snowpack__/pkg/react-i18next.js";console.log("netron2",N);const _=P.SNOWPACK_PUBLIC_PATH;let B=`${window.location.protocol}//${window.location.host}`;if(_.startsWith("http")){const o=new URL(_);B=`${o.protocol}//${o.host}`}const I=i(40),oe=l.div`
    position: relative;
    height: ${Z};
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${A("background-color")}
`,se=l.div`
    position: absolute;
    top: 0;
    left: 0;
    ${h("100%","100%")}
    opacity: ${o=>o.show?1:0};
    z-index: ${o=>o.show?0:-1};
    pointer-events: ${o=>o.show?"auto":"none"};
`,ne=l(O)`
    height: ${I};
    border-bottom: 1px solid var(--border-color);
    padding: 0 ${i(20)};
    ${A("border-color")}
`,ae=l.div`
    position: relative;
    height: calc(100% - ${I});

    > iframe {
        // ${h("50%","100%")}
        ${h("100%","100%")}
        border: none;
    }

    > .powered-by {
        display: block;
        ${M("absolute",null,null,i(20),i(30))}
        color: var(--graph-copyright-color);
        font-size: ${i(14)};
        user-select: none;

        img {
            height: 1em;
            filter: var(--graph-copyright-logo-filter);
            vertical-align: middle;
        }
    }
`,R=l.div`
    ${h("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${i(16)};
    line-height: ${i(60)};
`,U=s.forwardRef(({files:o,uploader:K,showAttributes:w,showInitializers:E,showNames:z,horizontal:j,onRendered:c,onOpened:m,onSearch:p,onShowModelProperties:g,onShowNodeProperties:u,onShowNodeDocumentation:d},F)=>{const{t:k}=re("graph"),C=te(),[t,V]=$(!1),[v,f]=$(!1),[y,q]=$(!1),H=Y(null),b=T(r=>{if(r.data){const{type:x,data:n}=r.data;switch(x){case"status":switch(n){case"ready":return V(!0);case"loading":return f(!0);case"rendered":f(!1),q(!0),console.log("\u51FD\u6570\u6267\u884C\u4E86"),c==null||c();return}return;case"opened":return m==null?void 0:m(n);case"search":return p==null?void 0:p(n);case"cancel":return f(!1);case"error":ee.error(n),f(!1);return;case"show-model-properties":return g==null?void 0:g(n);case"show-node-properties":return u==null?void 0:u(n);case"show-node-documentation":return d==null?void 0:d(n)}}},[c,m,p,g,u,d]),e=T((r,x)=>{var n,L;(L=(n=H.current)==null?void 0:n.contentWindow)==null||L.postMessage({type:r,data:x},B)},[]);a(()=>(window.addEventListener("message",b),e("ready"),()=>{window.removeEventListener("message",b)}),[b,e]),a(()=>{console.log("GraphStatic2",o,t),o&&t&&e("change-files",o)},[e,o,t]),a(()=>t&&e("toggle-attributes",w)||void 0,[e,w,t]),a(()=>t&&e("toggle-initializers",E)||void 0,[e,E,t]),a(()=>t&&e("toggle-names",z)||void 0,[e,z,t]),a(()=>t&&e("toggle-direction",j)||void 0,[e,j,t]),a(()=>t&&e("toggle-theme",C)||void 0,[e,C,t]),Q(F,()=>({export(r){e("export",r)},changeGraph(r){e("change-graph",r)},search(r){e("search",r)},select(r){e("select",r)},showModelProperties(){e("show-model-properties")},showNodeDocumentation(r){e("show-node-documentation",r)},show2(){e("show2")}}));const J=X(()=>!t||v?s.createElement(R,null,s.createElement(G,{size:"60px",color:W})):t&&!y?s.createElement(R,null,s.createElement(G,{size:"60px",color:W})):null,[t,v,y,K]);return s.createElement(oe,null,J,s.createElement(se,{show:!v&&y},s.createElement(ne,{items:[{icon:"zoom-in",tooltip:k("graph:zoom-in"),onClick:()=>e("zoom-in")},{icon:"zoom-out",tooltip:k("graph:zoom-out"),onClick:()=>e("zoom-out")},{icon:"restore-size",tooltip:k("graph:restore-size"),onClick:()=>e("zoom-reset")}],reversed:!0,tooltipPlacement:"bottom"}),s.createElement(ae,null,s.createElement("iframe",{ref:H,src:_+S,frameBorder:0,scrolling:"no",marginWidth:0,marginHeight:0}),s.createElement("a",{className:"powered-by",href:"https://github.com/lutzroeder/netron",target:"_blank",rel:"noreferrer"},"Powered by ",s.createElement("img",{src:_+D,alt:"netron"})))))});U.displayName="Graph";export default U;
