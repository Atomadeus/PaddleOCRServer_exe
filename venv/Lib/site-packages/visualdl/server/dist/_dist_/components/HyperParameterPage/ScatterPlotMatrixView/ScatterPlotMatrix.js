import s,{useCallback as p,useMemo as n,useRef as D,useState as i}from"../../../../__snowpack__/pkg/react.js";import y from"./ScatterChart/ScatterChart.js";import{ScaleMethod as C}from"../../../resource/hyper-parameter/index.js";import N from"../ScaleMethodSelect.js";import F from"./ScatterChart/index.js";import{rem as m}from"../../../utils/style.js";import O from"../../../../__snowpack__/pkg/styled-components.js";const U=150,V=O.div`
    overflow-x: auto;
    /* this is not allowed, so we change our dropdown list popup direction to top */
    /* overflow-y: visible; */
    display: flex;
    flex-direction: column;
    --label-size: 1em;
    --chart-size: ${m(U+y.MARGIN_WITHOUT_LABEL*2)};

    .row {
        display: flex;
        flex-direction: row;
    }

    .metrics {
        display: block;
        text-align: center;
        font-weight: 700;
        width: var(--label-size);
        height: var(--chart-size);
        line-height: var(--label-size);

        > span {
            display: inline-block;
            width: var(--chart-size);
            height: var(--label-size);
            transform: rotate(270deg) translate(calc(-1 * var(--chart-size)), 0);
            transform-origin: left top;
        }
    }

    .hparams {
        display: block;
        width: var(--chart-size);
        text-align: center;
        flex: none;

        > span {
            height: var(--label-size);
            line-height: var(--label-size);
        }
    }

    .metrics-hparams {
        width: calc(${m(14)} + ${y.MARGIN_LEFT_WITH_LABEL-y.MARGIN_WITHOUT_LABEL}px);
    }

    .row-scale-method-selector {
        margin: ${m(10)} 0 ${m(10)} calc(${m(10)} + var(--label-size));
        height: 1em;
    }

    .column-scale-method-selector {
        margin-top: ${m(10)};
    }
`,H=({indicators:r,data:M,colors:b,onHover:u,onSelect:d})=>{const S=D({colors:b}),c=n(()=>r.filter(e=>e.group==="metrics"),[r]),o=n(()=>r.filter(e=>e.group==="hparams"),[r]),[z,x]=i(null),[I,A]=i(null),[_,L]=i(null),[g,B]=i(null),R=p(e=>{x(e),u==null||u(e)},[u]),j=p(e=>{A(e),d==null||d(e)},[d]),T=p((e,t,a)=>{L(a),B(a!=null?[e,t]:null)},[]),$=p((e,t)=>g&&g[0]===e&&g[1]===t?void 0:_,[_,g]),[f,W]=i(new WeakMap),E=n(()=>c.map(e=>{var t;return e.type==="continuous"?(t=f.get(e))!=null?t:C.LINEAR:null}),[c,f]),v=n(()=>o.map(e=>{var t;return e.type==="continuous"?(t=f.get(e))!=null?t:C.LINEAR:null}),[o,f]),k=p((e,t)=>{W(a=>{const l=new WeakMap;return r.forEach(h=>{a.has(h)&&l.set(h,a.get(h))}),l.set(e,t),l})},[r]),w=n(()=>c.map(e=>o.map(t=>({data:M.map(a=>[a[t.group][t.name],a[e.group][e.name]]),type:[t.type,e.type]}))),[M,o,c]),G=n(()=>w.map((e,t)=>e.map((a,l)=>({data:a,options:{...S.current,labelVisible:[t===w.length-1,l===0]},scaleMethods:[v[l],E[t]]}))),[w,v,E]);return s.createElement(V,null,G.map((e,t)=>s.createElement(s.Fragment,{key:t},s.createElement("div",{className:"row-scale-method-selector"},E[t]!=null?s.createElement(N,{scaleMethod:E[t],onChange:a=>k(c[t],a)}):null),s.createElement("div",{className:"row"},s.createElement("div",{className:"metrics"},s.createElement("span",null,c[t].name)),e.map((a,l)=>s.createElement("div",{className:"cell",key:l},s.createElement(F,{...a,colors:b,hover:z,select:I,brush:$(t,l),onHover:R,onSelect:j,onBrush:h=>T(t,l,h)})))))),s.createElement("div",{className:"row"},s.createElement("span",{className:"metrics-hparams"}),o.map((e,t)=>s.createElement("div",{className:"hparams",key:t},s.createElement("span",null,e.name),s.createElement("div",{className:"column-scale-method-selector"},v[t]!=null?s.createElement(N,{direction:"top",scaleMethod:v[t],onChange:a=>k(o[t],a)}):null)))))};export default H;
