import v,{useEffect as t,useRef as h}from"../../../../../__snowpack__/pkg/react.js";import y from"./ScatterChart.js";import x from"../../../../../__snowpack__/pkg/styled-components.js";const _=x.div`
    svg {
        .x-axis,
        .y-axis {
            color: var(--hyper-parameter-graph-axis-color);
        }

        .x-grid,
        .y-grid {
            color: var(--hyper-parameter-graph-grid-color);
        }

        .x-label,
        .y-label {
            color: var(--text-lighter-color);
        }

        .dots {
            pointer-events: none;

            .disabled {
                fill: var(--hyper-parameter-graph-disabled-data-color);
            }
        }

        .hover-dots circle {
            cursor: pointer;

            &.disabled {
                cursor: default;
                pointer-events: none;
            }
        }

        .grid-brush .selection {
            fill: var(--hyper-parameter-graph-brush-color);
            fill-opacity: 0.4;
        }
    }
`,b=({data:u,colors:a,scaleMethods:f,options:g,hover:p,select:s,brush:l,onHover:c,onSelect:i,onBrush:o})=>{const m=h(g),e=h(),d=h(null);return t(()=>{if(d.current)return e.current=new y(d.current,m.current),()=>{var r;(r=e.current)==null||r.dispose()}},[]),t(()=>{var r;(r=e.current)==null||r.render(u.data,u.type)},[u]),t(()=>{var r;(r=e.current)==null||r.setColors(a!=null?a:[])},[a]),t(()=>{var r;f&&((r=e.current)==null||r.setScaleMethod(f))},[f]),t(()=>{var r;p!==void 0&&((r=e.current)==null||r.hover(p))},[p]),t(()=>{var r;s!==void 0&&((r=e.current)==null||r.select(s))},[s]),t(()=>{var r;l!==void 0&&((r=e.current)==null||r.focus(l))},[l]),t(()=>{var r;if(c)return(r=e.current)==null||r.on("hover",c),()=>{var n;(n=e.current)==null||n.off("hover",c)}},[c]),t(()=>{var r;if(i)return(r=e.current)==null||r.on("select",i),()=>{var n;(n=e.current)==null||n.off("select",i)}},[i]),t(()=>{var r;if(o)return(r=e.current)==null||r.on("brush",o),()=>{var n;(n=e.current)==null||n.off("brush",o)}},[o]),v.createElement(_,{ref:d})};export default b;
