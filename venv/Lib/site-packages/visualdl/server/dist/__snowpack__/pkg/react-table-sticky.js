import{c as h}from"./common/_commonjsHelpers-b3efd043.js";var m=h(function(S,r){Object.defineProperty(r,"__esModule",{value:!0}),r.checkErrors=t=>{const e=!!t.find(s=>s.parent),n=t.filter(s=>s.sticky&&!s.parent).map(({Header:s})=>`'${s}'`);if(e&&n.length)throw new Error(`WARNING react-table-sticky:
      
Your ReactTable has group and sticky columns outside groups, and that will break UI.
      
You must place ${n.join(" and ")} columns into a group (even a group with an empty Header label)
`);const c=t.find(s=>!s.sticky&&s.columns&&s.columns.find(u=>u.sticky));if(!c)return;const i=c.columns.find(({sticky:s})=>s);if(!!i)throw new Error(`WARNING react-table-sticky:
    
Your ReactTable contain columns group with at least one child columns sticky.
    
When ReactTable has columns groups, only columns groups can be sticky
    
You must set sticky: 'left' | 'right' for the '${c.Header}'
    column, or remove the sticky property of '${i.Header}' column.`)};function o(t){return t.sticky==="left"||t.sticky==="right"?t.sticky:t.parent?o(t.parent):null}r.getStickyValue=o;function l(t,e){const n=e.findIndex(({id:a})=>a===t),c=e[n],i=e[n+1],s=o(c)==="left",u=i&&o(i)==="left";return s&&!u}r.columnIsLastLeftSticky=l;function f(t,e){const n=e.findIndex(({id:a})=>a===t),c=e[n],i=e[n-1],s=o(c)==="right",u=i&&o(i)==="right";return s&&!u}r.columnIsFirstRightSticky=f;function y(t,e){const n=e.findIndex(({id:i})=>i===t);let c=0;for(let i=n+1;i<e.length;i+=1)e[i].isVisible!==!1&&(c+=e[i].width);return c}r.getMarginRight=y;const k={position:"sticky",zIndex:3};function g(t,e){return e.filter(n=>n.depth===t.depth)}function d(t,e){let n={};const c={};r.checkErrors(e.columns);const i=o(t);if(i){n=Object.assign({},k),c["data-sticky-td"]=!0;const s=g(t,e.flatHeaders),u=i==="left"?t.totalLeft:y(t.id,s);n=Object.assign(Object.assign({},n),{[i]:`${u}px`}),l(t.id,s)&&(c["data-sticky-last-left-td"]=!0),f(t.id,s)&&(c["data-sticky-first-right-td"]=!0)}return Object.assign({style:n},c)}r.useSticky=t=>{t.getHeaderProps.push((e,{instance:n,column:c})=>{const i=d(c,n);return[e,i]}),t.getCellProps.push((e,{instance:n,cell:c})=>{const i=d(c.column,n);return[e,i]})},r.useSticky.pluginName="useSticky"}),p=m.useSticky;export{p as useSticky};
