/*!
 *  Vue2-Simplert v.0.2.2 
 *  (c) 2017 Irfan Maulana 
 *  MIT License
 */
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Simplert=t():n.Simplert=t()}(this,function(){return function(n){function t(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,s){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:s})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="/mycollab/",t(t.s=4)}([function(n,t){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],t=0;t<this.length;t++){var e=this[t];e[2]?n.push("@media "+e[2]+"{"+e[1]+"}"):n.push(e[1])}return n.join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(s[i]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&s[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),n.push(r))}},n}},function(n,t,e){function s(n){for(var t=0;t<n.length;t++){var e=n[t],s=p[e.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](e.parts[o]);for(;o<e.parts.length;o++)s.parts.push(i(e.parts[o]));s.parts.length>e.parts.length&&(s.parts.length=e.parts.length)}else{for(var r=[],o=0;o<e.parts.length;o++)r.push(i(e.parts[o]));p[e.id]={id:e.id,refs:1,parts:r}}}}function o(){var n=document.createElement("style");return n.type="text/css",d.appendChild(n),n}function i(n){var t,e,s=document.querySelector('style[data-vue-ssr-id~="'+n.id+'"]');if(s){if(f)return _;s.parentNode.removeChild(s)}if(v){var i=m++;s=u||(u=o()),t=r.bind(null,s,i,!1),e=r.bind(null,s,i,!0)}else s=o(),t=a.bind(null,s),e=function(){s.parentNode.removeChild(s)};return t(n),function(s){if(s){if(s.css===n.css&&s.media===n.media&&s.sourceMap===n.sourceMap)return;t(n=s)}else e()}}function r(n,t,e,s){var o=e?"":s.css;if(n.styleSheet)n.styleSheet.cssText=h(t,o);else{var i=document.createTextNode(o),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(i,r[t]):n.appendChild(i)}}function a(n,t){var e=t.css,s=t.media,o=t.sourceMap;if(s&&n.setAttribute("media",s),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=e(11),p={},d=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,m=0,f=!1,_=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(n,t,e){f=e;var o=c(n,t);return s(o),function(t){for(var e=[],i=0;i<o.length;i++){var r=o[i],a=p[r.id];a.refs--,e.push(a)}t?(o=c(n,t),s(o)):o=[];for(var i=0;i<e.length;i++){var a=e[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete p[a.id]}}}};var h=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t,e){e(9),e(10);var s=e(7)(e(3),e(8),"data-v-8723fec2",null);n.exports=s.exports},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{useRadius:!0,useIcon:!0},data:function(){return{DEFAULT_TYPE:"info",DEFAULT_BTN_CLOSE_TEXT:"Close",DEFAULT_BTN_CONFIRM_TEXT:"Confirm",INVALID_TYPE:"INVALID_TYPE",showSimplert:!1,title:"",message:"",type:this.DEFAULT_TYPE,customClass:"",customIconUrl:"",customCloseBtnText:this.DEFAULT_BTN_CLOSE_TEXT,customCloseBtnClass:"",onClose:null,useConfirmBtn:!1,customConfirmBtnText:this.DEFAULT_BTN_CONFIRM_TEXT,customConfirmBtnClass:"",onConfirm:null}},computed:{classSimplert:function(){var n=this.customClass;return this.showSimplert&&(n=this.customClass+" simplert--shown"),n},classContent:function(){var n="";return this.useRadius&&(n="simplert__content--radius"),n},classBtnClose:function(){var n=this.customCloseBtnClass;return this.useRadius&&(n=this.customCloseBtnClass+" simplert__close--radius"),n},classBtnConfirm:function(){var n=this.customConfirmBtnClass;return this.useRadius&&(n=this.customConfirmBtnClass+" simplert__confirm--radius"),n}},methods:{closeOverlay:function(n){var t=this;n.target.className.indexOf("simplert--shown")>0&&t.closeSimplert(n)},whenConfirm:function(n){var t=this;n.preventDefault(),t.showSimplert=!1,null!==t.onConfirm&&t.onConfirm()},closeSimplert:function(n){var t=this;n.preventDefault(),t.showSimplert=!1,null!==t.onClose&&t.onClose()},openSimplert:function(n){var t=this;t.showSimplert=!0,void 0!==n&&(t.title=n.title,void 0!==n.message?t.message=n.message:t.message="",void 0!==n.type?t.type=n.type:t.type=t.DEFAULT_TYPE,void 0!==n.customClass?t.customClass=n.customClass:t.customClass="",void 0!==n.customIconUrl&&""!==n.customCloseBtnText?(t.customIconUrl=n.customIconUrl,t.type=t.INVALID_TYPE):t.customIconUrl="",void 0!==n.customCloseBtnText&&""!==n.customCloseBtnText?t.customCloseBtnText=n.customCloseBtnText:t.customCloseBtnText=t.DEFAULT_BTN_CLOSE_TEXT,void 0!==n.customCloseBtnClass?t.customCloseBtnClass=n.customCloseBtnClass:t.customCloseBtnClass="",void 0!==n.onClose&&null!==n.onClose?t.onClose=n.onClose:t.onClose=null,void 0!==n.useConfirmBtn?t.useConfirmBtn=n.useConfirmBtn:t.useConfirmBtn=!1,void 0!==n.customConfirmBtnText&&""!==n.customConfirmBtnText?t.customConfirmBtnText=n.customConfirmBtnText:t.customConfirmBtnText=t.DEFAULT_BTN_CONFIRM_TEXT,void 0!==n.customConfirmBtnClass?t.customConfirmBtnClass=n.customConfirmBtnClass:t.customConfirmBtnClass="",void 0!==n.onConfirm&&null!==n.onConfirm?t.onConfirm=n.onConfirm:t.onConfirm=null)}}}},function(n,t,e){var s=e(2);n.exports={Simplert:s}},function(n,t,e){t=n.exports=e(0)(),t.push([n.i,"\nhtml {\n  box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  font-size: 62.5%;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n",""])},function(n,t,e){t=n.exports=e(0)(),t.push([n.i,"\n.simplert[data-v-8723fec2] {\n  font-size: 14px;\n  line-height: 1.15;\n}\n.simplert[data-v-8723fec2] {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  display: none;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.simplert--shown[data-v-8723fec2] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n}\n.simplert--shown .simplert__content[data-v-8723fec2] {\n      animation-name: zoomIn;\n      animation-duration: .3s;\n      animation-fill-mode: both;\n}\n.simplert__header[data-v-8723fec2] {\n    padding: 2em 0;\n}\n.simplert__title[data-v-8723fec2] {\n    font-size: 30px;\n    display: block;\n}\n.simplert__content[data-v-8723fec2] {\n    position: relative;\n    width: 90%;\n    max-width: 400px;\n    margin: 0 auto;\n    padding: 0 20px;\n    background-color: #fff;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n@media only screen and (min-width: 768px) {\n.simplert__content[data-v-8723fec2] {\n        width: 30%;\n}\n}\n.simplert__content--radius[data-v-8723fec2] {\n      border-radius: 0.3em;\n}\n.simplert__body[data-v-8723fec2] {\n    padding-bottom: 1em;\n}\n.simplert__icon[data-v-8723fec2] {\n    position: relative;\n    width: 80px;\n    height: 80px;\n    margin: 10px auto;\n    border-radius: 50%;\n}\n.simplert__icon--info[data-v-8723fec2] {\n      border: 4px solid #c9dae1;\n}\n.simplert__icon--success[data-v-8723fec2] {\n      border: 4px solid #a5dc86;\n}\n.simplert__icon--warning[data-v-8723fec2] {\n      border: 4px solid #f8bb86;\n}\n.simplert__icon--error[data-v-8723fec2] {\n      border: 4px solid #f27474;\n}\n.simplert__icon img[data-v-8723fec2] {\n      width: 80px;\n      height: 80px;\n}\n.simplert__line[data-v-8723fec2] {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    height: 5px;\n    border-radius: 2px;\n}\n.simplert__line--info[data-v-8723fec2] {\n      position: absolute;\n      top: 19px;\n      left: 50%;\n      width: 7px;\n      height: 7px;\n      margin-left: -3px;\n      border-radius: 50%;\n      background-color: #c9dae1;\n}\n.simplert__line--info-2[data-v-8723fec2] {\n        position: absolute;\n        bottom: 15px;\n        left: 50%;\n        width: 5px;\n        height: 29px;\n        margin-left: -2px;\n        border-radius: 2px;\n        background-color: #c9dae1;\n}\n.simplert__line--success[data-v-8723fec2] {\n      top: 44px;\n      left: 6px;\n      width: 25px;\n      transform: rotate(45deg);\n      background-color: #a5dc86;\n}\n.simplert__line--success-2[data-v-8723fec2] {\n        top: 38px;\n        right: 6px;\n        width: 47px;\n        transform: rotate(-45deg);\n        background-color: #a5dc86;\n}\n.simplert__line--warning[data-v-8723fec2] {\n      position: absolute;\n      top: 10px;\n      left: 50%;\n      width: 5px;\n      height: 35px;\n      margin-left: -2px;\n      border-radius: 2px;\n      background-color: #f8bb86;\n}\n.simplert__line--warning-2[data-v-8723fec2] {\n        position: absolute;\n        bottom: 10px;\n        left: 50%;\n        width: 7px;\n        height: 7px;\n        margin-left: -3px;\n        border-radius: 50%;\n        background-color: #f8bb86;\n}\n.simplert__line--error[data-v-8723fec2] {\n      top: 35px;\n      left: 13px;\n      width: 47px;\n      transform: rotate(45deg);\n      background-color: #f27474;\n}\n.simplert__line--error-2[data-v-8723fec2] {\n        top: 35px;\n        right: 13px;\n        width: 47px;\n        transform: rotate(-45deg);\n        background-color: #f27474;\n}\n.simplert__footer[data-v-8723fec2] {\n    padding: 1em 0;\n}\n.simplert__close[data-v-8723fec2], .simplert__confirm[data-v-8723fec2] {\n    display: inline-block;\n    margin: 0 .5em;\n    padding: 10px 20px;\n    cursor: pointer;\n    text-align: center;\n    color: #fff;\n    border: none;\n    outline: none;\n    background-color: #068ac9;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n.simplert__close--radius[data-v-8723fec2], .simplert__confirm--radius[data-v-8723fec2] {\n      border-radius: 0.3em;\n}\n@keyframes zoomIn {\nfrom {\n    transform: scale3d(0.3, 0.3, 0.3);\n    opacity: 0;\n}\n50% {\n    opacity: 1;\n}\n}\n",""])},function(n,t){n.exports=function(n,t,e,s){var o,i=n=n||{},r=typeof n.default;"object"!==r&&"function"!==r||(o=n,i=n.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),e&&(a._scopeId=e),s){var l=a.computed||(a.computed={});Object.keys(s).forEach(function(n){var t=s[n];l[n]=function(){return t}})}return{esModule:o,exports:i,options:a}}},function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"simplert",class:n.classSimplert,attrs:{role:"modal"},on:{click:n.closeOverlay}},[e("div",{staticClass:"simplert__content",class:n.classContent},[e("div",{staticClass:"simplert__header"},[n.useIcon?e("div",["info"===n.type?e("div",{staticClass:"simplert__icon simplert__icon--info"},[e("div",{staticClass:"simplert__line simplert__line--info"}),n._v(" "),e("div",{staticClass:"simplert__line simplert__line--info-2"})]):n._e(),n._v(" "),"success"===n.type?e("div",{staticClass:"simplert__icon simplert__icon--success"},[e("div",{staticClass:"simplert__line simplert__line--success"}),n._v(" "),e("div",{staticClass:"simplert__line simplert__line--success-2"})]):n._e(),n._v(" "),"warning"===n.type?e("div",{staticClass:"simplert__icon simplert__icon--warning"},[e("div",{staticClass:"simplert__line simplert__line--warning"}),n._v(" "),e("div",{staticClass:"simplert__line simplert__line--warning-2"})]):n._e(),n._v(" "),"error"===n.type?e("div",{staticClass:"simplert__icon simplert__icon--error"},[e("div",{staticClass:"simplert__line simplert__line--error"}),n._v(" "),e("div",{staticClass:"simplert__line simplert__line--error-2"})]):n._e(),n._v(" "),""!==n.customIconUrl?e("div",{staticClass:"simplert__icon"},[e("img",{attrs:{src:n.customIconUrl}})]):n._e()]):n._e(),n._v(" "),e("b",{staticClass:"simplert__title"},[n._v(n._s(n.title))])]),n._v(" "),e("div",{staticClass:"simplert__body"},[e("div",{domProps:{innerHTML:n._s(n.message)}})]),n._v(" "),e("div",{staticClass:"simplert__footer"},[n.useConfirmBtn?e("button",{staticClass:"simplert__confirm",class:n.classBtnConfirm,on:{click:n.whenConfirm}},[n._v("\n                "+n._s(n.customConfirmBtnText)+"\n            ")]):n._e(),n._v(" "),e("button",{staticClass:"simplert__close",class:n.classBtnClose,on:{click:n.closeSimplert}},[n._v("\n                "+n._s(n.customCloseBtnText)+"\n            ")])])])])},staticRenderFns:[]}},function(n,t,e){var s=e(5);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(1)("81578410",s,!0)},function(n,t,e){var s=e(6);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(1)("35df2e5c",s,!0)},function(n,t){n.exports=function(n,t){for(var e=[],s={},o=0;o<t.length;o++){var i=t[o],r=i[0],a=i[1],l=i[2],c=i[3],p={id:n+":"+o,css:a,media:l,sourceMap:c};s[r]?s[r].parts.push(p):e.push(s[r]={id:r,parts:[p]})}return e}}])});