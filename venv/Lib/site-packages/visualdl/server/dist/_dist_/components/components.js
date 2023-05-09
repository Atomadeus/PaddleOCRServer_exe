import*as d from"../../__snowpack__/env.js";import{rem as t,transitionProps as r,position as i,size as o}from"../utils/style.js";import e from"../../__snowpack__/pkg/styled-components.js";const a=d.SNOWPACK_PUBLIC_PATH;import l from"./Select.js";export const color=["#2932E1","#00CC88","#981EFF","#066BFF","#00E2FF","#FFAA00","#E71ED5","#FF6600","#0DEBB0","#D50505"],color2=["#2932E1","#00CC88","#981EFF","#FF6D6D","#25C9FF","#E71ED5","#FFAA00","#00307D"],Configure=e.div`
    margin-top: ${t(30)};
    width: 100%;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    padding-left: ${t(20)};
    padding-right: ${t(20)};
    .titleContent {
        display: flex;
        justify-content: space-between;
        .title {
            display: flex;
            align-items: center;
            // div {
            //     line-height: 16px;
            // }
        }
        .titles {
            display: flex;
            align-items: center;
            margin-bottom: ${t(15)};
        }
        .searchContent {
            display: flex;
            .input_wrapper {
                width: auto;
                height: ${t(36)};
                .ant-input-group-wrapper {
                    height: 100%;
                    width: 100%;
                    .ant-input-wrapper {
                        height: 100%;
                        .ant-input {
                            height: 100%;
                        }
                        .ant-btn {
                            height: 100%;
                        }
                    }
                    .ant-btn {
                        border-left: none;
                    }
                }
            }
            .select_label {
                margin-right: ${t(15)};
                line-height: ${t(36)};
            }
            .select_wrapper {
                width: auto;
                height: ${t(36)};
                align-items: center;
                margin-right: ${t(15)};
                .ant-select {
                    border-radius: ${t(4)};
                    height: 100%;
                    .ant-select-selector {
                        height: 100%;
                    }
                }
            }
        }
        .bold {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
                'Fira Sans', 'Droid Sans', 'Helvetica Neue';
            font-size: 14px;
            font-weight: 500;
            color: #333333;
            margin-bottom: ${t(10)};
        }
        .indent {
            text-indent: 2em;
            margin-bottom: ${t(10)};
        }
        .tooltipsContent {
            width: ${t(500)};
        }
    }
    .preline {
        white-space: pre-line;
        white-space: pre-wrap;
    }
`,ArgumentOperation=e.a`
    flex: none;
    cursor: pointer;
    font-size: 14px;
    margin-left: ${t(8)};
    color: var(--text-lighter-color);
    ${r("color")}
    &:hover,
    &:active {
        color: #2932e1;
    }
    img {
        width: 14px;
        height: 14px;
    }
    img:hover {
        content: url(${`${a}/images/hover.svg`});
    }
    display: flex;
    align-items: center;
`,ButtonsRight=e.div`
    border: 1px solid #dddddd;
    border-radius: 0 4px 4px 0;
    width: ${t(110)};
    height: ${t(36)};
    font-family: PingFangSC-Regular;
    font-size: 14px;
    text-align: center;
    line-height: ${t(36)};
    font-weight: 400;
`,ButtonsLeft=e.div`
    border: 1px solid #dddddd;
    width: ${t(110)};
    height: ${t(36)};
    font-family: PingFangSC-Regular;
    font-size: 14px;
    text-align: center;
    line-height: ${t(36)};
    font-weight: 400;
    border-radius: 4px 0 0 4px;
`,RadioButtons=e.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    margin-left: ${t(20)};
    .is_active {
        color: #ffffff;
        background: #2932e1;
        border: 1px solid rgba(41, 50, 225, 1);
    }
