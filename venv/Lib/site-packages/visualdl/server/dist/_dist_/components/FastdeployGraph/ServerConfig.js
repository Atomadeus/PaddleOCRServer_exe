import e,{useState as g,useEffect as x}from"../../../__snowpack__/pkg/react.js";import{MinusCircleOutlined as P,DownOutlined as Ee,VerticalAlignBottomOutlined as be}from"../../../__snowpack__/pkg/@ant-design/icons.js";import{Graph as xe,Shape as B}from"../../../__snowpack__/pkg/@antv/x6.js";import{Form as l,Input as d,Select as C,Space as S}from"../../../__snowpack__/pkg/antd.js";import{Tree as ye}from"../../../__snowpack__/pkg/antd.js";import A from"../../../__snowpack__/pkg/styled-components.js";import{Modal as fe}from"../../../__snowpack__/pkg/antd.js";import{useTranslation as ke}from"../../../__snowpack__/pkg/react-i18next.js";const ve=A.div`
    height: 100%;
    #container {
        height: 100%;
        display: flex;
        border: 1px solid #dfe3e8;
        .custom-html {
            width: 100%;
            height: 100%;
            border-radius: 1em;
            perspective: 600px;
            text-align: center;
            line-height: 40px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            box-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.25), 0 0.02125em 0.06125em rgba(0, 0, 0, 0.25);
        }
    }
    #stencil_content {
        min-width: 180px;
        width: auto;
        height: 100%;
        position: relative;
        border-right: 1px solid #dfe3e8;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        border-left: 1px solid #dfe3e8;
        .stencli_select {
            height: 50px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #dfe3e8;
        }
        #stencil {
            height: 80%;
            .dnd-rect {
                min-width: 100px;
                width: auto;
                height: 40px;
                border: 1px solid #8f8f8f;
                padding-left: 10px;
                padding-right: 10px;
                border-radius: 6px;
                text-align: center;
                line-height: 40px;
                margin: 16px;
                cursor: move;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        #buttonContent {
            display: flex;
            position: absolute;
            width: 100%;
            bottom: 1%;
            display: flex;
            justify-content: center;
        }
    }
    .graph-containers {
        width: calc(100% - 180px);
        height: 100%;
        // display: flex;
        // align-items: center;
        // justify-content: center;
    }
    .x6-widget-stencil {
        background-color: #fff;
    }
    .x6-widget-stencil-title {
        background-color: #fff;
    }
    .x6-widget-stencil-group-title {
        background-color: #fff !important;
    }
    .x6-widget-transform {
        margin: -1px 0 0 -1px;
        padding: 0px;
        border: 1px solid #239edd;
    }
    .x6-widget-transform > div {
        border: 1px solid #239edd;
    }
    .x6-widget-transform > div:hover {
        background-color: #3dafe4;
    }
    .x6-widget-transform-active-handle {
        background-color: #3dafe4;
    }
    .x6-widget-transform-resize {
        border-radius: 0;
    }
    .x6-widget-selection-inner {
        border: 1px solid #239edd;
    }
    .x6-widget-selection-box {
        opacity: 0;
    }
`,we=A.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    .ant-select {
        .ant-select-selector {
            height: 100%;
            border: none;
            .ant-select-selection-placeholder {
                line-height: 50px;
            }
            .ant-select-selection-item {
                line-height: 50px;
            }
        }
    }
`,_e=A.div`
    height: 2.5714285714285716rem;
    line-height: 2.5714285714285716rem;
    text-align: center;
    font-size: 16px;
    margin-left: 2px;
    width: 86px;
    color: white;
    background-color: var(--navbar-background-color);
