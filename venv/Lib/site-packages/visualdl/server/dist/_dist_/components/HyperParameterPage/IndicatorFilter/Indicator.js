import t,{useCallback as b,useEffect as E,useMemo as F,useState as u}from"../../../../__snowpack__/pkg/react.js";import C from"../../Checkbox.js";import T from"./ContinuousIndicatorDetails.js";import Y from"./DiscreteIndicatorDetails.js";import v from"../../Icon.js";import{rem as N}from"../../../utils/style.js";import w from"../../../../__snowpack__/pkg/styled-components.js";const $=w.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > * {
        flex-grow: 1;
    }

    > .expander {
        margin-left: 1em;
        flex-grow: 0;
        cursor: pointer;
        color: var(--text-lighter-color);
        font-size: 0.75em;

        &:hover {
            color: var(--text-light-color);
        }
    }
`,z=w.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-left: ${N(24)};
    font-size: ${N(12)};

    > * {
        margin-top: ${N(10)};
    }
`,A=({name:D,type:o,selected:e,values:s,selectedValues:n,min:r,max:c,onToggle:a,onChange:m})=>{const[_,g]=u(!0),[I,x]=u(e!=null?e:!0);E(()=>x(e!=null?e:!0),[e]);const[h,j]=u(n!=null?n:[]);E(()=>j(n!=null?n:[]),[n]);const[l,k]=u({min:r!=null?r:Number.NEGATIVE_INFINITY,max:c!=null?c:Number.POSITIVE_INFINITY});E(()=>k({min:r!=null?r:Number.NEGATIVE_INFINITY,max:c!=null?c:Number.POSITIVE_INFINITY}),[r,c]);const d=b(()=>{a==null||a(!I),x(i=>!i)},[a,I]),f=b(i=>{o==="continuous"?j(i):k(i),m==null||m(i)},[m,o]),y=F(()=>{switch(o){case"string":case"numeric":return t.createElement(Y,{list:s!=null?s:[],values:h,onChange:f});case"continuous":return t.createElement(T,{min:l.min,max:l.max,onChange:f});default:return null}},[f,l.max,l.min,h,o,s]);return t.createElement(t.Fragment,null,t.createElement($,null,t.createElement(C,{checked:I,onChange:d},D),t.createElement("a",{className:"expander",onClick:()=>g(i=>!i)},t.createElement(v,{type:_?"chevron-down":"chevron-up"}))),_?t.createElement(z,null,y):null)};export default A;
