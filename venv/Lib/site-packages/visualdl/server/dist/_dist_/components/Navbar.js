import*as x from"../../__snowpack__/env.js";import{Link as J,useLocation as Q}from"../../__snowpack__/pkg/react-router-dom.js";import{useHistory as Z}from"../../__snowpack__/pkg/react-router-dom.js";import n,{useCallback as ee,useEffect as C,useMemo as h,useState as U}from"../../__snowpack__/pkg/react.js";import{border as te,borderRadius as ne,rem as l,size as O,transitionProps as $,triangle as oe}from"../utils/style.js";import R from"./Icon.js";import ae from"./Language.js";import re from"./ThemeToggle.js";import B from"../../__snowpack__/pkg/@tippyjs/react.js";import se from"../utils/event.js";import N from"../routes/index.js";import{getApiToken as ce}from"../utils/fetch.js";import ie from"../assets/images/logo.svg.proxy.js";import K from"../../__snowpack__/pkg/query-string.js";import y from"../../__snowpack__/pkg/styled-components.js";import le from"../hooks/useClassNames.js";import me from"../hooks/useComponents.js";import{useTranslation as de}from"../../__snowpack__/pkg/react-i18next.js";import{fetcher as pe}from"../utils/fetch.js";import{isArray as fe}from"../../__snowpack__/pkg/lodash.js";const M=x.SNOWPACK_PUBLIC_BASE_URI,ge=x.SNOWPACK_PUBLIC_PATH,W=x.SNOWPACK_PUBLIC_API_TOKEN_KEY,q=6,H=a=>{const s=[];return a.forEach(c=>{c.children?s.push(...H(c.children)):s.push(c)}),s};function V(a){if(!W)return a;const s=K.parseUrl(a);return K.stringifyUrl({...s,query:{...s.query,[W]:ce()}})}const ue=y.nav`
    background-color: var(--navbar-background-color);
    color: var(--navbar-text-color);
    ${O("100%")}
    padding: 0 ${l(20)};
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    ${$(["background-color","color"])}

    > .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    > .right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: -${l(20)};
    }
`,he=y.a`
    font-size: ${l(20)};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-weight: 600;
    margin-right: ${l(40)};

    > img {
        ${O(l(31),l(98))}
        vertical-align: middle;
        margin-right: ${l(8)};
    }

    > span {
        vertical-align: middle;
    }
`,k=y.div`
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: var(--navbar-background-color);
    cursor: pointer;
    ${$("background-color")}

    &:hover {
        background-color: var(--navbar-hover-background-color);
    }

    &.nav-item {
        padding: 0 ${l(20)};
    }

    .nav-link {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .nav-text {
        margin: ${l(20)};
        padding: ${l(10)} 0 ${l(7)};
        ${a=>te("bottom",l(3),"solid",a.active?"var(--navbar-highlight-color)":"transparent")}
        ${$("border-bottom")}
        text-transform: uppercase;

        &.dropdown-icon {
            &::after {
                content: '';
                display: inline-block;
                width: 0;
                height: 0;
                margin-left: 0.5rem;
                vertical-align: middle;
                ${oe({pointingDirection:"bottom",width:l(8),height:l(5),foregroundColor:"currentColor"})}
            }
        }
    }
`,z=y.div`
    overflow: hidden;
    border-radius: ${ne};
`,ve=y.div`
    display: block;
    line-height: 3em;

    &,
    &:visited {
        color: ${a=>a.active?"var(--primary-color)":"var(--text-color)"};
    }

    &:hover {
        background-color: var(--background-focused-color);
    }

    > a {
        display: block;
        padding: 0 ${l(20)};
    }
`,D=({to:a,children:s,...c})=>n.createElement(J,{to:a?V(a):"",...c},s),A=n.forwardRef(({path:a,active:s,showDropdownIcon:c,children:m},i)=>{const p=le("nav-text",{"dropdown-icon":c},[c]);return a?n.createElement(k,{active:s,ref:i},n.createElement(D,{to:a,className:"nav-link"},n.createElement("span",{className:p},m))):n.createElement(k,{active:s,ref:i},n.createElement("span",{className:p},m))});A.displayName="NavbarItem";const Y=({menu:a,active:s,path:c,showDropdownIcon:m,children:i})=>n.createElement(B,{placement:"bottom-start",animation:"shift-away-subtle",interactive:!0,arrow:!1,offset:[0,0],hideOnClick:!1,role:"menu",content:n.createElement(z,null,a.map(p=>n.createElement(ve,{active:p.active,key:p.id},n.createElement(D,{to:p.path},p.name))))},n.createElement(A,{active:s||!1,path:c,showDropdownIcon:m},i)),_e=()=>{const a=Z(),{t:s,i18n:c}=de("common"),{pathname:m}=Q(),[i,p]=U([]),F=ee(()=>{const e=c.language,t=(c.options.supportedLngs||[]).filter(d=>d!=="cimode"),o=t.indexOf(e),r=o<0||o>=t.length-1?t[0]:t[o+1];c.changeLanguage(r)},[c]),b=h(()=>({scalar:"scalar",histogram:"histogram",image:"image",audio:"audio",text:"text",fastdeploy_server:"fastdeploy_server",static_graph:"static_graph",dynamic_graph:"dynamic_graph","high-dimensional":"embeddings","pr-curve":"pr_curve","roc-curve":"roc_curve",profiler:"profiler","hyper-parameter":"hyper_parameters",x2paddle:"x2paddle",fastdeploy_client:"fastdeploy_client"}),[]);console.log("pathname",m);const g=h(()=>m.replace(M,""),[m]),[L]=me(),P=(e,t)=>{const o=fe(t)?[...t]:[...t.values()];if(console.log("routeEm[route.id]",i,i.includes(b[e.id])),i.includes(b[e.id]))return!0;if(e.children)for(const r of e.children)P(r,o)},E=h(()=>{const e=new Map,t=[];if(i.length>0){for(const o of L)if(i.includes(b[o.id])&&e.set(o.id,o),o.children)for(const r of o.children){const d=P(r,e);if(d&&!t.includes(o.id)){t.push(o.id);const f={...o,children:[r]};e.set(o.id,f)}else if(d&&t.includes(o.id)){const f=e.get(o.id),v={...f,children:[...f.children,r]};e.set(o.id,v)}}}return console.log("Components",[...e],e),[...e.values()]},[L,i]),I=h(()=>E.slice(0,q),[E]),S=h(()=>H(E.slice(q)),[E]);console.log("currentPath",g);const T=h(()=>S.map(e=>({...e,active:g===e.path})),[g,S]),[X,G]=U([]),j=(e,t,o)=>{let r="";t?r=t+`/${e.id}`:r=`/${e.id}`;const d=o.split("/");if(b[e.id]===d[d.length-1])return console.log("path",e.id),a.push(r),!0;if(e.children){for(const f of e.children)if(j(f,r,o))return!0}};return C(()=>{pe("/component_tabs").then(e=>{console.log("component_tabs",e),p(e)})},[]),C(()=>{if(i.length>0&&m)if(console.log("pathname",m),m==="/index"){const e=i[0];for(let t=0;t<N.length;t++){const o=N[t];if(j(o,"",e))return}}else{const e=m;for(let t=0;t<N.length;t++){const o=N[t];if(j(o,"",e))return}}},[i]),C(()=>{G(e=>I.map(t=>{var r,d,f,v;const o=(r=t.children)==null?void 0:r.map(u=>({...u,active:u.path===g}));if(t.children&&!t.path){const u=t.children.find(_=>_.path===g);if(u)return{...t,cid:u.id,name:u.name,path:g,active:!0,children:o};{const _=e.find(w=>w.id===t.id);if(_)return{...t,..._,name:(v=(f=(d=t.children)==null?void 0:d.find(w=>w.id===_.cid))==null?void 0:f.name)!=null?v:t.name,active:!1,children:o}}}return{...t,active:g===t.path,children:o}}))},[I,g,i]),console.log("componentsInNavbar",I),n.createElement(ue,null,n.createElement("div",{className:"left"},n.createElement(he,{href:V(M+"/index")},n.createElement("img",{alt:"PaddlePaddle",src:ge+ie}),n.createElement("span",null,"VisualDL")),X.map(e=>e.children?n.createElement(Y,{menu:e.children,active:e.active,path:e.path,key:e.active?`${e.id}-activated`:e.id},e.name):n.createElement(A,{active:e.active,path:e.path,key:e.id},e.name)),T.length?n.createElement(Y,{menu:T,showDropdownIcon:!0},s("common:more")):null),n.createElement("div",{className:"right"},n.createElement(B,{placement:"bottom-end",animation:"shift-away-subtle",interactive:!0,arrow:!1,offset:[18,0],hideOnClick:!1,role:"menu",content:n.createElement(z,null,n.createElement(re,null))},n.createElement(k,{className:"nav-item"},n.createElement(R,{type:"theme"}))),n.createElement(k,{className:"nav-item",onClick:F},n.createElement(ae,null)),n.createElement(k,{className:"nav-item",onClick:()=>se.emit("refresh")},n.createElement(R,{type:"refresh"}))))};export default _e;
