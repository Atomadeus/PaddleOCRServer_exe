import s,{useEffect as p,useState as c}from"../../../__snowpack__/pkg/react.js";import{ellipsis as d,size as f,transitionProps as _}from"../../utils/style.js";import g from"../Field.js";import b from"../RangeSlider.js";import{TimeType as o}from"../../resource/curves/index.js";import{format as k}from"../../../__snowpack__/pkg/d3-format.js";import{formatTime as x}from"../../utils/index.js";import r from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as j}from"../../../__snowpack__/pkg/react-i18next.js";const v=k(".2f"),u=r.div`
    color: var(--text-lighter-color);
    font-size: 0.857142857em;
    padding-left: 1.666666667em;
    margin-bottom: 0.416666667em;
    ${_("color")}
`,S=r.span`
    display: inline-block;
    padding-left: 1.428571429em;
    position: relative;
    ${d()}

    &::before {
        content: '';
        display: block;
        ${f("0.857142857em","0.857142857em")}
        background-color: ${t=>t.color};
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }
`,T=r(b)`
    width: 100%;
`,m={[o.WallTime]:"wallTimes",[o.Relative]:"relatives",[o.Step]:"steps"},$={[o.WallTime]:(t,{i18n:e})=>x(t,e.language),[o.Relative]:t=>`${v(t)} ms`,[o.Step]:(t,{t:e})=>`${e("common:time-mode.step")} ${t}`},w=({onChange:t,run:e,type:i})=>{const n=j("common"),[l,a]=c(e.index);return p(()=>a(e.index),[e.index]),s.createElement(g,{label:s.createElement(S,{color:e.colors[0],title:e.label},e.label)},s.createElement(u,null,e[m[i]][l]==null?"...":$[i](e[m[i]][l],n)),s.createElement(T,{min:0,max:e.steps.length?e.steps.length-1:0,step:1,value:l,onChange:a,onChangeComplete:()=>t==null?void 0:t(l)}))};export default w;
