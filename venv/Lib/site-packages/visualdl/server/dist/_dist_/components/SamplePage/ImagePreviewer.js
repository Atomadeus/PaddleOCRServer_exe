import t,{useCallback as g,useEffect as p,useLayoutEffect as ee,useMemo as te,useRef as F,useState as s}from"../../../__snowpack__/pkg/react.js";import{em as I,headerHeight as R,primaryColor as ne,rem as d,zIndexes as re}from"../../utils/style.js";import le from"../../../__snowpack__/pkg/react-spinners/GridLoader.js";import m from"../Icon.js";import oe from"../RangeSlider.js";import H from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as ie}from"../../../__snowpack__/pkg/react-i18next.js";const ae=H.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${re.dialog};
    height: 100vh;
    width: 100vw;
    background-color: var(--dark-mask-color);
`,se=H.div`
    position: relative;
    height: ${R};
    width: 100%;
    background-color: var(--model-header-background-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .step-slider {
        display: flex;
        align-items: center;
        flex-grow: 1;
        margin: 0 ${d(20)};

        .slider {
            width: 31.7213115%;
            margin: 0 ${d(12)};
        }

        .step-buttons {
            margin-left: ${I(10)};
            display: flex;
            flex-direction: column;
            font-size: ${I(10)};

            > a {
                display: inline-block;
                line-height: 1;
                height: ${I(14)};

                &:hover {
                    color: var(--text-lighter-color);
                }

                > i {
                    display: inline-block;
                    height: 100%;

                    > svg {
                        vertical-align: top;
                    }
                }
            }
        }
    }

    .buttons {
        display: flex;
        align-items: center;
        font-size: ${d(24)};

        > * {
            margin-right: ${d(30)};
        }

        > a {
            height: ${d(24)};
            overflow: hidden;
        }

        > span {
            width: 1px;
            height: ${d(30)};
            background-color: var(--border-color);
        }
    }
`,ce=H.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: calc(100% - ${R});
    width: 100%;
    top: ${R};
    left: 0;
    overflow: hidden;

    > img {
        cursor: ${h=>h.grabbing?"grabbing":"grab"};
    }
`,y=3,x=.1,ue=({data:h,loading:U,error:z,steps:f,step:c,onClose:A,onChange:E,onChangeComplete:J})=>{const{t:_}=ie("sample"),[i,G]=s(c!=null?c:0);p(()=>G(c!=null?c:0),[c]);const v=g(e=>{G(e),E==null||E(e)},[E]),K=g(()=>{i>0&&v(i-1)},[i,v]),Q=g(()=>{i<f.length-1&&v(i+1)},[i,f,v]),[u,S]=s("");ee(()=>{if(h){let e=null;return e=URL.createObjectURL(h.data),S(e),()=>{e&&URL.revokeObjectURL(e)}}},[h]);const L=F(null),M=F(null),[N,w]=s(0),[W,b]=s(0);p(()=>{if(u){const e=new Image;e.src=u,e.onload=()=>{var l;const n=(l=L.current)==null?void 0:l.getBoundingClientRect();if(n){const a=n.width/n.height,r=e.naturalWidth/e.naturalHeight;a>=r&&e.naturalHeight>n.height*.9?(b(n.height*.9),w(r*n.height*.9)):r>=a&&e.naturalWidth>n.width*.9?(w(n.width*.9),b(n.width/r*.9)):(w(e.naturalWidth),b(e.naturalHeight))}}}return()=>{w(0),b(0)}},[u]);const[X,j]=s(1),Y=g(e=>j(n=>n+e>y?y:n+e<x?x:n+e),[]);p(()=>{const e=L.current,n=l=>{l.preventDefault(),j(a=>{const r=a-l.deltaY*.007;return r>y?y:r<x?x:r})};return e==null||e.addEventListener("wheel",n),()=>{e==null||e.removeEventListener("wheel",n)}},[]);const[V,D]=s(!1),[O,P]=s(0),[B,T]=s(0);p(()=>{const e=M.current;let n=!1,l=0,a=0;const r=o=>{o.preventDefault(),D(!0),n=!0,l=o.clientX,a=o.clientY},q=o=>{o.preventDefault(),n&&(P(C=>C+(o.clientX-l)),T(C=>C+(o.clientY-a)),l=o.clientX,a=o.clientY)},k=()=>{D(!1),n=!1};return e==null||e.addEventListener("mousedown",r),e==null||e.addEventListener("mousemove",q),e==null||e.addEventListener("mouseup",k),e==null||e.addEventListener("mouseout",k),()=>{e==null||e.removeEventListener("mousedown",r),e==null||e.removeEventListener("mousemove",q),e==null||e.removeEventListener("mouseup",k),e==null||e.removeEventListener("mouseout",k)}},[u]);const $=g(()=>{j(1),P(0),T(0)},[]);p(()=>$,[u,$]);const Z=te(()=>U?t.createElement(le,{color:ne,size:"10px"}):z?t.createElement("div",null,_("common:error")):t.createElement("img",{src:u,ref:M,onClick:e=>e.stopPropagation(),style:{width:N,height:W,transform:`translate(${O}px, ${B}px) scale(${X})`}}),[u,U,z,N,W,O,B,X,_]);return t.createElement(ae,null,t.createElement(se,null,t.createElement("div",{className:"step-slider"},t.createElement("span",null,_("common:time-mode.step")),t.createElement(oe,{className:"slider",min:0,max:f.length?f.length-1:0,step:1,value:i,onChange:v,onChangeComplete:J}),t.createElement("span",null,f[i]),t.createElement("div",{className:"step-buttons"},t.createElement("a",{href:"javascript:void(0)",onClick:K},t.createElement(m,{type:"chevron-up"})),t.createElement("a",{href:"javascript:void(0)",onClick:Q},t.createElement(m,{type:"chevron-down"})))),t.createElement("div",{className:"buttons"},t.createElement("a",{href:"javascript:void(0)",onClick:()=>Y(.1)},t.createElement(m,{type:"plus-circle"})),t.createElement("a",{href:"javascript:void(0)",onClick:()=>Y(-.1)},t.createElement(m,{type:"minus-circle"})),t.createElement("a",{href:"javascript:void(0)",onClick:$},t.createElement(m,{type:"restore-circle"})),t.createElement("span",null),t.createElement("a",{href:"javascript:void(0)",onClick:A},t.createElement(m,{type:"close"})))),t.createElement(ce,{ref:L,onClick:A,grabbing:V},Z))};export default ue;
