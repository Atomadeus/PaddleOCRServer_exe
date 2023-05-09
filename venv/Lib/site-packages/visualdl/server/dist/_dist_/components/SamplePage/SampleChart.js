import l,{useCallback as U,useEffect as C,useMemo as k,useRef as $,useState as S}from"../../../__snowpack__/pkg/react.js";import{ellipsis as M,em as _,primaryColor as Z,rem as p,size as ee,transitionProps as V}from"../../utils/style.js";import te,{useRunningRequest as re}from"../../hooks/useRequest.js";import ne from"../ChartToolbox.js";import oe from"../../../__snowpack__/pkg/react-spinners/GridLoader.js";import le from"./StepSlider.js";import{formatTime as ie}from"../../utils/index.js";import W from"../../../__snowpack__/pkg/lodash/isEmpty.js";import se from"../../../__snowpack__/pkg/mime-types.js";import B from"../../../__snowpack__/pkg/query-string.js";import{saveFile as ce}from"../../utils/saveFile.js";import x from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as ae}from"../../../__snowpack__/pkg/react-i18next.js";const me=x.div`
    height: 100%;
    padding: ${_(20)};
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    > * {
        flex-grow: 0;
        flex-shrink: 0;
    }
`,ue=x.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${_(20)};

    > h4 {
        font-size: ${_(16)};
        font-weight: 700;
        flex-shrink: 1;
        flex-grow: 1;
        padding: 0;
        margin: 0;
        ${M()}
    }

    > span {
        font-size: ${_(14)};
        flex-shrink: 0;
        flex-grow: 0;
        color: var(--text-light-color);
        ${M()}
        max-width: 50%;
        ${V("color")}

        &::before {
            content: '';
            display: inline-block;
            ${ee(p(5),p(17))}
            margin-right: ${p(8)};
            border-radius: ${p(2.5)};
            vertical-align: middle;
            background-color: ${n=>n.color};
        }
    }
`,pe=x.div`
    flex-grow: 1;
    flex-shrink: 1;
    margin: ${_(20)} 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    cursor: ${n=>n.preview?"zoom-in":"default"};
`,fe=x.div`
    margin-bottom: ${p(18)};
    display: flex;
    align-items: center;
    justify-content: space-between;
`,de=x.div`
    color: var(--text-lighter-color);
    font-size: ${p(12)};
    ${V("color")}

    > * {
        display: inline-block;
        margin-left: ${p(10)};
    }
`;export const getEntityUrl=(n,i,T,f,b)=>`/${n}/${n}?${B.stringify({index:i,ts:b,run:T,tag:f})}`;const ge=({run:n,tag:i,running:T,type:f,cache:b,footer:H,renderContent:q,renderPreviewer:v})=>{const{t:d,i18n:J}=ae(["sample","common"]),{data:r,error:z,loading:A}=re(`/${f}/list?${B.stringify({run:n.label,tag:i})}`,!!T),a=k(()=>{var e;return(e=r==null?void 0:r.map(o=>o.step))!=null?e:[]},[r]),[E,L]=S(!1),[t,j]=S(0),[g,D]=S(),s=$({}),h=$(null),F=$(null);C(()=>{const e=o=>{const Y=document.querySelectorAll(":hover");(E||Array.from(Y).some(c=>c.isSameNode(F.current)))&&(o.key==="ArrowLeft"||o.key==="ArrowUp"?(j(c=>c>0?c-1:c),o.preventDefault()):(o.key==="ArrowRight"||o.key==="ArrowDown")&&(j(c=>c<a.length-1?c+1:c),o.preventDefault()))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a,E]),C(()=>{Object.values(s.current).forEach(({timer:e})=>window.clearTimeout(e)),s.current={}},[i,n]);const y=k(()=>{var e;return(e=r==null?void 0:r[t].wallTime)!=null?e:0},[r,t]),w=U(()=>{if(!r)return;const e=getEntityUrl(f,t,n.label,i,y);s.current[t]={src:e,timer:window.setTimeout(()=>{(o=>delete s.current[o])(t)},b)},D(e),h.current=null},[f,t,n.label,i,y,r,b]);C(()=>{if(s.current[t])D(s.current[t].src);else if(W(s.current))w();else return h.current=window.setTimeout(w,500),()=>{h.current!=null&&(window.clearTimeout(h.current),h.current=null)}},[t,w]);const[I,K]=S(!1),R=$(null),G=$(new IntersectionObserver(e=>{var o;e[0].intersectionRatio>0&&(K(!0),(o=G.current)==null||o.disconnect())}));C(()=>{const e=G.current;if(R.current&&e)return e.observe(R.current),()=>e.disconnect()},[]);const{data:m,error:N,loading:O}=te(g!=null?g:null,{dedupingInterval:5*60*1e3}),P=U(()=>{if(m){const e=m.type?se.extension(m.type):null;ce(m.data,`${n.label}-${i}-${a[t]}-${y}`+(e?`.${e}`:""))}},[m,n.label,i,a,t,y]),u=k(()=>{if(g)return{data:m,error:N,loading:O}},[g,m,N,O]),Q=k(()=>A||!s.current[t]||!I?l.createElement(oe,{color:Z,size:"10px"}):!r&&z?l.createElement("span",null,d("common:error")):W(r)?l.createElement("span",null,d("common:empty")):u?q(u):null,[I,A,z,r,t,u,d,q]),X=k(()=>!v||!E||!u?null:v({...u,loading:!s.current[t]||u.loading,steps:a,step:t,onClose:()=>L(!1),onChange:j,onChangeComplete:w}),[v,u,E,a,t,w]);return l.createElement(me,{ref:F},l.createElement(ue,{color:n.colors[0]},l.createElement("h4",null,i),l.createElement("span",null,n.label)),l.createElement(le,{value:t,steps:a,onChange:j,onChangeComplete:w},ie(y,J.language)),l.createElement(pe,{ref:R,preview:!!v&&!!g,onClick:()=>L(!0)},Q),X,l.createElement(fe,null,l.createElement(ne,{items:[{icon:"download",tooltip:d(`sample:download-${f}`),onClick:P}]}),l.createElement(de,null,l.createElement("span",null,d("sample:sample"),d("common:colon"),(r==null?void 0:r.length)?`${t+1}/${r.length}`:"--/--"),H)))};export default ge;
