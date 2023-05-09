import a,{useCallback as p,useLayoutEffect as i,useRef as v,useState as B}from"../../__snowpack__/pkg/react.js";import{asideWidth as N,rem as s,transitionProps as S}from"../utils/style.js";import x from"../../__snowpack__/pkg/styled-components.js";export const AsideSection=x.section`
    margin: ${s(20)};

    &:not(:last-child) {
        border-bottom: 1px solid var(--border-color);
        padding-bottom: ${s(20)};
        margin-bottom: 0;
        ${S("border-color")}
    }

    & > & {
        margin-left: 0;
        margin-right: 0;
    }
`;const A=x.div.attrs(({width:e})=>({style:{width:typeof e=="number"?`${e}px`:e}}))`
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;

    > .aside-top {
        flex: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;

        > ${AsideSection} {
            flex: none;
        }
    }

    > .aside-bottom {
        flex: none;
        box-shadow: 0 -${s(5)} ${s(16)} 0 rgba(0, 0, 0, 0.03);
        padding: ${s(20)};

        > ${AsideSection} {
            margin-left: 0;
            margin-right: 0;

            &:first-child {
                margin-top: 0;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    > .aside-resize-bar-left,
    > .aside-resize-bar-right {
        position: absolute;
        width: ${s(8)};
        height: 100%;
        top: 0;
        cursor: col-resize;
        touch-action: none;

        &.aside-resize-bar-left {
            left: 0;
        }
        &.aside-resize-bar-right {
            right: 0;
        }
    }
`,X=({width:e,bottom:b,resizable:c,minWidth:t,maxWidth:r,onResized:u,className:_,children:h})=>{const[k,L]=B(e!=null?e:N),o=v(null),m=v(!1),n=v({min:t!=null?t:null,max:r!=null?r:null});i(()=>{n.current.min=t!=null?t:null},[t]),i(()=>{n.current.max=r!=null?r:null},[r]),i(()=>{if(n.current.min==null&&o.current){const{width:g}=o.current.getBoundingClientRect();n.current.min=g}},[]);const C=p(()=>{m.current=!0},[]),f=p(g=>{var $,w,y;if(o.current&&m.current){const E=g.clientX,{left:M,right:j}=o.current.getBoundingClientRect();let l=0;c==="left"?l=Math.max(($=n.current.min)!=null?$:0,j-E):c==="right"&&(l=Math.max((w=n.current.min)!=null?w:0,E-M)),l=Math.min((y=n.current.max)!=null?y:document.body.clientWidth/2,l),L(l)}},[c]),d=p(()=>{m.current=!1,o.current&&(u==null||u(o.current.getBoundingClientRect().width))},[u]);return i(()=>(document.addEventListener("mousemove",f),()=>document.removeEventListener("mousemove",f)),[f]),i(()=>(document.addEventListener("mouseup",d),()=>document.removeEventListener("mouseup",d)),[d]),a.createElement(A,{width:k,className:_,ref:o},c?a.createElement("div",{className:`aside-resize-bar-${c}`,onMouseDown:C}):null,a.createElement("div",{className:"aside-top"},h),b&&a.createElement("div",{className:"aside-bottom"},b))};export default X;
