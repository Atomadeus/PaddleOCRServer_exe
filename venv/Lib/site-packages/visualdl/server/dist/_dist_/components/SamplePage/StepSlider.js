import e,{useCallback as r,useEffect as y,useState as E}from"../../../__snowpack__/pkg/react.js";import{em as i,transitionProps as x}from"../../utils/style.js";import f from"../Icon.js";import u from"../RangeSlider.js";import S from"../../../__snowpack__/pkg/@tippyjs/react.js";import g from"../../../__snowpack__/pkg/styled-components.js";import{useTranslation as j}from"../../../__snowpack__/pkg/react-i18next.js";const b=g.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-light-color);
    font-size: ${i(12)};
    margin-bottom: ${i(5)};
    ${x("color")}

    > :not(:first-child) {
        flex-grow: 0;
    }

    .step-indicator {
        display: flex;
        align-items: center;

        .step-buttons {
            margin-left: ${i(10)};
            display: flex;
            flex-direction: column;
            font-size: ${i(10)};

            > a {
                display: inline-block;
                cursor: pointer;
                line-height: 1;
                height: ${i(14)};

                &:hover {
                    color: var(--text-lighter-color);
                }

                > i {
                    display: inline-block;
                    height: 100%;

                    > svg {
                        vertical-align: top;
                    }
                }
            }
        }
    }
`,w=g(u)`
    width: 100%;
`,$=({onChange:l,onChangeComplete:_,value:t,steps:n,children:c})=>{var m;const{t:s}=j("sample"),[a,p]=E(t);y(()=>p(t),[t]);const o=r(d=>{p(d),l==null||l(d)},[l]),h=r(()=>{t>0&&o(t-1)},[t,o]),k=r(()=>{t<n.length-1&&o(t+1)},[t,n,o]);return e.createElement(e.Fragment,null,e.createElement(b,null,e.createElement("div",{className:"step-indicator"},e.createElement("div",null,`${s("common:time-mode.step")}: ${(m=n[a])!=null?m:"..."}`),e.createElement(S,{placement:"right",theme:"tooltip",content:s("sample:step-tip")},e.createElement("div",{className:"step-buttons"},e.createElement("a",{onClick:h},e.createElement(f,{type:"chevron-up"})),e.createElement("a",{onClick:k},e.createElement(f,{type:"chevron-down"}))))),c&&e.createElement("span",null,c)),e.createElement(w,{min:0,max:n.length?n.length-1:0,step:1,value:a,onChange:o,onChangeComplete:_}))};export default $;
