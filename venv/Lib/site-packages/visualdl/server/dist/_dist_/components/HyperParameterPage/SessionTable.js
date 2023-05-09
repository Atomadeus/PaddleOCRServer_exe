import e,{useMemo as i}from"../../../__snowpack__/pkg/react.js";import{Trans as s,useTranslation as m}from"../../../__snowpack__/pkg/react-i18next.js";import{borderRadius as p,rem as l}from"../../utils/style.js";import c from"./TableView/Table.js";import o from"../../../__snowpack__/pkg/styled-components.js";const d=o.div`
    background-color: var(--background-color);
    border-radius: ${p};
    padding: ${l(20)};

    &:not(:first-child) {
        margin-top: ${l(20)};
    }
`,u=o.div`
    min-height: ${l(188)};

    h3 {
        font-size: ${l(16)};
        line-height: 1;
        margin: 0 0 1em 0;
    }

    ol {
        padding-left: 1.2em;
        color: var(--text-light-color);
        line-height: 1.5;

        li:empty {
            display: none;
        }
    }
`,h=({indicators:n,data:t,showMetricsGraph:a})=>{m("hyper-parameter");const r=i(()=>t?[t]:[],[t]);return e.createElement(d,null,t?e.createElement(c,{indicators:n,list:r,data:r,expandAll:a}):e.createElement(u,null,e.createElement(s,{i18nKey:"hyper-parameter:session-table-empty"},e.createElement("h3",null,"Click or hover over a line to display its values here."),e.createElement("ol",null,e.createElement("li",null,"Hover to display values;"),e.createElement("li",null,"Click to display metrics graph.")))))};export default h;
