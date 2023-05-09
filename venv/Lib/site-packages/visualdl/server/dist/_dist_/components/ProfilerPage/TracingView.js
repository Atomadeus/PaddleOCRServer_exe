import*as y from"../../../__snowpack__/env.js";import t,{useRef as h,useEffect as v}from"../../../__snowpack__/pkg/react.js";import{fetcher as E}from"../../utils/fetch.js";import{position as f,rem as o,size as p,primaryColor as C}from"../../utils/style.js";import $ from"../../../__snowpack__/pkg/styled-components.js";import b from"../../../__snowpack__/pkg/react-spinners/GridLoader.js";import j from"../../../__snowpack__/pkg/@material-ui/core/ClickAwayListener.js";const A=y.SNOWPACK_PUBLIC_PATH,L=o(40),P=$.div`
    position: relative;
    height: calc(100% - ${L});
    > .loading {
        ${p("100%")}
        ${f("absolute",0,null,null,0)}
        display: flex;
        justify-content: center;
        align-items: center;
    }
    > iframe {
        ${p("100%","100%")}
        border: none;
    }

    > .powered-by {
        display: block;
        ${f("absolute",null,null,o(20),o(30))}
        color: var(--graph-copyright-color);
        font-size: ${o(14)};
        user-select: none;

        img {
            height: 1em;
            filter: var(--graph-copyright-logo-filter);
            vertical-align: middle;
        }
    }
`,S=d=>{const{runs:n,workers:s,spans:i,views:_}=d,r=h(null),[c,u]=t.useState(null),[l,g]=t.useState(!1);v(()=>{n&&s&&i&&E(`/profiler/trace?run=${n}&worker=${s}&span=${i}`).then(e=>{u(e)})},[n,s,i,_]),t.useEffect(()=>{function e(a){(a.data||{}).msg==="ready"&&g(!0)}return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),t.useEffect(()=>{var e,a,m;if(c&&l){const k=JSON.stringify(c);(a=(e=r.current)==null?void 0:e.contentWindow)==null||a.postMessage({msg:"data",data:k},"*"),(m=r.current)==null||m.focus()}},[c,l]);const w=()=>{var e;(e=r.current)==null||e.focus()};return t.createElement(P,null,!l&&t.createElement("div",{className:"loading"},t.createElement(b,{color:C,size:"10px"})),t.createElement(j,{onClickAway:w},t.createElement("iframe",{ref:r,src:A+"/__snowpack__/link/packages/trace/dist/trace_embedding.html",frameBorder:0,scrolling:"no",marginWidth:0,marginHeight:0})))};export default S;