`,Wraper=e.div`
    width: 100%;
    min-height: ${t(400)};
    position: relative;
    .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > th {
        background: #f3f8fe;
    }
    .ant-table-pagination.ant-pagination {
        margin: ${t(20)} 0;
        padding-right: ${t(20)};
    }
    .ant-table.ant-table-bordered > .ant-table-container {
        border: 1px solid #dddddd;
        border-radius: 8px;
    }
    .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody .ant-table-row-level-1 {
        background: #f0f0f0;
        > td {
            border: 1px solid #dddddd;
            border-left: none;
            border-top: none;
        }
    }
    .ant-table-row-level-1 {
        div {
            text-align: right;
        }
    }
    .whiteWrap {
        margin-left: 25px;
    }
    > .loading {
        ${o("100%")}
        ${i("absolute",0,null,null,0)}
        display: flex;
        justify-content: center;
        align-items: center;
    }
`,EchartPie=e.div`
    width: 100%;
    height: ${t(270)};
    display: flex;
    .wraper {
        flex: 1;
        .Content {
            height: 100%;
        }
    }
    .Content {
        height: 100%;
        width: 100%;
    }
    .ant-radio-inner {
        background-color: #fff;
        border-color: #ffffff;
        border-style: solid;
        border-width: 2px;
        border-radius: 50%;
    }
    .tooltipContent {
        padding-right: ${t(30)};
        .tooltipitems {
            display: flex;
            align-items: center;
        }
    }
`,FullWidthSelect=e(l)`
    width: 100%;
    height: 100%;
    font-size: 14px;
`,ViewWrapper=e.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    position: relative;
    background-color: #fff;
`,TableContent=e.div`
    min-height: ${t(200)};
    position: relative;
    .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > th {
        background: #f3f8fe;
        border-right: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
    }
    .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr > th {
        background: #f3f8fe;
        border-right: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
    }
    .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > td {
        border-right: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
    }
    .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td {
        border-right: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
    }
    .ant-table.ant-table-bordered > .ant-table-container {
        border: 1px solid #dddddd;
        border-radius: ${t(8)};
    }
    > .loading {
        ${o("100%")}
        ${i("absolute",0,null,null,0)}
    display: flex;
        justify-content: center;
        align-items: center;
    }
`,PieceContent=e.div`
    border: 1px solid #dddddd;
    border-radius: ${t(4)};
    width: 100%;
    height: auto;
    // padding-bottom: ${t(20)};
    .expendContent {
        display: flex;
        align-items: center;
        .expendButton {
            color: #a3a3a3;
            margin-left: ${t(20)};
            margin-right: ${t(10)};
        }
        margin-bottom: ${t(20)};
    }
`,Subtraction=e.div`
    width: ${t(32)};
    height: ${t(32)};
    font-size: 16px;
    line-height: ${t(32)};
    text-align: center;
    border: 1px solid #e0e0e0;
    border-left: none;
    &:hover {
        cursor: ${n=>n.disable?"auto":"not-allowed"};
    }
`,RadioContent=e.div`
    display: flex;
    align-items: center;
    padding-right: ${t(20)};
    .ant-radio-group {
        display: flex;
    }
    .ant-radio-wrapper {
        span {
            white-space: nowrap;
        }
        .ant-radio-checked .ant-radio-inner {
            border-color: #2932e1;
        }
        .ant-radio-inner::after {
            background-color: #2932e1;
        }
    }
    .AdditionContent {
        display: flex;
        align-items: center;
        .input_wrapper {
            width: ${t(50)};
            height: ${t(32)};
        }
        .Addition {
            width: ${t(32)};
            height: ${t(32)};
            line-height: ${t(32)};
            font-size: 16px;
            text-align: center;
            border: 1px solid #e0e0e0;
            border-right: none;
        }
    }
`,Title=e.div`
    width: 100%;
    height: ${t(50)};
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    line-height: ${t(50)};
    font-weight: 500;
    padding-left: ${t(20)};
    border-bottom: 1px solid #dddddd;
    margin-bottom: ${t(20)};
`;
