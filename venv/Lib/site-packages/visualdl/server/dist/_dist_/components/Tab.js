import d,{useCallback as u,useEffect as f,useState as k}from"../../__snowpack__/pkg/react.js";import{borderRadius as n,rem as g,transitionProps as v}from"../utils/style.js";import y from"../../__snowpack__/pkg/styled-components.js";import h from"../hooks/useClassNames.js";const _=y.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;

    &.fullWidth {
        justify-content: space-between;
    }

    &.centered {
        justify-content: center;
    }

    > a {
        cursor: pointer;
        display: block;
        font-size: ${g(16)};
        background-color: var(--tab-inactive-background-color);
        padding: 0.75em 1.25em;
        position: relative;

        &:first-child {
            border-top-left-radius: ${n};
        }
        &:last-child {
            border-top-right-radius: ${n};
        }

        &:not(.active) + a:not(.active)::before {
            content: '';
            display: block;
            width: 1px;
            height: calc(100% - 1.5em);
            background-color: var(--border-color);
            position: absolute;
            left: 0;
            top: 0.75em;
        }

        &.active {
            color: var(--primary-color);
            background-color: var(--background-color);
        }

        &:hover {
            color: var(--primary-color);
        }
    }

    &.underscore > a {
        border-bottom: 2px solid transparent;
        ${v(["border-color","color"])}
        background-color: transparent;
        padding: 0;
        padding-bottom: 0.4em;

        &:first-child {
            border-top-left-radius: 0;
        }
        &:last-child {
            border-top-right-radius: 0;
        }

        &:not(:last-child) {
            margin-right: 1.25em;
        }

        &:not(.active) + a:not(.active)::before {
            display: none;
        }

        &.active {
            border-bottom-color: var(--primary-color);
            background-color: transparent;
        }
    }
`,j=({list:t,value:e,variant:c,appearance:s,className:l,onChange:r})=>{const[a,i]=k(e);f(()=>i(e),[e]);const p=u(o=>{a!==o&&(i(o),r==null||r(o))},[a,r]),b=h(l,c,s,[s,l,c]);return d.createElement(_,{className:b},t==null?void 0:t.map((o,m)=>d.createElement("a",{key:m,className:a===o.value&&"active"||"",onClick:()=>p(o.value)},o.label)))};export default j;
