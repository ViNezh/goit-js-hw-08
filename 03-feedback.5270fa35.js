!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,b=function(){return s.Date.now()};function p(e,t,n){var r,i,a,f,u,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,l=t,f=e.apply(o,n)}function S(e){return l=e,u=setTimeout(x,t),d?p(e):f}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function x(){var e=b();if(h(e))return O(e);u=setTimeout(x,function(e){var n=t-(e-c);return s?y(n,a-(e-l)):n}(e))}function O(e){return u=void 0,v&&r?p(e):(r=i=void 0,f)}function w(){var e=b(),n=h(e);if(r=arguments,i=this,c=e,n){if(void 0===u)return S(c);if(s)return u=setTimeout(x,t),p(c)}return void 0===u&&(u=setTimeout(x,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=i=u=void 0},w.flush=function(){return void 0===u?f:O(b())},w}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var S={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),textArea:document.querySelector(".feedback-form textarea")},h={};S.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),S.form.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){var t=Object.keys(e),n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var f=i.value;f===S.email.name&&(S.email.value=e[f]),f===S.textArea.name&&(S.textArea.value=e[f])}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}}()}();
//# sourceMappingURL=03-feedback.5270fa35.js.map