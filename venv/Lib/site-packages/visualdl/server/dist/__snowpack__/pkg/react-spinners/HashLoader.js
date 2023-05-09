import{g as z,c as P,a as i}from"../common/_commonjsHelpers-b3efd043.js";import{r as M}from"../common/index-78959ebc.js";import{h as p,e as l}from"../common/index-021016f6.js";import"../common/hoist-non-react-statics.cjs-01efe895.js";import"../common/index-87351f60.js";import"../common/unitless.browser.esm-319df2e6.js";var L=P(function(A,h){var v=i&&i.__extends||function(){var r=function(o,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])},r(o,e)};return function(o,e){r(o,e);function n(){this.constructor=o}o.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}}(),u=i&&i.__makeTemplateObject||function(r,o){return Object.defineProperty?Object.defineProperty(r,"raw",{value:o}):r.raw=o,r},w=i&&i.__createBinding||(Object.create?function(r,o,e,n){n===void 0&&(n=e),Object.defineProperty(r,n,{enumerable:!0,get:function(){return o[e]}})}:function(r,o,e,n){n===void 0&&(n=e),r[n]=o[e]}),j=i&&i.__setModuleDefault||(Object.create?function(r,o){Object.defineProperty(r,"default",{enumerable:!0,value:o})}:function(r,o){r.default=o}),g=i&&i.__importStar||function(r){if(r&&r.__esModule)return r;var o={};if(r!=null)for(var e in r)e!=="default"&&Object.prototype.hasOwnProperty.call(r,e)&&w(o,r,e);return j(o,r),o};Object.defineProperty(h,"__esModule",{value:!0});var y=g(M),O=function(r){v(o,r);function o(){var e=r!==null&&r.apply(this,arguments)||this;return e.thickness=function(){var n=e.props.size,t=p.parseLengthAndUnit(n).value;return t/5},e.lat=function(){var n=e.props.size,t=p.parseLengthAndUnit(n).value;return(t-e.thickness())/2},e.offset=function(){return e.lat()-e.thickness()},e.color=function(){var n=e.props.color;return p.calculateRgba(n,.75)},e.before=function(){var n=e.props.size,t=e.color(),s=e.lat(),c=e.thickness(),a=e.offset();return l.keyframes(d||(d=u([`
      0% {width: `,"px;box-shadow: ","px ","px ",", ","px ","px ",`}
      35% {width: `,";box-shadow: 0 ","px ",", 0 ","px ",`}
      70% {width: `,"px;box-shadow: ","px ","px ",", ","px ","px ",`}
      100% {box-shadow: `,"px ","px ",", ","px ","px ",`}
    `],[`
      0% {width: `,"px;box-shadow: ","px ","px ",", ","px ","px ",`}
      35% {width: `,";box-shadow: 0 ","px ",", 0 ","px ",`}
      70% {width: `,"px;box-shadow: ","px ","px ",", ","px ","px ",`}
      100% {box-shadow: `,"px ","px ",", ","px ","px ",`}
    `])),c,s,-a,t,-s,a,t,p.cssValue(n),-a,t,a,t,c,-s,-a,t,s,a,t,s,-a,t,-s,a,t)},e.after=function(){var n=e.props.size,t=e.color(),s=e.lat(),c=e.thickness(),a=e.offset();return l.keyframes(_||(_=u([`
      0% {height: `,"px;box-shadow: ","px ","px ",", ","px ","px ",`}
      35% {height: `,";box-shadow: ","px 0 ",", ","px 0 ",`}
      70% {height: `,"px;box-shadow: ","px ","px ",", ","px ","px ",`}
      100% {box-shadow: `,"px ","px ",", ","px ","px ",`}
    `],[`
      0% {height: `,"px;box-shadow: ","px ","px ",", ","px ","px ",`}
      35% {height: `,";box-shadow: ","px 0 ",", ","px 0 ",`}
      70% {height: `,"px;box-shadow: ","px ","px ",", ","px ","px ",`}
      100% {box-shadow: `,"px ","px ",", ","px ","px ",`}
    `])),c,a,s,t,-a,-s,t,p.cssValue(n),a,t,-a,t,c,a,-s,t,-a,s,t,a,s,t,-a,-s,t)},e.style=function(n){var t=e.props,s=t.size,c=t.speedMultiplier,a=p.parseLengthAndUnit(s),x=a.value,f=a.unit;return l.css(m||(m=u([`
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      display: block;
      width: `,`;
      height: `,`;
      border-radius: `,`;
      transform: translate(-50%, -50%);
      animation-fill-mode: none;
      animation: `," ",`s infinite;
    `],[`
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      display: block;
      width: `,`;
      height: `,`;
      border-radius: `,`;
      transform: translate(-50%, -50%);
      animation-fill-mode: none;
      animation: `," ",`s infinite;
    `])),""+x/5+f,""+x/5+f,""+x/10+f,n===1?e.before():e.after(),2/c)},e.wrapper=function(){var n=e.props.size;return l.css(b||(b=u([`
      position: relative;
      width: `,`;
      height: `,`;
      transform: rotate(165deg);
    `],[`
      position: relative;
      width: `,`;
      height: `,`;
      transform: rotate(165deg);
    `])),p.cssValue(n),p.cssValue(n))},e}return o.prototype.render=function(){var e=this.props,n=e.loading,t=e.css;return n?l.jsx("span",{css:[this.wrapper(),t]},l.jsx("span",{css:this.style(1)}),l.jsx("span",{css:this.style(2)})):null},o.defaultProps=p.sizeDefaults(50),o}(y.PureComponent);h.default=O;var d,_,m,b}),k=z(L);export default k;
