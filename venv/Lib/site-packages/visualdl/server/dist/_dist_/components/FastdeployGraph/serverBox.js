import*as B from"../../../__snowpack__/env.js";import e,{useEffect as m,useState as u,useRef as U,forwardRef as G}from"../../../__snowpack__/pkg/react.js";import i from"../../../__snowpack__/pkg/styled-components.js";import A from"./ModelTables.js";import N from"./CPUTables.js";import D from"./ServerConfig.js";import{fetcher as p}from"../../utils/fetch.js";import{rem as w}from"../../utils/style.js";import{toast as L}from"../../../__snowpack__/pkg/react-toastify.js";import{useTranslation as M}from"../../../__snowpack__/pkg/react-i18next.js";const b=i.div`
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 900;
`,s=i.div`
    height: ${w(36)};
    line-height: ${w(36)};
    text-align: center;
    font-size: 16px;
    margin-left: 20px;
    min-width: 100px;
    width: auto;
    border: 1px solid;
    padding-left: 5px;
    padding-right: 5px;
`,z=i.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`,H=i.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    padding-bottom: 20px;
    .backgrounds {
        background-color: var(--navbar-background-color);
        color: white;
        border: none;
    }
`,O=i.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    padding-bottom: 20px;
`,_=B.SNOWPACK_PUBLIC_PATH;console.log("PUBLIC_PATH",_,_+"/api/fastdeploy/fastdeploy_client");const R=({Flag:f,server_id:a,onEdit:C})=>{var k,E;const[c,g]=u(0),[l,T]=u({text:"",lengths:0,metric:null}),[j,$]=u(),{i18n:P,t:r}=M(["Fastdeploy"]),v=P.language;m(()=>{f!==void 0&&I()},[f]);const I=()=>{p(`/fastdeploy/check_server_alive?server_id=${a}`,{method:"GET"}).then(o=>{console.log("check_server_alive",o),h()},o=>{console.log("error_check_server_alive",o)})},h=()=>{const t=a,o=l.text.length;p(`/fastdeploy/get_server_output?server_id=${t}&length=${o}`,{method:"GET"}).then(n=>{console.log("get_server_output",n),x(t,n),y(t)},n=>{console.log("get_server_output",n)})},S=()=>{const t=a,o=l.text.length;p(`/fastdeploy/get_server_output?server_id=${t}&length=${o}`,{method:"GET"}).then(n=>{console.log("get_server_output",n),x(t,n),y(t);const F=v==="zh"?`${t} \u66F4\u65B0\u65E5\u5FD7\u548C\u6027\u80FD\u6570\u636E\u6210\u529F`:`Update log and metric for ${t} successfully`;L.success(F,{autoClose:2e3})},n=>{console.log("get_server_output",n)})},x=async(t,o)=>{await p(`/fastdeploy/get_server_metric?server_id=${t}`,{method:"GET"}).then(n=>{console.log("get_server_metric",n),T({...l,text:l.text+o,lengths:l.text.length+o.length,metric:n})},n=>{console.log("get_server_output",n)})},y=async t=>{await p(`/fastdeploy/get_server_config?server_id=${t}`,{method:"GET"}).then(o=>{console.log("get_server_config",o),$(o)},o=>{console.log("get_server_output",o)})},d=U();return m(()=>{d.current=h}),m(()=>{const t=()=>{var n;(n=d.current)==null||n.call(d)},o=setInterval(()=>{t()},1e4);return()=>clearInterval(o)},[]),e.createElement("div",null,c===0?e.createElement("div",{style:{whiteSpace:"pre-wrap",background:"black",color:"white",padding:"20px",height:"650px",overflowY:"auto"}},l.text):c===1?e.createElement("div",{style:{whiteSpace:"pre-wrap",padding:"20px",height:"650px",overflowY:"auto"}},e.createElement("div",null,e.createElement(b,null,r("Fastdeploy:Model-metrics")),e.createElement(A,{Datas:(k=l==null?void 0:l.metric)==null?void 0:k.Model})),e.createElement("div",null,e.createElement(b,null,r("Fastdeploy:GPU-metrics")),e.createElement(N,{Datas:(E=l==null?void 0:l.metric)==null?void 0:E.GPU}))):e.createElement("div",{style:{whiteSpace:"pre-wrap",padding:"20px",height:"650px",overflowY:"auto"}},e.createElement(D,{serverId:a,modelData:j})),e.createElement(z,null,e.createElement(H,null,e.createElement(s,{className:c===0?"backgrounds":"",onClick:()=>{g(0)}},r("Fastdeploy:log")),e.createElement(s,{className:c===1?"backgrounds":"",onClick:()=>{g(1)}},r("Fastdeploy:metric")),e.createElement(s,{className:c===2?"backgrounds":"",onClick:()=>{g(2)}},r("Fastdeploy:model-repository"))),e.createElement(O,null,e.createElement(s,{onClick:()=>{const t=_+`/api/fastdeploy/fastdeploy_client?server_id=${a}&lang=${v}`;window.open(t)}},r("Fastdeploy:open-client")),e.createElement(s,{onClick:C},r("Fastdeploy:shutdown")),e.createElement(s,{onClick:()=>{S()}},r("Fastdeploy:updates")))))};export default G(R);
