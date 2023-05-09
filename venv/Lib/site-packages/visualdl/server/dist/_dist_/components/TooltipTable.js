import e from"../../__snowpack__/pkg/react.js";import{rem as o,size as h}from"../utils/style.js";import u from"../../__snowpack__/pkg/styled-components.js";const E=u.div`
    max-height: ${o(160)};
    overflow: hidden auto;
    overscroll-behavior: auto contain;

    table {
        border-spacing: none;
        text-align: left;
        table-layout: fixed;
        font-size: ${o(12)};

        th,
        td {
            margin: 0;
            line-height: 1;

            > span {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding: 0.15em 0;
            }
        }

        th {
            font-size: 1.166666667em;
            font-weight: bold;
            padding: 0 0.285714286em;
        }
        td {
            padding: 0 0.633333333em;
            padding-bottom: ${o(8)};
            &.run-indicator > span {
                ${h(12,12)}
                border-radius: 6px;
                vertical-align: middle;
                background-color: currentColor;
            }

            &.run > span {
                min-width: 4.285714286em;
                max-width: 8.571428572em;
            }
        }
    }
`,b=({run:c,runs:a,columns:s,data:r})=>e.createElement(E,null,e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{className:"run-indicator"}),e.createElement("th",{className:"run"},c),s.map((n,t)=>{var l;return e.createElement("th",{key:t},e.createElement("span",{style:{width:(l=n.width)!=null?l:"auto"}},n.label))}))),e.createElement("tbody",null,r==null?void 0:r.map((n,t)=>{var l,i,m;return e.createElement("tr",{key:t},e.createElement("td",{className:"run-indicator"},e.createElement("span",{style:{color:(l=a[t])==null?void 0:l.colors[0]}})),e.createElement("td",{className:"run"},e.createElement("span",{title:(i=a[t])==null?void 0:i.label},(m=a[t])==null?void 0:m.label)),n.map((d,p)=>e.createElement("td",{key:p},e.createElement("span",null,d))))}))));export default b;
