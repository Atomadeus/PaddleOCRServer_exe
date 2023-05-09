import s from"../../../../__snowpack__/pkg/react.js";import{Resizer as p}from"../../Table.js";import{ellipsis as r}from"../../../utils/style.js";import i from"../../../../__snowpack__/pkg/styled-components.js";const o=i.span`
    ${r()}
`,m=({column:t,className:a,children:e})=>s.createElement(s.Fragment,null,s.createElement(o,{className:a,title:e?typeof e=="string"?e:"":t.id},e!=null?e:t.id),t.canResize?s.createElement(p,{...t.getResizerProps(),className:t.isResizing?"is-resizing":""}):null);export default m;
