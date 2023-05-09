import e,{useCallback as o,useEffect as p,useRef as g,useState as E}from"../../../../__snowpack__/pkg/react.js";import h from"./NumberInput.js";import{rem as d}from"../../../utils/style.js";import u from"../../../../__snowpack__/pkg/styled-components.js";import{useTranslation as y}from"../../../../__snowpack__/pkg/react-i18next.js";const I=u(h)`
    width: 100%;
`,f=u.div`
    display: flex;
    align-items: center;

    > * {
        flex-grow: 1;
    }

    > .label {
        flex-grow: 0;
        flex-shrink: 0;
        margin-right: 1em;
        text-align: right;
        min-width: ${d(36)};
    }
`,b=({min:a,max:n,onChange:m})=>{const{t:l}=y("hyper-parameter"),[t,i]=E({min:a!=null?a:Number.NEGATIVE_INFINITY,max:n!=null?n:Number.POSITIVE_INFINITY}),N=o(r=>{i(c=>({...c,min:r}))},[]),_=o(r=>{i(c=>({...c,max:r}))},[]),s=g(m);return p(()=>{s.current=m},[m]),p(()=>{var r;t.min===a&&t.max===n||(r=s.current)==null||r.call(s,t)},[n,a,t]),e.createElement(e.Fragment,null,e.createElement(f,null,e.createElement("span",{className:"label"},l("hyper-parameter:min")),e.createElement(I,{value:t.min,defaultValue:Number.NEGATIVE_INFINITY,placeholder:l("hyper-parameter:negative-infinity"),onChange:N})),e.createElement(f,null,e.createElement("span",{className:"label"},l("hyper-parameter:max")),e.createElement(I,{value:t.max,defaultValue:Number.POSITIVE_INFINITY,placeholder:l("hyper-parameter:positive-infinity"),onChange:_})))};export default b;
