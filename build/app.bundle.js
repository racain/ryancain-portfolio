!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(e,t,o){var n=o(1),r=o(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(n(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function c(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function s(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],s=t.base?i[0]+t.base:i[0],l=o[s]||0,d="".concat(s," ").concat(l);o[s]=l+1;var p=c(d),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:d,updater:b(u,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,g=0;function b(e,t){var o,n,r;if(t.singleton){var i=g++;o=m||(m=l(t)),n=u.bind(null,o,i,!1),r=u.bind(null,o,i,!0)}else o=l(t),n=f.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=c(o[n]);a[r].references--}for(var i=s(e,t),l=0;l<o.length;l++){var d=c(o[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}o=i}}}},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([r]).join("\n")}var a,c,s;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&r[s[0]]||(o&&(s[2]?s[2]="".concat(o," and ").concat(s[2]):s[2]=o),t.push(s))}},t}},function(e,t,o){o(0),e.exports=o(8)},function(e,t,o){(t=o(2)(!1)).push([e.i,'/*! HTML5 Boilerplate v6.0.1 | MIT License | https://html5boilerplate.com/ */html{color:#222;font-size:16px;line-height:1.4;scroll-behavior:smooth}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:0.2em 0;background:#ccc;color:#000;padding:0.2em 0}*{box-sizing:border-box}html{margin:0;padding:0}body{display:flex;flex-direction:column;color:#fff;font-family:"Roboto", sans-serif;font-size:1em}.row{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;width:100%}h1,h2{font-family:"IM Fell Double Pica", serif}h3,h4,h5,h6{font-family:"Titillium Web", sans-serif}p{font-size:1.2em;line-height:1.6em}ul{margin:0;padding:0;list-style-type:none}a{text-decoration:none}.btn{cursor:pointer;display:inline-block;margin:25px auto;padding:20px;text-transform:uppercase;font-size:1.05em;border-radius:50px;box-shadow:2px 3px 5px rgba(0,0,0,0.5)}#bot-field{display:none}h2[class$="-header"],h3[class$="-header"]{font-size:2.5em;text-align:center}.showcase{background-attachment:fixed;display:flex;flex-direction:column;justify-content:center;align-content:center;width:100vw;height:100vh;background:url("https://res.cloudinary.com/img-assets/image/upload/c_scale,f_auto,h_1080,w_1920/v1587754435/web-dev_fhtfbe.jpg");background-size:cover;background-repeat:no-repeat;background-position:center bottom;text-align:center}.showcase .showcase-overlay{background-attachment:fixed;width:100%;height:100%;padding:1em 0.5em;margin:0 auto;background-color:rgba(0,0,0,0.7);box-shadow:0 5px 25px 5px #000;display:flex;flex-direction:column;justify-content:center}.showcase .showcase-heading{color:#fff;font-size:4em;letter-spacing:0.05em;margin:0;text-shadow:2px 3px 5px rgba(0,0,0,0.5)}.showcase .showcase-message{font-size:3em;text-shadow:2px 3px 5px rgba(0,0,0,0.5)}.showcase .showcase-cta{color:#fff;cursor:pointer;width:55%;background:#2471a3;display:inline-block;margin:25px auto;padding:20px;text-transform:uppercase;font-size:1.05em;border:1px solid #222;border-radius:50px;box-shadow:2px 3px 5px rgba(0,0,0,0.5)}.about{background-color:#ffffff;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'20\' height=\'12\' viewBox=\'0 0 20 12\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg id=\'charlie-brown\' fill=\'%232471a3\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");color:#333;border-top:3px solid #2471a3;justify-content:center;align-items:center;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;justify-content:center;align-items:center}.about .about-list-container{border-top-left-radius:15px;border-top-right-radius:15px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;box-shadow:0px 10px 15px 0px rgba(0,0,0,0.5);display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;background:#ff8500;color:#fff;margin:2em auto 4em;width:75%;max-width:300px}.about .about-list-container .about-list-header{border-top-left-radius:15px;border-top-right-radius:15px;border-bottom:5px solid #fff;font-size:2em;width:100%;margin:0;background-color:#333;padding:15px 0;text-shadow:2px 3px 5px rgba(0,0,0,0.5)}.about .about-list-container .about-list{display:flex;flex-flow:column nowrap;justify-content:space-evenly}.about .about-list-container .about-list .about-list-item{padding:0.75em 0;font-size:1.25em}.about .about-list-container .about-list li svg{margin-right:0.75em}.about .about-text-container p:first-of-type::first-letter{font-size:2.5em;font-weight:bolder}.about .about-text{background:rgba(255,255,255,0.4);margin:0;text-indent:25px;padding:1em;width:100%}.about .about-text .github-link{text-decoration:underline}.about .resume-cta-container{display:flex;flex-flow:column nowrap;justify-content:center;align-items:center}.about .resume-cta-container .resume-cta{background:#2471a3;color:#fff;border:1px solid #333}.about figure{margin:0 auto 1em;padding:1em 0 0;width:100%;text-align:center}.about figure img{width:250px;height:250px;margin:1em auto;border:10px solid #2471a3;border-radius:50%;padding:5px;box-shadow:0 10px 25px #999;text-align:center}.about figure figcaption{font-size:1.25em;font-weight:bold;line-height:1.4em;width:100%;color:#333;text-shadow:2px 3px 5px rgba(0,0,0,0.1)}.recent-projects{display:grid;grid-template-columns:1fr;grid-template-rows:repeat(auto, 1fr);justify-content:center;align-content:center;background:#2471a3;color:#fff;border-top:3px solid #999;padding-bottom:5em}.recent-projects .recent-projects-header{color:#fff;text-shadow:2px 3px 5px rgba(0,0,0,0.5)}.recent-projects .recent-projects-container{display:grid;grid-template-columns:repeat(auto-fit, minmax(350px, 1fr));grid-gap:2em 0;width:100%;margin:0 auto}.recent-projects .recent-projects-container .project-card{border-radius:10px;background:#fff;color:#333;display:flex;flex-flow:column nowrap;align-items:center;margin:0 auto;width:75%;height:auto;text-align:center}.recent-projects .recent-projects-container .project-card .project-content{height:100%;width:100%;display:flex;flex-direction:column}.recent-projects .recent-projects-container .project-card .project-content .project-title{font-size:1.25em;margin-top:1em}.recent-projects .recent-projects-container .project-card .project-content .project-img{flex:1}.recent-projects .recent-projects-container .project-card .project-content .project-img img{width:100%;height:auto;padding:10px}.recent-projects .recent-projects-container .project-card .project-content .project-links{display:flex;background:#333;border-bottom-right-radius:10px;border-bottom-left-radius:10px;padding:1em 0}.recent-projects .recent-projects-container .project-card .project-content .project-links .project-link{padding:0.5em 0;text-align:center;width:100%}.recent-projects .recent-projects-container .project-card .project-content .project-links .project-link a{color:#fff;font-size:1.025em}.recent-projects .recent-projects-container .project-card .project-content .project-links .project-link a:hover{text-decoration:underline}.contact{display:flex;flex-flow:column nowrap;background:#fff;padding:0 1em 5em;border-top:3px solid #ff8500;width:100%}.contact .contact-header{color:#ff8500;text-shadow:2px 3px 5px rgba(0,0,0,0.1)}.contact .contact-form{display:flex;flex-direction:column;background:#2471a3;border:2px solid #fff;border-radius:25px;box-shadow:0 2px 15px 2px #000;padding:1.5em 2em 2em;margin:0 auto;width:100%}.contact .contact-form label{color:#fff;font-size:1.25em;margin-top:1em}.contact .contact-form input,.contact .contact-form textarea{font-size:1em;margin:0.75em auto;border:1px solid #333;border-radius:5px;box-shadow:2px 2px 15px 1px #333}.contact .contact-form input{width:100%;height:2.5em}.contact .contact-form textarea{width:100%;height:15em}.contact .contact-form .submit-btn{color:#fff;cursor:pointer;height:inherit;width:55%;font-weight:bold;background:#ff8500;display:inline-block;text-transform:uppercase;font-size:1.05em;border:1px solid #222;border-radius:50px;box-shadow:2px 3px 5px rgba(0,0,0,0.5)}.footer-container{padding:1em 1em 2em;background:#333;color:#fff;text-align:center;border-top:5px solid #ff8500}.footer-container p{text-indent:0;margin-top:0.5em;font-size:1.25em}.footer-container .social-list{margin-top:1.5em;display:grid;grid-template-columns:repeat(3, 1fr);text-align:center}.footer-container .social-list .social-list-item{width:auto;height:auto;margin:0 auto}.footer-container .social-list .social-list-item img{width:50px;height:50px}.hidden{display:none !important}.visuallyhidden{border:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;-webkit-clip-path:none;clip-path:none;height:auto;margin:0;overflow:visible;position:static;width:auto;white-space:inherit}.invisible{visibility:hidden}.clearfix:before,.clearfix:after{content:" ";display:table}.clearfix:after{clear:both}@media (min-width: 600px){.showcase .showcase-heading{font-size:5em}.showcase .showcase-message{margin:0.5em auto}.showcase .showcase-cta{margin:0 auto}.about{width:100%}.about .about-wrapper{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(auto, 1fr);justify-content:center;align-items:center;margin:0 auto;padding:2em 0.5em;width:80%;max-width:1200px}.about .about-figure-container{grid-column:1/2;grid-row:1/2;display:flex;flex-flow:column nowrap;justify-content:center;align-items:center;width:100%;margin:0;text-align:center}.about .about-figure-container figcaption{margin:0 auto;border-bottom-right-radius:15px;border-bottom-left-radius:15px}.about .about-text-container{grid-column:1/3;grid-row:2/3;line-height:1.6em;margin-top:1em;width:100%}.about .resume-cta-container{grid-column:1/3;grid-row:3/4}.about .about-list-container{grid-column:2/3;grid-row:1/2;display:flex;justify-content:center;align-items:center;margin:0 auto}.about .about-list-container .about-list{display:flex;flex-flow:column nowrap;justify-content:space-evenly}.about .about-list-container .about-list .about-list-item{width:100%;padding:0.75em 0;font-size:1.25em}.about .about-list-container .about-list .about-list li svg{margin-right:0.75em}.recent-projects .recent-projects-container .project-card{width:80%;max-width:300px}.contact .contact-form{width:80%}.footer-container{background:#333;width:100%}.social-list{width:75%;margin:1.5em auto 0;display:grid;grid-template-columns:repeat(3, 1fr);text-align:center}.social-list-item{width:auto;height:auto;margin:0 auto}.social-list-item>img{width:50px;height:50px}}@media (min-width: 960px){.showcase .showcase-cta{width:20%;cursor:pointer;border:3px solid #fff;transition:background 0.75s ease-in-out}.showcase .showcase-cta:hover{background-color:#fff;border:3px solid #2471a3;color:#2471a3;font-weight:bold}.about .interests-list{width:75%}.about .about-text-container{grid-column:1/3;grid-row:2/3;line-height:1.6em;padding:0em 5em;margin-top:2em;width:100%}.recent-projects .recent-projects-container{display:grid;grid-gap:1em;width:75%;margin:0 auto}.contact .contact-form{width:45%}.social-list{margin:1.5em auto 0;display:grid;grid-template-columns:repeat(3, 1fr);text-align:center}.social-list-item{width:auto;height:auto;margin:0 auto;border-radius:50%;padding:0.5em;transition:all 0.3s ease-in-out}.social-list-item:hover{transform:scale(1.25, 1.25)}.social-list-item>img{width:50px;height:50px}}@media print{*,*:before,*:after{background:transparent !important;color:#000 !important;box-shadow:none !important;text-shadow:none !important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}}\n',""]),e.exports=t},function(e,t,o){var n=o(1),r=o(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(n(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,o){(t=o(2)(!1)).push([e.i,'/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:0.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px}[type="search"]::-webkit-search-cancel-button,[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}\n',""]),e.exports=t},function(e,t){var o=function(){var e=document.querySelector(".showcase-message");["Web Developer","Father","Hockey Fan"].forEach((function(t,o){setTimeout((function(){e.textContent="".concat(t)}),1250*o)}))};o(),setInterval(o,3750)},function(e,t,o){"use strict";o.r(t);var n,r;o(5),o(0),n=(new Date).getFullYear(),(r=document.querySelector(".copyright-year")).textContent="".concat(n),o(7)}]);