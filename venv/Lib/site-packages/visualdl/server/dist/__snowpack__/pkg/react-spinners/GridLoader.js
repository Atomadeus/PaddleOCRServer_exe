import{g as P,c as M,a as i}from"../common/_commonjsHelpers-b3efd043.js";import{r as z}from"../common/index-78959ebc.js";import{e as a,h as l}from"../common/index-021016f6.js";import"../common/hoist-non-react-statics.cjs-01efe895.js";import"../common/index-87351f60.js";import"../common/unitless.browser.esm-319df2e6.js";var L=M(function(D,_){var p=i&&i.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=i&&i.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,s){r.__proto__=s}||function(r,s){for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(r[c]=s[c])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),v=i&&i.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),b=i&&i.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),g=i&&i.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&v(t,e,n);return b(t,e),t};Object.defineProperty(_,"__esModule",{value:!0});var O=g(z),x=a.keyframes(d||(d=p([`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`],[`
  0% {transform: scale(1)}
  50% {transform: scale(0.5); opacity: 0.7}
  100% {transform: scale(1);opacity: 1}
`]))),o=function(e){return Math.random()*e},w=function(e){y(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.style=function(r){var s=n.props,c=s.color,u=s.size,f=s.margin,m=s.speedMultiplier;return a.css(h||(h=p([`
      display: inline-block;
      background-color: `,`;
      width: `,`;
      height: `,`;
      margin: `,`;
      border-radius: 100%;
      animation-fill-mode: "both";
      animation: `," ","s ",`s infinite ease;
    `],[`
      display: inline-block;
      background-color: `,`;
      width: `,`;
      height: `,`;
      margin: `,`;
      border-radius: 100%;
      animation-fill-mode: "both";
      animation: `," ","s ",`s infinite ease;
    `])),c,l.cssValue(u),l.cssValue(u),l.cssValue(f),x,(r/100+.6)/m,r/100-.2)},n.wrapper=function(){var r=n.props,s=r.size,c=r.margin,u=l.parseLengthAndUnit(s),f=l.parseLengthAndUnit(c),m=""+(parseFloat(u.value.toString())*3+parseFloat(f.value.toString())*6)+u.unit;return a.css(j||(j=p([`
      width: `,`;
      font-size: 0;
    `],[`
      width: `,`;
      font-size: 0;
    `])),m)},n}return t.prototype.render=function(){var n=this.props,r=n.loading,s=n.css;return r?a.jsx("span",{css:[this.wrapper(),s]},a.jsx("span",{css:this.style(o(100))}),a.jsx("span",{css:this.style(o(100))}),a.jsx("span",{css:this.style(o(100))}),a.jsx("span",{css:this.style(o(100))}),a.jsx("span",{css:this.style(o(100))}),a.jsx("span",{css:this.style(o(100))}),a.jsx("span",{css:this.style(o(100))}),a.jsx("span",{css:this.style(o(100))}),a.jsx("span",{css:this.style(o(100))})):null},t.defaultProps=l.sizeMarginDefaults(15),t}(O.PureComponent);_.default=w;var d,h,j}),S=P(L);export default S;
