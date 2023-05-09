import{DEFAULT_ORDER_INDICATOR as a,OrderDirection as l,useIndicatorOrder as b}from"../../../resource/hyper-parameter/index.js";import e,{useMemo as s,useState as d}from"../../../../__snowpack__/pkg/react.js";import p from"../../Select.js";import j from"./Table.js";import w from"../View.js";import{rem as u}from"../../../utils/style.js";import i from"../../../../__snowpack__/pkg/styled-components.js";import{useTranslation as C}from"../../../../__snowpack__/pkg/react-i18next.js";const S="hyper-parameter-table-view-column-order",x=i(w)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
`,I=i.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: ${u(20)};

    > span {
        margin-right: 0.5em;

        &:not(:first-child) {
            margin-left: 1.5em;
        }
    }

    > .order-select {
        width: ${u(160)};
    }
`,T=i.div`
    width: 100%;
`,R=({indicators:o,list:E,data:h})=>{const{t}=C("hyper-parameter"),m=s(()=>o.map(({name:r})=>r),[o]),f=s(()=>[{value:a,label:t("hyper-parameter.order-default")},...m.map(r=>({value:r,label:r}))],[m,t]),[n,_]=d(a),y=s(()=>[l.ASCENDING,l.DESCENDING].map(r=>({value:r,label:t(`hyper-parameter:order-direction-value.${r}`)})),[t]),[c,O]=d(l.ASCENDING),g=s(()=>n===a?[]:[{id:n,desc:c===l.DESCENDING}],[c,n]),[D,N]=b(S,o);return e.createElement(x,null,e.createElement(I,null,e.createElement("span",null,t("hyper-parameter:order-by")),e.createElement(p,{className:"order-select",list:f,value:n,onChange:_}),n!==a?e.createElement(e.Fragment,null,e.createElement("span",null,t("hyper-parameter:order-direction")),e.createElement(p,{className:"order-select",list:y,value:c,onChange:O})):null),e.createElement(T,null,e.createElement(j,{indicators:o,list:E,data:h,sortBy:g,expand:!0,columnOrder:D,onOrderChange:N})))};export default R;
