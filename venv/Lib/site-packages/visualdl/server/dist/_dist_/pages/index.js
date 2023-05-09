import t,{useEffect as p,useMemo as h}from"../../__snowpack__/pkg/react.js";import{headerHeight as f,primaryColor as u,rem as c,size as _}from"../utils/style.js";import{useHistory as d,useLocation as g}from"../../__snowpack__/pkg/react-router-dom.js";import k from"../components/Error.js";import j from"../../__snowpack__/pkg/react-spinners/HashLoader.js";import a from"../../__snowpack__/pkg/styled-components.js";import E from"../hooks/useComponents.js";import{useTranslation as v}from"../../__snowpack__/pkg/react-i18next.js";const i=n=>{const o=[];return n.forEach(e=>{e.children?o.push(...i(e.children)):o.push(e)}),o},y=a.div`
    ${_(`calc(100vh - ${f})`,"100vw")}
    overscroll-behavior: none;
`,w=a.div`
    font-size: ${c(16)};
    height: 100%;
    line-height: ${c(60)};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`,x=()=>{const[n,o]=E(),e=d(),{t:l}=v("common"),s=g(),r=h(()=>i(n).filter(m=>m.inactive!==!0),[n]);return p(()=>{r.length&&e.replace(r[0].path+s.search)},[r,e,s.search]),t.createElement(y,null,o?t.createElement(w,null,t.createElement(j,{size:"60px",color:u}),t.createElement("span",null,l("common:loading"))):t.createElement(k,null))};export default x;
