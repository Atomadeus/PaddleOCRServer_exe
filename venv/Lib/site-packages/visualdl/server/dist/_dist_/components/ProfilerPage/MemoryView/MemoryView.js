import t,{useMemo as L,useState as i,useEffect as v}from"../../../../__snowpack__/pkg/react.js";import le from"../../DistributedChart.js";import B from"../../Input.js";import{asideWidth as ie,rem as n,primaryColor as K}from"../../../utils/style.js";import w from"../../../../__snowpack__/pkg/styled-components.js";import{useTranslation as oe}from"../../../../__snowpack__/pkg/react-i18next.js";import{Table as M}from"../../../../__snowpack__/pkg/antd.js";import{Slider as ce}from"../../../../__snowpack__/pkg/antd.js";import{fetcher as S}from"../../../utils/fetch.js";import W from"../../searchInput2.js";import G from"../../../../__snowpack__/pkg/react-spinners/GridLoader.js";import{Wraper as R,Title as se,FullWidthSelect as de,Configure as y,EchartPie as me}from"../../components.js";ie;const ue=w.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    position: relative;
    background-color: #fff;
`,pe=w.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dddddd;
    margin-bottom: ${n(20)};
    .searchContent {
        display: flex;
        align-items: center;
        .select_label {
            margin-right: ${n(15)};
            color: #000000;
            font-size: ${n(14)};
            white-space: nowrap;
        }
        .select_wrapper {
            width: auto;
            height: ${n(36)};
            margin-right: ${n(15)};
        }
    }
`,he=w(se)`
    border-bottom: none;
    margin-bottom: ${n(0)};
`,ge=w(y)`
    .titleContent {
        margin-bottom: ${n(15)};
        .SliderContent {
            display: flex;
            .Slider_wrapper {
                width: ${n(160)};
                align-items: center;
                height: 100%;
                padding-top: ${n(12)};
                .ant-slider {
                    margin: ${n(0)};
                }
                .ant-slider-track {
                    background: #2932e1;
                }
                .ant-slider-handle {
                    border: solid ${n(4)} #2932e1;
                }
                margin: ${n(0)} ${n(20)};
            }
            .Slider_input_content {
                height: ${n(36)};
                display: flex;
                border: 1px solid #dddddd;
                border-radius: ${n(4)};
                padding-right: ${n(10)};
                justify-content: space-between;
                // width: ${n(88)};

                .unit-number {
                    width: auto;
                    padding: ${n(5)};
                    line-height: ${n(36)};
                    display: flex;
                    align-items: center;
                    .wrappers {
                        max-width: ${n(100)};
                        height: 100%;
                        border: none;
                        font-size: ${n(14)};
                    }
                }
                .unit {
                    font-size: ${n(14)};
                    color: #999999;
                    line-height: ${n(36)};
                }
            }
        }
    }
`,ve=({runs:c,workers:s,spans:d,units:m})=>{const{t:l}=oe(["profiler","common"]),[V,q]=i(),[b,P]=i(""),[z,H]=i(""),[p,E]=i(0),[h,_]=i(1e4),[J,O]=i(),[f,Q]=i(),[C,U]=i(),[N,I]=i(!0),[A,X]=i(),[x,D]=i(!0),[o,T]=i(),[$,Y]=i([]),[Z,F]=i();v(()=>{c&&s&&d&&S(`/profiler/memory/devices?run=${c}&worker=${s}&span=${d}`).then(a=>{const e=a,r=e.map(u=>{const g=/\((.+?)\)/g,k=u.device.match(g)[0];return{label:k.substring(1,k.length-1),value:u.device}});Q(e),O(r),T(e[0].device),F(e[0].max_allocation_size)})},[c,s,d]),v(()=>{c&&s&&d&&o&&S(`/profiler/memory/curve?run=${c}&worker=${s}&span=${d}&device_type=${o}&time_unit=${m}`).then(a=>{q(a)})},[c,s,d,m,o]),v(()=>{if(o&&f)for(let a=0;a<f.length;a++){const e=f[a];o===e.device&&(E(e.min_size),_(e.max_size),Y([e.min_size,e.max_size]),F(e.max_allocation_size))}},[o,f]),v(()=>{I(!0),c&&s&&d&&o&&S(`/profiler/memory/memory_events?run=${c}&worker=${s}&span=${d}&device_type=${o}&min_size=${p}&max_size=${h}&search_name=${b}&time_unit=${m}`).then(a=>{const r=a.data.map((u,g)=>({key:g+"",...u}));U(r),I(!1)})},[c,s,d,m,o,p,h,b]),v(()=>{D(!0),c&&s&&d&&o&&S(`/profiler/memory/op_memory_events?run=${c}&worker=${s}&span=${d}&device_type=${o}&search_name=${z}`).then(a=>{const r=a.data.map((u,g)=>({key:g+"",...u}));D(!1),X(r)})},[c,s,d,o,z]);const ee=L(()=>[{title:l("MemorAddr"),dataIndex:"MemoryAddr",width:150},{title:l("storage-type"),dataIndex:"MemoryType",width:150},{title:l("AllocatedEvent"),dataIndex:"AllocatedEvent",width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("AllocatedTimestamp")+`(${m})`,dataIndex:"AllocatedTimestamp",sorter:(e,r)=>e.AllocatedTimestamp-r.AllocatedTimestamp,width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("FreeEvent"),dataIndex:"FreeEvent",width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("FreeTimestamp")+`(${m})`,dataIndex:"FreeTimestamp",sorter:(e,r)=>e.FreeTimestamp-r.FreeTimestamp,width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("Duration")+`(${m})`,dataIndex:"Duration",sorter:(e,r)=>e.Duration-r.Duration,width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("Size")+"\uFF08KB)",dataIndex:"Size",sorter:(e,r)=>e.Size-r.Size,width:102,render:e=>t.createElement("div",null,e)}],[l,m]),te=L(()=>[{title:l("EventName"),dataIndex:"EventName",width:150},{title:l("storage-type"),dataIndex:"MemoryType",width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("AllocationCount"),dataIndex:"AllocationCount",sorter:(e,r)=>e.AllocationCount-r.AllocationCount,width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("FreeCount"),dataIndex:"FreeCount",sorter:(e,r)=>e.FreeCount-r.FreeCount,width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("AllocationSize")+"(KB)",dataIndex:"AllocationSize",sorter:(e,r)=>e.AllocationSize-r.AllocationSize,width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("FreeSize")+"(KB)",dataIndex:"FreeSize",sorter:(e,r)=>e.FreeSize-r.FreeSize,width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")},{title:l("IncreasedSize")+"(KB)",dataIndex:"IncreasedSize",sorter:(e,r)=>e.IncreasedSize-r.IncreasedSize,width:102,render:e=>e===0||e?t.createElement("div",null,e):t.createElement("div",null,"-")}],[l]),re=a=>{E(a[0]),_(a[1])},j=a=>{const e=a.charAt(0);let r=a;return r=r.replace(/[^\d.]/g,""),r=r.replace(/^\./g,""),r=r.replace(/\.{2,}/g,"."),r=r.replace(".","$#$").replace(/\./g,"").replace("$#$","."),e==="-"&&(r="-"+r),r},ne=a=>{const e=j(a);console.log("slider",e),E(e||0)},ae=a=>{const e=j(a);console.log("slider",e),_(e||0)};return console.log("max",p,h),t.createElement(ue,null,t.createElement(pe,null,t.createElement(he,null,l("memory-view")),t.createElement("div",{className:"searchContent"},t.createElement("div",{className:"select_label"},l("equipment")),t.createElement("div",{className:"select_wrapper"},t.createElement(de,{list:J,value:o,onChange:T})))),t.createElement(y,null,t.createElement(me,null,t.createElement(le,{className:"Content",data:V,zoom:!0,titles:Z}))),t.createElement(ge,null,t.createElement("div",{className:"titleContent"},t.createElement("div",{className:"input_wrapper"},t.createElement(W,{className:"search-input",value:b,onChange:P,placeholder:l("search-event-name"),rounded:!0})),t.createElement("div",{className:"SliderContent"},t.createElement("div",{className:"Slider_input_content"},t.createElement("div",{className:"unit-number"},t.createElement(B,{className:"wrappers",onChange:ne,value:p+""})),t.createElement("div",{className:"unit"},"KB")),t.createElement("div",{className:"Slider_wrapper"},t.createElement(ce,{range:!0,max:$.length&&$[1],min:$.length&&$[0],value:[p,h],onChange:re})),t.createElement("div",{className:"Slider_input_content"},t.createElement("div",{className:"unit-number"},t.createElement(B,{className:"wrappers",onChange:ae,value:h+""})),t.createElement("div",{className:"unit"},"KB")))),t.createElement(R,null,N&&t.createElement("div",{className:"loading"},t.createElement(G,{color:K,size:"10px"})),C&&!N&&t.createElement(M,{columns:ee,dataSource:C,bordered:!0,size:"middle",pagination:{showSizeChanger:!0}}))),t.createElement(y,{style:{marginTop:"0px"}},t.createElement("div",{className:"titleContent",style:{marginBottom:n(15)}},t.createElement("div",{className:"input_wrapper"},t.createElement(W,{className:"search-input",value:z,onChange:H,placeholder:l("search-event-name"),rounded:!0}))),t.createElement(R,null,x&&t.createElement("div",{className:"loading"},t.createElement(G,{color:K,size:"10px"})),A&&!x&&t.createElement(M,{columns:te,dataSource:A,bordered:!0,size:"middle",pagination:{showSizeChanger:!0}}))))};export default ve;
