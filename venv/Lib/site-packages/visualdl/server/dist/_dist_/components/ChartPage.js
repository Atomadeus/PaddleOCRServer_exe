import*as T from"../../__snowpack__/env.js";import t,{useCallback as V,useEffect as A,useMemo as m,useState as j}from"../../__snowpack__/pkg/react.js";import{Trans as w,useTranslation as N}from"../../__snowpack__/pkg/react-i18next.js";import{headerHeight as z,link as B,rem as n,transitionProps as K}from"../utils/style.js";import y from"./ChartCollapse.js";import{ChartCollapseTitle as L}from"./Loader/ChartPage.js";import O from"./Pagination.js";import U from"./SearchInput.js";import H from"../../__snowpack__/pkg/lodash/groupBy.js";import f from"../../__snowpack__/pkg/styled-components.js";import I from"../hooks/useSearchValue.js";const M=T.SNOWPACK_PUBLIC_PATH,W=f(O)`
    margin-top: ${n(20)};
`,R=f.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: flex-start;
    margin-bottom: -${n(20)};

    > * {
        margin: 0 ${n(20)} ${n(20)} 0;
        flex-shrink: 0;
        flex-grow: 0;

        &.maximized {
            margin-right: 0;
        }
    }
`,F=f.div`
    width: ${n(280)};
    margin-bottom: ${n(16)};
`,x=f.div`
    width: 100%;
    text-align: center;
    font-size: ${n(16)};
    color: var(--text-lighter-color);
    line-height: ${n(24)};
    height: ${r=>{var c;return(c=r.height)!=null?c:"auto"}};
    padding: ${n(320)} 0 ${n(70)};
    background-color: var(--background-color);
    background-image: url(${`${M}/images/empty.svg`});
    background-repeat: no-repeat;
    background-position: calc(50% + ${n(25)}) ${n(70)};
    background-size: ${n(280)} ${n(244)};
    ${K(["color","background-color"])}
    ${B}
`,q=({items:r,loading:c,loader:E,renderChart:g,className:v})=>{const{t:s}=N("common"),[i,$]=j(1),_=12,[b,C]=j(""),p=I(b),o=m(()=>{var e;try{const a=new RegExp(p);return(e=r==null?void 0:r.filter(l=>a.test(l.label)))!=null?e:[]}catch{return[]}},[r,p]),d=m(()=>{var e;return(e=o==null?void 0:o.slice((i-1)*_,i*_))!=null?e:[]},[o,i]);A(()=>{$(1)},[p]);const k=m(()=>Object.entries(H(r!=null?r:[],e=>e.label.split("/")[0])).sort(([e],[a])=>{const l=e.toUpperCase(),h=a.toUpperCase();return l<h?-1:l>h?1:0}),[r]),P=m(()=>Math.ceil(o.length/_),[o]),u=V((e,a)=>t.createElement(R,null,c?E:e.length?e.map((l,h)=>t.createElement(t.Fragment,{key:l.id||l.label},g==null?void 0:g(l,h))):t.createElement(x,{height:n(500)},a?t.createElement(w,{i18nKey:"common:search-empty"},"Nothing found. Please try again with another word.",t.createElement("br",null),"Or you can ",t.createElement("a",{onClick:()=>C("")},"see all charts"),"."):s("common:empty"))),[c,s,E,g]),S=m(()=>c?Array.from({length:3}).map((e,a)=>t.createElement(y,{key:a,title:t.createElement(L,null),opened:!a},u([]))):p?t.createElement(y,{title:s("common:search-result"),total:o.length},u(d,!0),d.length?t.createElement(W,{page:i,total:P,onChange:$}):null):k.length?k.map((e,a)=>t.createElement(y,{title:e[0],key:e[0],total:e[1].length,opened:a===0},u(e[1]))):t.createElement(x,{height:`calc(100vh - ${z} - ${n(96)})`},t.createElement(w,{i18nKey:"common:unselected-empty"},"Nothing selected.",t.createElement("br",null),"Please select display data from right side.")),[k,c,o.length,i,d,p,s,P,u]);return t.createElement("div",{className:v},t.createElement(F,null,t.createElement(U,{placeholder:s("common:search-tags"),rounded:!0,value:b,onChange:e=>C(e)})),S)};export default q;
