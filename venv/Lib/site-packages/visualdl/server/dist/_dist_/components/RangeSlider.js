import k from"../../__snowpack__/pkg/react-input-range.js";import d,{useCallback as f}from"../../__snowpack__/pkg/react.js";import{em as e,half as o,position as y,sameBorder as h,size as n,transitionProps as c}from"../utils/style.js";import w from"../../__snowpack__/pkg/styled-components.js";const x=e(20),l=e(4),a=e(12),j=w.div`
    height: ${x};

    .input-range {
        height: 100%;
        position: relative;

        &__label {
            display: none;
        }

        --color: var(--primary-color);

        &:hover {
            --color: var(--primary-focused-color);
        }

        &:active {
            --color: var(--primary-active-color);
        }

        &__track {
            cursor: ${r=>r.disabled?"not-allowed":"pointer"};

            &--background {
                ${n(l,"100%")}
                ${y("absolute","50%",null,null,null)}
                margin-top: -${o(l)};
                background-color: var(--slider-rail-color);
                border-radius: ${o(l)};
                ${c("background-color")}
            }

            &--active {
                height: ${l};
                position: absolute;
                background-color: ${r=>r.disabled?"var(--text-lighter-color)":"var(--color)"};
                border-radius: ${o(l)};
                outline: none;
                ${c("background-color")}
            }
        }

        &__slider-container {
            top: -${o(`${a} - ${l}`)};
            margin-left: -${o(a)};
        }

        &__slider {
            ${n(a)}
            ${r=>h({width:e(3),color:r.disabled?"var(--text-lighter-color)":"var(--color)",radius:o(a)})}
            background-color: var(--slider-gripper-color);
            ${c(["border-color","background-color"])}
        }
    }
`,u=({onChange:r,onChangeStart:i,onChangeComplete:t,className:p,min:m,max:_,step:$,value:b,disabled:s})=>{const g=f(v=>r==null?void 0:r(v),[r]);return d.createElement(j,{className:p,disabled:s},d.createElement(k,{minValue:m,maxValue:_,allowSameValues:!0,step:$,disabled:s,value:b,onChange:g,onChangeStart:()=>i==null?void 0:i(),onChangeComplete:()=>t==null?void 0:t()}))};u.defaultProps={min:0,max:100,step:1,value:50};export default u;
