import{css as o,dragger as d,em as b,rem as a,sameBorder as l}from"../utils/style.js";import p from"../../__snowpack__/pkg/classnames.js";import t from"../../__snowpack__/pkg/styled-components.js";const i=t.span`
    ${d}
`,g=o`
    border-spacing: 0;
    ${l({radius:!0})};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    &.is-droppable-left {
        border-left-color: var(--primary-color);
    }
    &.is-droppable-right {
        border-right-color: var(--primary-color);
    }

    &.sticky {
        overflow: auto;
    }
`,s=o``,h=o``,c=o`
    --resizer-pad: ${a(2)};

    margin: 0;
    padding: ${a(15)} ${a(20)};
    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    position: relative;

    &:last-child {
        border-right: none;
    }

    &.is-sticky {
        position: sticky;
    }

    &.is-resizing {
        border-right-color: var(--primary-color);
    }

    &.is-dragging {
        opacity: 0.4;
    }

    &.is-droppable:not(:last-child) {
        border-right-color: var(--primary-color);
    }

    &[data-sticky-td] {
        position: sticky;
    }

    &[data-sticky-last-left-td] {
        box-shadow: 5px 0 3px -3px var(--table-sticky-shadow-color);

        &:not(.is-resizing):not(.is-droppable) {
            border-right-color: var(--table-sticky-shadow-color);
        }
    }
`,m=o`
    background-color: var(--table-header-background-color);

    ${i} {
        position: absolute;
        left: var(--resizer-pad);
        top: 50%;
        transform: translateY(-50%);
        color: var(--table-dragger-color);
        opacity: 0;
    }

    &:hover ${i} {
        opacity: 1;
    }
`,v=o`
    background-color: var(--table-background-color);

    .tr:hover > & {
        background-color: var(--table-row-hover-background-color);
    }

    .tr:last-child > & {
        border-bottom: none;
    }
`,y=o`
    background-color: var(--table-header-background-color);

    .sticky > & {
        top: 0;
        position: sticky;
        z-index: 1;
    }
`,k=o`
    .sticky > & {
        position: relative;
        z-index: 0;
    }
`,r=e=>t.div.attrs(({className:n})=>({className:p([n,e])})),u=r("table")`
    ${g};
`,x=r("thead")`
    ${s}
    ${y}
`,$=r("tbody")`
    ${s}
    ${k}
`,f=r("tfoot")`
    ${s}
`,z=r("tr")`
    ${h}
`,w=r("th")`
    ${c}
    ${m}
`,T=r("td")`
    ${c}
    ${v}
`,_=t.span`
    box-sizing: content-box;
    background-clip: content-box;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    right: calc(var(--resizer-pad) * -1 - 1px);
    z-index: 1;
    touch-action: none;
    border-left: var(--resizer-pad) solid transparent;
    border-right: var(--resizer-pad) solid transparent;

    &:hover {
        background-color: var(--primary-color);
    }

    &.is-resizing {
        background-color: var(--primary-color);
        border-color: var(--primary-color);
    }

    .th:last-child > & {
        display: none;
    }
`,j=t.span`
    display: inline-block;
    position: relative;
    font-size: ${b(16)};
    width: 1em;
    height: 1em;
    ${l({color:"var(--table-expander-border-color)",radius:"0.125em"})}
    margin-right: 0.75em;
    color: var(--table-expander-color);

    &::before,
    &::after {
        content: '';
        display: block;
        background-color: currentColor;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    &::before {
        width: 0.5em;
        height: 0.0625em;
    }

    &::after {
        width: 0.0625em;
        height: 0.5em;
        display: ${e=>e.isExpanded?"none":"block"};
    }

    &:hover {
        color: var(--table-expander-hover-color);
        border-color: var(--table-expander-hover-border-color);
    }
`,C=t.div`
    ${c}
    background-color: var(--table-header-background-color);
    border-right: none;

    &:last-child {
        border-bottom: none;
    }

    .sticky > .tbody > & {
        position: sticky;
        left: 0;
    }
`;export{u as Table,x as THead,$ as TBody,f as TFoot,z as Tr,w as Th,T as Td,_ as Resizer,j as Expander,C as ExpandContainer,i as Dragger};
