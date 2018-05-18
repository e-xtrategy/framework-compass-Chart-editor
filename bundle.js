!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=e.SVG_NS_URI="http://www.w3.org/2000/svg",o=e.createPathAttribute=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===t.length)return"M0 0";var e=t.reduce(function(t,e,n){return t+(0===n?"M":"L")+e.x+" "+e.y+" "},"");return e+="Z"};e.createPath=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.createElementNS(r,"path");return n.setAttribute("d",o(t)),Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])}),n},e.createText=function(t){var e=t.text,n=t.x,o=t.y,i=t.attrs,a=void 0===i?{}:i,c=document.createElementNS(r,"text");c.innerHTML=e;var u=Object.assign({},{"text-anchor":"middle","alignment-baseline":"central"},a,{x:n,y:o});return Object.keys(u).forEach(function(t){c.setAttribute(t,u[t])}),c},e.createCircle=function(t){var e=t.radius,n=t.cx,o=void 0===n?0:n,i=t.cy,a=void 0===i?0:i,c=t.stroke,u=void 0===c?"black":c,l=document.createElementNS(r,"circle"),s={cx:o,cy:a,r:e,stroke:u,"fill-opacity":0};return Object.keys(s).forEach(function(t){l.setAttribute(t,s[t])}),l}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.newIndexedArray=function(t){return t?[].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(Array(parseInt(t,10)))).map(function(t,e){return e}):[]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.STARTING_ANGLES_IN_GRAD={3:90,4:45,5:90,6:0,7:90,8:22.5};var r=e.gradsToRadians=function(t){return t*Math.PI/180};e.getAngleIncrement=function(t){return 2*Math.PI/t},e.unitaryCirclePoints=function(t){return function(e){var n=t*e;return{x:Math.cos(n),y:Math.sin(n)}}},e.rotatePoint=function(t){return function(e){var n=e.x,o=e.y,i=r(t),a=Math.cos(i),c=Math.sin(i);return{x:a*n+c*o,y:a*o-c*n}}},e.scalePoint=function(t){return function(e){return{x:t*e.x,y:t*e.y}}},e.translatePoint=function(t,e){return function(n){return{x:t+n.x,y:e+n.y}}},e.floor=function(t){return{x:Math.floor(t.x),y:Math.floor(t.y)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n(1);e.default=function(t){var e=t.sides,n=t.radius,i=void 0===n?1:n,a=t.xOffset,c=void 0===a?0:a,u=t.yOffset,l=void 0===u?0:u,s=(0,r.getAngleIncrement)(e),f=r.STARTING_ANGLES_IN_GRAD[e]||0;return(0,o.newIndexedArray)(e).map((0,r.unitaryCirclePoints)(s)).map((0,r.rotatePoint)(f)).map((0,r.scalePoint)(i)).map((0,r.translatePoint)(c,l)).map(r.floor)}},,function(t,e,n){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.htmlToElement=function(t){var e=document.createElement("template");return e.innerHTML=t,e.content.firstChild},e.updateProps=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;Array.from(t.querySelectorAll("[data-prop]")).forEach(function(t){var n=t.getAttribute("data-prop").split(":"),o=r(n,2),i=o[0],a=o[1];t[i]=e[a]})},e.bindEvents=function(t,e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];r.forEach(function(n){var r="data-bind-"+n;Array.from(t.querySelectorAll("["+r+"]")).forEach(function(t){var o=e[t.getAttribute(r)].bind(e);t.addEventListener(n,o)})})},e.createChildListObserver=function(t,e){var n=new window.MutationObserver(function(t){var n=t.find(function(t){return"childList"===t.type});n&&e(n)});return n.observe(t,{childList:!0}),n.disconnect}},function(t,e){t.exports='<div class="form-row">\n    <input role="chart-label-input" placeholder="Insert Label" value="Label" data-bind-input="onDataChange"/>\n    <input data-series="first" role="chart-value-input" type="range" min="0" max="100" value="20" step="20" data-bind-input="onDataChange"/>\n    <input data-series="second" role="chart-value-input" type="range" min="0" max="100" value="20" step="20" data-bind-input="onDataChange"/>\n</div>'},function(t,e){t.exports='<div>\n    <div class="vertical-container">\n    </div>\n    <div>\n        <button role="add-row" data-prop="disabled:addButtonDisabled" data-bind-click="onAddClick">+</button>\n        <button role="remove-row"  data-prop="disabled:removeButtonDisabled" data-bind-click="onRemoveClick">-</button>\n    </div>\n</div>'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=c(n(8)),i=c(n(7)),a=n(6);function c(t){return t&&t.__esModule?t:{default:t}}function u(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(u.prototype,HTMLElement.prototype),Object.setPrototypeOf(u,HTMLElement);var l=5,s=function(t){return Array.from(t.querySelectorAll(".form-row")).map(function(t){return{label:t.querySelector('input[role="chart-label-input"]').value,values:Array.from(t.querySelectorAll('input[role="chart-value-input"]')).reduce(function(t,e){return t[e.getAttribute("data-series")]=parseInt(e.value,10),t},{})}})},f=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.formContainer=void 0,t.numberOfRows=l,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u),r(e,[{key:"onDataChange",value:function(){var t=s(this),e=new window.CustomEvent("data-change",{detail:t});this.dispatchEvent(e)}},{key:"addRow",value:function(){var t=(0,a.htmlToElement)(i.default);return this.formContainer.appendChild(t),t}},{key:"onAddClick",value:function(){if(this.numberOfRows<8){var t=this.addRow();(0,a.bindEvents)(t,this,"input"),this.onDataChange()}}},{key:"onRowListChange",value:function(t){this.numberOfRows=t.target.childNodes.length-1,(0,a.updateProps)(this)}},{key:"onRemoveClick",value:function(){if(this.numberOfRows>3){var t=this.querySelector(".vertical-container");t.removeChild(t.lastChild),this.onDataChange()}}},{key:"render",value:function(){var t=(0,a.htmlToElement)(o.default);this.formContainer=t.querySelector(".vertical-container");for(var e=0;e<l;e++)this.addRow();this.appendChild(t),(0,a.bindEvents)(t,this,"click","input"),(0,a.updateProps)(this)}},{key:"connectedCallback",value:function(){var t=this;this.render(this),this.data=s(this),this.unsubscribe=(0,a.createChildListObserver)(this.formContainer,function(e){return t.onRowListChange(e)})}},{key:"disconnectedCallback",value:function(){this.unsubscribe()}},{key:"addButtonDisabled",get:function(){return this.numberOfRows>=8}},{key:"removeButtonDisabled",get:function(){return this.numberOfRows<=3}},{key:"data",get:function(){return this.hasAttribute("data")?JSON.parse(this.getAttribute("data")):[]},set:function(t){this.setAttribute("data",JSON.stringify(t))}}]),e}();e.default=f},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=n(1);e.default=function(t){var e=t.values,n=t.radius,i=void 0===n?1:n,a=t.xOffset,c=void 0===a?0:a,u=t.yOffset,l=void 0===u?0:u,s=e.length,f=(0,r.getAngleIncrement)(s),d=r.STARTING_ANGLES_IN_GRAD[s]||0;return(0,o.newIndexedArray)(s).map((0,r.unitaryCirclePoints)(f)).map((0,r.rotatePoint)(d)).map(function(t,n){var o=i*e[n]/100;return(0,r.scalePoint)(o)(t)}).map((0,r.translatePoint)(c,l)).map(r.floor)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(10),i=(r=o)&&r.__esModule?r:{default:r},a=n(0);e.default=function(t){var e=t.data,n=t.radius,r=t.colors;return function(t){return Object.keys(t[0].values)}(e).map(function(t){return function(t,e){return t.map(function(t){return t.values[e]})}(e,t)}).map(function(t,e){return function(t){var e=t.values,n=t.radius,r=t.color,o=(0,i.default)({values:e,radius:n});return(0,a.createPath)(o,{role:"chart-values",fill:r,stroke:r})}({values:t,radius:n,color:function(t,e){return t[e%t.length]}(r,e)})})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(0),i=n(3),a=(r=i)&&r.__esModule?r:{default:r};e.default=function(t){var e=t.data,n=t.radius,r=e.map(function(t){return t.label});return(0,a.default)({sides:r.length,radius:1.2*n}).map(function(t,e){var n=t.x,i=t.y;return(0,o.createText)({text:r[e],x:n,y:i,attrs:{role:"chart-label"}})})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(1),i=n(0),a=n(3),c=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){var e=t.data,n=t.radius,r=t.levels,a=e.length;return(0,o.newIndexedArray)(r).map(function(t){return(t+1)*(n/r)}).map(function(t){var e=(0,c.default)({sides:a,radius:t});return(0,i.createPath)(e,{role:"chart-base"})})}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(14)(!1)).push([t.i,'svg {\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    padding-bottom: 100%;\n    vertical-align: middle;\n    overflow: hidden;\n}\n\npath[role="chart-base"] {\n    fill: transparent;\n    stroke: #000000;\n}\n\npath[role="chart-values"] {\n    fill-opacity: 0.2;\n    stroke-width: 10;\n    stroke-opacity: 1;\n    stroke-linejoin: round;\n}',""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=c(n(15)),o=c(n(13)),i=c(n(12)),a=c(n(11));function c(t){return t&&t.__esModule?t:{default:t}}function u(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var l='\n    <svg viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg">\n        <style>\n            '+r.default.toString()+'\n        </style>\n        <g transform="translate(500,500)">\n        </g>\n    </svg>\n',s=["red","blue"];e.default=function(t,e,n){if(t.innerHTML=l,e&&0!==e.length){var r=(0,i.default)({data:e,radius:n}),c=(0,o.default)({data:e,radius:n,levels:5}),f=(0,a.default)({data:e,radius:n,colors:s}),d=[].concat(u(r),u(c),u(f)),p=document.querySelector("svg g");d.forEach(function(t){return p.appendChild(t)})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(16),a=(r=i)&&r.__esModule?r:{default:r};function c(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(c.prototype,HTMLElement.prototype),Object.setPrototypeOf(c,HTMLElement);var u=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.render=t.render.bind(t),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,c),o(e,[{key:"render",value:function(){(0,a.default)(this,this.data,this.radius)}},{key:"connectedCallback",value:function(){this.render()}},{key:"attributeChangedCallback",value:function(){window.requestAnimationFrame(this.render)}},{key:"data",get:function(){return this.hasAttribute("data")?JSON.parse(this.getAttribute("data")):[]},set:function(t){this.setAttribute("data",JSON.stringify(t))}},{key:"radius",get:function(){return this.hasAttribute("radius")?parseInt(this.getAttribute("radius"),10):400},set:function(t){this.setAttribute("radius",t)}}],[{key:"observedAttributes",get:function(){return["data"]}}]),e}();e.default=u},function(t,e,n){"use strict";var r=i(n(17)),o=i(n(9));function i(t){return t&&t.__esModule?t:{default:t}}window.customElements.define("app-chart",r.default),window.customElements.define("app-form",o.default)},function(t,e,n){"use strict";n(18),n(5),"serviceWorker"in navigator&&navigator.serviceWorker.register("sw.js").then(function(){console.log("Service Worker Registered")});var r=function(t){window.requestIdleCallback(function(){document.querySelector("a").href="data:image/svg+xml;base64,\n"+window.btoa(t.innerHTML)})};window.requestAnimationFrame(function(){var t=document.querySelector("app-form"),e=document.querySelector("app-chart");e.data=t.data,r(e),t.addEventListener("data-change",function(t){e.data=t.detail,window.requestAnimationFrame(function(){return r(e)})})})},function(t,e){(function(){"use strict";var t=new function(){},e=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function n(t){var n=e.has(t);return t=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t),!n&&t}function r(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function o(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function i(t,e,n){n=n||new Set;for(var r=t;r;){if(r.nodeType===Node.ELEMENT_NODE){var a=r;e(a);var c=a.localName;if("link"===c&&"import"===a.getAttribute("rel")){if((r=a.import)instanceof Node&&!n.has(r))for(n.add(r),r=r.firstChild;r;r=r.nextSibling)i(r,e,n);r=o(t,a);continue}if("template"===c){r=o(t,a);continue}if(a=a.__CE_shadowRoot)for(a=a.firstChild;a;a=a.nextSibling)i(a,e,n)}r=r.firstChild?r.firstChild:o(t,r)}}function a(t,e,n){t[e]=n}function c(){this.a=new Map,this.s=new Map,this.f=[],this.b=!1}function u(t,e){t.b=!0,t.f.push(e)}function l(t,e){t.b&&i(e,function(e){return s(t,e)})}function s(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.f.length;n++)t.f[n](e)}}function f(t,e){var n=[];for(i(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var r=n[e];1===r.__CE_state?t.connectedCallback(r):h(t,r)}}function d(t,e){var n=[];for(i(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var r=n[e];1===r.__CE_state&&t.disconnectedCallback(r)}}function p(t,e,n){var r=(n=n||{}).w||new Set,o=n.i||function(e){return h(t,e)},a=[];if(i(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var i=new Set(r);i.delete(n),p(t,n,{w:i,i:o})}})}else a.push(e)},r),t.b)for(e=0;e<a.length;e++)s(t,a[e]);for(e=0;e<a.length;e++)o(a[e])}function h(t,e){if(void 0===e.__CE_state){var n=e.ownerDocument;if((n.defaultView||n.__CE_isImportDocument&&n.__CE_hasRegistry)&&(n=t.a.get(e.localName))){n.constructionStack.push(e);var o=n.constructor;try{try{if(new o!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{n.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=n,n.attributeChangedCallback)for(n=n.observedAttributes,o=0;o<n.length;o++){var i=n[o],a=e.getAttribute(i);null!==a&&t.attributeChangedCallback(e,i,null,a,null)}r(e)&&t.connectedCallback(e)}}}function m(t,e){this.c=t,this.a=e,this.b=void 0,p(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function v(t){t.b&&t.b.disconnect()}function y(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function b(t){this.j=!1,this.c=t,this.o=new Map,this.l=function(t){return t()},this.g=!1,this.m=[],this.u=new m(t,document)}c.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t)},c.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t)},c.prototype.attributeChangedCallback=function(t,e,n,r,o){var i=t.__CE_definition;i.attributeChangedCallback&&-1<i.observedAttributes.indexOf(e)&&i.attributeChangedCallback.call(t,e,n,r,o)},m.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||v(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,r=0;r<n.length;r++)p(this.c,n[r])},b.prototype.define=function(t,e){var r,o,i,a,c,u=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!n(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.c.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.j)throw Error("A custom element is already being defined.");this.j=!0;try{var l=function(t){var e=s[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},s=e.prototype;if(!(s instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");r=l("connectedCallback"),o=l("disconnectedCallback"),i=l("adoptedCallback"),a=l("attributeChangedCallback"),c=e.observedAttributes||[]}catch(t){return}finally{this.j=!1}e={localName:t,constructor:e,connectedCallback:r,disconnectedCallback:o,adoptedCallback:i,attributeChangedCallback:a,observedAttributes:c,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.s.set(n.constructor,n)}(this.c,t,e),this.m.push(e),this.g||(this.g=!0,this.l(function(){return function(t){if(!1!==t.g){t.g=!1;for(var e=t.m,n=[],r=new Map,o=0;o<e.length;o++)r.set(e[o].localName,[]);for(p(t.c,document,{i:function(e){if(void 0===e.__CE_state){var o=e.localName,i=r.get(o);i?i.push(e):t.c.a.get(o)&&n.push(e)}}}),o=0;o<n.length;o++)h(t.c,n[o]);for(;0<e.length;){for(var i=e.shift(),o=i.localName,i=r.get(i.localName),a=0;a<i.length;a++)h(t.c,i[a]);(o=t.o.get(o))&&y(o)}}}(u)}))},b.prototype.i=function(t){p(this.c,t)},b.prototype.get=function(t){if(t=this.c.a.get(t))return t.constructor},b.prototype.whenDefined=function(t){if(!n(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this.o.get(t);return e?e.f:(e=new function(){var t=this;this.b=this.a=void 0,this.f=new Promise(function(e){t.b=e,t.a&&e(t.a)})},this.o.set(t,e),this.c.a.get(t)&&!this.m.some(function(e){return e.localName===t})&&y(e),e.f)},b.prototype.v=function(t){v(this.u);var e=this.l;this.l=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=b,b.prototype.define=b.prototype.define,b.prototype.upgrade=b.prototype.i,b.prototype.get=b.prototype.get,b.prototype.whenDefined=b.prototype.whenDefined,b.prototype.polyfillWrapFlushCallback=b.prototype.v;var g=window.Document.prototype.createElement,w=window.Document.prototype.createElementNS,_=window.Document.prototype.importNode,E=window.Document.prototype.prepend,C=window.Document.prototype.append,A=window.DocumentFragment.prototype.prepend,k=window.DocumentFragment.prototype.append,O=window.Node.prototype.cloneNode,N=window.Node.prototype.appendChild,S=window.Node.prototype.insertBefore,j=window.Node.prototype.removeChild,M=window.Node.prototype.replaceChild,x=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),T=window.Element.prototype.attachShadow,P=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),L=window.Element.prototype.getAttribute,D=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,H=window.Element.prototype.getAttributeNS,I=window.Element.prototype.setAttributeNS,q=window.Element.prototype.removeAttributeNS,F=window.Element.prototype.insertAdjacentElement,G=window.Element.prototype.insertAdjacentHTML,B=window.Element.prototype.prepend,W=window.Element.prototype.append,J=window.Element.prototype.before,U=window.Element.prototype.after,z=window.Element.prototype.replaceWith,V=window.Element.prototype.remove,X=window.HTMLElement,Z=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),$=window.HTMLElement.prototype.insertAdjacentElement,K=window.HTMLElement.prototype.insertAdjacentHTML;function Q(t,e,n){function o(e){return function(n){for(var o=[],i=0;i<arguments.length;++i)o[i-0]=arguments[i];i=[];for(var a=[],c=0;c<o.length;c++){var u=o[c];if(u instanceof Element&&r(u)&&a.push(u),u instanceof DocumentFragment)for(u=u.firstChild;u;u=u.nextSibling)i.push(u);else i.push(u)}for(e.apply(this,o),o=0;o<a.length;o++)d(t,a[o]);if(r(this))for(o=0;o<i.length;o++)(a=i[o])instanceof Element&&f(t,a)}}n.h&&(e.prepend=o(n.h)),n.append&&(e.append=o(n.append))}var Y,tt=window.customElements;if(!tt||tt.forcePolyfill||"function"!=typeof tt.define||"function"!=typeof tt.get){var et=new c;Y=et,window.HTMLElement=function(){function e(){var e=this.constructor;if(!(r=Y.s.get(e)))throw Error("The custom element being constructed was not registered with `customElements`.");var n=r.constructionStack;if(!n.length)return n=g.call(document,r.localName),Object.setPrototypeOf(n,e.prototype),n.__CE_state=1,n.__CE_definition=r,s(Y,n),n;var r,o=n[r=n.length-1];if(o===t)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[r]=t,Object.setPrototypeOf(o,e.prototype),s(Y,o),o}return e.prototype=X.prototype,e}(),function(){var t=et;a(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructor}return e=g.call(this,e),s(t,e),e}),a(Document.prototype,"importNode",function(e,n){return e=_.call(this,e,n),this.__CE_hasRegistry?p(t,e):l(t,e),e}),a(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var r=t.a.get(n);if(r)return new r.constructor}return e=w.call(this,e,n),s(t,e),e}),Q(t,Document.prototype,{h:E,append:C})}(),Q(et,DocumentFragment.prototype,{h:A,append:k}),function(){var t=et;function e(e,n){Object.defineProperty(e,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){if(this.nodeType===Node.TEXT_NODE)n.set.call(this,e);else{var o=void 0;if(this.firstChild){var i=this.childNodes,a=i.length;if(0<a&&r(this)){o=Array(a);for(var c=0;c<a;c++)o[c]=i[c]}}if(n.set.call(this,e),o)for(e=0;e<o.length;e++)d(t,o[e])}}})}a(Node.prototype,"insertBefore",function(e,n){if(e instanceof DocumentFragment){var o=Array.prototype.slice.apply(e.childNodes);if(e=S.call(this,e,n),r(this))for(n=0;n<o.length;n++)f(t,o[n]);return e}return o=r(e),n=S.call(this,e,n),o&&d(t,e),r(this)&&f(t,e),n}),a(Node.prototype,"appendChild",function(e){if(e instanceof DocumentFragment){var n=Array.prototype.slice.apply(e.childNodes);if(e=N.call(this,e),r(this))for(var o=0;o<n.length;o++)f(t,n[o]);return e}return n=r(e),o=N.call(this,e),n&&d(t,e),r(this)&&f(t,e),o}),a(Node.prototype,"cloneNode",function(e){return e=O.call(this,e),this.ownerDocument.__CE_hasRegistry?p(t,e):l(t,e),e}),a(Node.prototype,"removeChild",function(e){var n=r(e),o=j.call(this,e);return n&&d(t,e),o}),a(Node.prototype,"replaceChild",function(e,n){if(e instanceof DocumentFragment){var o=Array.prototype.slice.apply(e.childNodes);if(e=M.call(this,e,n),r(this))for(d(t,n),n=0;n<o.length;n++)f(t,o[n]);return e}o=r(e);var i=M.call(this,e,n),a=r(this);return a&&d(t,n),o&&d(t,e),a&&f(t,e),i}),x&&x.get?e(Node.prototype,x):u(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)j.call(this,this.firstChild);N.call(this,document.createTextNode(t))}})})}(),function(){var t=et;function e(e,n){Object.defineProperty(e,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){var o=this,a=void 0;if(r(this)&&(a=[],i(this,function(t){t!==o&&a.push(t)})),n.set.call(this,e),a)for(var c=0;c<a.length;c++){var u=a[c];1===u.__CE_state&&t.disconnectedCallback(u)}return this.ownerDocument.__CE_hasRegistry?p(t,this):l(t,this),e}})}function n(e,n){a(e,"insertAdjacentElement",function(e,o){var i=r(o);return e=n.call(this,e,o),i&&d(t,o),r(e)&&f(t,o),e})}function o(e,n){function r(e,n){for(var r=[];e!==n;e=e.nextSibling)r.push(e);for(n=0;n<r.length;n++)p(t,r[n])}a(e,"insertAdjacentHTML",function(t,e){if("beforebegin"===(t=t.toLowerCase())){var o=this.previousSibling;n.call(this,t,e),r(o||this.parentNode.firstChild,this)}else if("afterbegin"===t)o=this.firstChild,n.call(this,t,e),r(this.firstChild,o);else if("beforeend"===t)o=this.lastChild,n.call(this,t,e),r(o||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");o=this.nextSibling,n.call(this,t,e),r(this.nextSibling,o)}})}T&&a(Element.prototype,"attachShadow",function(t){return this.__CE_shadowRoot=T.call(this,t)}),P&&P.get?e(Element.prototype,P):Z&&Z.get?e(HTMLElement.prototype,Z):u(t,function(t){e(t,{enumerable:!0,configurable:!0,get:function(){return O.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,r=g.call(document,this.localName);for(r.innerHTML=t;0<n.childNodes.length;)j.call(n,n.childNodes[0]);for(t=e?r.content:r;0<t.childNodes.length;)N.call(n,t.childNodes[0])}})}),a(Element.prototype,"setAttribute",function(e,n){if(1!==this.__CE_state)return D.call(this,e,n);var r=L.call(this,e);D.call(this,e,n),n=L.call(this,e),t.attributeChangedCallback(this,e,r,n,null)}),a(Element.prototype,"setAttributeNS",function(e,n,r){if(1!==this.__CE_state)return I.call(this,e,n,r);var o=H.call(this,e,n);I.call(this,e,n,r),r=H.call(this,e,n),t.attributeChangedCallback(this,n,o,r,e)}),a(Element.prototype,"removeAttribute",function(e){if(1!==this.__CE_state)return R.call(this,e);var n=L.call(this,e);R.call(this,e),null!==n&&t.attributeChangedCallback(this,e,n,null,null)}),a(Element.prototype,"removeAttributeNS",function(e,n){if(1!==this.__CE_state)return q.call(this,e,n);var r=H.call(this,e,n);q.call(this,e,n);var o=H.call(this,e,n);r!==o&&t.attributeChangedCallback(this,n,r,o,e)}),$?n(HTMLElement.prototype,$):F?n(Element.prototype,F):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),K?o(HTMLElement.prototype,K):G?o(Element.prototype,G):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Q(t,Element.prototype,{h:B,append:W}),function(t){var e=Element.prototype;function n(e){return function(n){for(var o=[],i=0;i<arguments.length;++i)o[i-0]=arguments[i];i=[];for(var a=[],c=0;c<o.length;c++){var u=o[c];if(u instanceof Element&&r(u)&&a.push(u),u instanceof DocumentFragment)for(u=u.firstChild;u;u=u.nextSibling)i.push(u);else i.push(u)}for(e.apply(this,o),o=0;o<a.length;o++)d(t,a[o]);if(r(this))for(o=0;o<i.length;o++)(a=i[o])instanceof Element&&f(t,a)}}J&&(e.before=n(J)),J&&(e.after=n(U)),z&&a(e,"replaceWith",function(e){for(var n=[],o=0;o<arguments.length;++o)n[o-0]=arguments[o];o=[];for(var i=[],a=0;a<n.length;a++){var c=n[a];if(c instanceof Element&&r(c)&&i.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)o.push(c);else o.push(c)}for(a=r(this),z.apply(this,n),n=0;n<i.length;n++)d(t,i[n]);if(a)for(d(t,this),n=0;n<o.length;n++)(i=o[n])instanceof Element&&f(t,i)}),V&&a(e,"remove",function(){var e=r(this);V.call(this),e&&d(t,this)})}(t)}(),document.__CE_hasRegistry=!0;var nt=new b(et);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:nt})}}).call(self)},function(t,e,n){n(20),t.exports=n(19)}]);