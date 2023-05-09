import o,{useCallback as g,useEffect as h,useState as $}from"../../../__snowpack__/pkg/react.js";import{css as x,ellipsis as T,em as r,rem as k,sameBorder as j,size as V,transitionProps as b,triangle as X}from"../../utils/style.js";import B from"../Field.js";import L from"../SearchInput.js";import s from"../../../__snowpack__/pkg/styled-components.js";import N from"../../hooks/useSearchValue.js";import{useTranslation as P}from"../../../__snowpack__/pkg/react-i18next.js";const W=s(B)`
    margin-bottom: ${k(20)};
    display: flex;
    justify-content: space-between;
    align-items: center;

    > :first-child {
        flex: auto;
    }

    > a:last-child {
        color: var(--primary-color);
        cursor: pointer;
        margin-left: ${k(10)};
        flex: none;
        ${b("color")}
    }
`,q=s.div`
    padding: ${k(100)} 0;
    text-align: center;
    color: var(--text-light-color);
    ${b("color")}
`,G=s.div`
    overflow: auto;
`,H=s.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`,J=s.li`
    padding: ${r(10)} ${r(12)};
    cursor: pointer;
    width: 100%;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    ${b("background-color")}

    > span {
        flex: auto;
        margin-left: ${r(10)};
        ${T()}
    }

    &:hover {
        background-color: var(--background-focused-color);
    }
`,y=x`
    color: #979797;
    flex: none;
    width: ${r(8)};
`,I=s.i`
    ${y}
    position: relative;
    height: ${r(11)};
    overflow: hidden;

    &::before {
        content: '';
        display: block;
        ${V(r(6),r(1))}
        background-color: currentColor;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

    &::after {
        content: '';
        display: block;
        ${X({pointingDirection:"bottom",height:r(5),width:r(7),foregroundColor:"currentColor"})}
        position: absolute;
        top: ${r(6)};
        left: 50%;
        transform: translateX(-50%);
    }
`,K=s.i`
    ${y}
    height: ${r(7)};
    ${j({radius:r(2),color:"currentColor"})}
    background-color: #f7f7f7;
`,M=s.i`
    ${y}
    height: ${r(8)};
    ${j({radius:r(4),color:"currentColor"})}
    background-color: #f7f7f7;
`,O={input:I,output:I,node:K,initializer:M},Q=({text:c,data:n,onChange:e,onSelect:a,onActive:i,onDeactive:l})=>{const{t:d}=P(["graph","common"]),[u,m]=$(c!=null?c:""),[p,f]=$(!1),[E,_]=$(n.result),w=N(u);h(()=>m(c!=null?c:""),[c]),h(()=>{p?e==null||e(w):_([])},[w,p,e]),h(()=>{n.text===u&&_(n.result)},[n,u]);const S=g(()=>{f(!0),i==null||i()},[i]),F=g(()=>{m(""),e==null||e(""),f(!1),l==null||l()},[e,l]),z=g(t=>{m(t.name),a==null||a(t),f(!1),l==null||l()},[a,l]);return o.createElement(o.Fragment,null,o.createElement(W,null,o.createElement(L,{placeholder:d("common:search"),value:u,onChange:m,onFocus:S}),p&&o.createElement("a",{onClick:F},d("common:cancel"))),p&&(E.length?o.createElement(G,null,o.createElement(H,null,E.map(t=>{const R=O[t.type];return o.createElement(J,{key:t.id,onClick:()=>z(t),title:t.name},o.createElement(R,null),o.createElement("span",null,t.name))}))):o.createElement(q,null,d("graph:nothing-matched"))))};export default Q;
