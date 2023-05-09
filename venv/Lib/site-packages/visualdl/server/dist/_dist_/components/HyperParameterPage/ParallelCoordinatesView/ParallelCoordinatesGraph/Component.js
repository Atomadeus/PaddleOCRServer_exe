import d,{useCallback as _,useEffect as a,useMemo as N,useRef as E,useState as u}from"../../../../../__snowpack__/pkg/react.js";import R from"./ParallelCoordinatesGraph.js";import{ScaleMethod as O}from"../../../../resource/hyper-parameter/index.js";import P from"../../ScaleMethodSelect.js";import j from"../../../../../__snowpack__/pkg/styled-components.js";const A=j.div`
    width: 100%;
    overflow: auto;

    .interpolates {
        display: flex;
        margin-left: ${R.GRID_BRUSH_WIDTH/2}px;
        margin-top: 1em;
    }

    svg {
        .line {
            fill: none;
        }
        .hover-trigger {
            cursor: pointer;
        }
        .select-indicator {
            fill: var(--background-color);
            stroke-width: 2px;
        }
        .disabled {
            .line {
                stroke: var(--hyper-parameter-graph-disabled-data-color);
            }

            .stroke-width {
                stroke: var(--hyper-parameter-graph-disabled-data-color);
            }

            .hover-trigger {
                cursor: unset;
            }
        }
        .grid {
            .indicator {
                fill: var(--text-color);
                dominant-baseline: text-before-edge;

                &.metrics {
                    font-weight: bold;
                }

                .dragger {
                    opacity: 0;
                    cursor: grab;
                }

                &:hover .dragger {
                    opacity: 1;
                }
            }

            .axis {
                color: var(--hyper-parameter-graph-axis-color);

                text {
                    color: var(--text-light-color);
                    pointer-events: none;
                }

                .grid-brush .selection {
                    fill: var(--hyper-parameter-graph-brush-color);
                    fill-opacity: 0.4;
                }
            }

            &.dragging {
                .indicator {
                    fill: var(--primary-color);
                }

                .dragger {
                    opacity: 1;
                    cursor: grabbing;
                    filter: invert(16%) sepia(99%) saturate(5980%) hue-rotate(243deg) brightness(89%) contrast(98%);
                }
            }
        }
    }
`,L=j(P)`
    position: relative;
`,b=(n,l)=>l?n.sort(({name:g},{name:c})=>l.indexOf(g)-l.indexOf(c)):n,T=({indicators:n,data:l,colors:g,order:c,onHover:p,onSelect:m,onChangeOrder:i,className:W})=>{const f=E(null),t=E(),[D,y]=u(0),[x,h]=u(b(n,c).map(({name:e})=>e));a(()=>{h(b(n,c).map(({name:e})=>e))},[n,c]);const G=N(()=>x.filter(e=>n.findIndex(r=>r.name===e)>=0).map(e=>n.find(r=>r.name===e)),[x,n]),[I,$]=u(n.reduce((e,r)=>(r.type==="continuous"&&(e[r.name]=O.LINEAR),e),{})),[z,k]=u(null),[B,w]=u(0),C=_((e,r)=>{var o;$(s=>({...s,[e.name]:r})),(o=t.current)==null||o.setScaleMethod(e.name,r)},[]);a(()=>{if(!!f.current)return t.current=new R(f.current),t.current.on("dragging",(e,r,o)=>{k(e),w(r),h(o)}),t.current.on("dragged",e=>{k(null),w(0),h(e)}),()=>{var e;return(e=t.current)==null?void 0:e.dispose()}},[i]);const v=_(e=>i==null?void 0:i(e),[i]);return a(()=>{const e=t.current;if(e)return e.on("dragged",v),()=>{e.off("dragged",v)}},[v]),a(()=>{const e=f.current;if(e){const r=new ResizeObserver(()=>{var s,S,M;const o=e.getBoundingClientRect();(s=t.current)==null||s.resize(o.width),y((M=(S=t.current)==null?void 0:S.columnWidth)!=null?M:0)});return r.observe(e),()=>{r.unobserve(e)}}},[]),a(()=>{var e;if(p)return(e=t.current)==null||e.on("hover",p),()=>{var r;(r=t.current)==null||r.off("hover",p)}},[p]),a(()=>{var e;if(m)return(e=t.current)==null||e.on("select",m),()=>{var r;(r=t.current)==null||r.off("select",m)}},[m]),a(()=>{var e;(e=t.current)==null||e.setColors(g)},[g]),a(()=>{var r,o,s;const e=b(n,c);(r=t.current)==null||r.render(e,l),y((s=(o=t.current)==null?void 0:o.columnWidth)!=null?s:0)},[n,l,c]),d.createElement(A,{className:W},d.createElement("div",{ref:f}),d.createElement("div",{className:"interpolates"},G.map(e=>d.createElement("div",{key:e.name,style:{width:`${D}px`,position:"relative",left:`${z===e.name?B:0}px`}},I[e.name]!=null?d.createElement(L,{direction:"top",scaleMethod:I[e.name],onChange:r=>C(e,r)}):null))))};export default T;
