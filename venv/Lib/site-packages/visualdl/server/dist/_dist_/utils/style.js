import*as a from"../../__snowpack__/pkg/polished.js";import{colors as n,variables as g}from"./theme.js";import{createGlobalStyle as m,keyframes as x}from"../../__snowpack__/pkg/styled-components.js";import{css as d}from"../../__snowpack__/pkg/styled-components.js";export*from"../../__snowpack__/pkg/styled-components.js";export*from"../../__snowpack__/pkg/polished.js";export{borderRadius as borderRadiusShortHand,borderColor as borderColorShortHand,fontFace as fontFaceShortHand}from"../../__snowpack__/pkg/polished.js";const{math:b,size:c,normalize:u,transitions:f,border:v,position:s}=a;export const fontSize="14px",setRem=()=>{const o=14,r=document.documentElement.clientWidth/1220;document.documentElement.style.fontSize=o*r+"px"},rem=o=>a.rem(o,fontSize),em=(o,r)=>a.em(o,r||fontSize),half=o=>b(`(${o}) / 2`),headerHeight=rem(60),contentMargin=rem(20),contentHeight=`calc(100vh - ${b(`${contentMargin} * 2 + ${headerHeight}`)})`,asideWidth=rem(260),borderRadius="4px",progressSpinnerSize="20px",zIndexes={progress:99999,toast:9e4,tooltip:8e4,component:3e4,dialog:2e4,header:1e4},primaryColor=n.primary.default,primaryFocusedColor=n.primary.focused,primaryActiveColor=n.primary.active,duration="75ms",easing="ease-in",sameBorder=(o="1px",r="solid",t="var(--border-color)",e)=>{var i,p,l;return typeof o=="object"?(r=(i=o.type)!=null?i:"solid",t=(p=o.color)!=null?p:"var(--border-color)",e=o.radius===!0?borderRadius:o.radius,o=(l=o.width)!=null?l:"1px"):o===!0&&(o="1px",e=!0),Object.assign({},v(o,r,t),e?{borderRadius:e===!0?borderRadius:e}:void 0)},transitionProps=(o,r)=>{var t,e;return typeof o=="string"&&(o=[o]),typeof r!="string"&&(r=`${(t=r==null?void 0:r.duration)!=null?t:duration} ${(e=r==null?void 0:r.easing)!=null?e:easing}`),f(o,r)},link=d`
    a {
        color: var(--primary-color);
        cursor: pointer;
        ${transitionProps("color")};

        &:hover {
            color: var(--primary-focused-color);
        }

        &:active {
            color: var(--primary-active-color);
        }
    }
`,dragger=d`
    --padding-v: ${em(8,14)};
    --padding-h: ${em(6,14)};

    width: ${em(6,14)};
    height: ${em(10,14)};
    box-sizing: content-box;
    padding: var(--padding-v) var(--padding-h);
    cursor: grab;
    display: inline-block;
    position: relative;

    &::before {
        --dot-size: ${em(2,14)};
        content: '';
        display: block;
        position: absolute;
        width: var(--dot-size);
        height: var(--dot-size);
        background-color: currentColor;
        top: var(--padding-v);
        left: var(--padding-h);
        box-shadow: 0 0, calc(var(--dot-size) * 2) 0, 0 calc(var(--dot-size) * 2),
            calc(var(--dot-size) * 2) calc(var(--dot-size) * 2), 0 calc(var(--dot-size) * 4),
            calc(var(--dot-size) * 2) calc(var(--dot-size) * 4);
    }
`;const y=x`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;export const GlobalStyle=m`
    ${u}

    ${g}

    html {
        font-size: ${fontSize};
        font-family: 'Merriweather Sans', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body {
        min-height: 100%;
        background-color: var(--body-background-color);
        color: var(--text-color);
        ${transitionProps(["background-color","color"])}
    }

    body {
        overflow-anchor: none;
    }

    a {
        text-decoration: none;
        color: inherit;

        &:visited {
            color: currentColor;
        }
    }

    * {
        box-sizing: border-box;
    }

    #nprogress {
        pointer-events: none;
    }

    #nprogress .bar {
        background-color: var(--progress-bar-color);
        z-index: ${zIndexes.progress};
        ${s("fixed",0,null,null,0)}
        ${c("2px","100%")}
        ${transitionProps("background-color")}
    }

    #nprogress .peg {
        display: block;
        ${s("absolute",null,0,null,null)}
        ${c("100%",rem(100))}
        box-shadow: 0 0 rem(10) var(--progress-bar-color), 0 0 ${rem(5)} var(--progress-bar-color);
        opacity: 1;
        transform: rotate(3deg) translate(0px, -${rem(4)});
        ${transitionProps("box-shadow")}
    }

    #nprogress .spinner {
        display: block;
        z-index: ${zIndexes.progress};
        ${s("fixed",progressSpinnerSize,progressSpinnerSize,null,null)}
    }

    #nprogress .spinner-icon {
        ${c(`calc(${half(headerHeight)} - ${half(progressSpinnerSize)})`)}
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: var(--progress-bar-color);
        border-left-color: var(--progress-bar-color);
        border-radius: 50%;

        animation: ${y} 400ms linear infinite;

        ${transitionProps("border-color")}
    }

    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }

    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }

    .Toastify__toast-container {
        z-index: ${zIndexes.toast};
    }

    [data-tippy-root] .tippy-box {
        z-index: ${zIndexes.tooltip};
        color: var(--text-color);
        background-color: var(--background-color);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: ${borderRadius};
        ${transitionProps(["color","background-color"])}

        > .tippy-content {
            padding: 0;
            /* trigger bfc */
            display: flow-root;
        }

        > .tippy-arrow {
            ${transitionProps("border-color")}
        }

        &[data-placement^='top'] > .tippy-arrow::before {
            border-top-color: var(--background-color);
        }
        &[data-placement^='bottom'] > .tippy-arrow::before {
            border-bottom-color: var(--background-color);
        }
        &[data-placement^='left'] > .tippy-arrow::before {
            border-left-color: var(--background-color);
        }
        &[data-placement^='right'] > .tippy-arrow::before {
            border-right-color: var(--background-color);
        }

        &[data-theme~='tooltip'] {
            color: var(--tooltip-text-color);
            background-color: var(--tooltip-background-color);
            box-shadow: none;

            > .tippy-content {
                padding: ${rem(5)} ${rem(9)};
            }

            &[data-placement^='top'] > .tippy-arrow::before {
                border-top-color: var(--tooltip-background-color);
            }
            &[data-placement^='bottom'] > .tippy-arrow::before {
                border-bottom-color: var(--tooltip-background-color);
            }
            &[data-placement^='left'] > .tippy-arrow::before {
                border-left-color: var(--tooltip-background-color);
            }
            &[data-placement^='right'] > .tippy-arrow::before {
                border-right-color: var(--tooltip-background-color);
            }
        }
    }
`;
