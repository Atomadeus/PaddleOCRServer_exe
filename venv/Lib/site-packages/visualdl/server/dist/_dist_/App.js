import*as h from"../__snowpack__/env.js";import e,{Suspense as E,useCallback as k,useEffect as o,useMemo as j}from"../__snowpack__/pkg/react.js";import{Redirect as w,Route as m,BrowserRouter as v,Switch as x,useLocation as y}from"../__snowpack__/pkg/react-router-dom.js";import{THEME as T,matchMedia as i}from"./utils/theme.js";import{actions as b,selectors as C}from"./store/index.js";import{headerHeight as p,position as R,size as S,zIndexes as B}from"./utils/style.js";import{useDispatch as N,useSelector as P}from"../__snowpack__/pkg/react-redux.js";import L from"./components/ErrorBoundary.js";import _ from"./pages/error.js";import{Helmet as A}from"../__snowpack__/pkg/react-helmet.js";import u from"../__snowpack__/pkg/nprogress.js";import O from"./components/Navbar.js";import{SWRConfig as H}from"../__snowpack__/pkg/swr.js";import{ToastContainer as I}from"../__snowpack__/pkg/react-toastify.js";import{fetcher as M}from"./utils/fetch.js";import $ from"./routes/index.js";import d from"../__snowpack__/pkg/styled-components.js";import{useTranslation as z}from"../__snowpack__/pkg/react-i18next.js";const f=h.SNOWPACK_PUBLIC_BASE_URI,D=d.main`
    padding-top: ${p};
    .ant-select-selector {
        .ant-select-selection-item {
            .select_icon {
                display: none;
            }
        }
    }
`,U=d.header`
    z-index: ${B.header};

    ${S(p,"100%")}
    ${R("fixed",0,0,null,0)}
`,V=$.reduce((r,t)=>(t.children?r.push(...t.children):r.push(t),r),[]),W=()=>(o(()=>(u.start(),()=>{u.done()}),[]),null),K=()=>{const r=y();return o(()=>{window._hmt.push(["_trackPageview",f+r.pathname])},[r.pathname]),null},s="",F=()=>{const{t:r,i18n:t}=z("errors"),g=j(()=>t.language?t.dir(t.language):"",[t]),l=N(),c=P(C.theme.selected),n=k(a=>{c==="auto"&&l(b.theme.setTheme(a.matches?"dark":"light"))},[l,c]);return o(()=>{if(!T)return i.addEventListener("change",n),()=>{i.removeEventListener("change",n)}},[n]),e.createElement("div",{className:"app"},e.createElement(A,{defaultTitle:"VisualDL",titleTemplate:"%s - VisualDL"},e.createElement("html",{lang:t.language,dir:g})),e.createElement(H,{value:{fetcher:M,revalidateOnFocus:!1,revalidateOnReconnect:!1}},e.createElement(D,null,e.createElement(v,{basename:f||"/"},e.createElement(K,null),e.createElement(U,null,e.createElement(O,null)),e.createElement(L,{fallback:e.createElement(_,null)},e.createElement(E,{fallback:e.createElement(W,null)},e.createElement(x,null,e.createElement(w,{exact:!0,from:"/",to:s!=null?s:"/index"}),V.map(a=>e.createElement(m,{key:a.id,path:a.path,component:a.component})),e.createElement(m,{path:"*"},e.createElement(_,{title:r("errors:page-not-found")}))))))),e.createElement(I,{autoClose:1e5,style:{wordBreak:"break-all"},draggable:!1,closeOnClick:!1})))};export default F;
