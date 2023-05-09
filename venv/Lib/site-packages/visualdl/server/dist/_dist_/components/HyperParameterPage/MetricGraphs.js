import*as i from"../../../__snowpack__/env.js";import t from"../../../__snowpack__/pkg/react.js";import o from"./ScalarChart.js";import{Trans as l}from"../../../__snowpack__/pkg/react-i18next.js";import{rem as e}from"../../utils/style.js";import n from"../../../__snowpack__/pkg/styled-components.js";const c=i.SNOWPACK_PUBLIC_PATH,m=n.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: flex-start;

    > * {
        margin: 0 ${e(20)} ${e(20)} 0;
        flex-shrink: 0;
        flex-grow: 0;

        &.maximized {
            margin-right: 0;
        }
    }
`,p=n.div`
    width: 100%;
    height: ${e(370)};
    background-image: url(${`${c}/images/empty.svg`});
    background-repeat: no-repeat;
    background-position: calc(50% + ${e(12)}) ${e(50)};
    background-size: ${e(200)} ${e(200)};
    padding-top: ${e(250)};
    font-size: ${e(16)};
    text-align: center;
    line-height: 2;

    > .subtitle {
        font-size: 0.875em;
        color: var(--text-lighter-color);
    }
`,g=({metrics:r,run:s})=>t.createElement(m,null,r.length?r.map(a=>t.createElement(o,{key:a,metric:a,run:s})):t.createElement(p,null,t.createElement(l,{i18nKey:"hyper-parameter:metric-graphs-empty"},t.createElement("div",null,"No metrics selected."),t.createElement("div",{className:"subtitle"},"Please select some metrics to view graphs here."))));export default g;
