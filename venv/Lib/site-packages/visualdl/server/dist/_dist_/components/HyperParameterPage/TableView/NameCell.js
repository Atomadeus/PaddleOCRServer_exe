import e from"../../../../__snowpack__/pkg/react.js";import{Expander as a}from"../../Table.js";import{ellipsis as n}from"../../../utils/style.js";import s from"../../../../__snowpack__/pkg/styled-components.js";const p=s.span`
    display: inline-flex;
    align-items: center;
    max-width: 100%;

    > ${a} {
        flex: none;
    }

    > .cell {
        flex: auto;
        ${n()}
    }
`,o=({row:l,cell:t})=>e.createElement(p,null,e.createElement(a,{...l.getToggleRowExpandedProps(),isExpanded:l.isExpanded}),e.createElement("span",{className:"cell",title:t.value},t.value));export default o;
