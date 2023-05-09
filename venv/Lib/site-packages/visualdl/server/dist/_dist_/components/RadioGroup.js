import r,{createContext as l,useCallback as i,useState as d}from"../../__snowpack__/pkg/react.js";import m from"../../__snowpack__/pkg/styled-components.js";const x=m.div`
    display: inline-flex;

    > * {
        flex-shrink: 0;
        align-items: flex-start;
    }
`;export const EventContext=l(()=>{}),ValueContext=l(null);const u=({value:s,onChange:e,children:o,className:c})=>{const[a,n]=d(s),p=i(t=>{n(t),e==null||e(t)},[e]);return r.createElement(EventContext.Provider,{value:t=>p(t)},r.createElement(ValueContext.Provider,{value:a},r.createElement(x,{className:c},o)))};export default u;
