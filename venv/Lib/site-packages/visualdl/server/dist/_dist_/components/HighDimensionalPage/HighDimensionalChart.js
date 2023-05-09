import n,{useCallback as i,useEffect as E,useImperativeHandle as Y,useLayoutEffect as Z,useMemo as U,useRef as I,useState as N}from"../../../__snowpack__/pkg/react.js";import k from"./ChartOperations.js";import ee from"../ScatterChart/index.js";import{rem as te}from"../../utils/style.js";import S from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as se}from"../../../__snowpack__/pkg/react-i18next.js";import ne from"../../hooks/useWorker.js";const ae=S.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
`,ie=S.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${te(20)};

    > .info {
        color: var(--text-light-color);

        > .sep {
            display: inline-block;
            width: 1px;
            background-color: var(--border-color);
            margin: 0 1em;
            height: 1em;
            vertical-align: middle;
        }
    }
`,oe=S.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 0;
    * {
        outline: none;
    }
`,W=n.forwardRef(({vectors:T,labels:C,colorMap:q,shape:j,dim:F,is3D:v,reduction:t,perplexity:r,learningRate:l,neighbors:L,focusedIndices:z,highlightIndices:M,onCalculate:c,onCalculated:p,onError:h,className:w},B)=>{var R;const{t:f}=se(["high-dimensional","common"]),O=I(null),x=I(null),[P,$]=N(0),[D,G]=N(0),[y,J]=N(!1),K=U(()=>y?"labels":"points",[y]);Z(()=>{const s=O.current;if(s){let b=null;const A=new ResizeObserver(()=>{b!=null&&(cancelAnimationFrame(b),b=null),b=requestAnimationFrame(()=>{const H=s.getBoundingClientRect();$(H.width),G(H.height)})});return A.observe(s),()=>A.unobserve(s)}},[]);const Q=U(()=>{const s={input:T,dim:F,n:v?3:2};switch(t){case"pca":return{reduction:t,params:{...s}};case"tsne":return{reduction:t,params:{perplexity:r,epsilon:l,...s}};case"umap":return{reduction:t,params:{neighbors:L,...s}};default:return null}},[F,v,l,L,r,t,T]),{data:a,error:_,worker:e}=ne("high-dimensional/calculate",Q),u=I(null),g=i(()=>{e==null||e.emit("INFO",{type:"step"})},[e]),d=i(()=>{u.current=requestAnimationFrame(g)},[g]),o=i(()=>{t==="tsne"&&(e==null||e.on("RESULT",d),g())},[t,e,d,g]),m=i(()=>{t==="tsne"&&(u.current&&(cancelAnimationFrame(u.current),u.current=null),e==null||e.off("RESULT",d))},[t,e,d]),V=i(()=>{t==="tsne"&&(m(),e==null||e.emit("INFO",{type:"reset"}),e==null||e.once("RESULT",()=>o()))},[t,o,m,e]);E(()=>{if(t==="tsne")return o(),()=>{m()}},[t,o,m]),E(()=>{t==="tsne"&&(e==null||e.emit("INFO",{type:"params",data:{perplexity:r,epsilon:l}}))},[t,r,l,e]);const X=i(()=>{t==="umap"&&(e==null||e.emit("INFO"))},[t,e]);return E(()=>{_?h==null||h(_):a?p==null||p(a):c==null||c()},[a,_,c,p,h]),Y(B,()=>({pauseTSNE:m,resumeTSNE:o,rerunTSNE:V,rerunUMAP:X})),n.createElement(ae,{className:w},n.createElement(ie,null,n.createElement("div",{className:"info"},f("high-dimensional:points"),f("common:colon"),j[0],n.createElement("span",{className:"sep"}),f("high-dimensional:data-dimension"),f("common:colon"),j[1]),n.createElement(k,{labelCloud:y,onToggleLabelCloud:()=>J(s=>!s),onReset:()=>{var s;return(s=x.current)==null?void 0:s.reset()}})),n.createElement(oe,{ref:O},n.createElement(ee,{ref:x,width:P,height:D,data:(R=a==null?void 0:a.vectors)!=null?R:[],labels:C,colorMap:q,is3D:v,rotate:t!=="tsne",focusedIndices:z,highlightIndices:M,type:K})))});W.displayName="HighDimensionalChart";export default W;
