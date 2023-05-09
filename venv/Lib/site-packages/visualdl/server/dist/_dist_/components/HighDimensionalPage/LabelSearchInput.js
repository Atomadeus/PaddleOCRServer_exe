import r,{useEffect as u,useState as d}from"../../../__snowpack__/pkg/react.js";import m from"../SearchInput.js";import n from"../Select.js";import{rem as i}from"../../utils/style.js";import o from"../../../__snowpack__/pkg/styled-components.js";import f from"../../hooks/useSearchValue.js";const b=o.div`
    width: 100%;
    display: flex;
`,h=o(n)`
    width: 45%;
    min-width: ${i(80)};
    max-width: ${i(200)};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`,S=o(m)`
    input {
        border-left: none;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`,_=({labels:s,onChange:e})=>{const[t,l]=d(0),[a,p]=d("");u(()=>{l(0)},[s]);const c=f(a);return u(()=>{e==null||e({labelIndex:t,value:c})},[t,e,c]),r.createElement(b,null,r.createElement(h,{list:s,value:t,onChange:l}),r.createElement(S,{value:a,onChange:p}))};export default _;
