import n,{useCallback as g}from"../../../__snowpack__/pkg/react.js";import{Trans as E,useTranslation as h}from"../../../__snowpack__/pkg/react-i18next.js";import{borderRadius as _,em as r,transitionProps as u}from"../../utils/style.js";import y from"./GraphSidebar.js";import f from"../../../__snowpack__/pkg/styled-components.js";const b=f.div`
    overflow: hidden;
    word-break: break-word;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', 'Ubuntu', 'Droid Sans', sans-serif;

    h1 {
        font-size: ${r(18)};
        margin: ${r(10)} 0;
    }

    h2 {
        font-size: ${r(16)};
        margin: ${r(10)} 0;
    }

    h3 {
        font-size: ${r(14)};
        margin: ${r(10)} 0;
    }

    p {
        line-height: 1.5;
        margin: ${r(10)} 0;
    }

    dl {
        line-height: 1.5;
        margin: ${r(10)} 0;

        > dt {
            font-weight: 700;
        }

        > dd {
            margin-left: ${r(20)};
        }
    }

    pre {
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
        background-color: var(--code-background-color);
        color: var(--code-color);
        padding: ${r(10)};
        border-radius: ${_};
        overflow: auto;
        ${u("color")}

        code {
            background-color: transparent;
            padding: 0;
            border-radius: 0;
        }
    }

    code {
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
        background-color: var(--code-background-color);
        color: var(--code-color);
        padding: ${r(2)} ${r(4)};
        border-radius: ${r(2)};
        ${u("color")}
    }
`,a=({data:e,onClose:i})=>{const{t:l}=h("graph"),c=g(t=>t.map((o,m)=>n.createElement("dl",{key:m},n.createElement("dt",null,o.name,o.type&&n.createElement(n.Fragment,null,":"," ",typeof o.type=="string"?n.createElement("code",null,o.type):o.type.map((p,s)=>n.createElement(n.Fragment,{key:s},s?",":null,n.createElement("code",null,p))))),n.createElement("dd",{dangerouslySetInnerHTML:{__html:o.description}}))),[]);return n.createElement(y,{title:l("graph:node-documentation"),onClose:i},n.createElement(b,null,n.createElement("h1",null,e==null?void 0:e.name),(e==null?void 0:e.summary)&&n.createElement("p",{dangerouslySetInnerHTML:{__html:e.summary}}),(e==null?void 0:e.description)&&n.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}}),(e==null?void 0:e.attributes)&&n.createElement(n.Fragment,null,n.createElement("h2",null,l("graph:documentation.attributes")),c(e.attributes)),(e==null?void 0:e.inputs)&&n.createElement(n.Fragment,null,n.createElement("h2",null,l("graph:documentation.inputs"),(e==null?void 0:e.inputs_range)&&` (${e.inputs_range.replace(/&#8734;/g,"\u221E")})`),c(e.inputs)),(e==null?void 0:e.outputs)&&n.createElement(n.Fragment,null,n.createElement("h2",null,l("graph:documentation.outputs"),(e==null?void 0:e.outputs_range)&&` (${e.outputs_range.replace(/&#8734;/g,"\u221E")})`),c(e.outputs)),(e==null?void 0:e.type_constraints)&&n.createElement(n.Fragment,null,n.createElement("h2",null,l("graph:documentation.type-constraints")),c(e.type_constraints.map(({type_param_str:t,allowed_type_strs:o,description:m})=>({name:t,type:o,description:m})))),(e==null?void 0:e.examples)&&n.createElement(n.Fragment,null,n.createElement("h2",null,l("graph:documentation.examples")),e.examples.map((t,o)=>n.createElement(n.Fragment,{key:o},n.createElement("h3",null,t.summary),n.createElement("pre",null,t.code)))),(e==null?void 0:e.references)&&n.createElement(n.Fragment,null,n.createElement("h2",null,l("graph:documentation.references")),n.createElement("ul",null,e.references.map((t,o)=>n.createElement("li",{key:o,dangerouslySetInnerHTML:{__html:t.description}})))),e&&e.domain&&e.since_version&&e.support_level&&n.createElement(n.Fragment,null,n.createElement("h2",null,l("graph:documentation.support")),n.createElement("dl",null,n.createElement(E,{i18nKey:"graph:documentation.support-info"},"In domain ",n.createElement("code",null,{domain:e.domain})," since version ",n.createElement("code",null,{since_version:e.since_version})," at support level ",n.createElement("code",null,{support_level:e.support_level}),".")))))};export default a;
