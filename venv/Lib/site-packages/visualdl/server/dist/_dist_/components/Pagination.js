import t,{useCallback as k,useEffect as y,useState as d}from"../../__snowpack__/pkg/react.js";import{em as l}from"../utils/style.js";import u from"./Button.js";import E from"./Input.js";import j from"../../__snowpack__/pkg/styled-components.js";import{useTranslation as b}from"../../__snowpack__/pkg/react-i18next.js";const w=j.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        > a:not(:last-child),
        > span {
            margin-right: ${l(15)};
        }
        > input {
            width: ${l(80)};
            margin-right: ${l(6)};
        }
    }
`,P=({page:e,total:m,className:_,onChange:s})=>{const{t:c}=b("common"),[r,p]=d(e!=null?e:1),[a,f]=d("");y(()=>p(e!=null?e:1),[e]);const i=k(n=>{const o=typeof n=="number"?n:Number.parseInt(n+"");Number.isNaN(o)||o>m||o<1||o===r||(p(o),f(""),s==null||s(o))},[r,s,m]);return t.createElement(w,{className:_},t.createElement("div",null,t.createElement(u,{disabled:r<=1,onClick:()=>i(r-1)},c("common:previous-page")),t.createElement(u,{disabled:r>=m,onClick:()=>i(r+1)},c("common:next-page"))),t.createElement("div",null,t.createElement("span",null,c("common:total-page",{count:m})),t.createElement(E,{value:a,onChange:n=>f(n),onKeyDown:n=>n.key==="Enter"&&i(a)}),t.createElement(u,{onClick:()=>i(a),type:"primary"},c("common:confirm"))))};export default P;
