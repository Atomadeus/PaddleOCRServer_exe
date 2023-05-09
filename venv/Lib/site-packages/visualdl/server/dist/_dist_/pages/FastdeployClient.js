import t,{useState as c}from"../../__snowpack__/pkg/react.js";import{rem as p,primaryColor as _,size as y}from"../utils/style.js";import{Tabs as m}from"../../__snowpack__/pkg/antd.js";import k from"../components/Content.js";import x from"../components/FastdeployGraph/Clinet.js";import{fetcher as j}from"../utils/fetch.js";import v from"../../__snowpack__/pkg/react-spinners/HashLoader.js";import l from"../../__snowpack__/pkg/styled-components.js";import{useTranslation as E}from"../../__snowpack__/pkg/react-i18next.js";const b=l.div`
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
`,C=l.div`
    ${y("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${p(16)};
    line-height: ${p(60)};
`,w=l.div`
    padding: 20px 10px 0px 10px;
    flex: 1;
    .ant-tabs-content-left {
        height: 100%;
    }
`;function M(){const[d,r]=c(!1),[n,a]=c([0]),{i18n:f}=E(["Fastdeploy"]),g=f.language,h=()=>{j(`/fastdeploy/fastdeploy_client?lang=${g}`,{method:"GET"}).then(e=>{console.log("res",e);const o=[...n];if(o.length===0)o.push(0);else{const s=o[n.length-1]+1;o.push(s)}a(o),r(!1)},e=>{console.log("errres",e),r(!1)})},u=(e,o)=>{if(o==="add")h();else{console.log("targetKey",e);const s=[];for(const i of n)i+""!==e&&s.push(i);a(s)}};return console.log("serverModels",n),t.createElement(k,null,d&&t.createElement(C,null,t.createElement(v,{size:"60px",color:_})),t.createElement(b,null,t.createElement(w,null,t.createElement(m,{defaultActiveKey:"1",type:"editable-card",onEdit:u,tabPosition:"left",style:{height:"100%"}},n.map(e=>t.createElement(m.TabPane,{tab:`Client${e}`,key:e,style:{height:"100%"}},t.createElement(x,null)))))))}export default M;
