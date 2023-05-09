import i from"../../__snowpack__/pkg/react.js";import{borderRadius as d,headerHeight as c,math as l,rem as m,sameBorder as n,size as h,transitionProps as u}from"../utils/style.js";import v from"../../__snowpack__/pkg/styled-components.js";import b from"../hooks/useClassNames.js";const g=v.div`
    ${o=>h(o.maximized?`calc(100vh - ${c} - ${m(40)})`:o.divHeight||"auto",o.maximized?"100%":o.divWidth||"100%")}
    background-color: var(--background-color);
    ${n({radius:l(`${d} * 2`)})}
    ${u(["border-color","box-shadow","background-color"])}
    position: relative;

    &:hover {
        border-color: var(--primary-color);
        box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.05);
    }
`,p=({maximized:o,width:e,height:s,className:r,children:a})=>{const t=b({maximized:o},r,[o,r]);return i.createElement(g,{maximized:o,divWidth:e,divHeight:s,className:t},a)};export default p;
