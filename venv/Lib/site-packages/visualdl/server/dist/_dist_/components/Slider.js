import k,{useCallback as i,useMemo as m,useState as w}from"../../__snowpack__/pkg/react.js";import{height as E,padding as O}from"./Input.js";import{rem as F,size as h,transitionProps as D}from"../utils/style.js";import M from"../../__snowpack__/pkg/bignumberjs.js";import U from"./RangeSlider.js";import x from"../../__snowpack__/pkg/styled-components.js";const W=x.div`
    display: flex;
    align-items: center;
`,Y=x.input`
    ${h(E,F(52))};
    line-height: ${E};
    display: inline-block;
    outline: none;
    padding: ${O};
    ${D(["border-color","color","caret-color"])}
    border: none;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    background-color: transparent;
    color: var(--text-color);
    caret-color: var(--text-color);

    &:hover,
    &:focus {
        border-bottom-color: var(--border-focused-color);
    }
`,z=x(U)`
    flex-grow: 1;
    margin-right: ${F(20)};
`,A=({onChange:o,onChangeComplete:c,value:j,min:d,max:f,step:b,steps:p})=>{const t=m(()=>{var r;return(r=p==null?void 0:p.sort())!=null?r:[]},[p]),_=m(()=>t.length?0:d!=null?d:0,[d,t]),V=m(()=>t.length?t.length-1:f!=null?f:1,[f,t]),I=m(()=>t.length?1:b!=null?b:1,[b,t]),N=i(r=>new M(r).dividedBy(I).integerValue(M.ROUND_HALF_UP).multipliedBy(I).toNumber(),[I]),y=i(r=>{if(t.length){let e=Number.NaN,u=Number.POSITIVE_INFINITY;for(let l=0;l<t.length;l++){const a=Math.abs(t[l]-r);u>a&&(u=a,e=t[l])}return e}return N(r)},[N,t]),S=i(r=>{if(t.length){let e=-1,u=Number.POSITIVE_INFINITY;for(let l=0;l<t.length;l++){const a=Math.abs(t[l]-r);u>a&&(u=a,e=l)}return e}return N(r)},[N,t]),n=i(r=>t.length?t[r]:r,[t]),[s,B]=w(S(j)),[R,g]=w(y(j)+""),T=i(r=>{B(r);const e=n(r);g(e+""),o==null||o(e)},[n,o]),$=i(()=>{c==null||c(n(s))},[s,c,n]),P=i(r=>{g(r);const e=Number.parseFloat(r);if(e<_||e>V||Number.isNaN(e))return;B(S(e));const u=y(e);o==null||o(u),c==null||c(u)},[_,V,S,y,o,c]),v=i(()=>{g(n(s)+"")},[n,s]);return k.createElement(W,null,k.createElement(z,{min:_,max:V,step:I,value:s,onChange:T,onChangeComplete:$}),k.createElement(Y,{type:"text",value:R,onChange:r=>P(r.currentTarget.value),onBlur:v,onKeyDown:r=>r.key==="Enter"&&v()}))};export default A;
