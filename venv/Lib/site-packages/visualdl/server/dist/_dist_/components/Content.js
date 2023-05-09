import o from"../../__snowpack__/pkg/react.js";import{contentHeight as d,contentMargin as g,headerHeight as l,position as m,transitionProps as r}from"../utils/style.js";import f from"./BodyLoading.js";import e from"../../__snowpack__/pkg/styled-components.js";const h=e.section`
    display: flex;
    font-family: PingFangSC-Regular;
    aside {
        position: static;
        height: auto;
    }
`,p=e.article`
    flex: auto;
    min-width: 0;
    margin: ${g};
    min-height: ${d};
`,i=e.aside`
    flex: none;
    background-color: var(--background-color);
    height: ${`calc(100vh - ${l})`};
    ${m("sticky",l,0,null,null)}
    overflow-x: hidden;
    overflow-y: auto;
    ${r("background-color")}
`,k=e.aside`
    flex: none;
    background-color: var(--background-color);
    height: auto;
    position: static;
    overflow-x: hidden;
    overflow-y: auto;
    ${r("background-color")}
`,y=({children:c,aside:t,leftAside:n,loading:a,className:s,isProfiler:u})=>o.createElement(h,{className:s},n&&o.createElement(i,null,n),o.createElement(p,null,c),t&&u?o.createElement(k,null,t):t?o.createElement(i,null,t):null,a&&o.createElement(f,null));export default y;
