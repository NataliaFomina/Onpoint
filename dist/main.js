!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="dist/",e(e.s=46)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];null!=a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t,e){n.exports=e.p+"fonts/Lato-Regular.eot"},function(n,t,e){n.exports=e.p+"fonts/Lato-Light.eot"},function(n,t,e){n.exports=e.p+"fonts/Lato-Semibold.eot"},function(n,t,e){n.exports=e.p+"fonts/Lato-Bold.eot"},function(n,t,e){n.exports=e.p+"fonts/Lato-Medium.eot"},function(n,t,e){n.exports=e.p+"fonts/GothamPro-Medium.eot"},function(n,t,e){n.exports=e.p+"fonts/GothamPro-Light.eot"},function(n,t,e){n.exports=e.p+"fonts/GothamPro.eot"},function(n,t,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),l=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),p=null,f=0,s=[],d=e(37);function c(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(h(o.parts[a],t))}else{var l=[];for(a=0;a<o.parts.length;a++)l.push(h(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:l}}}}function u(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(l):e.push(o[a]={id:a,parts:[l]})}return e}function g(n,t){var e=l(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),s.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=l(n.insertAt.before,e);e.insertBefore(t,r)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=s.indexOf(n);t>=0&&s.splice(t,1)}function x(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return _(t,n.attrs),g(n,t),t}function _(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function h(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=f++;e=p||(p=x(t)),o=w.bind(null,e,a,!1),r=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",_(t,n.attrs),g(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=d(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),l=n.href;n.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}.bind(null,e,t),r=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=x(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){m(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=u(n,t);return c(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var a=e[r];(l=i[a.id]).refs--,o.push(l)}n&&c(u(n,t),t);for(r=0;r<o.length;r++){var l;if(0===(l=o[r]).refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete i[l.id]}}}};var y,b=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function w(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=b(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t,e){var o=e(12);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(10)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){t=n.exports=e(0)(!1);var o=e(1),r=o(e(2)),i=o(e(2)+"?#iefix"),a=o(e(13)),l=o(e(14)),p=o(e(15)+"#Lato-Regular"),f=o(e(3)),s=o(e(3)+"?#iefix"),d=o(e(16)),c=o(e(17)),u=o(e(18)+"#Lato-Light"),g=o(e(4)),m=o(e(4)+"?#iefix"),x=o(e(19)),_=o(e(20)),h=o(e(21)+"#Lato-Semibold"),y=o(e(5)),b=o(e(5)+"?#iefix"),w=o(e(22)),v=o(e(23)),z=o(e(24)+"#Lato-Bold"),L=o(e(6)),k=o(e(6)+"?#iefix"),S=o(e(25)),M=o(e(26)),j=o(e(27)+"#Lato-Medium"),P=o(e(7)),E=o(e(7)+"?#iefix"),G=o(e(28)),C=o(e(29)),R=o(e(30)+"#GothamPro-Medium"),O=o(e(8)),U=o(e(8)+"?#iefix"),T=o(e(31)),A=o(e(32)),q=o(e(33)+"#GothamPro-Light"),B=o(e(9)),I=o(e(9)+"?#iefix"),N=o(e(34)),F=o(e(35)),X=o(e(36)+"#GothamPro");t.push([n.i,"@font-face {\n  font-family: 'Lato';\n  src: url("+r+");\n  src: url("+i+") format('embedded-opentype'),\n    url("+a+") format('woff2'),\n    url("+l+") format('woff'),\n    url("+p+") format('svg');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Lato';\n  src: url("+f+");\n  src: url("+s+") format('embedded-opentype'),\n    url("+d+") format('woff2'),\n    url("+c+") format('woff'),\n    url("+u+") format('svg');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url("+f+");\n  src: url("+s+") format('embedded-opentype'),\n    url("+d+") format('woff2'),\n    url("+c+") format('woff'),\n    url("+u+") format('svg');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url("+g+");\n  src: url("+m+") format('embedded-opentype'),\n    url("+x+") format('woff2'),\n    url("+_+") format('woff'),\n    url("+h+") format('svg');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url("+y+");\n  src: url("+b+") format('embedded-opentype'),\n    url("+w+") format('woff2'),\n    url("+v+") format('woff'),\n    url("+z+") format('svg');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url("+L+");\n  src: url("+k+") format('embedded-opentype'),\n    url("+S+") format('woff2'),\n    url("+M+") format('woff'),\n    url("+j+") format('svg');\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Gotham Pro';\n  src: url("+P+");\n  src: url("+E+") format('embedded-opentype'),\n    url("+G+") format('woff2'),\n    url("+C+") format('woff'),\n    url("+R+") format('svg');\n  font-weight: 500;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Gotham Pro';\n  src: url("+O+");\n  src: url("+U+") format('embedded-opentype'),\n    url("+T+") format('woff2'),\n    url("+A+") format('woff'),\n    url("+q+") format('svg');\n  font-weight: 300;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Gotham Pro';\n  src: url("+B+");\n  src: url("+I+") format('embedded-opentype'),\n    url("+N+") format('woff2'),\n    url("+F+") format('woff'),\n    url("+X+") format('svg');\n  font-weight: 400;\n  font-style: normal;\n}",""])},function(n,t,e){n.exports=e.p+"fonts/Lato-Regular.woff2"},function(n,t,e){n.exports=e.p+"fonts/Lato-Regular.woff"},function(n,t,e){n.exports=e.p+"img/Lato-Regular.svg"},function(n,t,e){n.exports=e.p+"fonts/Lato-Light.woff2"},function(n,t,e){n.exports=e.p+"fonts/Lato-Light.woff"},function(n,t,e){n.exports=e.p+"img/Lato-Light.svg"},function(n,t,e){n.exports=e.p+"fonts/Lato-Semibold.woff2"},function(n,t,e){n.exports=e.p+"fonts/Lato-Semibold.woff"},function(n,t,e){n.exports=e.p+"img/Lato-Semibold.svg"},function(n,t,e){n.exports=e.p+"fonts/Lato-Bold.woff2"},function(n,t,e){n.exports=e.p+"fonts/Lato-Bold.woff"},function(n,t,e){n.exports=e.p+"img/Lato-Bold.svg"},function(n,t,e){n.exports=e.p+"fonts/Lato-Medium.woff2"},function(n,t,e){n.exports=e.p+"fonts/Lato-Medium.woff"},function(n,t,e){n.exports=e.p+"img/Lato-Medium.svg"},function(n,t,e){n.exports=e.p+"fonts/GothamPro-Medium.woff2"},function(n,t,e){n.exports=e.p+"fonts/GothamPro-Medium.woff"},function(n,t,e){n.exports=e.p+"img/GothamPro-Medium.svg"},function(n,t,e){n.exports=e.p+"fonts/GothamPro-Light.woff2"},function(n,t,e){n.exports=e.p+"fonts/GothamPro-Light.woff"},function(n,t,e){n.exports=e.p+"img/GothamPro-Light.svg"},function(n,t,e){n.exports=e.p+"fonts/GothamPro.woff2"},function(n,t,e){n.exports=e.p+"fonts/GothamPro.woff"},function(n,t,e){n.exports=e.p+"img/GothamPro.svg"},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){var o=e(39);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(10)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){t=n.exports=e(0)(!1);var o=e(1),r=o(e(40)),i=o(e(41)),a=o(e(42)),l=o(e(43)),p=o(e(44)),f=o(e(45));t.push([n.i,"* {\n  font-family: 'Gotham Pro';\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  /* fullpage */\n  .fullpage {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n  }\n  .fullpage__wrapper {\n    display: flex;\n    flex-direction: column;\n    transition: transform 0.6s ease;\n  }\n  .fullpage__item {\n    position: relative;\n    max-width: 100%;\n    height: 100vh;\n  }\n  .fullpage__btns {\n    position: absolute;\n    top: 45%;\n    right: 2.5%;\n    display: flex;\n    flex-direction: column;\n  }\n  .fullpage__btn {\n    height: 13px;\n    width: 13px;\n    background-color: #fff;\n    border-radius: 50%;\n    margin-bottom: 8px;\n    cursor: pointer;\n  }\n  .fullpage__btn_active {\n    background-color: #f78b1f;\n  }\n  .fullpage__item,\n  .slider__patogenez-1,\n  .slider__patogenez-2,\n  .slider__patogenez-3 {\n    background-repeat: no-repeat;\n    background-size: 100%;\n    background-position: center;\n  }\n\n  /* navigation */\n  .navigation {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: url("+r+");\n    background-position: bottom;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    text-align: center;\n  }\n  .navigation__text {\n    display: block;\n    font-family: 'Gotham Pro';\n    color: #fff;\n    text-align: center;\n    font-weight: 300;\n    margin-bottom: 7px;\n    margin-left: 30px;\n  }\n  .navigation__arrow {\n    margin-bottom: 10px;\n    margin-left: 28px;\n  }\n\n  /* therapy */\n  .section-therapy {\n    background-image: url("+i+");\n  }\n  .section-therapy__title {\n    font-family: 'Gotham Pro';\n    padding-top: 140px;\n    margin-left: 7%;\n    color: #0d319c;\n    font-weight: 400;\n    font-size: 48px;\n    line-height: 1.2;\n    letter-spacing: 0.4px;\n    width: 780px;\n  }\n\n  /* therapy animation */\n  @-webkit-keyframes animate-circle {\n    from {\n      -webkit-transform: scale(.2);\n      transform: scale(.2);\n      opacity: 1;\n    }\n    to {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 0;\n    }\n  }\n\n  @keyframes animate-circle {\n    from {\n      -webkit-transform: scale(.2);\n      transform: scale(.2);\n      opacity: 1;\n    }\n    to {\n      -webkit-transform: scale(1);\n      transform: scale(1);\n      opacity: 0;\n    }\n  }\n  .section-therapy__loader {\n    position: relative;\n    border-radius:100%;\n    margin: 0 auto;\n    overflow: hidden;   \n  }\n\n  .section-therapy__loader:after{\n    content:'';\n    position:absolute;\n    left: 1px; \n    top: 1px;\n    border-radius:100%;  \n    box-shadow: 0px 0px 0px 2000px #cf1437;\n  }\n\n  .section-therapy__circle {\n    --duration: 2.5s;\n    position: absolute;\n    left: 1px; \n    top: 1px;\n    border-radius:100%;\n    background: radial-gradient(#de791b, #cf1437); \n    -webkit-animation: animate-circle var(--duration) cubic-bezier(.13,.71,.8,.35) infinite;\n    animation: animate-circle var(--duration) cubic-bezier(.13,.71,.8,.35) infinite;\n  }\n\n  .section-therapy__back {\n    position: absolute;\n    left: 1px; \n    top: 1px;\n    border-radius: 100%;\n    background:#de791b; \n    opacity: 0.3;\n  }\n\n  .section-therapy__text {\n    position: absolute;\n    width: 200px;\n    font-family: 'Lato';\n    font-weight: 400;\n    font-size: 20px;\n    color: #0d319c;\n    letter-spacing: 0.4px;\n  }\n  .section-therapy__item {\n    --size: 3.5rem;\n    position: absolute;\n    height: var(--size);\n    width: var(--size);\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%);\n  }\n  .section-therapy__circle:nth-of-type(1) {\n    -webkit-animation-delay: 0;\n    animation-delay: 0;\n  }\n  .section-therapy__circle:nth-of-type(2) {\n    -webkit-animation-delay: calc(var(--duration) / -2);\n    animation-delay: calc(var(--duration) / -2);\n  }\n  .section-therapy__circle:nth-of-type(3) {\n    -webkit-animation-delay: calc(var(--duration) / -4);\n    animation-delay: calc(var(--duration) / -4);\n  }\n  .section-therapy__item:nth-of-type(1) {\n    top: 38%;\n    left: 57.5%;\n  }\n  .loader_big {\n    width: 52px;\n    height: 52px;\n  }\n  .loader_big:after,\n  .circle_big,\n  .back_big{\n    width: 50px;\n    height: 50px;\n  }\n  .section-therapy__text:nth-of-type(1) {\n    top: 10px;\n    left: 65px;\n  }\n  .section-therapy__item:nth-of-type(2) {\n    top: 59%;\n    left: 28%;\n  }\n  .loader_medium {\n    width: 30px;\n    height: 30px;\n  }\n  .loader_medium:after,\n  .circle_medium,\n  .back_medium{\n    width: 28px;\n    height: 28px;\n  }\n  .section-therapy__item:nth-of-type(2) > .section-therapy__text{\n    top: -32px;\n    left: -36px;\n  }\n  .section-therapy__item:nth-of-type(3) {\n    top: 74%;\n    left: 47.5%;\n  }\n  .loader_small {\n    width: 16px;\n    height: 16px;\n  }\n  .loader_small:after,\n  .circle_small,\n  .back_small{\n    width: 14px;\n    height: 14px;\n  }\n  .section-therapy__item:nth-of-type(3) > .section-therapy__text{\n    top: -34px;\n    left: -90px;\n  }\n  .section-therapy__item:nth-of-type(4) {\n    top: 71%;\n    left: 81%;\n  }\n  .loader_small {\n    width: 16px;\n    height: 16px;\n  }\n  .loader_small:after,\n  .circle_small,\n  .back_small{\n    width: 14px;\n    height: 14px;\n  }\n  .section-therapy__item:nth-of-type(4) > .section-therapy__text{\n    top: -32px;\n    left: -10px;\n  }\n\n  /* patogenez */\n  .section-patogenez {\n    background-image: url("+a+");\n  }\n  .section-patogenez__title {\n    font-family: 'Gotham Pro';\n    padding-top: 248px;\n    margin-left: 27.5%;\n    color: #fff;\n    font-weight: 300;\n    font-size: 50px;\n    line-height: 1.2;\n    letter-spacing: 0.01px;\n    max-width: 500px;\n  }\n  .section-patogenez__title-second-line {\n    margin-left: 50px;\n  }\n\n  /* slider */\n  .slider {\n    position: relative;\n    overflow: hidden;\n  }\n  .slider__wrapper {\n    display: flex;\n    transition: transform 0.6s ease;\n  }\n  .slider__item {\n    position: relative;\n    flex: 0 0 100%;\n    max-width: 100%;\n    height: 768px;\n  }\n  .slider__item > p {\n    position: absolute;\n    font-family: 'Lato';\n    color:  #fff;\n    font-weight: 400;\n  }\n  .slider__item > p > span {\n    font-family: 'Lato';\n    position: absolute;\n    font-size: 36px;\n    font-weight: 500;\n  }\n  .slider__title {\n    font-family: 'Gotham Pro';\n    padding-top: 113px;\n    margin-left: 8%;\n    color: #fff;\n    font-weight: 400;\n    font-size: 30px;\n    line-height: 1.2;\n    letter-spacing: 0.01px;\n  }\n  .slider__patogenez-1 {\n    background-image: url("+l+");\n  }\n  .slider__item.slider__patogenez-1 > p {\n    font-size: 24px;\n  }\n  .slider__text-patogenez-1-1 {\n    top: 31%;\n    left:47%;\n  }\n  .slider__text-patogenez-1-1 span,\n  .slider__text-patogenez-1-2 span,\n  .slider__text-patogenez-1-3 span {\n    top: -40px;\n    left: 40px;\n  }\n  .slider__text-patogenez-1-2 {\n    top: 51.5%;\n    left: 23.5%;\n  }\n  .slider__text-patogenez-1-3 {\n    top: 51.5%;\n    left: 71.5%;\n  }\n  .slider__text-patogenez-1-3 span {\n    left: 28px;\n  }\n  .slider__item.slider__patogenez-1 > p.slider__desc-1 {\n    top: 62%;\n    left: 45%;\n    font-size: 20px;\n  }\n\n  /* slider__patogenez-2 */\n  .slider__patogenez-2 {\n    background-image: url("+p+");\n  }\n  .slider__item.slider__patogenez-2 > p {\n    font-size: 20px;\n  }\n  .slider__text-patogenez-2-1 {\n    top: 24%;\n    left:48%;\n  }\n  .slider__text-patogenez-2-1 span {\n    top: -35px;\n    left: 26px;\n  }\n  .slider__text-patogenez-2-2 {\n    top: 29.3%;\n    left: 12.5%;\n    width: 200px;\n    text-align: right;\n  }\n  .slider__text-patogenez-2-2 span {\n    top: 0px;\n    left: 230px;\n  }\n  .slider__text-patogenez-2-3 {\n    top: 29.3%;\n    left: 70.5%;\n    width: 90px;\n    text-align: left;\n  }\n  .slider__text-patogenez-2-3 span {\n    top: 0px;\n    left: -55px;\n  }\n  .slider__text-patogenez-2-4 {\n    top: 54%;\n    left: 81%;\n    width: 90px;\n    text-align: left;\n  }\n  .slider__text-patogenez-2-4 span {\n    top: -45px;\n    left: 0px;\n  }\n  .slider__text-patogenez-2-5 {\n    top: 76.3%;\n    left: 62%;\n    width: 90px;\n    text-align: left;\n  }\n  .slider__text-patogenez-2-5 span {\n    top: -41px;\n    left: 30px;\n  }\n  .slider__text-patogenez-2-6 {\n    top: 76.3%;\n    left: 47.5%;\n    width: 90px;\n    text-align: left;\n  }\n  .slider__text-patogenez-2-6 span {\n    top: -41px;\n    left: 25px;\n  }\n  .slider__text-patogenez-2-7 {\n    top: 76.3%;\n    left: 31.7%;\n    width: 90px;\n    text-align: center;\n  }\n  .slider__text-patogenez-2-7 span {\n    top: -41px;\n    left: 31px;\n  }\n  .slider__text-patogenez-2-8 {\n    top: 53.5%;\n    left: 12.5%;\n    width: 90px;\n    text-align: right;\n  }\n  .slider__text-patogenez-2-8 span {\n    top: -45px;\n    left: 70px;\n    }\n  .slider__item.slider__patogenez-2 > p.slider__desc-2  {\n    top: 47.5%;\n    left: 42%;\n    font-size: 26px;\n  }\n\n  /* slider__patogenez-3 */\n  .slider__patogenez-3 {\n    background-image: url("+f+");\n  }\n  .slider__item.slider__patogenez-3 > p {\n    font-size: 20px;\n  }\n  .slider__item.slider__patogenez-3 .slider__text-patogenez-3-1 {\n    top: 19.5%;\n    left: 46.5%;\n    font-size: 24px;\n    width: 100px;\n    text-align: right;\n  }\n  .slider__text-patogenez-3-1 span {\n    top: -10px;\n    left: -32px;\n  }\n  .slider__text-patogenez-3-2 {\n    top: 48.5%;\n    left: 36%;\n    width: 100px;\n    text-align: right;\n  }\n  .slider__text-patogenez-3-2 span {\n    top: -34px;\n    left: 120px;\n  }\n  .slider__text-patogenez-3-3 {\n    top: 49%;\n    left: 48.5%;\n    width: 200px;\n    text-align: right;\n  }\n  .slider__text-patogenez-3-3 span {\n    top: -38px;\n    left: 46px;\n  }\n  .slider__text-patogenez-3-4 {\n    top: 77%;\n    left: 73%;\n    width: 200px;\n    text-align: right;\n  }\n  .slider__text-patogenez-3-4 span {\n    top: -42px;\n    left: 46px;\n  }\n  .slider__text-patogenez-3-5 {\n    top: 66%;\n    left: 77.5%;\n    width: 200px;\n    text-align: left;\n  }\n  .slider__text-patogenez-3-5 span {\n    top: -42px;\n    left: 0px;\n  }\n  .slider__text-patogenez-3-6 {\n    top: 55.5%;\n    left: 77.5%;\n    width: 200px;\n    text-align: left;\n  }\n  .slider__text-patogenez-3-6 span {\n    top: -42px;\n    left: 0px;\n  }\n  .slider__text-patogenez-3-7 {\n    top: 34.5%;\n    left: 77.5%;\n    width: 200px;\n    text-align: left;\n  }\n  .slider__text-patogenez-3-7 span {\n    top: -42px;\n    left: 0px;\n  }\n  .slider__text-patogenez-3-8 {\n    top: 33.5%;\n    left: 6%;\n    width: 200px;\n    text-align: right;\n  }\n  .slider__text-patogenez-3-8 span {\n    top: -38px;\n    left: 180px;\n  }\n  .slider__text-patogenez-3-9 {\n    top: 45.6%;\n    left: -4%;\n    width: 300px;\n    text-align: right;\n  }\n  .slider__text-patogenez-3-9 span {\n    top: -38px;\n    left: 282px;\n  }\n  .slider__text-patogenez-3-10 {\n    top: 64%;\n    left: -4%;\n    width: 300px;\n    text-align: right;\n  }\n  .slider__text-patogenez-3-10 span {\n    top: -38px;\n    left: 260px;\n  }\n  .slider__text-patogenez-3-11 {\n    top: 77.5%;\n    left: 18.5%;\n    width: 300px;\n    text-align: right;\n  }\n  .slider__text-patogenez-3-11 span {\n    top: -38px;\n    left: 260px;\n  }\n  .slider__item.slider__patogenez-3 .slider__desc-3-1 {\n    top: 63.5%;\n    left: 42%;\n    font-size: 24px;\n  }\n  .slider__item.slider__patogenez-3 .slider__desc-3-2 {\n    top: 56%;\n    left: 54.5%;\n    font-size: 16px;\n  }\n  .slider__item.slider__patogenez-3 .slider__desc-3-3 {\n    top: 53.5%;\n    left: 28%;\n    font-size: 16px;\n  }\n  .slider__item.slider__patogenez-3 .slider__desc-3-4 {\n    top: 45.5%;\n    left: 72%;\n    font-size: 16px;\n  }\n\n  /* slider tools */\n  .slider__tools-wrap {\n    position: absolute;\n    top: 86%;\n    left: 185px;\n  }\n  .slider__tools {\n    position: relative;\n    height: 50px;\n    width: 650px;\n    display: flex;\n    justify-content: space-between;\n  }\n  .slider__switch { \n    position: absolute;\n    height: 50px;\n    width: 40px;\n    z-index: 10;\n  }\n  .slider__point {\n    height: 10px;\n    width: 50px;\n    margin-top: 65px;\n    font-family: 'Gotham Pro';\n    text-align: center;\n    color: #fff;\n    font-weight: 400;\n    font-size: 18px;\n    letter-spacing: 0.4px;\n  }\n  .slider__line {\n    position: absolute;\n    top: 25px;\n    left: 10px;\n    height: 10px;\n    width: 630px;\n    background: -moz-linear-gradient(to right, #d1eaff 0%, #d1eaff 0% ,#435063 0%, #435063 100%);\n    background: -webkit-linear-gradient(to right, #d1eaff 0%, #d1eaff 0% ,#435063 0%, #435063 100%);\n    background: linear-gradient(to right, #d1eaff 0%, #d1eaff 0% ,#435063 0%, #435063 100%);\n    text-align: center;\n    z-index: 5;\n  }\n}",""])},function(n,t,e){n.exports=e.p+"img/navigation.png"},function(n,t,e){n.exports=e.p+"img/ref_0000_01.jpg"},function(n,t,e){n.exports=e.p+"img/ref_0001_02.jpg"},function(n,t,e){n.exports=e.p+"img/ref_0002_3_1.jpg"},function(n,t,e){n.exports=e.p+"img/ref_0003_3_2.jpg"},function(n,t,e){n.exports=e.p+"img/ref_0004_3_3.jpg"},function(n,t,e){"use strict";function o(n){let t=n.querySelector(".slider__wrapper"),e=n.querySelectorAll(".slider__item"),o=n.querySelector(".slider__tools-wrap"),r=n.querySelector(".slider__line"),i=n.querySelector(".slider__switch"),a=parseFloat(getComputedStyle(n.querySelector(".slider__tools")).width),l=parseFloat(getComputedStyle(t).width),p=parseFloat(getComputedStyle(e[0]).width),f=0,s=0,d=p/l*100,c={getMin:0,getMax:e.length-1},u=0;function g(n){if("right"===n){if(f+l/p-1>=c.getMax)return;f++,s-=d}if("left"===n){if(f<=c.getMin)return;f--,s+=d}t.style.transform="translateX("+s+"%)"}!function(n){const t=document.querySelector(".slider__tools");let l,p,f=0;function s(e){let r;l=t.offsetLeft,p=t.offsetLeft+t.offsetWidth-n.offsetWidth,"touchstart"===e.type?r={type:e.changedTouches[0],drag:"touchmove",drop:"touchend"}:"mousedown"===e.type&&(r={type:e,drag:"mousemove",drop:"mouseup"});let i=Number(getComputedStyle(o).left.split("px")[0]);f=r.type.pageX-n.getBoundingClientRect().left-window.pageXOffset+i,document.addEventListener(r.drag,d),document.addEventListener(r.drop,c)}function d(t){if(!t.target.classList.contains("slider__path"))return;let o,s;"touchmove"===t.type?o={type:t.changedTouches[0]}:"mousemove"===t.type&&(o={type:t}),s=o.type.pageX-f,s=Math.min(s,p),s=Math.max(s,l),n.style.left=s+"px",n.style.top="0px";let d=Number(n.style.left.split("px")[0]);!function(n){let t={toolsLength:a,onelength:a/(e.length+1)},o=t.onelength,r=3*t.onelength,i=t.toolsLength;0<=u&&u<=o&&o<n&&n<r?g("right"):o<=u&&u<=r&&0<=n&&n<=o?g("left"):o<=u&&u<=r&&r<=n&&n<=i?g("right"):r<=u&&u<=i&&o<=n&&n<=r?g("left"):0<=u&&u<=o&&r<=n&&n<=i?(g("right"),g("right")):r<=u&&u<=i&&0<=n&&n<=o&&(g("left"),g("left"));u=n}(d),function(n){let t=Number(getComputedStyle(i.querySelector("svg")).width.split("px")[0]),e=Math.ceil(100*(n+t/2)/a);r.style.backgroundImage="linear-gradient(to right, #d1eaff ".concat(0,"%, #d1eaff ",e,"%, #435063 ").concat(e,"%, #435063 ",100,"%)")}(d)}function c(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",c),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",c)}n.addEventListener("mousedown",s),n.addEventListener("touchstart",s)}(i)}e.r(t);var r;e(11),e(38);(function(n){let t=n.querySelectorAll(".fullpage__item"),e=document.createElement("div");e.classList.add("fullpage__btns"),t.forEach((n,t)=>{let o=document.createElement("span");o.classList.add("fullpage__btn"),o.dataset.index=t,e.appendChild(o)}),e.firstChild.classList.add("fullpage__btn_active"),n.appendChild(e),function(n){let t=window.getComputedStyle(n).height;n.style.top="calc(50% - ".concat(t,"/2)")}(e)})(r=document.querySelector(".fullpage")),function(n){let t=n.querySelector(".fullpage__wrapper"),e=n.querySelectorAll(".fullpage__item"),o=n.querySelectorAll(".fullpage__btn"),r=parseFloat(getComputedStyle(t).height),i=parseFloat(getComputedStyle(e[0]).height),a=0,l=0,p=i/r*100;function f(){const n=Number(event.currentTarget.dataset.index);var t;s(n),(t=n)!==a&&(l=t>a?-p*t:-p*(t+1)+p,a=t,d(l))}function s(n){o.forEach(n=>n.classList.remove("fullpage__btn_active"));for(let t=0;t<o.length;t++)o[t].dataset.index===String(n)&&o[t].classList.add("fullpage__btn_active")}function d(n){t.style.transform="translateY(".concat(n,"%)")}document.addEventListener("touchstart",function(){let n=event.changedTouches[0].pageY;const t=function(n,t){let e=!1;return function(){e||(n.apply(this,arguments),e=!0,setTimeout(()=>{e=!1},t))}}(()=>{if(event.target.classList.contains("slider__path"))return;let t=event.changedTouches[0].pageY,o=t-n>0?"down":"up";!function(n){if("up"===n){if(a>=e.length-1)return;a++,l-=p}else if("down"===n){if(a<=0)return;a--,l+=p}s(a),d(l)}(o)},4e3);document.addEventListener("touchmove",t)}),o.forEach(n=>n.addEventListener("click",f))}(r),o(r)}]);