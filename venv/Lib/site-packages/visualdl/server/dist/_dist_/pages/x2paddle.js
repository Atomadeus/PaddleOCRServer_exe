import e,{useState as a,useEffect as N,useRef as h,useMemo as W}from"../../__snowpack__/pkg/react.js";import{rem as i,size as X}from"../utils/style.js";import H from"../components/Content.js";import{AsideSection as J}from"../components/Aside.js";import{Radio as s,Space as K}from"../../__snowpack__/pkg/antd.js";import{Button as g,Drawer as Q}from"../../__snowpack__/pkg/antd.js";import{API_URL as Z}from"../utils/fetch.js";import ee from"./graphStatic3.js";import te from"./graphStatic2.js";import r from"../../__snowpack__/pkg/styled-components.js";import{useTranslation as ne}from"../../__snowpack__/pkg/react-i18next.js";import $ from"../components/Field.js";const xe=r.section`
    display: flex;
    .active {
        background-color: #2932e1;
        color: white;
    }
    .un_active {
        background-color: white;
        color: #2932e1;
    }
    .disabled {
        background: #ccc;
        color: white;
        cursor: not-allowed;
    }
`,oe=r.div`
    display: flex;
    justify-content: space-between;

    > * {
        flex: 1 1 auto;

        &:not(:last-child) {
            margin-right: ${i(20)};
        }
    }
`,_e=r.article`
    flex: auto;
    display: flex;
    min-width: 0;
    margin: ${10};
    min-height: ${10};
`,ye=r.div`
    width: 49%;
    height: ${i(40)};
    line-height: ${i(40)};
    text-align: center;
    font-size: 16px;
`,ae=r.div`
    height: 100%;
`,ke=r.div`
    ${X("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${i(16)};
    line-height: ${i(60)};
    background-color: transparent;
`,be=r.aside`
    width: ${i(260)};
    display: flex;
`;function le(){const{t:f}=ne(["togglegraph"]),[o,w]=a(0),[n,R]=a(1),[c,u]=a(null),[F,S]=a(!1),[A,G]=a(!1),[v,P]=a(),[V,E]=a(!1),[se,D]=a(""),[O,x]=a(!1),[d,_]=a(!0),[M,y]=a(!1),re=h(null),m=h(null),k=h(null),I=(t,l)=>{if(t===void 0||!l)return;const q=n===1?"/inference/paddle2onnx/download":"/inference/onnx2paddle/download",p=document.createElement("a");p.href=Z+`${q}?request_id=${t}`,p.setAttribute("download",l),p.target="hiddenIframe",p.click()};N(()=>{var l;const t=k;c&&((l=t==null?void 0:t.current)==null||l.setModelFiles(c))},[V]);const L=W(()=>((n==1&&o==1||n==2&&o==0)&&!d&&E(!0),e.createElement("div",{style:{height:(n==1&&o==1||n==2&&o==0)&&!d?"auto":"0px",overflowY:"hidden"}},e.createElement(te,{ref:k,changeRendered:()=>{},show:(n==1&&o==1||n==2&&o==0)&&!d}))),[c,o]),z=()=>{x(!0)},T=()=>{x(!1)},b=()=>{!c&&v&&u(v)},j=()=>{},B=t=>{w(t.target.value);const l=t.target.value;n==1?l==1?b():j():n==2&&(l==0?b():j())},C=()=>{(m==null?void 0:m.current).setnewfiles(),u(null),_(!0),w(0),y(!1),E(!1)},U=t=>{R(t.target.value),C()},Y=(t,l)=>{S(t),G(l)};return e.createElement(H,null,e.createElement(g,{style:{position:"absolute",top:"4.428571428571429rem",left:"0rem"},type:"primary",onClick:z},"O"),e.createElement(ae,{style:{height:"auto",overflow:"hidden",position:"relative"}},e.createElement("div",{style:{height:n==1&&o==0||n==2&&o==1||d?"auto":"0px",overflowY:"hidden"}},e.createElement(ee,{ref:m,changeName:D,downloadEvent:Y,show:n==1&&o==0||n==2&&o==1||d,changeFlags:y,changeFiles2:t=>{_(!1),P(t),!c&&t&&u(t)},changeLoading:t=>{},ModelValue:n,changeshowdata:()=>{u(null)},Xpaddlae:!0})),L),e.createElement("div",{style:{display:M?"flex":"none",position:"absolute",bottom:"-24px",right:"20px",width:"260px",background:"white",height:"200px"}},e.createElement(J,{style:{width:"100%"}},e.createElement($,{label:f("togglegraph:View")},n===2?e.createElement(s.Group,{defaultValue:o,onChange:B},e.createElement(s.Button,{value:0},"Paddle"),e.createElement(s.Button,{value:1},"Onnx")):e.createElement(s.Group,{defaultValue:o,onChange:B},e.createElement(s.Button,{value:0},"Paddle"),e.createElement(s.Button,{value:1},"Onnx"))),e.createElement($,null,e.createElement(oe,null,e.createElement(g,{onClick:()=>{I(F,A)}},f("togglegraph:Download")),e.createElement(g,{onClick:C},f("togglegraph:Reload")))))),e.createElement(Q,{title:"Basic Drawer",placement:"left",closable:!1,onClose:T,open:O,key:"left"},e.createElement(s.Group,{onChange:U,value:n},e.createElement(K,{direction:"vertical"},e.createElement(s,{value:1},"Paddle2Onnx"),e.createElement(s,{value:2},"Onnx2Paddle")))))}export default le;
