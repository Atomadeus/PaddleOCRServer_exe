import e,{useEffect as c,useState as l}from"../../__snowpack__/pkg/react.js";import{rem as s}from"../utils/style.js";import u from"./Button.js";import f from"../../__snowpack__/pkg/@tippyjs/react.js";import p from"../../__snowpack__/pkg/styled-components.js";import{useTranslation as _}from"../../__snowpack__/pkg/react-i18next.js";const d=p.div`
    display: flex;
    align-items: center;

    > span {
        width: ${s(55)};
    }

    > div {
        flex-grow: 1;
        margin-left: ${s(20)};
    }
`,k=p(u)`
    text-transform: uppercase;
    width: 100%;
`,y=({running:a,onToggle:r,className:o})=>{const{t:n}=_("common"),[t,i]=l(!!a);return c(()=>{r==null||r(t)},[r,t]),e.createElement(d,{className:o},e.createElement("span",null,n(t?"running":"stopped")),e.createElement(f,{theme:"tooltip",content:n(t?"stop-realtime-refresh":"start-realtime-refresh")+"",hideOnClick:!1},e.createElement("div",null,e.createElement(k,{onClick:()=>i(m=>!m),type:t?"danger":"primary",rounded:!0},n(t?"stop":"run")))))};export default y;
