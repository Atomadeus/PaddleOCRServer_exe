import{c as a}from"./_commonjsHelpers-b3efd043.js";var c=a(function(i){/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var l={}.hasOwnProperty;function e(){for(var t=[],n=0;n<arguments.length;n++){var s=arguments[n];if(!!s){var o=typeof s;if(o==="string"||o==="number")t.push(s);else if(Array.isArray(s)){if(s.length){var f=e.apply(null,s);f&&t.push(f)}}else if(o==="object")if(s.toString===Object.prototype.toString)for(var r in s)l.call(s,r)&&s[r]&&t.push(r);else t.push(s.toString())}}return t.join(" ")}i.exports?(e.default=e,i.exports=e):window.classNames=e})()});export{c};
