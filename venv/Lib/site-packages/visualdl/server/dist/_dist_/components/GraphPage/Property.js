import t from"../../../__snowpack__/pkg/react.js";import{ellipsis as s,em as e,sameBorder as m}from"../../utils/style.js";import i from"./Argument.js";import c from"../../../__snowpack__/pkg/styled-components.js";const d=c.div`
    display: flex;
    align-items: top;
    justify-content: space-between;
    width: 100%;

    > .property-name {
        flex: none;
        text-align: right;
        width: ${e(80)};
        padding: ${e(8)} 0;
        ${m({color:"transparent"})}
        ${s()}
    }

    > .property-values {
        flex: auto;
        width: calc(100% - ${e(90)});
        margin-left: ${e(10)};
    }

    & + & {
        margin-top: ${e(10)};
    }
`,y=({name:r,values:a,expand:l,showNodeDocumentation:p})=>t.createElement(d,null,t.createElement("label",{className:"property-name",title:r},r),t.createElement("div",{className:"property-values"},a.map((o,n)=>t.createElement(i,{key:n,value:o,expand:l,showNodeDocumentation:p}))));export default y;
