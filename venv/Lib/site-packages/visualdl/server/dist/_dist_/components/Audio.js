import o,{useCallback as n,useEffect as M,useMemo as U,useRef as R,useState as l}from"../../__snowpack__/pkg/react.js";import{primaryColor as W,rem as r,size as b,transitionProps as s}from"../utils/style.js";import{AudioPlayer as Y}from"../utils/audio.js";import I from"./Icon.js";import Z from"../../__snowpack__/pkg/react-spinners/PuffLoader.js";import L from"./RangeSlider.js";import ee from"../../__snowpack__/pkg/react-rangeslider.js";import re from"../../__snowpack__/pkg/react-spinners/SyncLoader.js";import te from"../../__snowpack__/pkg/@tippyjs/react.js";import oe from"../../__snowpack__/pkg/mime-types.js";import ne from"../../__snowpack__/pkg/moment.js";import P from"../../__snowpack__/pkg/styled-components.js";import{useTranslation as ae}from"../../__snowpack__/pkg/react-i18next.js";const le=P.div`
    background-color: var(--audio-background-color);
    border-radius: ${r(8)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${r(20)};
    ${s("background-color")}

    > .control {
        font-size: ${r(16)};
        ${b(r(16),r(16))}
        line-height: 1;
        margin: 0 ${r(10)};
        color: var(--primary-color);
        cursor: pointer;
        ${s("color")}

        &.volume {
            font-size: ${r(20)};
            ${b(r(20),r(20))}
        }

        &.disabled {
            color: var(--text-light-color);
            cursor: not-allowed;
        }

        &:hover {
            color: var(--primary-focused-color);
        }

        &:active {
            color: var(--primary-active-color);
        }
    }

    > .slider {
        flex-grow: 1;
        padding: 0 ${r(10)};
    }

    > .time {
        color: var(--text-lighter-color);
        font-size: ${r(12)};
        margin: 0 ${r(5)};
        ${s("color")}
    }
`,ce=P(ee)`
    margin: ${r(15)} ${r(18)};
    width: ${r(4)};
    height: ${r(100)};
    cursor: pointer;
    position: relative;
    background-color: #dbdeeb;
    outline: none;
    border-radius: ${r(2)};
    user-select: none;
    ${s("color")}

    --color: var(--primary-color);

    &:hover {
        --color: var(--primary-focused-color);
    }

    &:active {
        --color: var(--primary-active-color);
    }

    .rangeslider__fill {
        background-color: var(--color);
        position: absolute;
        bottom: 0;
        width: 100%;
        border-bottom-left-radius: ${r(2)};
        border-bottom-right-radius: ${r(2)};
        border-top: ${r(4)} solid var(--color);
        box-sizing: content-box;
        ${s(["background-color","color"])}
    }

    .rangeslider__handle {
        background-color: var(--color);
        ${b(r(8),r(8))}
        position: absolute;
        left: -${r(2)};
        border-radius: 50%;
        outline: none;
        ${s("background-color")}

        .rangeslider__handle-tooltip,
        .rangeslider__handle-label {
            display: none;
        }
    }

    .rangeslider__labels {
        display: none;
    }
`,$=100;function A(u){const a=ne.duration(u,"seconds");return String(Math.floor(a.asMinutes())).padStart(2,"0")+":"+String(a.seconds()).padStart(2,"0")}const se=({audioContext:u,data:a,loading:D,error:N,onLoading:m,onLoad:p,className:T})=>{const{t:V}=ae("common"),d=R(null),t=R(null),[O,g]=l(0),[f,_]=l(0),[B,h]=l("00:00"),[v,w]=l(!1),[k,y]=l(!1),[c,S]=l(100),[j,X]=l(!1),E=n(()=>{var e;return(e=t.current)==null?void 0:e.play()},[]),x=n(()=>{var e;return(e=t.current)==null?void 0:e.pause()},[]),q=n(()=>{var e;return(e=t.current)==null?void 0:e.toggle()},[]),F=n(e=>{!t.current||(_(e/$*t.current.duration),g(e))},[]),G=n(()=>{X(k),x()},[k,x]),H=n(()=>{!t.current||(t.current.seek(f),j&&f<t.current.duration&&E())},[E,f,j]),J=n(()=>{t.current&&(t.current.toggleMute(),S(t.current.volume))},[]),i=n(()=>{if(t.current){const e=t.current.current;_(e),g(Math.floor(e/t.current.duration*$))}},[]),C=n(()=>{i(),d.current=window.setInterval(i,250)},[i]),z=n(()=>{t.current&&t.current.current>=t.current.duration&&i(),d.current&&(window.clearInterval(d.current),d.current=null)},[i]);M(()=>{t.current&&(t.current.volume=c)},[c]),M(()=>{let e=null;return a&&(async()=>{w(!0),m==null||m(),_(0),g(0),h("00:00"),e=new Y({context:u,onplay:()=>{y(!0),C()},onstop:()=>{y(!1),z()}});const Q=await a.data.arrayBuffer();await e.load(Q,a.type!=null&&oe.extension(a.type)||void 0),w(!1),h(A(e.duration)),p==null||p({sampleRate:e.sampleRate,duration:e.duration}),t.current=e})(),()=>{e&&(y(!1),e.dispose(),t.current=null)}},[a,C,z,m,p,u]);const K=U(()=>c===0?"mute":c<=50?"volume-low":"volume",[c]);return D?o.createElement(re,{color:W,size:"15px"}):N?o.createElement("div",null,V("common:error")):o.createElement(le,{className:T},o.createElement("a",{className:`control ${v?"disabled":""}`,onClick:q},v?o.createElement(Z,{size:"16px"}):o.createElement(I,{type:k?"pause":"play"})),o.createElement("div",{className:"slider"},o.createElement(L,{min:0,max:$,step:1,value:O,disabled:v,onChange:F,onChangeStart:G,onChangeComplete:H})),o.createElement("span",{className:"time"},A(f),"/",B),o.createElement(te,{placement:"top",animation:"shift-away-subtle",interactive:!0,hideOnClick:!1,content:o.createElement(ce,{value:c,min:0,max:100,step:1,onChange:S,orientation:"vertical"})},o.createElement("a",{className:"control volume",onClick:J},o.createElement(I,{type:K}))))};export default se;
