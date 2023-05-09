import*as g from"../../../__snowpack__/pkg/d3.js";import{COLOR_MAP as c,getColorScale as _}from"../../resource/hyper-parameter/index.js";import o,{useEffect as E,useMemo as n,useState as k}from"../../../__snowpack__/pkg/react.js";import j from"./BorderLessSelect.js";import{rem as f}from"../../utils/style.js";import w from"../../../__snowpack__/pkg/styled-components.js";const b=w.div`
    width: ${f(88)};
    margin-left: ${f(20)};
    display: flex;
    flex-direction: column;

    .color-by {
        flex: none;
        margin-bottom: 1em;
    }

    .color-indicator {
        flex: auto;
        display: flex;
        color: var(--text-light-color);

        .indicator-image {
            flex: none;
            width: 1em;
            background-image: linear-gradient(0deg, ${c[0]} 0%, ${c[1]} 50%, ${c[2]} 100%);
            margin: 0.5em 0;
        }

        .indicator-text {
            flex: auto;
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            margin-left: 0.5em;
        }
    }
`,N=({indicators:l,data:r,onChange:m})=>{var p;const i=n(()=>l.filter(e=>e.type==="continuous").map(e=>e.name),[l]),[a,d]=k((p=i[0])!=null?p:null),t=n(()=>l.find(e=>e.name===a),[a,l]),u=n(()=>t?g.extent(r.map(e=>+e[t.group][t.name])).map(e=>Math.round((e!=null?e:0)*1e3)/1e3):[0,0],[t,r]);return E(()=>{const e=_(t!=null?t:null,r),s=r.map((x,y)=>e(t?x[t.group][t.name]:y));m==null||m(s)},[t,r,m]),o.createElement(b,{className:"color-map"},o.createElement("div",{className:"color-by"},o.createElement(j,{list:i,value:a,onChange:d})),o.createElement("div",{className:"color-indicator"},o.createElement("div",{className:"indicator-image"}),o.createElement("div",{className:"indicator-text"},u.map((e,s)=>o.createElement("span",{key:s},e!=null?e:"")))))};export default N;
