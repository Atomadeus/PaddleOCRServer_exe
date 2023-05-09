import t from"../../__snowpack__/pkg/react.js";import{actions as n,selectors as s}from"../store/index.js";import{colors as i,themes as d}from"../utils/theme.js";import{rem as e,transitionProps as p}from"../utils/style.js";import{useDispatch as m,useSelector as b}from"../../__snowpack__/pkg/react-redux.js";import l from"../../__snowpack__/pkg/styled-components.js";import{useTranslation as g}from"../../__snowpack__/pkg/react-i18next.js";const u=l.dl`
    display: flex;
    align-items: center;
    background-color: var(--background-color);
    ${p("background-color")}
    margin: ${e(10)};
`,k=l.div`
    margin: 0 ${e(10)};
    padding: ${e(6)} ${e(10)};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    dd {
        display: block;
        width: ${e(18)};
        height: ${e(18)};
        margin: 0;
        position: relative;
        border-radius: 50%;
        ${o=>o.color};

        &::before {
            content: ' ';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            border: 1px solid ${o=>o.border};
            border-radius: 50%;
        }

        &::after {
            content: ' ';
            display: ${o=>o.active?"block":"none"};
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: #fff;
            width: ${e(8)};
            height: ${e(8)};
            transform: translate(-50%, -50%);
            border-radius: 50%;
        }
    }

    dt {
        display: block;
        margin-top: ${e(12)};
    }
`,f=[{color:`background-color: ${i.primary.default}`,border:"rgba(255, 255, 255, 0.59)",label:"light"},{color:`background-color: ${d.dark.backgroundColor}`,border:"rgba(255, 255, 255, 0.3)",label:"dark"},{color:"background-image: linear-gradient(133deg, #e9e9e9 5%, #a3a3a3 97%);",border:"rgba(255, 255, 255, 0.3)",label:"auto"}],h=()=>{const{t:o}=g("common"),a=m(),c=b(s.theme.selected);return t.createElement(u,null,f.map(r=>t.createElement(k,{color:r.color,border:r.border,active:c===r.label,key:r.label,onClick:()=>a(n.theme.selectTheme(r.label))},t.createElement("dd",null),t.createElement("dt",null,o(`common:theme.${r.label}`)))))};export default h;
