import{useCallback as n,useEffect as g,useLayoutEffect as h,useMemo as L,useRef as s,useState as S}from"../../__snowpack__/pkg/react.js";import{position as k,primaryColor as v,size as T}from"../utils/style.js";import*as _ from"../../__snowpack__/pkg/echarts.js";import{dataURL2Blob as A}from"../utils/image.js";import{saveFile as j}from"../utils/saveFile.js";import F from"../../__snowpack__/pkg/styled-components.js";import{themes as x}from"../utils/theme.js";import b from"./useTheme.js";const w=t=>{const l=s(null),[o,a]=S(null),c=b(),u=s(t.onInit),m=s(t.onDispose),i=n(()=>o==null?void 0:o.dispatchAction({type:"hideTip"}),[o]),d=n(()=>{(async()=>{if(!l.current)return;const e=_.init(l.current);l.current.addEventListener("mouseleave",i),setTimeout(()=>{var r;t.zoom&&e.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:!0}),e&&((r=u.current)==null||r.call(u,e))},0),a(e)})()},[t.gl,t.zoom,i]),C=n(()=>{var e,r;o&&((e=m.current)==null||e.call(m,o),o.dispose(),(r=l.current)==null||r.removeEventListener("mouseleave",i),a(null))},[i,o]);g(()=>(d(),C),[d,C]),g(()=>{t.loading?o==null||o.showLoading("default",{text:"",color:v,textColor:x[c].textColor,maskColor:x[c].maskColor,zlevel:0}):o==null||o.hideLoading()},[t.loading,c,o]);const p=s(null);h(()=>{if(t.autoFit){const e=p.current;if(e){let r=null;const y=new ResizeObserver(()=>{r!=null&&(cancelAnimationFrame(r),r=null),r=requestAnimationFrame(()=>{o==null||o.resize()})});return y.observe(e),()=>y.unobserve(e)}}},[t.autoFit,o]);const f=n(e=>{if(o){const r=A(o.getDataURL({type:"png",pixelRatio:2,backgroundColor:"#FFF"}));j(r,`${e||"chart"}.png`)}},[o]);return{ref:l,echart:o,wrapper:p,saveAsImage:f}};export default w;export const Wrapper=F.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: stretch;

    > .echarts {
        width: 100%;
    }

    > .loading {
        ${T("100%")}
        ${k("absolute",0,null,null,0)}
        display: flex;
        justify-content: center;
        align-items: center;
    }
`,useChartTheme=t=>{const l=b(),o=L(()=>x[l],[l]);return L(()=>t?{title:{textStyle:{color:o.textColor}},tooltip:{backgroundColor:o.tooltipBackgroundColor,borderColor:o.tooltipBackgroundColor,textStyle:{color:o.tooltipTextColor}},xAxis3D:{nameTextStyle:{color:o.textLightColor},axisLabel:{color:o.textLightColor},axisLine:{lineStyle:{color:o.borderColor}},splitLine:{lineStyle:{color:o.borderColor}}},yAxis3D:{nameTextStyle:{color:o.textLightColor},axisLabel:{color:o.textLightColor},axisLine:{lineStyle:{color:o.borderColor}},splitLine:{lineStyle:{color:o.borderColor}}},zAxis3D:{nameTextStyle:{color:o.textLightColor},axisLabel:{color:o.textLightColor},axisLine:{lineStyle:{color:o.borderColor}},splitLine:{lineStyle:{color:o.borderColor}}}}:{title:{textStyle:{color:o.textColor}},tooltip:{backgroundColor:o.tooltipBackgroundColor,borderColor:o.tooltipBackgroundColor,textStyle:{color:o.tooltipTextColor}},xAxis:{nameTextStyle:{color:o.textLightColor},axisLabel:{color:o.textLightColor},axisLine:{lineStyle:{color:o.borderColor}},splitLine:{lineStyle:{color:o.borderColor}}},yAxis:{nameTextStyle:{color:o.textLightColor},axisLabel:{color:o.textLightColor},axisLine:{lineStyle:{color:o.borderColor}},splitLine:{lineStyle:{color:o.borderColor}}}},[o,t])};
