import o from"../../__snowpack__/pkg/react.js";import{contentHeight as d,contentMargin as p,headerHeight as i,position as h,transitionProps as a}from"../utils/style.js";import f from"./BodyLoading.js";import e from"../../__snowpack__/pkg/styled-components.js";const k=e.section`
    display: flex;
    font-family: PingFangSC-Regular;
    aside {
        position: static;
        height: auto;
    }
`,y=e.article`
    flex: auto;
    min-width: 0;
    margin: ${p};
    min-height: ${d};
`,c=e.aside`
    flex: none;
    background-color: var(--background-color);
    height: ${`calc(100vh - ${i})`};
    ${h("sticky",i,0,null,null)}
    width:18.571428571428573rem;
    overflow-x: hidden;
    overflow-y: auto;
    ${a("background-color")}
`,v=e.aside`
    flex: none;
    background-color: var(--background-color);
    height: auto;
    position: static;
    overflow-x: hidden;
    overflow-y: auto;
    ${a("background-color")}
`,x=({children:s,aside:t,leftAside:n,loading:u,className:g,isProfiler:m,show:l,nodeShow:r})=>o.createElement(k,{className:g},n&&o.createElement(c,null,n),o.createElement(y,null,s),t&&m?o.createElement(v,null,t):o.createElement(c,{style:{display:t?"inline-block":"none",height:t||l?r?"auto":"calc(100vh - 13.28571rem)":"0px",position:l?"relative":"absolute",top:"0px"}},t),u&&o.createElement(f,null));export default x;
