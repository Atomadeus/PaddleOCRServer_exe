import o,{useState as r,useEffect as x}from"../../__snowpack__/pkg/react.js";import{rem as m,primaryColor as U,size as V}from"../utils/style.js";import{Tabs as b}from"../../__snowpack__/pkg/antd.js";import X from"../components/Content.js";import Y from"../components/FastdeployGraph/index.js";import Z from"../components/FastdeployGraph/serverBox.js";import{fetcher as h}from"../utils/fetch.js";import ee from"../../__snowpack__/pkg/react-spinners/HashLoader.js";import{Select as te}from"../../__snowpack__/pkg/antd.js";import p from"../../__snowpack__/pkg/styled-components.js";import{toast as oe}from"../../__snowpack__/pkg/react-toastify.js";import{useTranslation as ne}from"../../__snowpack__/pkg/react-i18next.js";import{Modal as M}from"../../__snowpack__/pkg/antd.js";const le=p.div`
    display: flex;
    height: ${m(50)};
    justify-content: center;
    align-items: center;
    padding: 10px;
    .inputWrapper {
        width: 500px;
        border-radius: 0px;
        flex: 1;
    }
    .titleName {
        flex: 1;
        font-size: 28px;
    }
`,se=p.div`
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;
`,re=p.div`
    height: 60px;
    display: flex;
    align-items: center;
    .ant-select {
        .ant-select-selector {
            height: 100%;
            .ant-select-selection-placeholder {
                line-height: 60px;
            }
            .ant-select-selection-item {
                line-height: 60px;
                color: black;
            }
        }
    }
`,ae=p.div`
    height: ${m(36)};
    line-height: ${m(36)};
    text-align: center;
    font-size: 16px;
    margin-left: 20px;
    min-width: 100px;
    padding-left: 5px;
    padding-right: 5px;
    color: white;
    background-color: var(--navbar-background-color);
`,ce=p.div`
    ${V("100%","100%")}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overscroll-behavior: none;
    cursor: progress;
    font-size: ${m(16)};
    line-height: ${m(60)};
`,ie=p.div`
    padding: 20px 10px 0px 10px;
    flex: 1;
    .ant-tabs-content-left {
        height: 100%;
    }
    .ant-tabs-nav-add {
        display: none;
    }
    .ant-tabs-nav-list {
        .ant-tabs-tab:nth-of-type(1) {
            .ant-tabs-tab-remove {
                display: none;
            }
        }
    }
`,de="left";function pe(){const[c,u]=r("."),[v,S]=r(""),[C,F]=r([]),[j,a]=r(!1),[$,T]=r(),[O,y]=r(!1),[D,_]=r(!1),[G,L]=r(""),[f,k]=r(),[i,g]=r([]),[z,w]=r(!1),{t:l}=ne(["Fastdeploy"]);x(()=>{E()},[]),x(()=>{A(c)},[c]),x(()=>{if(f!==void 0){const t=i;let e=!1;for(const n of i)n.Id===f&&(e=!0);if(e){const n=t.map(s=>s.Id===f?{Id:f+"",flag:!s.flag}:s);g(n)}else E()}},[f]);const E=()=>{a(!0),h("/fastdeploy/get_server_list",{method:"GET"}).then(t=>{const e=t.map(n=>({flag:!0,Id:n+""}));g(e),a(!1)},t=>{console.log("get_server_output",t),a(!1)})},P=t=>{h(`/fastdeploy/get_config?dir=${t}`,{method:"GET"}).then(e=>{console.log("blobres",e),S(t),u("."),T(e),y(!1),a(!1)},e=>{console.log("errblobres",e),a(!1)})},B=t=>{k(t)},N=t=>{if(t===".."){const e=c==null?void 0:c.split("/"),n=e.splice(0,e.length-1).join("/");u(n)}else{const e=c+`/${t}`;u(e)}},A=t=>{h(`/fastdeploy/get_directory?dir=${t}`,{method:"GET"}).then(e=>{if(console.log("res",e),(e==null?void 0:e.sub_dir.length)>0){const n=e==null?void 0:e.sub_dir.map(s=>({value:s,label:s}));F(n)}a(!1)},e=>{console.log("errblobres",e),a(!1)})},H=()=>{y(!0)},K=()=>{P(c)},R=()=>{J(G)},W=()=>{y(!1)},q=()=>{_(!1)},J=t=>{h(`/fastdeploy/stop_server?server_id=${t}`,{method:"GET"}).then(e=>{console.log("res",e),Q(t),a(!1),oe.success(l("Fastdeploy:Shutdown-server-successfully"),{autoClose:2e3})},e=>{console.log("errblobres",e),a(!1)})},Q=t=>{const n=i.filter(s=>{const d=`${s.Id}`;if(console.log("modelId = `${model.Id}`;",d,t),d!==t)return s});console.log(n),g(n),k(void 0),_(!1)},I=(t,e)=>{e==="add"?console.log(11111):(L(t),_(!0))};return console.log("serverModels",i),o.createElement(X,null,j&&o.createElement(ce,null,o.createElement(ee,{size:"60px",color:U})),o.createElement(se,null,o.createElement(le,null,o.createElement("div",{className:"titleName"},v?`${l("Fastdeploy:Current-model")}:${v}`:l("Fastdeploy:Load-model")),o.createElement(ae,{onClick:H},l("Fastdeploy:load-model-repository"))),o.createElement(ie,null,o.createElement(b,{defaultActiveKey:"1",type:"editable-card",onEdit:I,tabPosition:de,style:{height:"100%"},onChange:t=>{if(console.log("activeKey",t),t!=="item-1"){const e=i,n=t+"";console.log("serverModel",e);const s=e.map(d=>d.Id===n?{Id:d.Id+"",flag:!d.flag}:d);console.log("newServerModel",s),g(s)}}},o.createElement(b.TabPane,{tab:l("ensemble-pipeline"),key:"item-1",style:{height:"100%"}},o.createElement(Y,{modelData:$,dirValue:v,ChangeServerId:B})),i&&i.map(t=>o.createElement(b.TabPane,{tab:`Server-${t.Id}`,key:t.Id},o.createElement(Z,{server_id:t.Id,Flag:t.flag,onEdit:()=>{const e=t.Id+"";I(e,"remove")}})))))),o.createElement(M,{width:800,title:l("Fastdeploy:Load-model-repository"),cancelText:l("Fastdeploy:cancel"),okText:l("Fastdeploy:load-model-repository"),visible:O,onOk:K,onCancel:W},o.createElement(re,null,o.createElement(te,{style:{width:"100%",height:"60px"},placeholder:"Search to Select",optionFilterProp:"children",onFocus:()=>{w(!0)},onBlur:()=>{w(!1)},open:z,value:c,options:C,onChange:t=>{N(t)}}))),o.createElement(M,{width:800,title:l("Fastdeploy:Shutdown-server"),cancelText:l("Fastdeploy:cancel"),okText:l("Fastdeploy:shutdown"),visible:D,onOk:R,onCancel:q},l("Fastdeploy:Confirm")))}export default pe;