`,Ie=["name","backend","version","maxBatchSize","input","output","instanceGroup","optimization"],Te={labelCol:{span:6},wrapperCol:{span:16}},k=["TYPE_BOOL","TYPE_UINT8","TYPE_UINT16","TYPE_UINT32","TYPE_UINT64","TYPE_INT8","TYPE_INT16","TYPE_INT32","TYPE_INT64","TYPE_FP16","TYPE_FP32","TYPE_FP64","TYPE_STRING","TYPE_BF16"],K=["KIND_AUTO","KIND_GPU","KIND_CPU","KIND_MODEL"],{Option:Y}=C,Ce={groups:{top:{position:"top",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}},bottom:{position:"bottom",attrs:{circle:{r:4,magnet:!0,stroke:"#5F95FF",strokeWidth:1,fill:"#fff",style:{visibility:"hidden"}}}}},items:[{id:"top",group:"top"},{id:"bottom",group:"bottom"}]},Fe=({modelData:i,serverId:ne})=>{var ee,te;const z=`graph-containers${ne}`,[f,ae]=g(),[re,le]=g([]),[O,se]=g(),[v,G]=g(),[F,R]=g(),[w,U]=g(),[$,W]=g({}),[M,L]=g(!1),[_,H]=g(),[q,oe]=g(),[V,ie]=g(),[y,J]=g(),[X]=l.useForm(),[ce,N]=g((ee=i==null?void 0:i.ensembles[0])==null?void 0:ee.versions),{t:b}=ke(["Fastdeploy"]),Q=(t,n)=>{se(t);const r=t.versions.map(p=>({...p}));N(r),w&&U(!1),R(!F)},Z=t=>{var h,E,o,c;const n=(E=(h=t==null?void 0:t.optimization)==null?void 0:h.cpuExecutionAccelerator)==null?void 0:E.map(s=>{const u=Object.keys(s),m=s[u[1]]&&Object.keys(s[u[1]]),j=m==null?void 0:m.map(I=>{var T;return{key:I,value:(T=s==null?void 0:s.parameters)==null?void 0:T[I]}});return{name:s.name,parameters:j}}),r=(c=(o=t==null?void 0:t.optimization)==null?void 0:o.gpuExecutionAccelerator)==null?void 0:c.map(s=>{const u=Object.keys(s),m=s[u[1]]&&Object.keys(s[u[1]]),j=m==null?void 0:m.map(I=>{var T;return{key:I,value:(T=s==null?void 0:s.parameters)==null?void 0:T[I]}});return{name:s.name,parameters:j}}),a={...t,cpuExecutionAccelerator:n,gpuExecutionAccelerator:r},p=[];if(a==null?void 0:a.instanceGroup)for(const s of a==null?void 0:a.instanceGroup)s.kind!=="KIND_CPU"&&s.kind!=="KIND_MODEL"?p.push(!0):p.push(!1);W(p);for(const s of Ie)a[s]||(a[s]=void 0);X.setFieldsValue(a)},me=()=>{U(!0),R(!F);const t=i.ensembles[0].versions.map(n=>({...n}));N(t)},D=t=>t.map(r=>{let a="";return r.children&&(a=D(r.children)),a?{...r,children:a,checkable:!1}:{...r,checkable:!1}}),pe=()=>{L(!1)},de=()=>{L(!1),v&&G(void 0)},ue=(t,n)=>{console.log("selected",t,n)},ge=()=>{L(!0)},he=t=>{H(t)};return x(()=>{const t=new xe({container:document.getElementById(z),grid:!0,mousewheel:{enabled:!1,zoomAtMousePosition:!0,minScale:.5,maxScale:3},panning:!1,translating:{restrict:!1},interacting:{edgeMovable:!1,nodeMovable:!1},connecting:{router:{name:"manhattan",args:{padding:1}},connector:{name:"rounded",args:{radius:8}},anchor:"center",connectionPoint:"anchor",allowBlank:!1,snap:{radius:20},createEdge(){return new B.Edge({attrs:{line:{stroke:"#A2B1C3",strokeWidth:2,targetMarker:{name:"block",width:12,height:8}}},zIndex:0})},validateConnection({targetMagnet:n}){return!!n}},highlighting:{magnetAdsorbed:{name:"stroke",args:{attrs:{fill:"#5F95FF",stroke:"#5F95FF"}}}}});t.on("node:dblclick",({node:n})=>{oe({name:n.id})}),J(t),ie(!0)},[]),x(()=>{if(!q)return;const t=q.name;for(const n of i.models)if(n.name===t){G({name:n.name,data:n});return}},[q]),x(()=>{!v||Q(v.data,v.name)},[v]),x(()=>{var n,r;if(!i)return;console.log("modelData.ensembles",i==null?void 0:i.ensembles);const t=(n=i==null?void 0:i.ensembles)==null?void 0:n.map(a=>({value:a.name,label:a.name}));H((r=i.ensembles[0])==null?void 0:r.name),le(t)},[i]),x(()=>{var n,r,a,p;if(!_||!i)return;console.log("modelData.ensembles",i.ensembles);const t=(n=i.ensembles)==null?void 0:n.filter(h=>{if(h.name===_)return h});if(ae((r=t[0])==null?void 0:r.step),(a=t[0])==null?void 0:a.versions){const h=D((p=t[0])==null?void 0:p.versions),E=h==null?void 0:h.map(o=>({...o,selectable:!0,icon:e.createElement(be,null)}));N(E)}else N([])},[_]),x(()=>{if(!V||!f)return;y==null||y.clearCells();const t={};f==null||f.map(o=>{const c=o.inputModels;for(const u of c){let m=t[u];m||(m={from:[],to:[]},t[u]=m),m.to.push(o.modelName)}const s=o.outputModels;for(const u of s){let m=t[u];m||(m={from:[],to:[]},t[u]=m),m.from.push(o.modelName)}}),console.log("edgeMap",t);const n=[],r=[];for(const o of Object.keys(t)){r.push({id:`${o}`,width:60,height:40,label:o});const c=t[o];for(const s of c.to)n.push({source:o,target:s});console.log("nodes",r),console.log("edges",n)}const a=[];for(const o of n)a.push({source:{cell:o.source,connectionPoint:{name:"boundary",args:{sticky:!0}}},target:{cell:o.target,connectionPoint:"boundary"},inherit:"edge",attrs:{line:{stroke:"#5755a1"}},defaultLabel:{markup:[{tagName:"rect",selector:"body"},{tagName:"text",selector:"label"}],attrs:{label:{fill:"black",fontSize:14,textAnchor:"middle",textVerticalAnchor:"middle",pointerEvents:"none"},body:{ref:"label",fill:"white",stroke:"#5755a1",strokeWidth:2,rx:4,ry:4,refWidth:"140%",refHeight:"140%",refX:"-20%",refY:"-20%"}},position:{distance:100,options:{absoluteDistance:!0}}}});const p=[],h={};let E=0;for(const o of f){const c=o.modelName;c.length>E&&(E=c.length),h[c]={x:o.pos_x,y:o.pos_y,lengths:c.length}}for(let o=0;o<r.length;o++){const c=r[o],s=h[c==null?void 0:c.id];B.HTML.register({shape:c.id,width:10+E*10,height:40,html(){const u=document.createElement("div"),m=document.createTextNode(c.id);return u.className="custom-html",u.appendChild(m),u}}),p.push({id:c.id,shape:c.id,size:{width:10+E*10,height:40},x:300+s.x*90,y:50+s.y*80,ports:Ce})}console.log("nodess",p,B.HTML.shapeMaps),y==null||y.fromJSON({nodes:p,edges:a}),J(y)},[f,V]),x(()=>{F!==void 0&&ge()},[F]),x(()=>{if(M&&i){if(!w)O&&Z(O);else for(const t of i.ensembles)if(t.name===_){Z(t);return}}},[M,O,w]),e.createElement(ve,{style:{height:"100%",width:"100%"}},e.createElement("div",{id:"container"},e.createElement("div",{id:z,className:"graph-containers"}),e.createElement("div",{id:"stencil_content"},e.createElement("div",{id:"stencil"},e.createElement("div",{className:"stencli_select"},e.createElement(we,null,e.createElement(C,{style:{width:"100%",height:"50px"},placeholder:"Search to Select",optionFilterProp:"children",value:_,options:re,onChange:t=>{he(t)}}))),e.createElement("div",{id:"stencil"},i&&((te=i.models)==null?void 0:te.map(t=>e.createElement("div",{"data-type":t.name,className:"dnd-rect",key:t.name,onClick:()=>{Q(t,t.name)}},t.name))))),e.createElement("div",{id:"buttonContent"},e.createElement(_e,{style:{width:"160px"},onClick:me},b("Fastdeploy:ensemble-configuration"))))),e.createElement(fe,{width:800,title:b(w?"Fastdeploy:Ensemble-configuration":"Fastdeploy:Model-configuration"),visible:M,cancelText:b("Fastdeploy:cancel"),okText:b("Fastdeploy:ok"),onOk:pe,onCancel:de},e.createElement(l,{...Te,form:X,name:"dynamic_form_complex",autoComplete:"off"},e.createElement(l.Item,{name:"name",label:"name",rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})),w?e.createElement(l.Item,{name:"platform",label:"platform",rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})):e.createElement(l.Item,{name:"backend",label:"backend",rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})),e.createElement(l.Item,{name:"version",label:"version"},e.createElement(ye,{showLine:!0,showIcon:!0,switcherIcon:e.createElement(Ee,null),defaultExpandedKeys:["0-0-0"],selectable:!0,onSelect:ue,treeData:ce})),e.createElement(l.Item,{name:"maxBatchSize",label:"maxBatchSize"},e.createElement(d,{disabled:!0})),e.createElement(l.Item,{label:"input"},e.createElement(l.List,{name:"input"},t=>e.createElement("div",null,t==null?void 0:t.map((n,r)=>e.createElement("div",{key:n.key},e.createElement("div",{style:{display:"flex",marginBottom:"10px",paddingTop:r?"10px":"40px",alignItems:"center"}},e.createElement("div",{style:{marginRight:"10px"}},`${b("Fastdeploy:variable")}${r+1}`)),e.createElement("div",{key:n.key},e.createElement(l.Item,{...n,label:"name",labelCol:{span:4},name:[n.name,"name"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})),e.createElement(l.Item,{...n,label:"dataType",labelCol:{span:4},name:[n.name,"dataType"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(C,{disabled:!0},k==null?void 0:k.map(a=>e.createElement(Y,{key:a,value:a},a)))),e.createElement(l.Item,{...n,label:"dims",labelCol:{span:4},name:[n.name,"dims"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})))))))),e.createElement("div",null),e.createElement(l.Item,{label:"output"},e.createElement(l.List,{name:"output"},t=>e.createElement("div",null,t==null?void 0:t.map((n,r)=>e.createElement("div",{key:n.key},e.createElement("div",{style:{display:"flex",marginBottom:"10px",paddingTop:r?"10px":"40px",alignItems:"center"}},e.createElement("div",{style:{marginRight:"10px"}},`${b("Fastdeploy:variable")}${r+1}`)),e.createElement("div",{key:n.key},e.createElement(l.Item,{...n,label:"name",labelCol:{span:4},name:[n.name,"name"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})),e.createElement(l.Item,{...n,label:"dataType",labelCol:{span:4},name:[n.name,"dataType"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(C,{disabled:!0},k==null?void 0:k.map(a=>e.createElement(Y,{key:a,value:a},a)))),e.createElement(l.Item,{...n,label:"dims",labelCol:{span:4},name:[n.name,"dims"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})))))))),e.createElement(l.Item,{label:"instanceGroup"},e.createElement(l.List,{name:"instanceGroup"},(t,{})=>e.createElement("div",null,t==null?void 0:t.map((n,r)=>e.createElement("div",{key:n.key},e.createElement("div",{style:{display:"flex",marginBottom:"10px",paddingTop:r?"10px":"40px",alignItems:"center"}},e.createElement("div",{style:{marginRight:"10px"}},`${b("Fastdeploy:instance")}${r+1}`)),e.createElement("div",{key:n.key},e.createElement(l.Item,{...n,label:"count",labelCol:{span:4},name:[n.name,"count"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})),e.createElement(l.Item,{...n,label:"kind",labelCol:{span:4},name:[n.name,"kind"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(C,{disabled:!0,onChange:a=>{console.log("valuess",a);const p=[...$];a!=="KIND_CPU"&&a!=="KIND_MODEL"?p[r]||(p[r]=!0):p[r]&&(p[r]=!1),W(p)}},K==null?void 0:K.map(a=>e.createElement(Y,{key:a,value:a},a)))),$[r]&&e.createElement(l.Item,{...n,label:"gpus",labelCol:{span:4},name:[n.name,"gpus"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0}))))),e.createElement(l.Item,null)))),e.createElement(l.Item,{name:"optimization",label:"optimization"},e.createElement("div",null,e.createElement(l.List,{name:"cpuExecutionAccelerator"},(t,{})=>e.createElement("div",null,e.createElement("div",{style:{display:"flex",marginBottom:"10px",paddingTop:"40px",alignItems:"center"}},e.createElement("div",{style:{marginRight:"10px"}},"cpuExecutionAccelerator")),t==null?void 0:t.map(n=>e.createElement(S,{align:"baseline",key:n.key},e.createElement("div",null,e.createElement("div",{style:{display:"flex"}},e.createElement(l.Item,{name:[n.name,"name"],fieldKey:[n.name,"name"],label:"name",rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,null)),e.createElement(P,{style:{marginLeft:"10px",marginTop:"10px"}})),e.createElement(l.Item,null,e.createElement(l.List,{name:[n.name,"parameters"],key:n.key},(r,{})=>e.createElement("div",{style:{paddingLeft:"60px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"}},e.createElement("div",{style:{marginRight:"10px"}},"parameters")),r==null?void 0:r.map(a=>e.createElement(S,{align:"baseline",key:a.key},e.createElement(l.Item,{...a,name:[a.name,"key"],fieldKey:[a.name,"key"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,null)),e.createElement(l.Item,{...a,name:[a.name,"value"],fieldKey:[a.name,"value"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,null)),e.createElement(P,null)))))))))))),e.createElement("div",null,e.createElement(l.List,{name:"gpuExecutionAccelerator"},(t,{})=>e.createElement("div",null,e.createElement("div",{style:{display:"flex",marginBottom:"10px",paddingTop:"40px",alignItems:"center"}},e.createElement("div",{style:{marginRight:"10px"}},"gpuExecutionAccelerator")),t==null?void 0:t.map(n=>e.createElement(S,{align:"baseline",key:n.key},e.createElement("div",null,e.createElement("div",{style:{display:"flex"}},e.createElement(l.Item,{name:[n.name,"name"],fieldKey:[n.name,"name"],label:"name",rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})),e.createElement(P,{style:{marginLeft:"10px",marginTop:"10px"}})),e.createElement(l.Item,null,e.createElement(l.List,{name:[n.name,"parameters"],key:n.key},(r,{})=>e.createElement("div",{style:{paddingLeft:"60px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px"}},e.createElement("div",{style:{marginRight:"10px"}},"parameters")),r==null?void 0:r.map(a=>e.createElement(S,{align:"baseline",key:a.key},e.createElement(l.Item,{...a,name:[a.name,"key"],fieldKey:[a.name,"key"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})),e.createElement(l.Item,{...a,name:[a.name,"value"],fieldKey:[a.name,"value"],rules:[{required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879\u8BF7\u586B\u5199\u5BF9\u5E94\u4FE1\u606F"}]},e.createElement(d,{disabled:!0})),e.createElement(P,null))))))))))))))))};export default Fe;
