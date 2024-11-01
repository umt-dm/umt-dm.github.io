"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[223],{4223:(e,t,i)=>{let a,r;i.r(t),i.d(t,{MaxResolution:()=>tq,MediaError:()=>tD,MinResolution:()=>tV,RenditionOrder:()=>tF,default:()=>f0});var n=i(67294),s=Object.create,o=Object.defineProperty,l=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,u=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,h=function(e,t){return function(){return e&&(t=e(e=0)),t}},m=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},p=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=d(t),s=0,u=n.length;s<u;s++)r=n[s],c.call(e,r)||r===i||o(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=l(t,r))||a.enumerable});return e},v=function(e,t,i){return i=null!=e?s(u(e)):{},p(!t&&e&&e.__esModule?i:o(i,"default",{value:e,enumerable:!0}),e)},b=m(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function E(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var f=h(function(){}),g=m(function(e,t){var i;f(),i=function(){var e=function(){},t="undefined",i=("undefined"==typeof window?"undefined":E(window))!==t&&E(window.navigator)!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"];function r(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(t){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function n(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(t,i){for(var r=0;r<a.length;r++){var n=a[r];this[n]=r<t?e:this.methodFactory(n,t,i)}this.log=this.debug}function o(e,i,a){return function(){("undefined"==typeof console?"undefined":E(console))!==t&&(s.call(this,i,a),this[e].apply(this,arguments))}}function l(a,s,l){var d;return"debug"===(d=a)&&(d="log"),("undefined"==typeof console?"undefined":E(console))!==t&&("trace"===d&&i?n:void 0!==console[d]?r(console,d):void 0!==console.log?r(console,"log"):e)||o.apply(this,arguments)}function d(e,i,r){var n,o=this;i=null==i?"WARN":i;var d="loglevel";function u(){var e;if(!(("undefined"==typeof window?"undefined":E(window))===t||!d)){try{e=window.localStorage[d]}catch(e){}if((void 0===e?"undefined":E(e))===t)try{var i=window.document.cookie,a=i.indexOf(encodeURIComponent(d)+"=");-1!==a&&(e=/^([^;]+)/.exec(i.slice(a))[1])}catch(e){}return void 0===o.levels[e]&&(e=void 0),e}}"string"==typeof e?d+=":"+e:(void 0===e?"undefined":E(e))==="symbol"&&(d=void 0),o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=r||l,o.getLevel=function(){return n},o.setLevel=function(i,r){if("string"==typeof i&&void 0!==o.levels[i.toUpperCase()]&&(i=o.levels[i.toUpperCase()]),"number"==typeof i&&i>=0&&i<=o.levels.SILENT){if(n=i,!1!==r&&function(e){var i=(a[e]||"silent").toUpperCase();if(!(("undefined"==typeof window?"undefined":E(window))===t||!d)){try{window.localStorage[d]=i;return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"="+i+";"}catch(e){}}}(i),s.call(o,i,e),("undefined"==typeof console?"undefined":E(console))===t&&i<o.levels.SILENT)return"No console available for logging"}else throw"log.setLevel() called with invalid level: "+i},o.setDefaultLevel=function(e){i=e,u()||o.setLevel(e,!1)},o.resetLevel=function(){o.setLevel(i,!1),function(){if(!(("undefined"==typeof window?"undefined":E(window))===t||!d)){try{window.localStorage.removeItem(d);return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var c=u();null==c&&(c=i),o.setLevel(c,!1)}var u=new d,c={};u.getLogger=function(e){if((void 0===e?"undefined":E(e))!=="symbol"&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=c[e];return t||(t=c[e]=new d(e,u.getLevel(),u.methodFactory)),t};var h=("undefined"==typeof window?"undefined":E(window))!==t?window.log:void 0;return u.noConflict=function(){return("undefined"==typeof window?"undefined":E(window))!==t&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return c},u.default=u,u},"function"==typeof define&&define.amd?define(i):"object"==typeof t&&t.exports?t.exports=i():e.log=i()});function y(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):y(e,t)}var _=h(function(){_()}),A=m(function(e){var t,i=Object.prototype.hasOwnProperty;function a(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function r(e){try{return encodeURIComponent(e)}catch(e){return null}}e.stringify=function(e,a){var n,s,o=[];for(s in"string"!=typeof(a=a||"")&&(a="?"),e)if(i.call(e,s)){if(!(n=e[s])&&(null===n||n===t||isNaN(n))&&(n=""),s=r(s),n=r(n),null===s||null===n)continue;o.push(s+"="+n)}return o.length?a+o.join("&"):""},e.parse=function(e){for(var t,i=/([^=?#&]+)=?([^&]*)/g,r={};t=i.exec(e);){var n=a(t[1]),s=a(t[2]);null===n||null===s||n in r||(r[n]=s)}return r}}),T=m(function(e,t){!function(i){var a=!1;if("function"==typeof define&&define.amd&&(define(i),a=!0),"object"==typeof e&&(t.exports=i(),a=!0),!a){var r=window.Cookies,n=window.Cookies=i();n.noConflict=function(){return window.Cookies=r,n}}}(function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[t,"=",r,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){s=h;break}t||(s[m]=h)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})})}),k=m(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),w=m(function(e,t){function i(e,t){if(!y(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}_(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),S=m(function(e,t){function i(e,t){if(!y(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}_(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),I=m(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),C=m(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),R=m(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),L=m(function(e,t){f(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=E(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),D=m(function(e,t){_();var i=k(),a=I(),r=C(),n=R(),s=L(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!y(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),x=m(function(e,t){_();var i=D();function a(e){if(!y(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),M=m(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),N=m(function(e,t){_();var i=k(),a=w(),r=S(),n=D(),s=x(),o=M(),l=I(),d=C(),u=R();function c(){if(!y(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),O=m(function(e,t){var i=N();t.exports=new i}),P=m(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=O();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return U(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var W=v(b()),H=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},q=function(){return("000000"+(0x81bf1000*Math.random()<<0).toString(36)).slice(-6)},V=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=q()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},F=function(e){e&&void 0!==e.nodeName?e=V(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]},$=v(g()),K=$.default.methodFactory;$.default.methodFactory=function(e,t,i){var a=K(e,t,i);return function(){for(var e=["[mux]"],t=0;t<arguments.length;t++)e.push(arguments[t]);a.apply(void 0,e)}},$.default.setLevel($.default.getLevel());var j=$.default,Y=v(b());function G(){return"1"===(Y.default.doNotTrack||Y.default.navigator&&Y.default.navigator.doNotTrack)}var Z=v(b()),Q={now:function(){var e=Z.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}};function z(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){if(!y(e,t))throw TypeError("Cannot call a class as a function")}function J(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function ee(e,t,i){return t&&J(e.prototype,t),i&&J(e,i),e}function et(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ei(e,t){return(ei=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ea(e){return(ea=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}_(),f();var er=function(e){return en(e)[0]},en=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},es=v(b()),eo={exists:function(){var e=es.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=es.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=es.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function el(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function ed(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){et(e,t,i[t])})}return e}function eu(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var ec=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],eh=["x-cdn","content-type"].concat(ec);function em(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(eh.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function ep(e){if(e){var t=ec.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var ev=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eb=function(e){if(!e)return{};var t=eo.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},eE=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return em(e.getAllResponseHeaders())},ef=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!eo.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eb(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",eu(ed({},ev(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:er(r),request_response_headers:eE(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eb(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:er(i.url),request_response_headers:eE(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eb(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:er(i.url),request_response_headers:eE(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=eb(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?eE(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?er(r.responseURL):void 0,request_id:h?ep(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?eE(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:er(c),request_id:h?ep(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:er(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},eg=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ey=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=er(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=em(u[u.length-1]._responseHeaders||""));var c=i?ep(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},e_=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},eA=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},eT=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},ek=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=eT(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:er(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=ey(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,E=c.requestHostname,f=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:E,request_id:c.requestId,request_url:f,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=ey(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,E=u.requestHostname,f=u.requestUrl,g=u.requestId,y=e_(d,i),_=y.currentLevel,A=y.renditionWidth,T=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:E,request_id:g,request_url:f,request_media_start_time:l,request_media_duration:b,request_current_level:_,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:T})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eA(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=eu(ed({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:er(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:er(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},ew=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eS=0,eI=function(){function e(){X(this,e),et(this,"_listeners",void 0)}return ee(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eS,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eS;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eC=v(b()),eR=function(){function e(t){var i=this;X(this,e),et(this,"_playbackHeartbeatInterval",void 0),et(this,"_playheadShouldBeProgressing",void 0),et(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eC.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return ee(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eC.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eC.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eL=function e(t){var i=this;X(this,e),et(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eD=function(){function e(t){X(this,e),et(this,"_watchTimeTrackerLastCheckedTime",void 0),et(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return ee(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),el(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),ex=function(){function e(t){var i=this;X(this,e),et(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),et(this,"_lastTime",void 0),et(this,"_isAdPlaying",void 0),et(this,"_callbackUpdatePlaybackTime",void 0),et(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=Q.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=Q.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return ee(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=Q.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&el(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eM=function(){function e(t){X(this,e),et(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return ee(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eN=function e(t){if(X(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;el(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(el(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eO=function(){function e(t){var i=this;X(this,e),et(this,"_lastCheckedTime",void 0),et(this,"_lastPlayheadTime",void 0),et(this,"_lastPlayheadTimeUpdatedTime",void 0),et(this,"_rebuffering",void 0),et(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:Q.now()})}))}return ee(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eP=function(){function e(t){var i=this;X(this,e),et(this,"NAVIGATION_START",void 0),et(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||Q.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||Q.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return ee(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eU=function e(t){var i=this;X(this,e),et(this,"_lastPlayerHeight",void 0),et(this,"_lastPlayerWidth",void 0),et(this,"_lastPlayheadPosition",void 0),et(this,"_lastSourceHeight",void 0),et(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),el(t.data,"view_total_content_playback_time",e),el(t.data,"view_total_upscaling",r*e),el(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eB=function e(t){var i=this;X(this,e),et(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=Q.now(),r=(t.data.viewer_time||e)-(a||e);el(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,el(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eW=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eH=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eq=function(){function e(t){var i=this;X(this,e),et(this,"_adHasPlayed",void 0),et(this,"_adRequests",void 0),et(this,"_adResponses",void 0),et(this,"_currentAdRequestNumber",void 0),et(this,"_currentAdResponseNumber",void 0),et(this,"_prerollPlayTime",void 0),et(this,"_wouldBeNewAdPlay",void 0),et(this,"isAdBreak",void 0),et(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eH.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eW(i._adRequests,a),el(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||el(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eW(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&el(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,el(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||el(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||el(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return ee(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=B(en(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=B(en(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eV=v(b()),eF=function e(t){X(this,e);var i,a,r=function(){t.disableRebufferTracking||(el(t.data,"view_waiting_rebuffer_count",1),i=Q.now(),a=eV.default.setInterval(function(){if(i){var e=Q.now();el(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(el(t.data,"view_waiting_rebuffer_duration",Q.now()-i),i=!1,eV.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},e$=function e(t){var i=this;X(this,e),et(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=Q.now(),t.on("before*",r)},r=function(e){var a=Q.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eK=v(b()),ej=v(A()),eY=v(T()),eG="muxData",eZ=function(){var e;try{e=ej.default.parse(eY.default.get(eG)||"")}catch(t){e={}}return e},eQ=function(e){try{eY.default.set(eG,ej.default.stringify(e),{expires:365})}catch(e){}},ez=function(){var e=eZ();return e.mux_viewer_id=e.mux_viewer_id||H(),e.msn=e.msn||Math.random(),eQ(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eX=function(){var e=eZ(),t=Q.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=H(),e.sst=t),e.sex=t+15e5,eQ(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},eJ=v(b()),e0=function(){var e;switch(e1()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e1=function(){var e=eJ.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};e0.getConnectionFromAPI=e1;var e2=e5({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e3=e5({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e5(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e4(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e2[s];o||(j.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e3[e]?o+=e3[e]:Number(e)&&Math.floor(Number(e))===Number(e)?o+=e:(j.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e9=v(b()),e8={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},e7=["hb","requestcompleted","requestfailed","requestcanceled"],e6=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e8,t)};e6.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},e6.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},e6.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e9.default.clearTimeout(this._sendTimeout)},e6.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e4({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);te(this._beaconUrl,i,!0,function(){})},e6.prototype._sendBeaconQueue=function(){var e=this;if(!this._postInFlight){var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=Q.now();te(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,j.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=Q.now()-a,e._postInFlight=!1})}},e6.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},e6.prototype._startBeaconSending=function(){var e=this;e9.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e9.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},e6.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(Q.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(j.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===e7.indexOf(e.e)}),s()),o()||(j.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var te=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(e9.default.fetch){e9.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:t.length<=57344}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(e9.default.XMLHttpRequest){var r=new e9.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},tt=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],ti=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],ta=["ad_id","ad_creative_id","ad_universal_id"],tr=["viewstart","error","ended","viewend"],tn=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f,g,y,_,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};X(this,e),et(this,"mux",void 0),et(this,"envKey",void 0),et(this,"options",void 0),et(this,"eventQueue",void 0),et(this,"sampleRate",void 0),et(this,"disableCookies",void 0),et(this,"respectDoNotTrack",void 0),et(this,"previousBeaconData",void 0),et(this,"lastEventTime",void 0),et(this,"rateLimited",void 0),et(this,"pageLevelData",void 0),et(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new e6((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(g=this.options.sampleRate)&&void 0!==g?g:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(_=this.options.respectDoNotTrack)&&void 0!==_&&_,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(v=this.options.platform)||void 0===v||null===(p=v.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(E=this.options.platform)||void 0===E||null===(b=E.os)||void 0===b?void 0:b.version,viewer_connection_type:e0(),page_url:null===eK.default||void 0===eK.default||null===(f=eK.default.location)||void 0===f?void 0:f.href},this.viewerData=this.disableCookies?{}:ez()}return ee(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&G())return j.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return j.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eX(),a=eu(ed({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=e4(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return j.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||j.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(j.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tr.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=e4(a),this.eventQueue.queueEvent(a.event,s),j.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=ed({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=B(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||tt.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||ta.includes(t)&&ti.includes(e))}}]),e}(),ts=function e(t){X(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},to=function e(t){var i=this;X(this,e),et(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=Q.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,et({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view"),t.emit("viewinit",Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},tl=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],td=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ei(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ea(a);return e=t?Reflect.construct(i,arguments,ea(this).constructor):i.apply(this,arguments),e&&("object"===E(e)||"function"==typeof e)?e:z(this)});function a(e,t,r){X(this,a),et(z(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),et(z(n),"NAVIGATION_START",void 0),et(z(n),"_destroyed",void 0),et(z(n),"_heartBeatTimeout",void 0),et(z(n),"adTracker",void 0),et(z(n),"dashjs",void 0),et(z(n),"data",void 0),et(z(n),"disablePlayheadRebufferTracking",void 0),et(z(n),"disableRebufferTracking",void 0),et(z(n),"errorTracker",void 0),et(z(n),"errorTranslator",void 0),et(z(n),"getAdData",void 0),et(z(n),"getPlayheadTime",void 0),et(z(n),"getStateData",void 0),et(z(n),"hlsjs",void 0),et(z(n),"id",void 0),et(z(n),"longResumeTracker",void 0),et(z(n),"minimumRebufferDuration",void 0),et(z(n),"mux",void 0),et(z(n),"oldEmit",void 0),et(z(n),"playbackEventDispatcher",void 0),et(z(n),"playbackHeartbeat",void 0),et(z(n),"playbackHeartbeatTime",void 0),et(z(n),"playheadTime",void 0),et(z(n),"seekingTracker",void 0),et(z(n),"sustainedRebufferThreshold",void 0),et(z(n),"watchTimeTracker",void 0),et(z(n),"currentFragmentPDT",void 0),et(z(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=eo.domContentLoadedEventEnd(),n.NAVIGATION_START=eo.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),j.setLevel(r.debug?"debug":"warn"),n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.playbackEventDispatcher=new tn(e,r.data.env_key,r),n.data={player_instance_id:H(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1,n.oldEmit=n.emit,n.emit=function(e,t){t=Object.assign({viewer_time:this.mux.utils.now()},t),this.oldEmit(e,t)};var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(z(n));n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)});var o=(function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}).bind(z(n));if(n.on("videochange",function(e,t){o(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),o(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var l=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",l,!1);var d=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",d,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("pagehide",d)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tl.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new to(z(n)),n.errorTracker=new eL(z(n)),new e$(z(n)),n.seekingTracker=new eB(z(n)),n.playheadTime=new eM(z(n)),n.playbackHeartbeat=new eR(z(n)),new eU(z(n)),n.watchTimeTracker=new eD(z(n)),new ex(z(n)),n.adTracker=new eq(z(n)),new eO(z(n)),new eN(z(n)),new eP(z(n)),new eF(z(n)),new ts(z(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return ee(a,[{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=B(en(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_updateStateData",value:function(){Object.assign(this.data,this.getStateData()),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=H(),i=function(){t===e.data.view_id&&el(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,ef(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(eg(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,ek(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(ew(this.dashjs),this.dashjs=void 0)}}]),a}(eI);f();var tu,tc=v(P()),th=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tm={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tp=v(b());tp.default&&tp.default.WeakMap&&(tu=new WeakMap);var tv={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tb=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tb.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tb.prototype.processLine=function(e){var t=e.indexOf(":"),i=tT(e,t),a=i[0],r=2===i.length?tg(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tv.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tv.PART_INF:tE(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tv.SERVER_CONTROL:tE(this.manifest,i),this.setHoldBack();break;case tv.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tv.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tv.VERSION:tE(this.manifest,i);break;case tv.SESSION_DATA:var s=ev(tk(i[1]));Object.assign(this.manifest.sessionData,s)}},tb.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tE=function(e,t){var i,a=tf(t[0].replace("#EXT-X-",""));tA(t[1])?(i={},i=Object.assign(t_(t[1]),i)):i=tg(t[1]),e[a]=i},tf=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tg=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},ty=function(e){var t={},i=e.split("=");return i.length>1&&(t[tf(i[0])]=tg(i[1])),t},t_=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(ty(t[a]),i);return i},tA=function(e){return e.indexOf("=")>-1},tT=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tk=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tw={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){j.info("safeCall error",e)}return r},safeIncrement:el,getComputedStyle:function(e,t){var i;return e&&t&&tp.default&&"function"==typeof tp.default.getComputedStyle?(tu&&tu.has(e)&&(i=tu.get(e)),i||(i=tp.default.getComputedStyle(e,null),tu&&tu.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:em,cdnHeadersToRequestId:ep,extractHostnameAndDomain:en,extractHostname:er,manifestParser:tb,generateShortID:q,generateUUID:H,now:Q.now},tS={},tI=function(e){var t=arguments;"string"==typeof e?tI.hasOwnProperty(e)?W.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tI[e].apply(null,t)},0):j.warn("`"+e+"` is an unknown task"):"function"==typeof e?W.default.setTimeout(function(){e(tI)},0):j.warn("`"+e+"` is invalid.")},tC={loaded:Q.now(),NAME:"mux-embed",VERSION:"5.2.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=B(F(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i)).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),i.getPlayheadTime=function(){return d(r.currentTime)},i.getStateData=function(){var e,t=this.hlsjs&&this.hlsjs.url,a=this.dashjs&&E("function"===this.dashjs.getSource)&&this.dashjs.getSource(),n={player_is_paused:r.paused,player_playhead_time:d(r.currentTime),player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tc.default&&!!(tc.default.fullscreenElement||tc.default.webkitFullscreenElement||tc.default.mozFullScreenElement||tc.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:t||a||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(e=r.getVideoPlaybackQuality)||void 0===e?void 0:e.call(r).droppedVideoFrames},s=i.getPlayheadTime();if(r.getStartDate&&s>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(n.player_program_time=u+s,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);n.player_live_edge_program_time=c}}}return n},r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=B(F(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},th.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tm[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tI,e,t)},destroyMonitor:function(e){var t=B(F(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():j.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=V(e);tS[i]?tS[i].addHLSJS(t):j.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=V(e);tS[i]?tS[i].addDashJS(t):j.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=V(e);tS[t]?tS[t].removeHLSJS():j.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=V(e);tS[t]?tS[t].removeDashJS():j.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){G()&&t&&t.respectDoNotTrack&&j.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=V(e);tS[i]=new td(tI,i,t)},emit:function(e,t,i){var a=V(e);tS[a]?(tS[a].emit(t,i),"destroy"===t&&delete tS[a]):j.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:G,log:j,utils:tw,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tI,tC),void 0!==W.default&&"function"==typeof W.default.addEventListener&&W.default.addEventListener("pagehide",function(e){e.persisted||(tI.WINDOW_UNLOADING=!0)},!1);var tR=i(93041).ZP,tL=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tL.MEDIA_ERR_ABORTED=1,tL.MEDIA_ERR_NETWORK=2,tL.MEDIA_ERR_DECODE=3,tL.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tL.MEDIA_ERR_ENCRYPTED=5,tL.MEDIA_ERR_CUSTOM=100,tL.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tD=tL,tx=e=>null==e,tM=(e,t)=>!tx(t)&&e in t,tN={ANY:"any",MUTED:"muted"},tO={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tP={MSE:"mse",NATIVE:"native"},tU={HEADER:"header",QUERY:"query",NONE:"none"},tB=Object.values(tU),tW={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tH={HLS:tW.M3U8},tq=(Object.keys(tH),[...Object.values(tW)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tV={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tF={DESCENDING:"desc"},t$=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tK=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},tj=e=>{let t=e.type;if(t){let e=t.toUpperCase();return tM(e,tH)?tH[e]:t}let{src:i}=e;return i?tZ(i):""},tY=e=>"VOD"===e?tO.ON_DEMAND:tO.LIVE,tG=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,tZ=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return tM(a,tW)?tW[a]:""},tQ=Object.values(tN),tz=e=>"boolean"==typeof e||"string"==typeof e&&tQ.includes(e),tX=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=tz(a)?a:!!a,o=()=>{r||t$(t,"playing",()=>{r=!0},{once:!0})};if(o(),t$(t,"loadstart",()=>{r=!1,o(),tJ(t,s)},{once:!0}),t$(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tO.UNKNOWN?e.streamType===tO.LIVE:!Number.isFinite(t.duration)),tJ(t,s)},{once:!0}),i&&i.once(tR.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tO.UNKNOWN?e.streamType===tO.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&t$(t,"play",()=>{"metadata"===t.preload?i.once(tR.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||tJ(t,s=tz(e)?e:!!e)}},tJ=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tN.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tN.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},t0=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return t$(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},t1=e=>"time"in e?e.time:e.startTime;function t2(e,t,i,a,r){let n=document.createElement("track");return n.kind=t,n.label=i,a&&(n.srclang=a),r&&(n.id=r),n.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",n.setAttribute("data-removeondestroy",""),e.append(n),n.track}function t3(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function t5(e,t,i,a){let r=t3(e,i,a);return r||((r=t2(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>t1(t)-t1(e)).forEach(t=>{var i,n;let s=t.value,o=t1(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var t4="cuepoints",t9=Object.freeze({label:t4});async function t8(e,t,i=t9){return t5(e,t,i.label,"metadata")}var t7=e=>({time:e.startTime,value:JSON.parse(e.text)});function t6(e,t={label:t4}){var i,a;let r=t3(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return t7(r.activeCues[0]);let{currentTime:n}=e;return t7(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ie(e,t=t9){return new Promise(i=>{t$(e,"loadstart",async()=>{let a=await t8(e,[],t);t$(e,"cuechange",()=>{let t=t6(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var it="chapters",ii=Object.freeze({label:it}),ia=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function ir(e,t,i=ii){return t5(e,t,i.label,"chapters")}function is(e,t={label:it}){var i,a;let r=t3(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return ia(r.activeCues[0]);let{currentTime:n}=e;return ia(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function io(e,t=ii){return new Promise(i=>{t$(e,"loadstart",async()=>{let a=await ir(e,[],t);t$(e,"cuechange",()=>{let t=is(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var il,id,iu,ic=async e=>fetch(e).then(e=>e.text()).then(e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>e.text()).then(e=>e.split(`
`))),ih=e=>{var t,i,a;let r=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),n=tY(r),s=tG(r),o;if(n===tO.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));if(t)o=2*+t.split(":")[1].split("=")[1];else{let t=e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),i=null==(a=null==t?void 0:t.split(":"))?void 0:a[1];o=3*+(null!=i?i:6)}}return{streamType:n,targetLiveWindow:s,liveEdgeStartOffset:o}},im=async(e,t)=>t===tW.MP4?{streamType:tO.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:t===tW.M3U8?ih(await ic(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),ip=async(e,t,i=tj({src:e}))=>{var a,r,n;let{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}=await im(e,i);(null!=(a=ig.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=ig.get(t))?r:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=ig.get(t))?n:{}).streamType=s,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iv=e=>{var t;let i=e.type,a=tY(i),r=tG(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tO.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},ib=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=iv(e);if(c===tO.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=ig.get(t))?o:{}).seekable=e}(null!=(l=ig.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=ig.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=ig.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iE=-1!==(null!=(id=null==(il=null==globalThis?void 0:globalThis.navigator)?void 0:il.userAgent)?id:"").toLowerCase().indexOf("android"),ig=new WeakMap,iy="mux.com",i_=null==(iu=tR.isSupported)?void 0:iu.call(tR),iA=()=>tI.utils.now(),iT=tI.utils.generateUUID,ik=({playbackId:e,customDomain:t=iy,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,tokens:{playback:o}={},extraSourceParams:l={}}={})=>{if(!e)return;let[d,u=""]=tK(e),c=new URL(`https://stream.${t}/${d}.m3u8${u}`);return o||c.searchParams.has("token")?(c.searchParams.forEach((e,t)=>{"token"!=t&&c.searchParams.delete(t)}),o&&c.searchParams.set("token",o)):(i&&c.searchParams.set("max_resolution",i),a&&(c.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&c.searchParams.set("rendition_order",r),n&&c.searchParams.set("program_start_time",`${n}`),s&&c.searchParams.set("program_end_time",`${s}`),Object.entries(l).forEach(([e,t])=>{null!=t&&c.searchParams.set(e,t)})),c.toString()},iw=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},iS=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},iI=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:iQ(e)&&null!=(a=null!=(i=iw(e.playbackId))?i:iS(e.src))?a:e.src},iC=e=>{var t;return null==(t=ig.get(e))?void 0:t.error},iR=e=>{var t,i;return null!=(i=null==(t=ig.get(e))?void 0:t.streamType)?i:tO.UNKNOWN},iL=e=>{var t,i;return null!=(i=null==(t=ig.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},iD=e=>{var t,i;return null!=(i=null==(t=ig.get(e))?void 0:t.seekable)?i:e.seekable},ix=e=>{var t;let i=null==(t=ig.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=iD(e);return a.length?a.end(a.length-1)-i:Number.NaN},iM=.034,iN=(e,t,i=iM)=>Math.abs(e-t)<=i,iO=(e,t,i=iM)=>e>t||iN(e,t,i),iP=(e,t=iM)=>e.paused&&iO(e.currentTime,e.duration,t),iU=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},iB=(e,t)=>e.ended||e.loop?e.ended:!!(t&&iU(e,t))||iP(e),iW=(e,t,i)=>{iH(t,i);let{metadata:a={}}=e,{view_session_id:r=iT()}=a,n=iI(e);a.view_session_id=r,a.video_id=n,e.metadata=a,ig.set(t,{});let s=iV(e,t),o=t0(e,t,s);iz(e,t,s),iX(e,t,s),ie(t),io(t);let l=tX(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},iH=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),null!=e&&e.mux&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",i0),e.removeEventListener("error",i1),e.removeEventListener("durationchange",iJ),ig.delete(e),e.dispatchEvent(new Event("teardown")))};function iq(e,t){var i;let a=tj(e);if(a!==tW.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tP.MSE,o=n===tP.NATIVE;return r&&(o||!(i_&&(s||iE)))}var iV=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=tj(e)===tW.M3U8,d=iq(e,t);if(l&&!d&&i_){let t=iF(a),l=i$(e);return new tR({debug:i,startPosition:r,cmcd:s!==tU.NONE?{useHeaders:s===tU.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tU.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...t,...l,...o})}},iF=e=>e===tO.LIVE?{backBufferLength:8}:{},i$=e=>{let{drmToken:t,src:i,playbackId:a=iS(i)}=e;return t&&a?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:iG(e,"fairplay"),serverCertificateUrl:iZ(e,"fairplay")},"com.widevine.alpha":{licenseUrl:iG(e,"widevine")},"com.microsoft.playready":{licenseUrl:iG(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t))}:{}},iK=async e=>await (await fetch(e)).arrayBuffer(),ij=async(e,t)=>new Uint8Array(await (await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e})).arrayBuffer()),iY=(e,t)=>{t$(t,"encrypted",async i=>{try{let a=i.initDataType;if("skd"!==a){console.error(`Received unexpected initialization data type "${a}"`);return}if(!t.mediaKeys){let i=await (await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}])).createMediaKeys(),r=await iK(iZ(e,"fairplay"));await i.setServerCertificate(r),await t.setMediaKeys(i)}let r=i.initData;if(null==r){console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);return}let n=t.mediaKeys.createSession();n.generateRequest(a,r);let s=await new Promise(e=>{n.addEventListener("message",t=>{e(t.message)},{once:!0})}),o=await ij(s,iG(e,"fairplay"));return await n.update(o),n}catch(e){console.error(`Could not start encrypted playback due to exception "${e}"`)}})},iG=({playbackId:e,drmToken:t,customDomain:i=iy},a)=>`https://license.${i.toLocaleLowerCase().endsWith(iy)?i:iy}/license/${a}/${e}?token=${t}`,iZ=({playbackId:e,drmToken:t,customDomain:i=iy},a)=>`https://license.${i.toLocaleLowerCase().endsWith(iy)?i:iy}/appcert/${a}/${e}?token=${t}`,iQ=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iy)||!!i&&a.includes(i.toLocaleLowerCase())},iz=(e,t,i)=>{var a;let{envKey:r,disableTracking:n}=e,s=iQ(e);if(!n&&(r||s)){let{playerInitTime:n,playerSoftwareName:s,playerSoftwareVersion:o,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};tI.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?tR:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:o,player_init_time:n,...c}})}},iX=(e,t,i)=>{var a;let r=iq(e,t),{src:n}=e,s=()=>{t.ended||!iB(t,i)||(iU(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},o,l,d=()=>{var e,i;let a=null==(e=iD(t))?void 0:e.start(0),r=null==(i=iD(t))?void 0:i.end(0);(l!==r||o!==a)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),o=a,l=r};if(t$(t,"durationchange",d),t&&r){let i=tj(e);if("string"==typeof n){let r=()=>{if(iR(t)!==tO.LIVE||Number.isFinite(t.duration))return;let e=setInterval(d,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),t$(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})};if("none"===t.preload){let e=()=>{ip(n,t,i).then(r),t.removeEventListener("loadedmetadata",a)},a=()=>{ip(n,t,i).then(r),t.removeEventListener("play",e)};t$(t,"play",e,{once:!0}),t$(t,"loadedmetadata",a,{once:!0})}else ip(n,t,i).then(r);e.drmToken&&iY(e,t),t.setAttribute("src",n),e.startTime&&((null!=(a=ig.get(t))?a:{}).startTime=e.startTime,t.addEventListener("durationchange",iJ,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",i0),t.addEventListener("error",i1),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),t$(t,"pause",s),t$(t,"seeked",s),t$(t,"play",()=>{t.ended||iO(t.currentTime,t.duration)&&(t.currentTime=t.seekable.start(0))})}else i&&n?(i.once(tR.Events.LEVEL_LOADED,(e,a)=>{ib(a.details,t,i),d(),iR(t)!==tO.LIVE||Number.isFinite(t.duration)||(i.on(tR.Events.LEVEL_UPDATED,d),t$(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tR.Events.LEVELS_UPDATED,d)}))}),i.on(tR.Events.ERROR,(e,i)=>{let a={[tR.ErrorTypes.NETWORK_ERROR]:tD.MEDIA_ERR_NETWORK,[tR.ErrorTypes.MEDIA_ERROR]:tD.MEDIA_ERR_DECODE},r=new tD("",a[i.type]);r.fatal=i.fatal,r.data=i,t.dispatchEvent(new CustomEvent("error",{detail:r}))}),t.addEventListener("error",i1),t$(t,"waiting",s),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tR.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tR.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tR.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let r=i=>{let a=e.currentTime,r=!1,n=(e,t)=>{r||(r=!Number.isFinite(t.endOffset))};t.on(tR.Events.BUFFER_FLUSHING,n),t.nextLevel=i,t.off(tR.Events.BUFFER_FLUSHING,n),r||t.trigger(tR.Events.BUFFER_FLUSHING,{startOffset:a+10,endOffset:1/0,type:"video"})};null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&r(i)});let n=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{n(),s()};t.once(tR.Events.DESTROYING,o)}(e,i),function(e,t){t.on(tR.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a;let r=null!=(a=i.subtitleTrack)?a:i.closedCaptions,n=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==r?void 0:r.lang)&&t===i.label&&a.toLowerCase()===i.kind);t2(e,i.kind,i.label,null==r?void 0:r.lang,`${i.kind}${n}`)})});let i=()=>{var i;if(!t.subtitleTracks.length)return;let a=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind)),r=`${null==(i=t.subtitleTracks[t.subtitleTrack])?void 0:i.type.toLowerCase()}${t.subtitleTrack}`;if(a&&(t.subtitleTrack<0||(null==a?void 0:a.id)!==r)){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==a.language&&t===a.label&&i.toLowerCase()===a.kind);t.subtitleTrack=e}a&&(null==a?void 0:a.id)===r&&a.cues&&Array.from(a.cues).forEach(e=>{a.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tR.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tR.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&"thumbnails"===t.label){if(!(null!=(i=t.cues)&&i.length)){let t=e.querySelector('track[label="thumbnails"]'),i=null!=(a=null==t?void 0:t.getAttribute("src"))?a:"";null==t||t.removeAttribute("src"),setTimeout(()=>{null==t||t.setAttribute("src",i)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tR.Events.MANIFEST_LOADED,a),t.once(tR.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function iJ(e){var t;let i=e.target,a=null==(t=ig.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function i0(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tD(i,a);if(t.src&&(a!==tD.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}t.dispatchEvent(new CustomEvent("error",{detail:r}))}function i1(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tD))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=ig.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}let i2={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},i3={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},i5={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},i4=Object.entries(i5),i9=i4.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{}),i8=i4.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(i8).reduce((e,[t,i])=>{let a=i9[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let i7=Object.entries(i9).reduce((e,[t,i])=>{let a=i8[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),i6={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},ae={DISABLED:"disabled",SHOWING:"showing"},at={MOUSE:"mouse",TOUCH:"touch"},ai={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},aa={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ar={FULLSCREEN:"fullscreen"},an={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},as={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function ao(e){return null==e?void 0:e.split(/\s+/).map(ad)}function al(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function ad(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:i,height:a}}}function au(e){return null==e?void 0:e.split(/\s+/).map(ah)}function ac(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function ah(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function am(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let ap=e=>new Promise(t=>setTimeout(t,e)),av=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ab=(e,t)=>{let i=1===e?av[t].singular:av[t].plural;return`${e} ${i}`},aE=e=>{if(!function(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&ab(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function af(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class ag{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class ay extends ag{}class a_{observe(){}unobserve(){}disconnect(){}}let aA={createElement:function(){return new aT.HTMLElement},createElementNS:function(){return new aT.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},aT={ResizeObserver:a_,document:aA,Node:ay,HTMLElement:class extends ay{},DocumentFragment:class extends ag{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},ak="undefined"==typeof window||void 0===window.customElements,aw=Object.keys(aT).every(e=>e in globalThis),aS=ak&&!aw?aT:globalThis,aI=ak&&!aw?aA:globalThis.document,aC=new WeakMap,aR=e=>{let t=aC.get(e);return t||aC.set(e,t=new Set),t},aL=new aS.ResizeObserver(e=>{for(let t of e)for(let e of aR(t.target))e(t)});function aD(e,t){aR(e).add(t),aL.observe(e)}function ax(e,t){let i=aR(e);i.delete(t),i.size||aL.unobserve(e)}function aM(e){var t;return null!=(t=aN(e))?t:aW(e,"media-controller")}function aN(e){var t;let{MEDIA_CONTROLLER:i}=i3,a=e.getAttribute(i);if(a)return null==(t=aq(e))?void 0:t.getElementById(a)}let aO=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},aP=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},aU=(e,t)=>aP(e,t)[0],aB=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||aB(e,t.getRootNode().host)),aW=(e,t)=>e?e.closest(t)||aW(e.getRootNode().host,t):null;function aH(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=aH(i.shadowRoot))?t:i:null}function aq(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function aV(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function aF(e,t){return function(e,t){var i;let a;for(a of e.querySelectorAll("style")){let e;try{e=null==(i=a.sheet)?void 0:i.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||a$(e,t)}function a$(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function aK(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function aj(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}aK(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function aY(e,t){return e.hasAttribute(t)}function aG(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}aY(e,t)!=i&&e.toggleAttribute(t,i)}function aZ(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function aQ(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;aZ(e,t,void 0)!==a&&e.setAttribute(t,a)}var az=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aX=(e,t,i)=>(az(e,t,"read from private field"),i?i.call(e):t.get(e)),aJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a0=(e,t,i,a)=>(az(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let a1=aI.createElement("template");a1.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class a2 extends aS.HTMLElement{constructor(e={}){if(super(),aJ(this,uh,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=a1.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=aI.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[i3.MEDIA_CONTROLLER,i9.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i3.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aX(this,uh))?void 0:a.unassociateElement)||r.call(a,this),a0(this,uh,null)),i&&this.isConnected&&(a0(this,uh,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=aX(this,uh))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),a0(this,uh,function(e){var t;let i=e.getAttribute(i3.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):aW(e,"media-controller")}(this)),this.getAttribute(i3.MEDIA_CONTROLLER)&&(null==(t=null==(e=aX(this,uh))?void 0:e.associateElement)||t.call(e,this)),null==(i=aX(this,uh))||i.addEventListener("pointerdown",this),null==(a=aX(this,uh))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(i3.MEDIA_CONTROLLER)&&(null==(t=null==(e=aX(this,uh))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=aX(this,uh))||i.removeEventListener("pointerdown",this),null==(a=aX(this,uh))||a.removeEventListener("click",this),a0(this,uh,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===at.TOUCH){this.handleTap(e);return}if(d===at.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return aY(this,i9.MEDIA_PAUSED)}set mediaPaused(e){aG(this,i9.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?i2.MEDIA_PLAY_REQUEST:i2.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aS.CustomEvent(t,{composed:!0,bubbles:!0}))}}uh=new WeakMap,aS.customElements.get("media-gesture-receiver")||aS.customElements.define("media-gesture-receiver",a2);var a3=Object.defineProperty,a5=(e,t,i)=>t in e?a3(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,a4=(e,t,i)=>(a5(e,"symbol"!=typeof t?t+"":t,i),i),a9=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a8=(e,t,i)=>(a9(e,t,"read from private field"),i?i.call(e):t.get(e)),a7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a6=(e,t,i,a)=>(a9(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),re=(e,t,i)=>(a9(e,t,"access private method"),i);let rt={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},ri=aI.createElement("template");ri.innerHTML=`
  <style>
    
    :host([${i9.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${rt.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${rt.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${rt.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${rt.AUDIO}])[${rt.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${rt.AUDIO}])[${rt.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${rt.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${rt.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${rt.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${rt.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${rt.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${rt.USER_INACTIVE}]:not([${i9.MEDIA_PAUSED}]):not([${i9.MEDIA_IS_AIRPLAYING}]):not([${i9.MEDIA_IS_CASTING}]):not([${rt.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${rt.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${rt.USER_INACTIVE}]:not([${i9.MEDIA_PAUSED}]):not([${i9.MEDIA_IS_CASTING}]):not([${rt.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${rt.AUDIO}])[${i9.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let ra=Object.values(i9);class rr extends aS.HTMLElement{constructor(){super(),a7(this,uv),a7(this,uE),a7(this,ug),a7(this,u_),a7(this,uT),a7(this,um,0),a7(this,up,void 0),a4(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ri.content.cloneNode(!0))),new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e===t&&this.handleMediaUpdated(t)}))}).observe(this,{childList:!0,subtree:!0});let e=!1;aD(this,t=>{e||(setTimeout(()=>{(function(e){(function(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(rt.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=a[e]),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(i8.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}})(e.target,e.contentRect.width)})(t),e=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(i8.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),e=!0)});let t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){a8(this,up)&&this.mediaUnsetCallback(a8(this,up));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[rt.AUTOHIDE,rt.GESTURES_DISABLED].concat(ra).filter(e=>![i9.MEDIA_RENDITION_LIST,i9.MEDIA_AUDIO_TRACK_LIST,i9.MEDIA_CHAPTERS_CUES].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==rt.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(a6(this,up,e),e.localName.includes("-")&&await aS.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;let t=null!=this.getAttribute(rt.AUDIO)?an.AUDIO_PLAYER():an.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(rt.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=aS.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),null==(e=aS.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){a6(this,up,null)}handleEvent(e){switch(e.type){case"pointerdown":a6(this,um,e.timeStamp);break;case"pointermove":re(this,uv,ub).call(this,e);break;case"pointerup":re(this,uE,uf).call(this,e);break;case"mouseleave":re(this,ug,uy).call(this);break;case"mouseup":this.removeAttribute(rt.KEYBOARD_CONTROL);break;case"keyup":re(this,uT,uk).call(this),this.setAttribute(rt.KEYBOARD_CONTROL,"")}}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return void 0===this._autohide?2:this._autohide}}um=new WeakMap,up=new WeakMap,uv=new WeakSet,ub=function(e){!("mouse"!==e.pointerType&&e.timeStamp-a8(this,um)<250)&&(re(this,u_,uA).call(this),clearTimeout(this._inactiveTimeout),[this,this.media].includes(e.target)&&re(this,uT,uk).call(this))},uE=new WeakSet,uf=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(rt.USER_INACTIVE);[this,this.media].includes(e.target)&&t?re(this,ug,uy).call(this):re(this,uT,uk).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&re(this,uT,uk).call(this)},ug=new WeakSet,uy=function(){if(this.autohide<0||this.hasAttribute(rt.USER_INACTIVE))return;this.setAttribute(rt.USER_INACTIVE,"");let e=new aS.CustomEvent(i8.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},u_=new WeakSet,uA=function(){if(!this.hasAttribute(rt.USER_INACTIVE))return;this.removeAttribute(rt.USER_INACTIVE);let e=new aS.CustomEvent(i8.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},uT=new WeakSet,uk=function(){re(this,u_,uA).call(this),clearTimeout(this._inactiveTimeout),this.autohide<0||(this._inactiveTimeout=setTimeout(()=>{re(this,ug,uy).call(this)},1e3*this.autohide))},aS.customElements.get("media-container")||aS.customElements.define("media-container",rr);var rn=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rs=(e,t,i)=>(rn(e,t,"read from private field"),i?i.call(e):t.get(e)),ro=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rl=(e,t,i,a)=>(rn(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rd{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){ro(this,uR),ro(this,uw,void 0),ro(this,uS,void 0),ro(this,uI,void 0),ro(this,uC,new Set),rl(this,uw,e),rl(this,uS,t),rl(this,uI,new Set(i))}[Symbol.iterator](){return rs(this,uR,uL).values()}get length(){return rs(this,uR,uL).size}get value(){var e;return null!=(e=[...rs(this,uR,uL)].join(" "))?e:""}set value(e){var t;e!==this.value&&(rl(this,uC,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...rs(this,uR,uL)][e]}values(){return rs(this,uR,uL).values()}forEach(e){rs(this,uR,uL).forEach(e)}add(...e){var t,i;e.forEach(e=>rs(this,uC).add(e)),(""!==this.value||(null==(t=rs(this,uw))?void 0:t.hasAttribute(`${rs(this,uS)}`)))&&(null==(i=rs(this,uw))||i.setAttribute(`${rs(this,uS)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>rs(this,uC).delete(e)),null==(t=rs(this,uw))||t.setAttribute(`${rs(this,uS)}`,`${this.value}`)}contains(e){return rs(this,uR,uL).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}uw=new WeakMap,uS=new WeakMap,uI=new WeakMap,uC=new WeakMap,uR=new WeakSet,uL=function(){return rs(this,uC).size?rs(this,uC):rs(this,uI)};let ru=(e="")=>e.split(/\s+/),rc=(e="")=>{let[t,i,a]=e.split(":");return{kind:t="cc"===t?"captions":"subtitles",language:i,label:a?decodeURIComponent(a):void 0}},rh=(e="",t={})=>ru(e).map(e=>{let i=rc(e);return{...t,...i}}),rm=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?rc(e):e):"string"==typeof e?rh(e):[e]:[],rp=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,rv=(e=[])=>Array.prototype.map.call(e,rp).join(" "),rb=(e,t)=>i=>i[e]===t,rE=e=>{let t=Object.entries(e).map(([e,t])=>rb(e,t));return e=>t.every(t=>t(e))},rf=(e,t=[],i=[])=>{let a=rm(i).map(rE);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},rg=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:rE(t);return Array.from(e.textTracks).filter(i)},ry=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(i9.MEDIA_SUBTITLES_SHOWING)},r_=e=>{var t;let{media:i,fullscreenElement:a}=e,r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let e=null==(t=a[r])?void 0:t.call(a);if(e instanceof Promise)return e.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()},rA="exitFullscreen"in aI?"exitFullscreen":"webkitExitFullscreen"in aI?"webkitExitFullscreen":"webkitCancelFullScreen"in aI?"webkitCancelFullScreen":void 0,rT=e=>{var t;let{documentElement:i}=e;if(rA){let e=null==(t=null==i?void 0:i[rA])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}},rk="fullscreenElement"in aI?"fullscreenElement":"webkitFullscreenElement"in aI?"webkitFullscreenElement":void 0,rw=e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[rk];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===ar.FULLSCREEN?i:a},rS=e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=rw(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(rk in e))return aB(n,r);for(;null==e?void 0:e[rk];){if(e[rk]===r)return!0;e=null==(t=e[rk])?void 0:t.shadowRoot}}return!1},rI="fullscreenEnabled"in aI?"fullscreenEnabled":"webkitFullscreenEnabled"in aI?"webkitFullscreenEnabled":void 0,rC=e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[rI])||i&&"webkitSupportsFullscreen"in i},rR=()=>{var e;return a||(a=null==(e=null==aI?void 0:aI.createElement)?void 0:e.call(aI,"video"))},rL=async(e=rR())=>{if(!e)return!1;let t=e.volume;return e.volume=t/2+.1,await ap(0),e.volume!==t},rD=/.*Version\/.*Safari\/.*/.test(aS.navigator.userAgent),rx=(e=rR())=>(!aS.matchMedia("(display-mode: standalone)").matches||!rD)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),rM=(e=rR())=>rC({documentElement:aI,media:e}),rN=rM(),rO=rx(),rP=!!aS.WebKitPlaybackTargetAvailabilityEvent,rU=!!aS.chrome,rB=e=>rg(e.media,e=>[i6.SUBTITLES,i6.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),rW=e=>rg(e.media,e=>e.mode===ae.SHOWING&&[i6.SUBTITLES,i6.CAPTIONS].includes(e.kind)),rH=(e,t)=>{let i=rB(e),a=rW(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)rf(ae.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;rf(ae.DISABLED,i,a),rf(ae.SHOWING,i,[{language:n,label:s,kind:o}])}}},rq=(e,t)=>e===t||typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?rV(e,t):Object.entries(e).every(([e,i])=>e in t&&rq(i,t[e])))),rV=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>rq(e,t[i])))},rF=Object.values(aa),r$=rL().then(e=>r=e),rK=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof aS.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=aS.customElements.get(t);i&&e instanceof i||(await aS.customElements.whenDefined(t),aS.customElements.upgrade(e))}))},rj={mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?aS.localStorage.removeItem("media-chrome-pref-volume"):aS.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let i=aS.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;rj.mediaVolume.set(+i,t),e(i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&0!==i.readyState&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[aa.LIVE,aa.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(rF.includes(r))return r===aa.UNKNOWN?a:r;let n=t.duration;return n===1/0?aa.LIVE:Number.isFinite(n)?aa.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=rj.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===aa.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(rj.mediaStreamType.get(e)!==aa.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>rB(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>rW(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![i6.CAPTIONS,i6.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||rH(t,!0))};return null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),s(),()=>{var e,t;null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=rg(i,{kind:i6.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{let{media:i}=t;if(!i)return;let a=i.querySelector('track[kind="chapters"][default][src]');return null==a||a.addEventListener("load",e),()=>{null==a||a.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&aB(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!aI.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else aI.pictureInPictureElement&&aI.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>rS(e),set(e,t){e?r_(t):rT(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&aS.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!rN||!rM(t))return ai.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!rO||!rx(t))return ai.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return ai.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&r$.then(t=>e(t?void 0:ai.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return rU&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?ai.UNAVAILABLE:void 0:ai.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>rP?(null==t?void 0:t.availability)==="not-available"?ai.UNAVAILABLE:void 0:ai.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:ai.UNAVAILABLE:ai.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?ai.UNAVAILABLE:void 0:ai.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},rY={[i2.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=rg(l,{kind:i6.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[i2.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[i2.MEDIA_PLAY_REQUEST](e,t){var i;if(e.mediaStreamType.get(t)===aa.LIVE){let a=!(e.mediaTargetLiveWindow.get(t)>0),r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];a&&r&&e.mediaCurrentTime.set(r,t)}e.mediaPaused.set(!1,t)},[i2.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[i2.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[i2.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[i2.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[i2.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[i2.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];Number.isNaN(Number(a))&&e.mediaCurrentTime.set(a,t)},[i2.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=rB(t),s=rm(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&aS.localStorage.setItem("media-chrome-pref-subtitles-lang",o),rf(ae.SHOWING,n,s)},[i2.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=rB(t);rf(ae.DISABLED,a,null!=i?i:[])},[i2.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){rH(t,i)},[i2.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[i2.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[i2.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[i2.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[i2.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[i2.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[i2.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[i2.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[i2.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var rG=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=rj,requestMap:r=rY,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||rq(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,E,f,g,y,_,A,T,k,w;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await rK(...Object.values(e));let I=l.length>0&&0===t&&s,C=d.media!==o.media,R=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(E=o.media)?void 0:E.remote),M=d.documentElement!==o.documentElement,N=!!d.media&&(C||I),O=!!(null==(f=d.media)?void 0:f.textTracks)&&(R||I),P=!!(null==(g=d.media)?void 0:g.videoRenditions)&&(L||I),U=!!(null==(y=d.media)?void 0:y.audioTracks)&&(D||I),B=!!(null==(_=d.media)?void 0:_.remote)&&(x||I),W=!!d.documentElement&&(M||I),H=N||O||P||U||B||W,q=0===l.length&&1===t&&s,V=!!o.media&&(C||q),F=!!(null==(A=o.media)?void 0:A.textTracks)&&(R||q),$=!!(null==(T=o.media)?void 0:T.videoRenditions)&&(L||q),K=!!(null==(k=o.media)?void 0:k.audioTracks)&&(D||q),j=!!(null==(w=o.media)?void 0:w.remote)&&(x||q),Y=!!o.documentElement&&(M||q),G=V||F||$||K||j||Y;if(!(H||G)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),V&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&O&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),$&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),K&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),j&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&H&&v(),G&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}},rZ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rQ=(e,t,i)=>(rZ(e,t,"read from private field"),i?i.call(e):t.get(e)),rz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rX=(e,t,i,a)=>(rZ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rJ=(e,t,i)=>(rZ(e,t,"access private method"),i);let r0=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],r1={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class r2 extends rr{constructor(){super(),rz(this,uU),rz(this,uW),rz(this,uq),rz(this,uD,new rd(this,r1.HOTKEYS)),rz(this,ux,void 0),rz(this,uM,void 0),rz(this,uN,void 0),rz(this,uO,void 0),rz(this,uP,e=>{var t;null==(t=rQ(this,uM))||t.dispatch(e)}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this);let e={};rX(this,uN,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new aS.CustomEvent(i7[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(r1.NO_HOTKEYS,r1.HOTKEYS,r1.DEFAULT_STREAM_TYPE,r1.DEFAULT_SUBTITLES,r1.DEFAULT_DURATION)}get mediaStore(){return rQ(this,uM)}set mediaStore(e){var t,i;if(rQ(this,uM)&&(null==(t=rQ(this,uO))||t.call(this),rX(this,uO,void 0)),rX(this,uM,e),!rQ(this,uM)&&!this.hasAttribute(r1.NO_DEFAULT_STORE)){rJ(this,uU,uB).call(this);return}rX(this,uO,null==(i=rQ(this,uM))?void 0:i.subscribe(rQ(this,uN)))}get fullscreenElement(){var e;return null!=(e=rQ(this,ux))?e:this}set fullscreenElement(e){var t;this.hasAttribute(r1.FULLSCREEN_ELEMENT)&&this.removeAttribute(r1.FULLSCREEN_ELEMENT),rX(this,ux,e),null==(t=rQ(this,uM))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,t,i){var a,r,n,s,o,l;if(super.attributeChangedCallback(e,t,i),e===r1.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(r1.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===r1.HOTKEYS)rQ(this,uD).value=i;else if(e===r1.DEFAULT_SUBTITLES&&i!==t)null==(a=rQ(this,uM))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(r1.DEFAULT_SUBTITLES)}});else if(e===r1.DEFAULT_STREAM_TYPE)null==(n=rQ(this,uM))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(r1.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===r1.LIVE_EDGE_OFFSET)null==(s=rQ(this,uM))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(r1.LIVE_EDGE_OFFSET)?+this.getAttribute(r1.LIVE_EDGE_OFFSET):void 0}});else if(e===r1.FULLSCREEN_ELEMENT){let e=i?null==(o=this.getRootNode())?void 0:o.getElementById(i):void 0;rX(this,ux,e),null==(l=rQ(this,uM))||l.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,t;rQ(this,uM)||this.hasAttribute(r1.NO_DEFAULT_STORE)||rJ(this,uU,uB).call(this),null==(e=rQ(this,uM))||e.dispatch({type:"documentelementchangerequest",detail:aI}),super.connectedCallback(),rQ(this,uM)&&!rQ(this,uO)&&rX(this,uO,null==(t=rQ(this,uM))?void 0:t.subscribe(rQ(this,uN))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),rQ(this,uM)&&(null==(t=rQ(this,uM))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=rQ(this,uM))||i.dispatch({type:i2.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),rQ(this,uO)&&(null==(a=rQ(this,uO))||a.call(this),rX(this,uO,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=rQ(this,uM))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=rQ(this,uM))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){na(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=nr(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(i2).forEach(t=>{e.addEventListener(t,rQ(this,uP))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(i2).forEach(t=>{e.removeEventListener(t,rQ(this,uP))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),rQ(this,uM)&&Object.entries(rQ(this,uM).getState()).forEach(([t,i])=>{na([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",rJ(this,uq,uV))}disableHotkeys(){this.removeEventListener("keydown",rJ(this,uq,uV)),this.removeEventListener("keyup",rJ(this,uW,uH))}get hotkeys(){return rQ(this,uD)}keyboardShortcutHandler(e){var t,i,a,r,n,s;let o,l,d;if(!((null!=(r=null!=(a=null==(t=e.target.getAttribute(r1.KEYS_USED))?void 0:t.split(" "))?a:null==(i=e.target)?void 0:i.keysUsed)?r:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||rQ(this,uD).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&rQ(this,uD).contains("nospace")))switch(e.key){case" ":case"k":o=rQ(this,uM).getState().mediaPaused?i2.MEDIA_PLAY_REQUEST:i2.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new aS.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o="off"===this.mediaStore.getState().mediaVolumeLevel?i2.MEDIA_UNMUTE_REQUEST:i2.MEDIA_MUTE_REQUEST,this.dispatchEvent(new aS.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?i2.MEDIA_EXIT_FULLSCREEN_REQUEST:i2.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new aS.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new aS.CustomEvent(i2.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(r1.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(r1.KEYBOARD_BACKWARD_SEEK_OFFSET):10;l=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)-e,0),d=new aS.CustomEvent(i2.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break}case"ArrowRight":{let e=this.hasAttribute(r1.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(r1.KEYBOARD_FORWARD_SEEK_OFFSET):10;l=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),d=new aS.CustomEvent(i2.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}}uD=new WeakMap,ux=new WeakMap,uM=new WeakMap,uN=new WeakMap,uO=new WeakMap,uP=new WeakMap,uU=new WeakSet,uB=function(){var e;this.mediaStore=rG({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(r1.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(r1.DEFAULT_DURATION)?+this.getAttribute(r1.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(r1.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(r1.LIVE_EDGE_OFFSET)?+this.getAttribute(r1.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(r1.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(r1.NO_SUBTITLES_LANG_PREF)}})},uW=new WeakSet,uH=function(e){let{key:t}=e;if(!r0.includes(t)){this.removeEventListener("keyup",rJ(this,uW,uH));return}this.keyboardShortcutHandler(e)},uq=new WeakSet,uV=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!r0.includes(a)){this.removeEventListener("keyup",rJ(this,uW,uH));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(rQ(this,uD).contains(`no${a.toLowerCase()}`)||" "===a&&rQ(this,uD).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",rJ(this,uW,uH),{once:!0})};let r3=Object.values(i9),r5=Object.values(i5),r4=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(aS.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,i3.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>r3.includes(e)):[]},r9=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&aS.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof aS.customElements.get(e.nodeName.toLowerCase()))&&aS.customElements.upgrade(e),r5.some(t=>t in e)},r8=e=>r9(e)||!!r4(e).length,r7=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},r6={[i9.MEDIA_SUBTITLES_LIST]:rv,[i9.MEDIA_SUBTITLES_SHOWING]:rv,[i9.MEDIA_SEEKABLE]:r7,[i9.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(r7).join(" "),[i9.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[i9.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(al).join(" ")},[i9.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(ac).join(" ")}},ne=async(e,t,i)=>{var a,r;if(e.isConnected||await ap(0),"boolean"==typeof i||null==i)return aG(e,t,i);if("number"==typeof i)return aj(e,t,i);if("string"==typeof i)return aQ(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=r6[t])?void 0:a.call(r6,i))?r:i;return e.setAttribute(t,n)},nt=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},ni=(e,t)=>{if(nt(e))return;let i=(e,t)=>{var i,a;r8(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>ni(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!r8(e)){aS.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},na=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=r4(e),r=t.toLowerCase();a.includes(r)&&ne(e,r,i)})},nr=(e,t,i)=>{ni(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(i2.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(i2.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>ni(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>ni(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>ni(e,t)),Array.prototype.forEach.call(r,e=>ni(e,i))):"attributes"===n&&o===i3.MEDIA_CHROME_ATTRIBUTES&&(r8(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{ni(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(i2.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(i2.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};aS.customElements.get("media-controller")||aS.customElements.define("media-controller",r2);var nn=Object.defineProperty,ns=(e,t,i)=>t in e?nn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,no=(e,t,i)=>(ns(e,"symbol"!=typeof t?t+"":t,i),i),nl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nd=(e,t,i)=>(nl(e,t,"read from private field"),i?i.call(e):t.get(e)),nu=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nc=(e,t,i,a)=>(nl(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let nh=aI.createElement("template");nh.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;class nm extends aS.HTMLElement{constructor(e={}){if(super(),nu(this,uF,void 0),no(this,"preventClick",!1),nu(this,u$,e=>{this.preventClick||this.handleClick(e)}),nu(this,uK,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",nd(this,uK));return}this.preventClick||this.handleClick(e)}),nu(this,uj,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",nd(this,uK));return}this.addEventListener("keyup",nd(this,uK),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let t=nh.content.cloneNode(!0);this.nativeEl=t;let i=e.slotTemplate;i||((i=aI.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(i.content.cloneNode(!0)),this.shadowRoot.appendChild(t)}}static get observedAttributes(){return["disabled",i3.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",nd(this,u$)),this.addEventListener("keydown",nd(this,uj)),this.tabIndex=0}disable(){this.removeEventListener("click",nd(this,u$)),this.removeEventListener("keydown",nd(this,uj)),this.removeEventListener("keyup",nd(this,uK)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i3.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=nd(this,uF))?void 0:a.unassociateElement)||r.call(a,this),nc(this,uF,null)),i&&this.isConnected&&(nc(this,uF,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=nd(this,uF))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let{style:a}=aF(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let r=this.getAttribute(i3.MEDIA_CONTROLLER);r&&(nc(this,uF,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=nd(this,uF))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=nd(this,uF))?void 0:e.unassociateElement)||t.call(e,this),nc(this,uF,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}}uF=new WeakMap,u$=new WeakMap,uK=new WeakMap,uj=new WeakMap,aS.customElements.get("media-chrome-button")||aS.customElements.define("media-chrome-button",nm);let np=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,nv=aI.createElement("template");nv.innerHTML=`
  <style>
  :host([${i9.MEDIA_IS_AIRPLAYING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${i9.MEDIA_IS_AIRPLAYING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${np}</slot>
    <slot name="exit">${np}</slot>
  </slot>
`;let nb=e=>{let t=e.mediaIsAirplaying?as.EXIT_AIRPLAY():as.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};class nE extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_IS_AIRPLAYING,i9.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:nv,...e})}connectedCallback(){super.connectedCallback(),nb(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_IS_AIRPLAYING&&nb(this)}get mediaIsAirplaying(){return aY(this,i9.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){aG(this,i9.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return aZ(this,i9.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){aQ(this,i9.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new aS.CustomEvent(i2.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}function nf(e){return e.split("-")[0]}aS.customElements.get("media-airplay-button")||aS.customElements.define("media-airplay-button",nE);var ng=Object.defineProperty,ny=(e,t,i)=>t in e?ng(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,n_=(e,t,i)=>(ny(e,"symbol"!=typeof t?t+"":t,i),i);class nA extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),n_(this,"action"),n_(this,"relatedTarget"),this.action=e,this.relatedTarget=t}}class nT extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),n_(this,"newState"),n_(this,"oldState"),this.newState=e,this.oldState=t}}var nk=Object.defineProperty,nw=(e,t,i)=>t in e?nk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,nS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nI=(e,t,i)=>(nS(e,t,"read from private field"),i?i.call(e):t.get(e)),nC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nR=(e,t,i,a)=>(nS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nL=(e,t,i)=>(nS(e,t,"access private method"),i);function nD({type:e,text:t,value:i,checked:a}){let r=aI.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=aI.createElement("span");return n.textContent=t,r.append(n),r}function nx(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let nM=aI.createElement("template");nM.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    slot[name="header"] {
      display: flex;
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    button[part~="back"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let nN={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class nO extends aS.HTMLElement{constructor(){super(),nC(this,u1),nC(this,u5),nC(this,u9),nC(this,u7),nC(this,ce),nC(this,cr),nC(this,cs),nC(this,cl),nC(this,cu),nC(this,ch),nC(this,cp),nC(this,cb),nC(this,cf),nC(this,cy),nC(this,cA),nC(this,ck),nC(this,cS),nC(this,uY,void 0),nC(this,uG,void 0),nC(this,uZ,void 0),nC(this,uQ,""),nC(this,uz,null),nC(this,uX,new Set),nC(this,uJ,void 0),nC(this,u0,!1),nC(this,u3,()=>{let e=nI(this,uX),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));nR(this,uX,t)}),nC(this,ci,()=>{nL(this,cr,cn).call(this,!1),nL(this,cs,co).call(this,!1)}),nC(this,ca,()=>{nL(this,cr,cn).call(this,!1)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),nR(this,uJ,new MutationObserver(nI(this,u3))),nI(this,uJ).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[nN.DISABLED,nN.HIDDEN,nN.STYLE,nN.ANCHOR,i3.MEDIA_CONTROLLER]}static formatMenuItemText(e){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":nL(this,u1,u2).call(this,e);break;case"invoke":nL(this,u9,u8).call(this,e);break;case"click":nL(this,cl,cd).call(this,e);break;case"toggle":nL(this,ch,cm).call(this,e);break;case"focusout":nL(this,cb,cE).call(this,e);break;case"keydown":nL(this,cf,cg).call(this,e)}}connectedCallback(){var e,t;nL(this,u5,u4).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),nR(this,uY,aN(this)),null==(t=null==(e=nI(this,uY))?void 0:e.associateElement)||t.call(e,this),this.hidden||(aD(nU(this),nI(this,ci)),aD(this,nI(this,ca)))}disconnectedCallback(){var e,t;ax(nU(this),nI(this,ci)),ax(this,nI(this,ca)),this.disable(),null==(t=null==(e=nI(this,uY))?void 0:e.unassociateElement)||t.call(e,this),nR(this,uY,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===nN.HIDDEN&&i!==t?(nI(this,u0)||nR(this,u0,!0),this.hidden?nL(this,ce,ct).call(this):nL(this,u7,u6).call(this),this.dispatchEvent(new nT({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===i3.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=nI(this,uY))?void 0:a.unassociateElement)||r.call(a,this),nR(this,uY,null)),i&&this.isConnected&&(nR(this,uY,aN(this)),null==(s=null==(n=nI(this,uY))?void 0:n.associateElement)||s.call(n,this))):e===nN.DISABLED&&i!==t?null==i?this.enable():this.disable():e===nN.STYLE&&i!==t&&nL(this,u5,u4).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=aq(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(nP)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&nL(this,cS,cI).call(this,t)}focus(){if(nR(this,uG,aH()),this.items.length){nL(this,ck,cw).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=nL(this,cy,c_).call(this,e);i&&(nL(this,cS,cI).call(this,i,"checkbox"===i.type),nI(this,uZ)&&!this.hidden&&(null==(t=nI(this,uG))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=nL(this,cy,c_).call(this,e))?t:nL(this,cA,cT).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),nL(this,ck,cw).call(this,r[s]),r[s].focus()}}function nP(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function nU(e){var t;return null!=(t=e.getAttribute("bounds")?aW(e,`#${e.getAttribute("bounds")}`):aM(e)||e.parentElement)?t:e}uY=new WeakMap,uG=new WeakMap,uZ=new WeakMap,uQ=new WeakMap,uz=new WeakMap,uX=new WeakMap,uJ=new WeakMap,u0=new WeakMap,u1=new WeakSet,u2=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||nI(this,u3).call(this)},u3=new WeakMap,u5=new WeakSet,u4=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},u9=new WeakSet,u8=function(e){nR(this,uZ,e.relatedTarget),aB(this,e.relatedTarget)||(this.hidden=!this.hidden)},u7=new WeakSet,u6=function(){var e;null==(e=nI(this,uZ))||e.setAttribute("aria-expanded","true"),requestAnimationFrame(()=>nL(this,cr,cn).call(this,!1)),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),aD(nU(this),nI(this,ci)),aD(this,nI(this,ca))},ce=new WeakSet,ct=function(){var e;null==(e=nI(this,uZ))||e.setAttribute("aria-expanded","false"),ax(nU(this),nI(this,ci)),ax(this,nI(this,ca))},ci=new WeakMap,ca=new WeakMap,cr=new WeakSet,cn=function(e,t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:i,y:a}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(nf(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=nf(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i;let a,r;return{anchor:(i=t.offsetParent,a=e.getBoundingClientRect(),r=i.getBoundingClientRect(),{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=t||(t=this.offsetWidth);let r=nU(this).getBoundingClientRect(),n=this.anchorElement.getBoundingClientRect(),s=r.width-i-t,o=r.height-a-this.offsetHeight,l=r.height-n.height,{style:d}=aF(this.shadowRoot,":host");e||d.setProperty("--media-menu-transition-in","none"),d.setProperty("position","absolute"),d.setProperty("right",`${Math.max(0,s)}px`),d.setProperty("bottom",`${o}px`),d.setProperty("--_menu-max-height",`${l}px`),d.removeProperty("--media-menu-transition-in")},cs=new WeakSet,co=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=aF(this.shadowRoot,":host");if(e||a.setProperty("--media-menu-transition-in","none"),i){let a=i.offsetHeight,r=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${r}px`),this.style.setProperty("min-height",`${a}px`),nL(this,cr,cn).call(this,e,r)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),nL(this,cr,cn).call(this,e);a.removeProperty("--media-menu-transition-in")},cl=new WeakSet,cd=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(nI(this,cu,cc))){null==(t=nI(this,uG))||t.focus(),this.hidden=!0;return}let i=nL(this,cy,c_).call(this,e);!i||i.hasAttribute("disabled")||(nL(this,ck,cw).call(this,i),this.handleSelect(e))},cu=new WeakSet,cc=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.part.contains("back")&&e.part.contains("button"))},ch=new WeakSet,cm=function(e){if(e.target===this)return;nL(this,cp,cv).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new nA({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);nL(this,cs,co).call(this,!0)},cp=new WeakSet,cv=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},cb=new WeakSet,cE=function(e){var t;aB(this,e.relatedTarget)||(nI(this,u0)&&(null==(t=nI(this,uG))||t.focus()),!nI(this,uZ)||nI(this,uZ)===e.relatedTarget||this.hidden||(this.hidden=!0))},cf=new WeakSet,cg=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(nI(this,u0)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=nI(this,uG))||n.focus(),nI(this,u0)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},cy=new WeakSet,c_=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},cA=new WeakSet,cT=function(){return this.items.find(e=>0===e.tabIndex)},ck=new WeakSet,cw=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},cS=new WeakSet,cI=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},((e,t,i)=>nw(e,"symbol"!=typeof t?t+"":t,i))(nO,"template",nM),aS.customElements.get("media-chrome-menu")||aS.customElements.define("media-chrome-menu",nO);var nB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nW=(e,t,i)=>(nB(e,t,"read from private field"),i?i.call(e):t.get(e)),nH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nq=(e,t,i,a)=>(nB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nV=(e,t,i)=>(nB(e,t,"access private method"),i);class nF extends nO{constructor(){super(...arguments),nH(this,cL),nH(this,cx),nH(this,cC,[]),nH(this,cR,void 0)}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_AUDIO_TRACK_LIST,i9.MEDIA_AUDIO_TRACK_ENABLED,i9.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===i9.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(nq(this,cC,au(i)),nV(this,cL,cD).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nV(this,cx,cM))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nV(this,cx,cM))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aM(this).querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return nW(this,cC)}set mediaAudioTrackList(e){nq(this,cC,e),nV(this,cL,cD).call(this)}get mediaAudioTrackEnabled(){return aZ(this,i9.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aQ(this,i9.MEDIA_AUDIO_TRACK_ENABLED,e)}}cC=new WeakMap,cR=new WeakMap,cL=new WeakSet,cD=function(){if(nW(this,cR)===JSON.stringify(this.mediaAudioTrackList))return;nq(this,cR,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=nD({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(nx(this,"checked-indicator")),this.defaultSlot.append(e)}},cx=new WeakSet,cM=function(){if(null==this.value)return;let e=new aS.CustomEvent(i2.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-audio-track-menu")||aS.customElements.define("media-audio-track-menu",nF);class n$ extends nm{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aq(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){this.invokeTargetElement.dispatchEvent(new nA({relatedTarget:this}))}}aS.customElements.get("media-chrome-menu-button")||aS.customElements.define("media-chrome-menu-button",n$);let nK=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,nj=aI.createElement("template");nj.innerHTML=`
  <slot name="icon">${nK}</slot>
`;class nY extends n${static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_AUDIO_TRACK_ENABLED,i9.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:nj})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",an.AUDIO_TRACKS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aM(this).querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){return aZ(this,i9.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aQ(this,i9.MEDIA_AUDIO_TRACK_ENABLED,e)}}aS.customElements.get("media-audio-track-menu-button")||aS.customElements.define("media-audio-track-menu-button",nY);let nG=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nZ=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,nQ=aI.createElement("template");nQ.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${nG}</slot>
    <slot name="off">${nZ}</slot>
  </slot>
`;let nz=e=>{e.setAttribute("aria-checked",ry(e))};class nX extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_SUBTITLES_LIST,i9.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:nQ,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",an.CLOSED_CAPTIONS()),nz(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_SUBTITLES_SHOWING&&nz(this)}get mediaSubtitlesList(){return nJ(this,i9.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){n0(this,i9.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nJ(this,i9.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){n0(this,i9.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new aS.CustomEvent(i2.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let nJ=(e,t)=>{let i=e.getAttribute(t);return i?rh(i):[]},n0=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rv(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aS.customElements.get("media-captions-button")||aS.customElements.define("media-captions-button",nX);var n1=Object.defineProperty,n2=(e,t,i)=>t in e?n1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,n3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n5=(e,t,i)=>(n3(e,t,"read from private field"),i?i.call(e):t.get(e)),n4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},n9=(e,t,i,a)=>(n3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),n8=(e,t,i)=>(n3(e,t,"access private method"),i);let n7=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,n6=aI.createElement("template");n6.innerHTML=nO.template.innerHTML+`
  <slot name="captions-indicator" hidden>${n7}</slot>`;class se extends nO{constructor(){super(...arguments),n4(this,cO),n4(this,cU),n4(this,cN,void 0)}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_SUBTITLES_LIST,i9.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_SUBTITLES_LIST&&t!==i?n8(this,cO,cP).call(this):e===i9.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",n8(this,cU,cB))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",n8(this,cU,cB))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aM(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return st(this,i9.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){si(this,i9.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return st(this,i9.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){si(this,i9.MEDIA_SUBTITLES_SHOWING,e)}}cN=new WeakMap,cO=new WeakSet,cP=function(){var e;if(n5(this,cN)===JSON.stringify(this.mediaSubtitlesList))return;n9(this,cN,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let t=!this.value,i=nD({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});for(let t of(i.prepend(nx(this,"checked-indicator")),this.defaultSlot.append(i),this.mediaSubtitlesList)){let i=nD({type:"radio",text:this.formatMenuItemText(t.label,t),value:rp(t),checked:this.value==rp(t)});i.prepend(nx(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(nx(this,"captions-indicator")),this.defaultSlot.append(i)}},cU=new WeakSet,cB=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(i9.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aS.CustomEvent(i2.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aS.CustomEvent(i2.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},((e,t,i)=>n2(e,"symbol"!=typeof t?t+"":t,i))(se,"template",n6);let st=(e,t)=>{let i=e.getAttribute(t);return i?rh(i):[]},si=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rv(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aS.customElements.get("media-captions-menu")||aS.customElements.define("media-captions-menu",se);let sa=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,sr=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,sn=aI.createElement("template");sn.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${sa}</slot>
    <slot name="off">${sr}</slot>
  </slot>
`;let ss=e=>{e.setAttribute("aria-checked",ry(e))};class so extends n${static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_SUBTITLES_LIST,i9.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:sn,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",an.CLOSED_CAPTIONS()),ss(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_SUBTITLES_SHOWING&&ss(this)}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aM(this).querySelector("media-captions-menu")}get mediaSubtitlesList(){return sl(this,i9.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){sd(this,i9.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return sl(this,i9.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){sd(this,i9.MEDIA_SUBTITLES_SHOWING,e)}}let sl=(e,t)=>{let i=e.getAttribute(t);return i?rh(i):[]},sd=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rv(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aS.customElements.get("media-captions-menu-button")||aS.customElements.define("media-captions-menu-button",so);let su=aI.createElement("template");su.innerHTML=`
  <style>
  :host([${i9.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${i9.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let sc=e=>{let t=e.mediaIsCasting?as.EXIT_CAST():as.ENTER_CAST();e.setAttribute("aria-label",t)};class sh extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_IS_CASTING,i9.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:su,...e})}connectedCallback(){super.connectedCallback(),sc(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_IS_CASTING&&sc(this)}get mediaIsCasting(){return aY(this,i9.MEDIA_IS_CASTING)}set mediaIsCasting(e){aG(this,i9.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return aZ(this,i9.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){aQ(this,i9.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?i2.MEDIA_EXIT_CAST_REQUEST:i2.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}aS.customElements.get("media-cast-button")||aS.customElements.define("media-cast-button",sh);var sm=Object.defineProperty,sp=(e,t,i)=>t in e?sm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,sv=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sb=(e,t,i)=>(sv(e,t,"read from private field"),i?i.call(e):t.get(e)),sE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sf=(e,t,i,a)=>(sv(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sg=(e,t,i)=>(sv(e,t,"access private method"),i);let sy=aI.createElement("template");sy.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;let s_={HIDDEN:"hidden",ANCHOR:"anchor"};class sA extends aS.HTMLElement{constructor(){super(),sE(this,cq),sE(this,cF),sE(this,cK),sE(this,cY),sE(this,cZ),sE(this,cW,void 0),sE(this,cH,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[s_.HIDDEN,s_.ANCHOR]}handleEvent(e){switch(e.type){case"invoke":sg(this,cK,cj).call(this,e);break;case"focusout":sg(this,cY,cG).call(this,e);break;case"keydown":sg(this,cZ,cQ).call(this,e)}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){e===s_.HIDDEN&&i!==t&&(this.hidden?sg(this,cF,c$).call(this):sg(this,cq,cV).call(this))}focus(){sf(this,cW,aH());let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}get keysUsed(){return["Escape","Tab"]}}cW=new WeakMap,cH=new WeakMap,cq=new WeakSet,cV=function(){var e;null==(e=sb(this,cH))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},cF=new WeakSet,c$=function(){var e;null==(e=sb(this,cH))||e.setAttribute("aria-expanded","false")},cK=new WeakSet,cj=function(e){sf(this,cH,e.relatedTarget),aB(this,e.relatedTarget)||(this.hidden=!this.hidden)},cY=new WeakSet,cG=function(e){var t;aB(this,e.relatedTarget)||(null==(t=sb(this,cW))||t.focus(),!sb(this,cH)||sb(this,cH)===e.relatedTarget||this.hidden||(this.hidden=!0))},cZ=new WeakSet,cQ=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=sb(this,cW))||n.focus(),this.hidden=!0))},((e,t,i)=>sp(e,"symbol"!=typeof t?t+"":t,i))(sA,"template",sy),aS.customElements.get("media-chrome-dialog")||aS.customElements.define("media-chrome-dialog",sA);var sT=Object.defineProperty,sk=(e,t,i)=>t in e?sT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,sw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sS=(e,t,i)=>(sw(e,t,"read from private field"),i?i.call(e):t.get(e)),sI=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sC=(e,t,i,a)=>(sw(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sR=(e,t,i)=>(sw(e,t,"access private method"),i);let sL=aI.createElement("template");sL.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let sD={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class sx extends aS.HTMLElement{constructor(){super(),sI(this,cJ),sI(this,c1),sI(this,c3),sI(this,c9),sI(this,c7),sI(this,he),sI(this,cz,!1),sI(this,cX,void 0),sI(this,c4,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(t=null==(e=this.submenuElement.checkedItems)?void 0:e[0])?void 0:t.text,r=aI.createElement("span");r.textContent=null!=a?a:"",i.replaceChildren(r)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[sD.TYPE,sD.DISABLED,sD.CHECKED,sD.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),sM(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":sR(this,cJ,c0).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":sR(this,c7,c6).call(this,e);break;case"keyup":sR(this,c9,c8).call(this,e)}}attributeChangedCallback(e,t,i){e===sD.CHECKED&&sM(this)&&!sS(this,cz)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===sD.TYPE&&i!==t?this.role="menuitem"+i:e===sD.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(sD.DISABLED)||this.enable(),this.role="menuitem"+this.type,sC(this,cX,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),sR(this,he,ht).call(this)}disconnectedCallback(){this.disable(),sR(this,he,ht).call(this),sC(this,cX,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aq(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(sD.TYPE))?e:""}set type(e){this.setAttribute(sD.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(sD.VALUE))?e:this.text}set value(e){this.setAttribute(sD.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(sM(this))return"true"===this.getAttribute("aria-checked")}set checked(e){sM(this)&&(sC(this,cz,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!sM(this)&&this.invokeTargetElement&&aB(this,e.target)&&this.invokeTargetElement.dispatchEvent(new nA({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function sM(e){return"radio"===e.type||"checkbox"===e.type}cz=new WeakMap,cX=new WeakMap,cJ=new WeakSet,c0=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?sR(this,c1,c2).call(this):sR(this,c3,c5).call(this))},c1=new WeakSet,c2=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",sS(this,c4)),this.submenuElement.addEventListener("addmenuitem",sS(this,c4)),this.submenuElement.addEventListener("removemenuitem",sS(this,c4)),sS(this,c4).call(this)},c3=new WeakSet,c5=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",sS(this,c4)),this.submenuElement.removeEventListener("addmenuitem",sS(this,c4)),this.submenuElement.removeEventListener("removemenuitem",sS(this,c4)),sS(this,c4).call(this)},c4=new WeakMap,c9=new WeakSet,c8=function(e){let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",sR(this,c9,c8));return}this.handleClick(e)},c7=new WeakSet,c6=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",sR(this,c9,c8));return}this.addEventListener("keyup",sR(this,c9,c8),{once:!0})},he=new WeakSet,ht=function(){var e;let t=null==(e=sS(this,cX))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},((e,t,i)=>sk(e,"symbol"!=typeof t?t+"":t,i))(sx,"template",sL),aS.customElements.get("media-chrome-menu-item")||aS.customElements.define("media-chrome-menu-item",sx);var sN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sO=(e,t,i)=>(sN(e,t,"read from private field"),i?i.call(e):t.get(e)),sP=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sU=(e,t,i,a)=>(sN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sB=(e,t,i)=>(sN(e,t,"access private method"),i);let sW=aI.createElement("template");sW.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress,
    #highlight,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #background,
    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance" part="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class sH extends aS.HTMLElement{constructor(){super(),sP(this,hc),sP(this,hm),sP(this,hv),sP(this,hE),sP(this,hg),sP(this,h_),sP(this,hT),sP(this,hw),sP(this,hi,void 0),sP(this,ha,void 0),sP(this,hr,void 0),sP(this,hn,void 0),sP(this,hs,{}),sP(this,ho,[]),sP(this,hl,()=>{if(this.range.matches(":focus-visible")){let{style:e}=aF(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),sP(this,hd,()=>{let{style:e}=aF(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),sP(this,hu,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sW.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),sU(this,hr,this.shadowRoot.querySelector("#startpoint")),sU(this,hn,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",i3.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i3.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sO(this,hi))?void 0:a.unassociateElement)||r.call(a,this),sU(this,hi,null)),i&&this.isConnected&&(sU(this,hi,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sO(this,hi))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),sB(this,hm,hp).call(this)):(this.range.setAttribute(e,i),sB(this,hv,hb).call(this)))}connectedCallback(){var e,t,i;let{style:a}=aF(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),sO(this,hs).pointer=aF(this.shadowRoot,"#pointer"),sO(this,hs).progress=aF(this.shadowRoot,"#progress"),sO(this,hs).thumb=aF(this.shadowRoot,"#thumb");let r=this.getAttribute(i3.MEDIA_CONTROLLER);r&&(sU(this,hi,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sO(this,hi))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",sO(this,hl)),this.shadowRoot.addEventListener("focusout",sO(this,hd)),sB(this,hm,hp).call(this),aD(this.container,sO(this,hu))}disconnectedCallback(){var e,t;sB(this,hv,hb).call(this),null==(t=null==(e=sO(this,hi))?void 0:e.unassociateElement)||t.call(e,this),sU(this,hi,null),this.shadowRoot.removeEventListener("focusin",sO(this,hl)),this.shadowRoot.removeEventListener("focusout",sO(this,hd)),ax(this.container,sO(this,hu))}updatePointerBar(e){var t;null==(t=sO(this,hs).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=sO(this,hs).progress)||e.style.setProperty("width",`${i}%`),null==(t=sO(this,hs).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;sO(this,hs).activeSegment=a$(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];sU(this,ho,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=aI.createElementNS("http://www.w3.org/2000/svg","rect"),c=aF(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return Math.max(0,Math.min(1,function(e,t,i,a){let r=aV(i,a),n=aV(i,{x:e,y:t}),s=aV(a,{x:e,y:t});return n>r||s>r?n>s?1:0:n/r}(e.clientX,e.clientY,sO(this,hr).getBoundingClientRect(),sO(this,hn).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":sB(this,hw,hS).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":sB(this,hg,hy).call(this,e);break;case"pointerdown":sB(this,hE,hf).call(this,e);break;case"pointerup":sB(this,h_,hA).call(this);break;case"pointerleave":sB(this,hT,hk).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}hi=new WeakMap,ha=new WeakMap,hr=new WeakMap,hn=new WeakMap,hs=new WeakMap,ho=new WeakMap,hl=new WeakMap,hd=new WeakMap,hu=new WeakMap,hc=new WeakSet,hh=function(e){let t=sO(this,hs).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=sO(this,ho).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},hm=new WeakSet,hp=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},hv=new WeakSet,hb=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=aS.window)||e.removeEventListener("pointerup",this),null==(t=aS.window)||t.removeEventListener("pointermove",this)},hE=new WeakSet,hf=function(e){var t;sU(this,ha,e.composedPath().includes(this.range)),null==(t=aS.window)||t.addEventListener("pointerup",this)},hg=new WeakSet,hy=function(e){var t;"mouse"!==e.pointerType&&sB(this,hE,hf).call(this,e),this.addEventListener("pointerleave",this),null==(t=aS.window)||t.addEventListener("pointermove",this)},h_=new WeakSet,hA=function(){var e;null==(e=aS.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},hT=new WeakSet,hk=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=aS.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=sO(this,hs).activeSegment)||t.style.removeProperty("transform")},hw=new WeakSet,hS=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),sB(this,hc,hh).call(this,e),this.dragging&&("mouse"!==e.pointerType||!sO(this,ha))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},aS.customElements.get("media-chrome-range")||aS.customElements.define("media-chrome-range",sH);var sq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sV=(e,t,i)=>(sq(e,t,"read from private field"),i?i.call(e):t.get(e)),sF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s$=(e,t,i,a)=>(sq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sK=aI.createElement("template");sK.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;class sj extends aS.HTMLElement{constructor(){super(),sF(this,hI,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sK.content.cloneNode(!0)))}static get observedAttributes(){return[i3.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i3.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sV(this,hI))?void 0:a.unassociateElement)||r.call(a,this),s$(this,hI,null)),i&&this.isConnected&&(s$(this,hI,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sV(this,hI))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(i3.MEDIA_CONTROLLER);a&&(s$(this,hI,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sV(this,hI))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sV(this,hI))?void 0:e.unassociateElement)||t.call(e,this),s$(this,hI,null)}}hI=new WeakMap,aS.customElements.get("media-control-bar")||aS.customElements.define("media-control-bar",sj);var sY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sG=(e,t,i)=>(sY(e,t,"read from private field"),i?i.call(e):t.get(e)),sZ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sQ=(e,t,i,a)=>(sY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sz=aI.createElement("template");sz.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class sX extends aS.HTMLElement{constructor(){super(),sZ(this,hC,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sz.content.cloneNode(!0)))}static get observedAttributes(){return[i3.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i3.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sG(this,hC))?void 0:a.unassociateElement)||r.call(a,this),sQ(this,hC,null)),i&&this.isConnected&&(sQ(this,hC,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sG(this,hC))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=aF(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(i3.MEDIA_CONTROLLER);r&&(sQ(this,hC,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sG(this,hC))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sG(this,hC))?void 0:e.unassociateElement)||t.call(e,this),sQ(this,hC,null)}}hC=new WeakMap,aS.customElements.get("media-text-display")||aS.customElements.define("media-text-display",sX);var sJ=sX,s0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s1=(e,t,i)=>(s0(e,t,"read from private field"),i?i.call(e):t.get(e)),s2=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s3=(e,t,i,a)=>(s0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class s5 extends sX{constructor(){super(),s2(this,hR,void 0),s3(this,hR,this.shadowRoot.querySelector("slot")),s1(this,hR).textContent=af(0)}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===i9.MEDIA_DURATION&&(s1(this,hR).textContent=af(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return aK(this,i9.MEDIA_DURATION)}set mediaDuration(e){aj(this,i9.MEDIA_DURATION,e)}}hR=new WeakMap,aS.customElements.get("media-duration-display")||aS.customElements.define("media-duration-display",s5);let s4=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,s9=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,s8=aI.createElement("template");s8.innerHTML=`
  <style>
  :host([${i9.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${i9.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${s4}</slot>
    <slot name="exit">${s9}</slot>
  </slot>
`;let s7=e=>{let t=e.mediaIsFullscreen?as.EXIT_FULLSCREEN():as.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};class s6 extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_IS_FULLSCREEN,i9.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:s8,...e})}connectedCallback(){super.connectedCallback(),s7(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_IS_FULLSCREEN&&s7(this)}get mediaFullscreenUnavailable(){return aZ(this,i9.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){aQ(this,i9.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return aY(this,i9.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){aG(this,i9.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?i2.MEDIA_EXIT_FULLSCREEN_REQUEST:i2.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}aS.customElements.get("media-fullscreen-button")||aS.customElements.define("media-fullscreen-button",s6);let{MEDIA_TIME_IS_LIVE:oe,MEDIA_PAUSED:ot}=i9,{MEDIA_SEEK_TO_LIVE_REQUEST:oi,MEDIA_PLAY_REQUEST:oa}=i2,or=aI.createElement("template");or.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${oe}]:not([${ot}])) slot[name=indicator] > *,
  :host([${oe}]:not([${ot}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${oe}]:not([${ot}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let on=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?as.SEEK_LIVE():as.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class os extends nm{static get observedAttributes(){return[...super.observedAttributes,ot,oe]}constructor(e={}){super({slotTemplate:or,...e})}connectedCallback(){on(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),on(this)}get mediaPaused(){return aY(this,i9.MEDIA_PAUSED)}set mediaPaused(e){aG(this,i9.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return aY(this,i9.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){aG(this,i9.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new aS.CustomEvent(oi,{composed:!0,bubbles:!0})),this.hasAttribute(ot)&&this.dispatchEvent(new aS.CustomEvent(oa,{composed:!0,bubbles:!0})))}}aS.customElements.get("media-live-button")||aS.customElements.define("media-live-button",os);var oo=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ol=(e,t,i)=>(oo(e,t,"read from private field"),i?i.call(e):t.get(e)),od=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ou=(e,t,i,a)=>(oo(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let oc={LOADING_DELAY:"loadingdelay"},oh=aI.createElement("template"),om=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;oh.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${i9.MEDIA_LOADING}]:not([${i9.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${i9.MEDIA_LOADING}]:not([${i9.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${i9.MEDIA_LOADING}]:not([${i9.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${om}</slot>
<div id="status" role="status" aria-live="polite">${an.MEDIA_LOADING()}</div>
`;class op extends aS.HTMLElement{constructor(){if(super(),od(this,hL,void 0),od(this,hD,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=oh.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[i3.MEDIA_CONTROLLER,i9.MEDIA_PAUSED,i9.MEDIA_LOADING,oc.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===oc.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===i3.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=ol(this,hL))?void 0:a.unassociateElement)||r.call(a,this),ou(this,hL,null)),i&&this.isConnected&&(ou(this,hL,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=ol(this,hL))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(i3.MEDIA_CONTROLLER);a&&(ou(this,hL,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=ol(this,hL))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=ol(this,hL))?void 0:e.unassociateElement)||t.call(e,this),ou(this,hL,null)}get loadingDelay(){return ol(this,hD)}set loadingDelay(e){ou(this,hD,e);let{style:t}=aF(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return aY(this,i9.MEDIA_PAUSED)}set mediaPaused(e){aG(this,i9.MEDIA_PAUSED,e)}get mediaLoading(){return aY(this,i9.MEDIA_LOADING)}set mediaLoading(e){aG(this,i9.MEDIA_LOADING,e)}}hL=new WeakMap,hD=new WeakMap,aS.customElements.get("media-loading-indicator")||aS.customElements.define("media-loading-indicator",op);let{MEDIA_VOLUME_LEVEL:ov}=i9,ob=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,oE=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,of=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,og=aI.createElement("template");og.innerHTML=`
  <style>
  
  :host(:not([${ov}])) slot:not([name=high]):not([name=icon]), 
  :host([${ov}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${ov}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${ov}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${ov}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${ob}</slot>
    <slot name="low">${oE}</slot>
    <slot name="medium">${oE}</slot>
    <slot name="high">${of}</slot>
  </slot>
`;let oy=e=>{let t="off"===e.mediaVolumeLevel?as.UNMUTE():as.MUTE();e.setAttribute("aria-label",t)};class o_ extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:og,...e})}connectedCallback(){oy(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i9.MEDIA_VOLUME_LEVEL&&oy(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return aZ(this,i9.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){aQ(this,i9.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?i2.MEDIA_UNMUTE_REQUEST:i2.MEDIA_MUTE_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}aS.customElements.get("media-mute-button")||aS.customElements.define("media-mute-button",o_);let oA=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,oT=aI.createElement("template");oT.innerHTML=`
  <style>
  :host([${i9.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${i9.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${oA}</slot>
    <slot name="exit">${oA}</slot>
  </slot>
`;let ok=e=>{let t=e.mediaIsPip?as.EXIT_PIP():as.ENTER_PIP();e.setAttribute("aria-label",t)};class ow extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_IS_PIP,i9.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:oT,...e})}connectedCallback(){ok(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i9.MEDIA_IS_PIP&&ok(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return aZ(this,i9.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){aQ(this,i9.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return aY(this,i9.MEDIA_IS_PIP)}set mediaIsPip(e){aG(this,i9.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?i2.MEDIA_EXIT_PIP_REQUEST:i2.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}aS.customElements.get("media-pip-button")||aS.customElements.define("media-pip-button",ow);var oS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oI=(e,t,i)=>(oS(e,t,"read from private field"),i?i.call(e):t.get(e)),oC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let oR={RATES:"rates"},oL=[1,1.2,1.5,1.7,2],oD=aI.createElement("template");oD.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class ox extends nm{constructor(e={}){super({slotTemplate:oD,...e}),oC(this,hx,new rd(this,oR.RATES,{defaultValue:oL})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_PLAYBACK_RATE,oR.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===oR.RATES&&(oI(this,hx).value=i),e===i9.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",an.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return oI(this,hx)}set rates(e){e?Array.isArray(e)&&(oI(this,hx).value=e.join(" ")):oI(this,hx).value=""}get mediaPlaybackRate(){return aK(this,i9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i9.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new aS.CustomEvent(i2.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}hx=new WeakMap,aS.customElements.get("media-playback-rate-button")||aS.customElements.define("media-playback-rate-button",ox);var oM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oN=(e,t,i)=>(oM(e,t,"read from private field"),i?i.call(e):t.get(e)),oO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oP=(e,t,i)=>(oM(e,t,"access private method"),i);let oU={RATES:"rates"};class oB extends nO{constructor(){super(),oO(this,hN),oO(this,hP),oO(this,hM,new rd(this,oU.RATES,{defaultValue:oL})),oP(this,hN,hO).call(this)}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_PLAYBACK_RATE,oU.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===oU.RATES&&t!=i&&(oN(this,hM).value=i,oP(this,hN,hO).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",oP(this,hP,hU))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",oP(this,hP,hU))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aM(this).querySelector("media-playback-rate-menu-button")}get rates(){return oN(this,hM)}set rates(e){e?Array.isArray(e)&&(oN(this,hM).value=e.join(" ")):oN(this,hM).value="",oP(this,hN,hO).call(this)}get mediaPlaybackRate(){return aK(this,i9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i9.MEDIA_PLAYBACK_RATE,e)}}hM=new WeakMap,hN=new WeakSet,hO=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=nD({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(nx(this,"checked-indicator")),this.defaultSlot.append(t)}},hP=new WeakSet,hU=function(){if(!this.value)return;let e=new aS.CustomEvent(i2.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-playback-rate-menu")||aS.customElements.define("media-playback-rate-menu",oB);var oW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oH=(e,t,i)=>(oW(e,t,"read from private field"),i?i.call(e):t.get(e)),oq=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let oV={RATES:"rates"},oF=[1,1.2,1.5,1.7,2],o$=aI.createElement("template");o$.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class oK extends n${constructor(e={}){super({slotTemplate:o$,...e}),oq(this,hB,new rd(this,oV.RATES,{defaultValue:oF})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_PLAYBACK_RATE,oV.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===oV.RATES&&(oH(this,hB).value=i),e===i9.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",an.PLAYBACK_RATE({playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aM(this).querySelector("media-playback-rate-menu")}get rates(){return oH(this,hB)}set rates(e){e?Array.isArray(e)&&(oH(this,hB).value=e.join(" ")):oH(this,hB).value=""}get mediaPlaybackRate(){return aK(this,i9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i9.MEDIA_PLAYBACK_RATE,e)}}hB=new WeakMap,aS.customElements.get("media-playback-rate-menu-button")||aS.customElements.define("media-playback-rate-menu-button",oK);let oj=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,oY=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,oG=aI.createElement("template");oG.innerHTML=`
  <style>
  :host([${i9.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${i9.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${oj}</slot>
    <slot name="pause">${oY}</slot>
  </slot>
`;let oZ=e=>{let t=e.mediaPaused?as.PLAY():as.PAUSE();e.setAttribute("aria-label",t)};class oQ extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_PAUSED,i9.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:oG,...e})}connectedCallback(){oZ(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i9.MEDIA_PAUSED&&oZ(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return aY(this,i9.MEDIA_PAUSED)}set mediaPaused(e){aG(this,i9.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?i2.MEDIA_PLAY_REQUEST:i2.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aS.CustomEvent(e,{composed:!0,bubbles:!0}))}}aS.customElements.get("media-play-button")||aS.customElements.define("media-play-button",oQ);let oz={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},oX=aI.createElement("template");oX.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let oJ=e=>{e.style.removeProperty("background-image")},o0=(e,t)=>{e.style["background-image"]=`url('${t}')`};class o1 extends aS.HTMLElement{static get observedAttributes(){return[oz.PLACEHOLDER_SRC,oz.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oX.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===oz.SRC&&(null==i?this.image.removeAttribute(oz.SRC):this.image.setAttribute(oz.SRC,i)),e===oz.PLACEHOLDER_SRC&&(null==i?oJ(this.image):o0(this.image,i))}get placeholderSrc(){return aZ(this,oz.PLACEHOLDER_SRC)}set placeholderSrc(e){aQ(this,oz.SRC,e)}get src(){return aZ(this,oz.SRC)}set src(e){aQ(this,oz.SRC,e)}}aS.customElements.get("media-poster-image")||aS.customElements.define("media-poster-image",o1);var o2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o3=(e,t,i)=>(o2(e,t,"read from private field"),i?i.call(e):t.get(e)),o5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o4=(e,t,i,a)=>(o2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class o9 extends sJ{constructor(){super(),o5(this,hW,void 0),o4(this,hW,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(o3(this,hW).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return aZ(this,i9.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){aQ(this,i9.MEDIA_PREVIEW_CHAPTER,e)}}hW=new WeakMap,aS.customElements.get("media-preview-chapter-display")||aS.customElements.define("media-preview-chapter-display",o9);var o8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o7=(e,t,i)=>(o8(e,t,"read from private field"),i?i.call(e):t.get(e)),o6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},le=(e,t,i,a)=>(o8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lt=aI.createElement("template");lt.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class li extends aS.HTMLElement{constructor(){super(),o6(this,hH,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(lt.content.cloneNode(!0)))}static get observedAttributes(){return[i3.MEDIA_CONTROLLER,i9.MEDIA_PREVIEW_IMAGE,i9.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(i3.MEDIA_CONTROLLER);a&&(le(this,hH,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=o7(this,hH))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=o7(this,hH))?void 0:e.unassociateElement)||t.call(e,this),le(this,hH,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[i9.MEDIA_PREVIEW_IMAGE,i9.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===i3.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=o7(this,hH))?void 0:a.unassociateElement)||r.call(a,this),le(this,hH,null)),i&&this.isConnected&&(le(this,hH,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=o7(this,hH))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return aZ(this,i9.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){aQ(this,i9.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(i9.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(i9.MEDIA_PREVIEW_COORDS);return}this.setAttribute(i9.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:v}=aF(this.shadowRoot,":host"),b=aF(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),f=m?"min":"max";v.setProperty(`${f}-width`,"initial","important"),v.setProperty(`${f}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${n*p}px`;let g=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};E.src!==s&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,g()},E.src=s,g()),g(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}hH=new WeakMap,aS.customElements.get("media-preview-thumbnail")||aS.customElements.define("media-preview-thumbnail",li);var la=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lr=(e,t,i)=>(la(e,t,"read from private field"),i?i.call(e):t.get(e)),ln=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ls=(e,t,i,a)=>(la(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class lo extends sX{constructor(){super(),ln(this,hq,void 0),ls(this,hq,this.shadowRoot.querySelector("slot")),lr(this,hq).textContent=af(0)}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_PREVIEW_TIME&&null!=i&&(lr(this,hq).textContent=af(i))}get mediaPreviewTime(){return aK(this,i9.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aj(this,i9.MEDIA_PREVIEW_TIME,e)}}hq=new WeakMap,aS.customElements.get("media-preview-time-display")||aS.customElements.define("media-preview-time-display",lo);var ll=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ld=(e,t,i)=>(ll(e,t,"read from private field"),i?i.call(e):t.get(e)),lu=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lc=(e,t,i,a)=>(ll(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lh=(e,t,i)=>(ll(e,t,"access private method"),i);class lm extends nO{constructor(){super(...arguments),lu(this,h$),lu(this,hj),lu(this,hV,[]),lu(this,hF,void 0)}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_RENDITION_LIST,i9.MEDIA_RENDITION_SELECTED,i9.MEDIA_RENDITION_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_RENDITION_SELECTED&&t!==i?this.value=null!=i?i:"auto":e===i9.MEDIA_RENDITION_LIST&&t!==i&&(lc(this,hV,ao(i)),lh(this,h$,hK).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lh(this,hj,hY))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lh(this,hj,hY))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aM(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return ld(this,hV)}set mediaRenditionList(e){lc(this,hV,e),lh(this,h$,hK).call(this)}get mediaRenditionSelected(){return aZ(this,i9.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aQ(this,i9.MEDIA_RENDITION_SELECTED,e)}}hV=new WeakMap,hF=new WeakMap,h$=new WeakSet,hK=function(){if(ld(this,hF)===JSON.stringify(this.mediaRenditionList))return;lc(this,hF,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=nD({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(nx(this,"checked-indicator")),this.defaultSlot.append(e)}let i=nD({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t});i.prepend(nx(this,"checked-indicator")),this.defaultSlot.append(i)},hj=new WeakSet,hY=function(){if(null==this.value)return;let e=new aS.CustomEvent(i2.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-rendition-menu")||aS.customElements.define("media-rendition-menu",lm);let lp=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,lv=aI.createElement("template");lv.innerHTML=`
  <slot name="icon">${lp}</slot>
`;class lb extends n${static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_RENDITION_SELECTED,i9.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:lv})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",an.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aM(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return aZ(this,i9.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aQ(this,i9.MEDIA_RENDITION_SELECTED,e)}}aS.customElements.get("media-rendition-menu-button")||aS.customElements.define("media-rendition-menu-button",lb);let lE={SEEK_OFFSET:"seekoffset"},lf=aI.createElement("template");lf.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class lg extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_CURRENT_TIME,lE.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:lf,...e})}connectedCallback(){this.seekOffset=aK(this,lE.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===lE.SEEK_OFFSET&&(this.seekOffset=aK(this,lE.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return aK(this,lE.SEEK_OFFSET,30)}set seekOffset(e){aj(this,lE.SEEK_OFFSET,e),this.setAttribute("aria-label",as.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),aO(aU(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aK(this,i9.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aj(this,i9.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new aS.CustomEvent(i2.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aS.customElements.get("media-seek-backward-button")||aS.customElements.define("media-seek-backward-button",lg);let ly={SEEK_OFFSET:"seekoffset"},l_=aI.createElement("template");l_.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class lA extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_CURRENT_TIME,ly.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:l_,...e})}connectedCallback(){this.seekOffset=aK(this,ly.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===ly.SEEK_OFFSET&&(this.seekOffset=aK(this,ly.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return aK(this,ly.SEEK_OFFSET,30)}set seekOffset(e){aj(this,ly.SEEK_OFFSET,e),this.setAttribute("aria-label",as.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),aO(aU(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aK(this,i9.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aj(this,i9.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new aS.CustomEvent(i2.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aS.customElements.get("media-seek-forward-button")||aS.customElements.define("media-seek-forward-button",lA);var lT=Object.defineProperty,lk=(e,t,i)=>t in e?lT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;let lw=aI.createElement("template");lw.innerHTML=nO.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 160px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class lS extends nO{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aM(this).querySelector("media-settings-menu-button")}}((e,t,i)=>lk(e,"symbol"!=typeof t?t+"":t,i))(lS,"template",lw),aS.customElements.get("media-settings-menu")||aS.customElements.define("media-settings-menu",lS);let lI=aI.createElement("template");lI.innerHTML=`
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class lC extends n${static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:lI})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",an.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aM(this).querySelector("media-settings-menu")}}aS.customElements.get("media-settings-menu-button")||aS.customElements.define("media-settings-menu-button",lC);var lR=Object.defineProperty,lL=(e,t,i)=>t in e?lR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;let lD=aI.createElement("template");lD.innerHTML=sx.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(hG=lD.content)?void 0:hG.querySelector)&&(lD.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class lx extends sx{}((e,t,i)=>lL(e,"symbol"!=typeof t?t+"":t,i))(lx,"template",lD),aS.customElements.get("media-settings-menu-item")||aS.customElements.define("media-settings-menu-item",lx);var lM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lN=(e,t,i)=>(lM(e,t,"read from private field"),i?i.call(e):t.get(e)),lO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lP=(e,t,i,a)=>(lM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let lU={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},lB=[...Object.values(lU),i9.MEDIA_CURRENT_TIME,i9.MEDIA_DURATION,i9.MEDIA_SEEKABLE],lW=["Enter"," "],lH="&nbsp;/&nbsp;",lq=(e,{timesSep:t=lH}={})=>{var i,a;let r=e.hasAttribute(lU.REMAINING),n=e.hasAttribute(lU.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?af(0-(l-s)):af(s);return n?`${d}${t}${af(l)}`:d},lV=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(lU.REMAINING),s=e.hasAttribute(lU.SHOW_DURATION),o=n?aE(0-(r-i)):aE(i);if(!s){e.setAttribute("aria-valuetext",o);return}let l=aE(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};class lF extends sX{constructor(){super(),lO(this,hZ,void 0),lP(this,hZ,this.shadowRoot.querySelector("slot")),lN(this,hZ).innerHTML=`${lq(this)}`}static get observedAttributes(){return[...super.observedAttributes,...lB,"disabled"]}connectedCallback(){let{style:e}=aF(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",an.PLAYBACK_TIME());let t=e=>{let{key:i}=e;if(!lW.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!lW.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){lB.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return aY(this,lU.REMAINING)}set remaining(e){aG(this,lU.REMAINING,e)}get showDuration(){return aY(this,lU.SHOW_DURATION)}set showDuration(e){aG(this,lU.SHOW_DURATION,e)}get noToggle(){return aY(this,lU.NO_TOGGLE)}set noToggle(e){aG(this,lU.NO_TOGGLE,e)}get mediaDuration(){return aK(this,i9.MEDIA_DURATION)}set mediaDuration(e){aj(this,i9.MEDIA_DURATION,e)}get mediaCurrentTime(){return aK(this,i9.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aj(this,i9.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(i9.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(i9.MEDIA_SEEKABLE);return}this.setAttribute(i9.MEDIA_SEEKABLE,e.join(":"))}update(){let e=lq(this);lV(this),e!==lN(this,hZ).innerHTML&&(lN(this,hZ).innerHTML=e)}}hZ=new WeakMap,aS.customElements.get("media-time-display")||aS.customElements.define("media-time-display",lF);var l$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lK=(e,t,i)=>(l$(e,t,"read from private field"),i?i.call(e):t.get(e)),lj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lY=(e,t,i,a)=>(l$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lG=(e,t,i,a)=>({set _(value){lY(e,t,value,i)},get _(){return lK(e,t,a)}});class lZ{constructor(e,t,i){lj(this,hQ,void 0),lj(this,hz,void 0),lj(this,hX,void 0),lj(this,hJ,void 0),lj(this,h0,void 0),lj(this,h1,void 0),lj(this,h2,void 0),lj(this,h3,void 0),lj(this,h5,0),lj(this,h4,(e=performance.now())=>{lY(this,h5,requestAnimationFrame(lK(this,h4))),lY(this,hJ,performance.now()-lK(this,hX));let t=1e3/this.fps;if(lK(this,hJ)>t){lY(this,hX,e-lK(this,hJ)%t);let i=1e3/((e-lK(this,hz))/++lG(this,h0)._),a=(e-lK(this,h1))/1e3/this.duration,r=lK(this,h2)+a*this.playbackRate;r-lK(this,hQ).valueAsNumber>0?lY(this,h3,this.playbackRate/this.duration/i):(lY(this,h3,.995*lK(this,h3)),r=lK(this,hQ).valueAsNumber+lK(this,h3)),this.callback(r)}}),lY(this,hQ,e),this.callback=t,this.fps=i}start(){0===lK(this,h5)&&(lY(this,hX,performance.now()),lY(this,hz,lK(this,hX)),lY(this,h0,0),lK(this,h4).call(this))}stop(){0!==lK(this,h5)&&(cancelAnimationFrame(lK(this,h5)),lY(this,h5,0))}update({start:e,duration:t,playbackRate:i}){let a=e-lK(this,hQ).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),lY(this,h2,e),lY(this,h1,performance.now()),this.duration=t,this.playbackRate=i}}hQ=new WeakMap,hz=new WeakMap,hX=new WeakMap,hJ=new WeakMap,h0=new WeakMap,h1=new WeakMap,h2=new WeakMap,h3=new WeakMap,h5=new WeakMap,h4=new WeakMap;var lQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lz=(e,t,i)=>(lQ(e,t,"read from private field"),i?i.call(e):t.get(e)),lX=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lJ=(e,t,i,a)=>(lQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l0=(e,t,i)=>(lQ(e,t,"access private method"),i);let l1=e=>{let t=e.range,i=aE(+l5(e)),a=aE(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},l2=aI.createElement("template");l2.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${i9.MEDIA_PREVIEW_IMAGE}], [${i9.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${i9.MEDIA_PREVIEW_IMAGE}], [${i9.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${i9.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${i9.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${i9.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${i9.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${i9.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${i9.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${i9.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${i9.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${i9.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${i9.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${i9.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${i9.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let l3=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},l5=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class l4 extends sH{constructor(){super(),lX(this,mn),lX(this,mo),lX(this,mu),lX(this,mh),lX(this,mp),lX(this,mb),lX(this,mf),lX(this,my),lX(this,h9,void 0),lX(this,h8,void 0),lX(this,h7,void 0),lX(this,h6,void 0),lX(this,me,void 0),lX(this,mt,void 0),lX(this,mi,void 0),lX(this,ma,void 0),lX(this,mr,void 0),lX(this,md,e=>{this.dragging||(this.range.valueAsNumber=e,this.updateBar())}),this.container.appendChild(l2.content.cloneNode(!0)),lJ(this,h7,this.shadowRoot.querySelectorAll('[part~="box"]')),lJ(this,me,this.shadowRoot.querySelector('[part~="preview-box"]')),lJ(this,mt,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);lJ(this,mi,parseInt(e.getPropertyValue("--media-box-padding-left"))),lJ(this,ma,parseInt(e.getPropertyValue("--media-box-padding-right"))),lJ(this,h8,new lZ(this.range,lz(this,md),60))}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_PAUSED,i9.MEDIA_DURATION,i9.MEDIA_SEEKABLE,i9.MEDIA_CURRENT_TIME,i9.MEDIA_PREVIEW_IMAGE,i9.MEDIA_PREVIEW_TIME,i9.MEDIA_PREVIEW_CHAPTER,i9.MEDIA_BUFFERED,i9.MEDIA_PLAYBACK_RATE,i9.MEDIA_LOADING,i9.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",an.SEEK()),l0(this,mn,ms).call(this),lJ(this,h9,this.getRootNode()),null==(e=lz(this,h9))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),l0(this,mn,ms).call(this),null==(e=lz(this,h9))||e.removeEventListener("transitionstart",this),lJ(this,h9,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===i9.MEDIA_CURRENT_TIME||e===i9.MEDIA_PAUSED||e===i9.MEDIA_ENDED||e===i9.MEDIA_LOADING||e===i9.MEDIA_DURATION||e===i9.MEDIA_SEEKABLE?(lz(this,h8).update({start:l3(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),l0(this,mn,ms).call(this),l1(this)):e===i9.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===i9.MEDIA_DURATION||e===i9.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=lz(this,mr),this.updateBar()))}get mediaChaptersCues(){return lz(this,mr)}set mediaChaptersCues(e){var t;lJ(this,mr,e),this.updateSegments(null==(t=lz(this,mr))?void 0:t.map(e=>({start:l3(this,e.startTime),end:l3(this,e.endTime)})))}get mediaPaused(){return aY(this,i9.MEDIA_PAUSED)}set mediaPaused(e){aG(this,i9.MEDIA_PAUSED,e)}get mediaLoading(){return aY(this,i9.MEDIA_LOADING)}set mediaLoading(e){aG(this,i9.MEDIA_LOADING,e)}get mediaDuration(){return aK(this,i9.MEDIA_DURATION)}set mediaDuration(e){aj(this,i9.MEDIA_DURATION,e)}get mediaCurrentTime(){return aK(this,i9.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aj(this,i9.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return aK(this,i9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i9.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(i9.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(i9.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(i9.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(i9.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(i9.MEDIA_SEEKABLE);return}this.setAttribute(i9.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return aZ(this,i9.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){aQ(this,i9.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return aK(this,i9.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aj(this,i9.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return aY(this,i9.MEDIA_ENDED)}set mediaEnded(e){aG(this,i9.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=l3(this,r)}let{style:a}=aF(this.shadowRoot,"#highlight");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=aF(this.shadowRoot,"#current-rail"),t=aF(this.shadowRoot,'[part~="current-box"]'),i=l0(this,mu,mc).call(this,lz(this,mt)),a=l0(this,mh,mm).call(this,i,this.range.valueAsNumber),r=l0(this,mp,mv).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":l0(this,my,m_).call(this);break;case"pointermove":l0(this,mb,mE).call(this,e);break;case"pointerup":case"pointerleave":l0(this,mf,mg).call(this,null);break;case"transitionstart":aB(e.target,this)&&setTimeout(()=>l0(this,mn,ms).call(this),0)}}}h9=new WeakMap,h8=new WeakMap,h7=new WeakMap,h6=new WeakMap,me=new WeakMap,mt=new WeakMap,mi=new WeakMap,ma=new WeakMap,mr=new WeakMap,mn=new WeakSet,ms=function(){l0(this,mo,ml).call(this)?lz(this,h8).start():lz(this,h8).stop()},mo=new WeakSet,ml=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&function(e,t=3){if(e.checkVisibility)return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if("0"===e.opacity||"hidden"===e.visibility||"none"===e.display)return!1;i=i.parentElement,t--}return!0}(this)},md=new WeakMap,mu=new WeakSet,mc=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?aW(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},mh=new WeakSet,mm=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},mp=new WeakSet,mv=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+lz(this,mi)){let t=e.range.left-e.bounds.left-lz(this,mi);return`${n-i/2+t}px`}if(n>r-lz(this,ma)){let t=e.bounds.right-e.range.right-lz(this,ma);return`${n+i/2-t-e.range.width}px`}return 0},mb=new WeakSet,mE=function(e){let t=[...lz(this,h7)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){l0(this,mf,mg).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=aF(this.shadowRoot,"#preview-rail"),r=aF(this.shadowRoot,'[part~="preview-box"]'),n=l0(this,mu,mc).call(this,lz(this,me)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=l0(this,mh,mm).call(this,n,s),l=l0(this,mp,mv).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(lz(this,h6))-Math.round(s*i))&&s>.01&&s<.99||(lJ(this,h6,s*i),l0(this,mf,mg).call(this,lz(this,h6)))},mf=new WeakSet,mg=function(e){this.dispatchEvent(new aS.CustomEvent(i2.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},my=new WeakSet,m_=function(){lz(this,h8).stop();let e=l5(this);this.dispatchEvent(new aS.CustomEvent(i2.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},aS.customElements.get("media-time-range")||aS.customElements.define("media-time-range",l4);let l9=e=>e.mediaMuted?0:e.mediaVolume,l8=({value:e})=>`${Math.round(100*e)}%`;class l7 extends sH{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_VOLUME,i9.MEDIA_MUTED,i9.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new aS.CustomEvent(i2.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",an.VOLUME())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===i9.MEDIA_VOLUME||e===i9.MEDIA_MUTED)&&(this.range.valueAsNumber=l9(this),this.range.setAttribute("aria-valuetext",l8(this.range)),this.updateBar())}get mediaVolume(){return aK(this,i9.MEDIA_VOLUME,1)}set mediaVolume(e){aj(this,i9.MEDIA_VOLUME,e)}get mediaMuted(){return aY(this,i9.MEDIA_MUTED)}set mediaMuted(e){aG(this,i9.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return aZ(this,i9.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){aQ(this,i9.MEDIA_VOLUME_UNAVAILABLE,e)}}aS.customElements.get("media-volume-range")||aS.customElements.define("media-volume-range",l7);var l6=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},de=(e,t,i)=>(l6(e,t,"read from private field"),i?i.call(e):t.get(e)),dt=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},di=(e,t,i,a)=>(l6(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),da=(e,t,i)=>(l6(e,t,"access private method"),i);let dr=`
<svg aria-hidden="true" viewBox="0 1 24 24" part="select-indicator indicator">
  <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
</svg>`;function dn(e,t,i){let a=aI.createElement("media-chrome-option");a.part.add("option"),a.value=t,a.selected=i;let r=aI.createElement("span");return r.textContent=e,a.append(r),a}function ds(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);return((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)?((i=i.cloneNode(!0)).removeAttribute("slot"),i):e.shadowRoot.querySelector(`[name="${t}"] > svg`).cloneNode(!0)}let dl=aI.createElement("template");dl.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    border-radius: var(--media-listbox-border-radius);
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }

  ::slotted([slot="header"]) {
    padding: .4em 1.4em;
    border-bottom: 1px solid rgb(255 255 255 / .25);
  }

  #container {
    gap: var(--media-listbox-gap);
    display: flex;
    flex-direction: var(--media-listbox-flex-direction, column);
    overflow: hidden auto;
    padding-block: .5em;
  }

  media-chrome-option {
    padding-inline: .7em 1.4em;
  }

  media-chrome-option > span {
    margin-inline: .5ch;
  }

  [part~="indicator"] {
    fill: var(--media-option-indicator-fill, var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
    height: var(--media-option-indicator-height, 1.25em);
    vertical-align: var(--media-option-indicator-vertical-align, text-top);
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display);
    visibility: hidden;
  }

  [aria-selected="true"] > [part~="select-indicator"] {
    visibility: visible;
  }
</style>
<style id="layout-row" media="width:0">

  ::slotted([slot="header"]) {
    padding: .4em .5em;
  }

  #container {
    gap: var(--media-listbox-gap, .25em);
    flex-direction: var(--media-listbox-flex-direction, row);
    padding-inline: .5em;
  }

  media-chrome-option {
    padding: .3em .24em;
  }

  media-chrome-option[aria-selected="true"] {
    background: var(--media-option-selected-background, rgb(255 255 255 / .2));
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display, none);
  }
</style>
<slot name="header"></slot>
<slot id="container"></slot>
<slot name="select-indicator" hidden>${dr}</slot>
`;class dd extends aS.HTMLElement{constructor(e={}){super(),dt(this,mI),dt(this,mD),dt(this,mM),dt(this,mO),dt(this,mU),dt(this,mW),dt(this,mA,void 0),dt(this,mT,""),dt(this,mk,null),dt(this,mw,!1),dt(this,mS,e=>{this.handleClick(e)}),dt(this,mR,e=>{let{key:t}=e;if("Escape"===t){this.removeEventListener("keyup",de(this,mR));return}if("Meta"===t){di(this,mw,!1);return}da(this,mI,mC).call(this,e)}),dt(this,mL,e=>{let{key:t,altKey:i}=e;if(i){this.removeEventListener("keyup",de(this,mR));return}if("Meta"===t){di(this,mw,!0);return}if(this.keysUsed.includes(t)&&e.preventDefault(),de(this,mw)&&this.keysUsed.includes(t)){da(this,mI,mC).call(this,e);return}this.addEventListener("keyup",de(this,mR),{once:!0})}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=dl.content.cloneNode(!0),e.slotTemplate&&this.nativeEl.append(e.slotTemplate.content.cloneNode(!0)),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.container.addEventListener("slotchange",e=>{for(let t of e.target.assignedNodes({flatten:!0}))3===t.nodeType&&""===t.textContent.trim()&&t.remove()})}static get observedAttributes(){return["disabled","style",i3.MEDIA_CONTROLLER]}static formatOptionText(e){return e}formatOptionText(e,t){return this.constructor.formatOptionText(e,t)}get options(){var e;let t=this.querySelectorAll("media-chrome-option");return t.length||(t=null==(e=this.container)?void 0:e.querySelectorAll("media-chrome-option")),Array.from(t)}get selectedOptions(){return this.options.filter(e=>e.selected)}get value(){var e,t;return null!=(t=null==(e=this.selectedOptions[0])?void 0:e.value)?t:""}set value(e){let t=this.options.find(t=>t.value===e);t&&da(this,mO,mP).call(this,t)}focus(){var e;null==(e=this.selectedOptions[0])||e.focus()}enable(){this.addEventListener("click",de(this,mS)),this.addEventListener("keydown",de(this,mL))}disable(){this.removeEventListener("click",de(this,mS)),this.removeEventListener("keyup",de(this,mR))}attributeChangedCallback(e,t,i){var a,r,n,s,o;"style"===e&&i!==t?da(this,mD,mx).call(this):e===i3.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=de(this,mA))?void 0:a.unassociateElement)||r.call(a,this),di(this,mA,null)),i&&this.isConnected&&(di(this,mA,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=de(this,mA))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;da(this,mD,mx).call(this),this.hasAttribute("disabled")||this.enable(),this.hasAttribute("role")||this.setAttribute("role","listbox");let a=this.getAttribute(i3.MEDIA_CONTROLLER);a&&(di(this,mA,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=de(this,mA))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=de(this,mA))?void 0:e.unassociateElement)||t.call(e,this),di(this,mA,null)}get keysUsed(){return["Enter"," ","ArrowDown","ArrowUp","Home","End"]}handleSelection(e,t){let i=da(this,mM,mN).call(this,e);i&&da(this,mO,mP).call(this,i,t)}handleMovement(e){let t;let{key:i}=e,a=this.options,r=da(this,mM,mN).call(this,e);switch(r||(r=a.filter(e=>"0"===e.getAttribute("tabindex"))[0]),i){case"ArrowDown":(null==(t=r.nextElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.nextElementSibling);break;case"ArrowUp":(null==(t=r.previousElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.previousElementSibling);break;case"Home":t=a[0];break;case"End":t=a[a.length-1];break;default:t=da(this,mU,mB).call(this,i)}t&&(a.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),t.focus())}handleClick(e){let t=da(this,mM,mN).call(this,e);!t||t.hasAttribute("disabled")||(this.options.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")))}}mA=new WeakMap,mT=new WeakMap,mk=new WeakMap,mw=new WeakMap,mS=new WeakMap,mI=new WeakSet,mC=function(e){let{key:t}=e;"Enter"===t||" "===t?this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")):this.handleMovement(e)},mR=new WeakMap,mL=new WeakMap,mD=new WeakSet,mx=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=(null==(e=getComputedStyle(this).getPropertyValue("--media-listbox-layout"))?void 0:e.trim())==="row";t.setAttribute("media",i?"":"width:0")},mM=new WeakSet,mN=function(e){let t=e.composedPath(),i=t.findIndex(e=>"MEDIA-CHROME-OPTION"===e.nodeName);return t[i]},mO=new WeakSet,mP=function(e,t){let i=[...this.selectedOptions];this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")||this.options.forEach(e=>e.selected=!1),t?e.selected=!e.selected:e.selected=!0,this.selectedOptions.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},mU=new WeakSet,mB=function(e){da(this,mW,mH).call(this);let t=this.options,i=t.findIndex(e=>"0"===e.getAttribute("tabindex"));di(this,mT,de(this,mT)+e);let a=de(this,mT).split("").every(t=>t===e),r=t.slice(i+(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(de(this,mT))),n=t.slice(0,i-(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(de(this,mT))),s=[],o=[];return a&&(s=t.slice(i+(a?1:0)).filter(t=>t.textContent.startsWith(e)),o=t.slice(0,i-(a?1:0)).filter(t=>t.textContent.startsWith(e))),[...r,...n,...s,...o][0]},mW=new WeakSet,mH=function(){clearTimeout(de(this,mk)),di(this,mk,null),di(this,mk,setTimeout(()=>{di(this,mT,""),di(this,mk,null)},500))},aS.customElements.get("media-chrome-listbox")||aS.customElements.define("media-chrome-listbox",dd);var du=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dc=(e,t,i)=>(du(e,t,"read from private field"),i?i.call(e):t.get(e)),dh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dm=(e,t,i,a)=>(du(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dp=(e,t,i)=>(du(e,t,"access private method"),i);let dv=aI.createElement("template");dv.innerHTML=`
<style>
  :host {
    cursor: pointer;
    display: block;
    line-height: revert;
    white-space: nowrap;
    white-space-collapse: collapse;
    text-wrap: nowrap;
    padding: .4em .5em;
    transition: var(--media-option-transition);
    outline: var(--media-option-outline, 0);
    outline-offset: var(--media-option-outline-offset, -1px);
  }

  :host(:focus-visible) {
    box-shadow: var(--media-option-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
    outline: var(--media-option-hover-outline, 0);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host(:hover) {
    cursor: pointer;
    background: var(--media-option-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-option-hover-outline);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host([aria-selected="true"]) {
    background: var(--media-option-selected-background);
  }

  :host([disabled]) {
    pointer-events: none;
    color: rgba(255, 255, 255, .3);
  }
</style>
<slot></slot>
`;let db={VALUE:"value",SELECTED:"selected",DISABLED:"disabled"};class dE extends aS.HTMLElement{constructor(){super(),dh(this,mF),dh(this,mq,!1),dh(this,mV,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(dv.content.cloneNode(!0)))}static get observedAttributes(){return[db.DISABLED,db.SELECTED,db.VALUE]}get value(){var e;return null!=(e=this.getAttribute(db.VALUE))?e:this.text}set value(e){this.setAttribute(db.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get selected(){return"true"===this.getAttribute("aria-selected")}set selected(e){dm(this,mq,!0),this.setAttribute("aria-selected",e?"true":"false"),e?this.part.add("option-selected"):this.part.remove("option-selected")}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this.hasAttribute("aria-selected")||this.setAttribute("aria-selected","false")}disable(){this.removeAttribute("tabindex")}attributeChangedCallback(e,t,i){e!==db.SELECTED||dc(this,mq)?e===db.DISABLED&&i!==t&&(null==i?this.enable():this.disable()):this.setAttribute("aria-selected",null!=i?"true":"false")}connectedCallback(){this.hasAttribute(db.DISABLED)||this.enable(),this.setAttribute("role","option"),dm(this,mV,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.options)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),dp(this,mF,m$).call(this)}disconnectedCallback(){this.disable(),dp(this,mF,m$).call(this),dm(this,mV,null)}handleClick(){}}mq=new WeakMap,mV=new WeakMap,mF=new WeakSet,m$=function(){var e;let t=null==(e=dc(this,mV))?void 0:e.options;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-selected")).pop();i||(i=t[0]),"true"!==dc(this,mV).getAttribute("aria-multiselectable")&&t.forEach(e=>{e.setAttribute("tabindex","-1"),e.setAttribute("aria-selected","false")}),null==i||i.setAttribute("tabindex","0"),null==i||i.setAttribute("aria-selected","true")},aS.customElements.get("media-chrome-option")||aS.customElements.define("media-chrome-option",dE);var df=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dg=(e,t,i)=>(df(e,t,"read from private field"),i?i.call(e):t.get(e)),dy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d_=(e,t,i,a)=>(df(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dA=(e,t,i)=>(df(e,t,"access private method"),i);let dT=aI.createElement("template");dT.innerHTML=`
  <style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name=listbox]::slotted(*),
  [part=listbox] {
    position: absolute;
    bottom: 100%;
    max-height: 300px;
    transition: var(--media-selectmenu-transition-in,
      visibility 0s, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-in, translateY(0) scale(1));
    visibility: visible;
    opacity: 1;
  }

  [name=listbox][hidden]::slotted(*),
  [hidden] [part=listbox] {
    transition: var(--media-selectmenu-transition-out,
      visibility .15s ease-out, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-out, translateY(2px) scale(.99));
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  slot[name=listbox][hidden] {
    display: block;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;class dk extends aS.HTMLElement{constructor(){var e;super(),dy(this,m1),dy(this,m3),dy(this,m4),dy(this,mK,void 0),dy(this,mj,void 0),dy(this,mY,void 0),dy(this,mG,void 0),dy(this,mZ,void 0),dy(this,mQ,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",dg(this,mQ));return}e.composedPath().includes(dg(this,mj))&&("Enter"===t||" "===t)?dA(this,m1,m2).call(this):"Escape"===t&&dA(this,m4,m9).call(this)}),dy(this,mz,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",dg(this,mQ));return}e.preventDefault(),this.addEventListener("keyup",dg(this,mQ),{once:!0})}),dy(this,mX,e=>{e.composedPath().includes(this)||dA(this,m4,m9).call(this)}),dy(this,mJ,e=>{e.composedPath().includes(dg(this,mj))&&dA(this,m1,m2).call(this)}),dy(this,m0,()=>{dA(this,m4,m9).call(this)}),dy(this,m8,()=>{if(0===dg(this,mG).offsetWidth)return;let e=dg(this,mG).offsetWidth,t=dg(this,mj).getBoundingClientRect();if(this.hasAttribute("mediacontroller")||dg(this,mj).hasAttribute("mediacontroller")||dg(this,mG).hasAttribute("mediacontroller")){dg(this,mG).style.zIndex="1",dg(this,mG).style.bottom="unset",dg(this,mG).style.right=null,dg(this,mG).style.left="0",dg(this,mG).style.top=`${t.height}px`;return}let i=dw(this).getBoundingClientRect(),a=t.x+e,r=Math.max(t.right-a,t.right-i.right);dg(this,mG).style.left=null,dg(this,mG).style.right=`${r}px`,dg(this,mG).style.maxHeight=`${i.height-t.height}px`}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(dT.content.cloneNode(!0))),null==(e=this.init)||e.call(this),d_(this,mj,this.shadowRoot.querySelector("[part=button]")),d_(this,mG,this.shadowRoot.querySelector("[part=listbox]")),d_(this,mY,this.shadowRoot.querySelector("slot[name=button]")),dg(this,mY).addEventListener("slotchange",()=>{let e=dg(this,mY).assignedElements()[0];e&&(d_(this,mj,e),dg(this,mj).preventClick=!0,this.hasAttribute("disabled")||dg(this,mj).hasAttribute("disabled")?this.disable():(this.enable(),dg(this,mj).setAttribute("aria-haspopup","listbox")))}),d_(this,mZ,this.shadowRoot.querySelector("slot[name=listbox]")),dg(this,mZ).addEventListener("slotchange",()=>{d_(this,mG,dg(this,mZ).assignedElements()[0]||dg(this,mG))})}static get observedAttributes(){return["disabled",i3.MEDIA_CONTROLLER]}enable(){dg(this,mj).toggleAttribute("disabled",!1),this.addEventListener("change",dg(this,m0)),this.addEventListener("keydown",dg(this,mz)),this.addEventListener("click",dg(this,mJ)),aI.addEventListener("click",dg(this,mX))}disable(){dg(this,mj).toggleAttribute("disabled",!0),this.removeEventListener("change",dg(this,m0)),this.removeEventListener("keydown",dg(this,mz)),this.removeEventListener("keyup",dg(this,mQ)),this.removeEventListener("click",dg(this,mJ)),aI.removeEventListener("click",dg(this,mX))}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===i3.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=dg(this,mK))?void 0:a.unassociateElement)||r.call(a,this),d_(this,mK,null),dg(this,mG).removeAttribute(i3.MEDIA_CONTROLLER)),i&&this.isConnected&&(d_(this,mK,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=dg(this,mK))?void 0:s.associateElement)||o.call(s,this),dg(this,mG).setAttribute(i3.MEDIA_CONTROLLER,i))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let{style:a}=aF(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(i3.MEDIA_CONTROLLER);r&&(d_(this,mK,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=dg(this,mK))?void 0:t.associateElement)||i.call(t,this),dg(this,mG).setAttribute(i3.MEDIA_CONTROLLER,r)),this.hasAttribute("disabled")||this.enable(),dg(this,mZ).hidden||aD(dw(this),dg(this,m8))}disconnectedCallback(){var e,t;ax(dw(this),dg(this,m8)),this.disable(),null==(t=null==(e=dg(this,mK))?void 0:e.unassociateElement)||t.call(e,this),d_(this,mK,null),dg(this,mG).removeAttribute(i3.MEDIA_CONTROLLER)}get keysUsed(){return["Enter","Escape"," ","ArrowUp","ArrowDown","f","c","k","m"]}}function dw(e){var t;return null!=(t=e.getAttribute("bounds")?aW(e,`#${e.getAttribute("bounds")}`):function(e){var t;let i=e.getAttribute(i3.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):aW(e,"media-controller")}(e)||e.parentElement)?t:e}mK=new WeakMap,mj=new WeakMap,mY=new WeakMap,mG=new WeakMap,mZ=new WeakMap,mQ=new WeakMap,mz=new WeakMap,mX=new WeakMap,mJ=new WeakMap,m0=new WeakMap,m1=new WeakSet,m2=function(){dg(this,mZ).hidden?dA(this,m3,m5).call(this):dA(this,m4,m9).call(this)},m3=new WeakSet,m5=function(){dg(this,mZ).hidden&&(dg(this,mZ).hidden=!1,dg(this,mj).setAttribute("aria-expanded","true"),dg(this,m8).call(this),dg(this,mG).focus(),aD(dw(this),dg(this,m8)))},m4=new WeakSet,m9=function(){if(dg(this,mZ).hidden)return;ax(dw(this),dg(this,m8));let e=aH();dg(this,mZ).hidden=!0,dg(this,mj).setAttribute("aria-expanded","false"),aB(dg(this,mG),e)&&dg(this,mj).focus()},m8=new WeakMap,aS.customElements.get("media-chrome-selectmenu")||aS.customElements.define("media-chrome-selectmenu",dk);var dS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dI=(e,t,i)=>(dS(e,t,"read from private field"),i?i.call(e):t.get(e)),dC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dR=(e,t,i,a)=>(dS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dL=(e,t,i)=>(dS(e,t,"access private method"),i);let dD=`
<svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dx=aI.createElement("template");dx.innerHTML=`
  <slot name="captions-indicator" hidden>${dD}</slot>
`;class dM extends dd{constructor(){super({slotTemplate:dx}),dC(this,m6),dC(this,pt),dC(this,m7,void 0)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",i9.MEDIA_SUBTITLES_LIST,i9.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_SUBTITLES_LIST&&t!==i?dL(this,m6,pe).call(this):e===i9.MEDIA_SUBTITLES_SHOWING&&t!==i?this.value=i:"aria-multiselectable"===e&&(this.removeAttribute("aria-multiselectable"),console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTracks API."))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dL(this,pt,pi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dL(this,pt,pi))}get mediaSubtitlesList(){return dN(this,i9.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dO(this,i9.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dN(this,i9.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dO(this,i9.MEDIA_SUBTITLES_SHOWING,e)}}m7=new WeakMap,m6=new WeakSet,pe=function(){var e;if(dI(this,m7)===JSON.stringify(this.mediaSubtitlesList))return;dR(this,m7,JSON.stringify(this.mediaSubtitlesList));let t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.value,a=dn(this.formatOptionText("Off"),"off",i);for(let i of(a.prepend(ds(this,"select-indicator")),t.append(a),this.mediaSubtitlesList)){let a=dn(this.formatOptionText(i.label,i),rp(i),this.value==rp(i));a.prepend(ds(this,"select-indicator")),"captions"===(null!=(e=i.kind)?e:"subs")&&a.append(ds(this,"captions-indicator")),t.append(a)}},pt=new WeakSet,pi=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(i9.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aS.CustomEvent(i2.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aS.CustomEvent(i2.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};let dN=(e,t)=>{let i=e.getAttribute(t);return i?rh(i):[]},dO=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rv(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aS.customElements.get("media-captions-listbox")||aS.customElements.define("media-captions-listbox",dM);class dP extends dk{init(){let e=aI.createElement("media-captions-button");e.part.add("button"),e.preventClick=!0;let t=aI.createElement("media-captions-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}aS.customElements.get("media-captions-selectmenu")||aS.customElements.define("media-captions-selectmenu",dP);var dU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dB=(e,t,i)=>(dU(e,t,"read from private field"),i?i.call(e):t.get(e)),dW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dH=(e,t,i)=>(dU(e,t,"access private method"),i);let dq={RATES:"rates"};class dV extends dd{constructor(){super(),dW(this,pr),dW(this,ps),dW(this,pa,new rd(this,dq.RATES,{defaultValue:oL})),dH(this,pr,pn).call(this)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",i9.MEDIA_PLAYBACK_RATE,dq.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===dq.RATES&&t!=i&&(dB(this,pa).value=i,dH(this,pr,pn).call(this))}get rates(){return dB(this,pa)}set rates(e){e?Array.isArray(e)&&(dB(this,pa).value=e.join(" ")):dB(this,pa).value="",dH(this,pr,pn).call(this)}get mediaPlaybackRate(){return aK(this,i9.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aj(this,i9.MEDIA_PLAYBACK_RATE,e)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dH(this,ps,po))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dH(this,ps,po))}}pa=new WeakMap,pr=new WeakSet,pn=function(){let e=this.shadowRoot.querySelector("#container");for(let t of(e.textContent="",this.rates)){let i=dn(this.formatOptionText(`${t}x`,t),t,this.mediaPlaybackRate==t);i.prepend(ds(this,"select-indicator")),e.append(i)}},ps=new WeakSet,po=function(){if(!this.value)return;let e=new aS.CustomEvent(i2.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-playback-rate-listbox")||aS.customElements.define("media-playback-rate-listbox",dV);class dF extends dk{init(){let e=aI.createElement("media-playback-rate-button");e.part.add("button"),e.preventClick=!0;let t=aI.createElement("media-playback-rate-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}aS.customElements.get("media-playback-rate-selectmenu")||aS.customElements.define("media-playback-rate-selectmenu",dF);var d$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dK=(e,t,i)=>(d$(e,t,"read from private field"),i?i.call(e):t.get(e)),dj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dY=(e,t,i,a)=>(d$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dG=(e,t,i)=>(d$(e,t,"access private method"),i);class dZ extends dd{constructor(){super(...arguments),dj(this,pu),dj(this,ph),dj(this,pl,[]),dj(this,pd,void 0)}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_RENDITION_LIST,i9.MEDIA_RENDITION_SELECTED]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_RENDITION_SELECTED&&t!==i?this.value=null!=i?i:"auto":e===i9.MEDIA_RENDITION_LIST&&t!==i&&(dY(this,pl,ao(i)),dG(this,pu,pc).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dG(this,ph,pm))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dG(this,ph,pm))}get mediaRenditionList(){return dK(this,pl)}set mediaRenditionList(e){dY(this,pl,e),dG(this,pu,pc).call(this)}get mediaRenditionSelected(){return aZ(this,i9.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aQ(this,i9.MEDIA_RENDITION_SELECTED,e)}}pl=new WeakMap,pd=new WeakMap,pu=new WeakSet,pc=function(){if(dK(this,pd)===JSON.stringify(this.mediaRenditionList))return;dY(this,pd,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height),t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.mediaRenditionSelected;for(let a of e){let e=dn(this.formatOptionText(`${Math.min(a.width,a.height)}p`,a),`${a.id}`,a.selected&&!i);e.prepend(ds(this,"select-indicator")),t.append(e)}let a=dn(this.formatOptionText("Auto"),"auto",i);a.prepend(ds(this,"select-indicator")),t.append(a)},ph=new WeakSet,pm=function(){if(null==this.value)return;let e=new aS.CustomEvent(i2.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-rendition-listbox")||aS.customElements.define("media-rendition-listbox",dZ);let dQ=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,dz=aI.createElement("template");dz.innerHTML=`
  <slot name="icon">${dQ}</slot>
`;class dX extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_RENDITION_SELECTED,i9.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:dz})}get mediaRenditionSelected(){return aZ(this,i9.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aQ(this,i9.MEDIA_RENDITION_SELECTED,e)}}aS.customElements.get("media-rendition-button")||aS.customElements.define("media-rendition-button",dX);class dJ extends dk{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_RENDITION_SELECTED,i9.MEDIA_RENDITION_UNAVAILABLE]}init(){let e=aI.createElement("media-rendition-button");e.part.add("button"),e.preventClick=!0;let t=aI.createElement("media-rendition-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}aS.customElements.get("media-rendition-selectmenu")||aS.customElements.define("media-rendition-selectmenu",dJ);var d0=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d1=(e,t,i)=>(d0(e,t,"read from private field"),i?i.call(e):t.get(e)),d2=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d3=(e,t,i,a)=>(d0(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d5=(e,t,i)=>(d0(e,t,"access private method"),i);class d4 extends dd{constructor(){super(...arguments),d2(this,pb),d2(this,pf),d2(this,pp,[]),d2(this,pv,void 0)}static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_AUDIO_TRACK_LIST,i9.MEDIA_AUDIO_TRACK_ENABLED]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i9.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===i9.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(d3(this,pp,au(i)),d5(this,pb,pE).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",d5(this,pf,pg))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",d5(this,pf,pg))}get mediaAudioTrackList(){return d1(this,pp)}set mediaAudioTrackList(e){d3(this,pp,e),d5(this,pb,pE).call(this)}get mediaAudioTrackEnabled(){return aZ(this,i9.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aQ(this,i9.MEDIA_AUDIO_TRACK_ENABLED,e)}}pp=new WeakMap,pv=new WeakMap,pb=new WeakSet,pE=function(){if(d1(this,pv)===JSON.stringify(this.mediaAudioTrackList))return;d3(this,pv,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList,t=this.shadowRoot.querySelector("#container");for(let i of(t.textContent="",e)){let e=dn(this.formatOptionText(i.label,i),`${i.id}`,i.enabled);e.prepend(ds(this,"select-indicator")),t.append(e)}},pf=new WeakSet,pg=function(){if(null==this.value)return;let e=new aS.CustomEvent(i2.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aS.customElements.get("media-audio-track-listbox")||aS.customElements.define("media-audio-track-listbox",d4);let d9=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,d8=aI.createElement("template");d8.innerHTML=`
  <slot name="icon">${d9}</slot>
`;class d7 extends nm{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_AUDIO_TRACK_ENABLED,i9.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:d8})}get mediaAudioTrackEnabled(){return aZ(this,i9.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aQ(this,i9.MEDIA_AUDIO_TRACK_ENABLED,e)}}aS.customElements.get("media-audio-track-button")||aS.customElements.define("media-audio-track-button",d7);class d6 extends dk{static get observedAttributes(){return[...super.observedAttributes,i9.MEDIA_AUDIO_TRACK_ENABLED,i9.MEDIA_AUDIO_TRACK_UNAVAILABLE]}init(){let e=aI.createElement("media-audio-track-button");e.part.add("button"),e.preventClick=!0;let t=aI.createElement("media-audio-track-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}aS.customElements.get("media-audio-track-selectmenu")||aS.customElements.define("media-audio-track-selectmenu",d6);var ue=Object.defineProperty,ut=Object.getPrototypeOf,ui=Reflect.get,ua=(e,t,i)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ur=(e,t,i)=>(ua(e,"symbol"!=typeof t?t+"":t,i),i),un=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},us=(e,t,i)=>(un(e,t,"read from private field"),i?i.call(e):t.get(e)),uo=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ul=(e,t,i,a)=>(un(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ud=(e,t,i)=>(un(e,t,"access private method"),i),uu=(e,t,i)=>ui(ut(e),i,t),uc=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends uc{}globalThis.DocumentFragment=e}var uh,um,up,uv,ub,uE,uf,ug,uy,u_,uA,uT,uk,uw,uS,uI,uC,uR,uL,uD,ux,uM,uN,uO,uP,uU,uB,uW,uH,uq,uV,uF,u$,uK,uj,uY,uG,uZ,uQ,uz,uX,uJ,u0,u1,u2,u3,u5,u4,u9,u8,u7,u6,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cb,cE,cf,cg,cy,c_,cA,cT,ck,cw,cS,cI,cC,cR,cL,cD,cx,cM,cN,cO,cP,cU,cB,cW,cH,cq,cV,cF,c$,cK,cj,cY,cG,cZ,cQ,cz,cX,cJ,c0,c1,c2,c3,c5,c4,c9,c8,c7,c6,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hE,hf,hg,hy,h_,hA,hT,hk,hw,hS,hI,hC,hR,hL,hD,hx,hM,hN,hO,hP,hU,hB,hW,hH,hq,hV,hF,h$,hK,hj,hY,hG,hZ,hQ,hz,hX,hJ,h0,h1,h2,h3,h5,h4,h9,h8,h7,h6,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mE,mf,mg,my,m_,mA,mT,mk,mw,mS,mI,mC,mR,mL,mD,mx,mM,mN,mO,mP,mU,mB,mW,mH,mq,mV,mF,m$,mK,mj,mY,mG,mZ,mQ,mz,mX,mJ,m0,m1,m2,m3,m5,m4,m9,m8,m7,m6,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu,pc,ph,pm,pp,pv,pb,pE,pf,pg,py,p_=class extends uc{},pA=class{constructor(e,t={}){uo(this,py,void 0),ul(this,py,null==t?void 0:t.detail)}get detail(){return us(this,py)}initCustomEvent(){}};py=new WeakMap;var pT={document:{createElement:function(e,t){return new p_}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(p_)},CustomEvent:pA,EventTarget:uc,HTMLElement:p_,HTMLVideoElement:class extends uc{}},pk="undefined"==typeof window||void 0===globalThis.customElements,pw=pk?pT:globalThis;pk?pT.document:globalThis.document;var pS=(()=>{try{return"0.20.1"}catch{}return"UNKNOWN"})(),pI=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"];function pC(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${pD(e)}></audio>
    </slot>
    <slot></slot>
  `}function pR(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${pD(e)}></video>
    </slot>
    <slot></slot>
  `}var pL=(e,{tag:t,is:i})=>{var a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f,g;let y=null==(r=null==(a=globalThis.document)?void 0:a.createElement)?void 0:r.call(a,t,{is:i}),_=y?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i))t.push(...Object.getOwnPropertyNames(i));return t}(y):[];return n=class extends e{constructor(){super(),uo(this,h),uo(this,p),uo(this,b),uo(this,f),uo(this,d,void 0),uo(this,u,void 0),uo(this,c,new Map)}static get observedAttributes(){var e,t,i;return ud(e=n,o,l).call(e),[...null!=(i=null==(t=null==y?void 0:y.constructor)?void 0:t.observedAttributes)?i:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var e,i,a;return ud(this,h,m).call(this),null!=(a=null!=(i=null!=(e=us(this,u))?e:this.shadowRoot.querySelector(t))?i:this.querySelector(":scope > [slot=media]"))?a:this.querySelector(t)}set nativeEl(e){ul(this,u,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",!!e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}init(){var e,a;if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),_))ud(this,b,E).call(this,e);for(let t of(this.shadowRoot.addEventListener("slotchange",this),ud(this,p,v).call(this),this.constructor.Events))null==(a=(e=this.shadowRoot).addEventListener)||a.call(e,t,this,!0)}handleEvent(e){if("slotchange"===e.type){ud(this,p,v).call(this);return}e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}attributeChangedCallback(e,t,i){ud(this,h,m).call(this),ud(this,f,g).call(this,e,t,i)}connectedCallback(){ud(this,h,m).call(this)}},s=new WeakMap,o=new WeakSet,l=function(){if(us(this,s))return;ul(this,s,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),_))if(!(t in this.prototype)){if("function"==typeof y[t])this.prototype[t]=function(...e){return ud(this,h,m).call(this),this.call?this.call(t,...e):this.nativeEl[t].apply(this.nativeEl,e)};else{let i={get(){var i,a,r;ud(this,h,m).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){ud(this,h,m).call(this);let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl[t]=i}),Object.defineProperty(this.prototype,t,i)}}},d=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakSet,m=function(){us(this,d)||(ul(this,d,!0),this.init())},p=new WeakSet,v=function(){let e=new Map(us(this,c));this.shadowRoot.querySelector("slot:not([name])").assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName)).forEach(t=>{var i,a;e.delete(t);let r=us(this,c).get(t);r||(r=t.cloneNode(),us(this,c).set(t,r)),null==(a=(i=this.nativeEl).append)||a.call(i,r),"track"===r.localName&&r.default&&("chapters"===r.kind||"metadata"===r.kind)&&"disabled"===r.track.mode&&(r.track.mode="hidden")}),e.forEach(e=>e.remove())},b=new WeakSet,E=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},f=new WeakSet,g=function(e,t,i){var a,r,s,o,l,d;["id","class"].includes(e)||!n.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?null==(r=(a=this.nativeEl).removeAttribute)||r.call(a,e):(null==(o=(s=this.nativeEl).getAttribute)?void 0:o.call(s,e))!=i&&(null==(d=(l=this.nativeEl).setAttribute)||d.call(l,e,i)))},uo(n,o),ur(n,"getTemplateHTML",t.endsWith("audio")?pC:pR),ur(n,"shadowRootOptions",{mode:"open"}),ur(n,"Events",pI),uo(n,s,void 0),n};function pD(e){let t="";for(let i in e){let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}var px,pM,pN=pL(null!=(px=globalThis.HTMLElement)?px:class{},{tag:"video"});pL(null!=(pM=globalThis.HTMLElement)?pM:class{},{tag:"audio"});var pO=new WeakMap,pP=class extends Error{},pU=class extends Error{};function pB(){var e,t;return null==(t=null==(e=globalThis.cast)?void 0:e.framework)?void 0:t.CastContext.getInstance()}function pW(){var e;return null==(e=pB())?void 0:e.getCurrentSession()}function pH(){var e;return null==(e=pW())?void 0:e.getSessionObj().media[0]}function pq(e){return pB().setOptions({...pV(),...e})}function pV(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}var pF,p$=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),pK=new WeakSet;!function(e){var t,i,a;null!=(i=null==(t=globalThis.chrome)?void 0:t.cast)&&i.isAvailable?null!=(a=globalThis.cast)&&a.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}(()=>{var e,t,i,a;if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable)){console.debug("chrome.cast.isAvailable",null==(a=null==(i=globalThis.chrome)?void 0:i.cast)?void 0:a.isAvailable);return}pF||(pF=cast.framework,pB().addEventListener(pF.CastContextEventType.CAST_STATE_CHANGED,e=>{p$.forEach(t=>{var i,a;return null==(a=(i=pO.get(t)).onCastStateChanged)?void 0:a.call(i,e)})}),pB().addEventListener(pF.CastContextEventType.SESSION_STATE_CHANGED,e=>{p$.forEach(t=>{var i,a;return null==(a=(i=pO.get(t)).onSessionStateChanged)?void 0:a.call(i,e)})}),p$.forEach(e=>{var t,i;return null==(i=(t=pO.get(e)).init)?void 0:i.call(t)}))});var pj,pY,pG,pZ,pQ,pz,pX,pJ,p0,p1,p2,p3,p5,p4,p9,p8,p7,p6,ve,vt,vi,va,vr=0,vn=class extends EventTarget{constructor(e){super(),uo(this,p0),uo(this,p2),uo(this,p5),uo(this,p9),uo(this,p7),uo(this,ve),uo(this,vi),uo(this,pj,void 0),uo(this,pY,void 0),uo(this,pG,void 0),uo(this,pZ,void 0),uo(this,pQ,"disconnected"),uo(this,pz,!1),uo(this,pX,new Set),uo(this,pJ,new WeakMap),ul(this,pj,e),p$.add(this),pO.set(this,{init:()=>ud(this,p7,p6).call(this),onCastStateChanged:()=>ud(this,p5,p4).call(this),onSessionStateChanged:()=>ud(this,p9,p8).call(this),getCastPlayer:()=>us(this,p0,p1)}),ud(this,p7,p6).call(this)}get state(){return us(this,pQ)}async watchAvailability(e){if(us(this,pj).disableRemotePlayback)throw new pP("disableRemotePlayback attribute is present.");return us(this,pJ).set(e,++vr),us(this,pX).add(e),vr}async cancelWatchAvailability(e){if(us(this,pj).disableRemotePlayback)throw new pP("disableRemotePlayback attribute is present.");e?us(this,pX).delete(e):us(this,pX).clear()}async prompt(){var e,t,i,a;if(us(this,pj).disableRemotePlayback)throw new pP("disableRemotePlayback attribute is present.");if(!(null!=(t=null==(e=globalThis.chrome)?void 0:e.cast)&&t.isAvailable))throw new pU("The RemotePlayback API is disabled on this platform.");let r=pK.has(us(this,pj));pK.add(us(this,pj)),pq(us(this,pj).castOptions),Object.entries(us(this,pZ)).forEach(([e,t])=>{us(this,pG).controller.addEventListener(e,t)});try{await pB().requestSession()}catch(e){if("cancel"===e){r||pK.delete(us(this,pj));return}throw Error(e)}null==(a=null==(i=pO.get(us(this,pj)))?void 0:i.loadOnPrompt)||a.call(i)}};pj=new WeakMap,pY=new WeakMap,pG=new WeakMap,pZ=new WeakMap,pQ=new WeakMap,pz=new WeakMap,pX=new WeakMap,pJ=new WeakMap,p0=new WeakSet,p1=function(){if(pK.has(us(this,pj)))return us(this,pG)},p2=new WeakSet,p3=function(){pK.has(us(this,pj))&&(Object.entries(us(this,pZ)).forEach(([e,t])=>{us(this,pG).controller.removeEventListener(e,t)}),pK.delete(us(this,pj)),us(this,pj).muted=us(this,pG).isMuted,us(this,pj).currentTime=us(this,pG).savedPlayerState.currentTime,!1===us(this,pG).savedPlayerState.isPaused&&us(this,pj).play())},p5=new WeakSet,p4=function(){let e=pB().getCastState();if(pK.has(us(this,pj))&&"CONNECTING"===e&&(ul(this,pQ,"connecting"),this.dispatchEvent(new Event("connecting"))),!us(this,pz)&&null!=e&&e.includes("CONNECT"))for(let e of(ul(this,pz,!0),us(this,pX)))e(!0);else if(us(this,pz)&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(ul(this,pz,!1),us(this,pX)))e(!1)},p9=new WeakSet,p8=async function(){var e,t;let{SESSION_RESUMED:i}=pF.SessionState;if(pB().getSessionState()===i&&us(this,pj).castSrc===(null==(e=pH())?void 0:e.media.contentId)){pK.add(us(this,pj)),Object.entries(us(this,pZ)).forEach(([e,t])=>{us(this,pG).controller.addEventListener(e,t)});try{await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{pH().getStatus(t,e,i)}))}catch(e){console.error(e)}us(this,pZ)[pF.RemotePlayerEventType.IS_PAUSED_CHANGED](),us(this,pZ)[pF.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},p7=new WeakSet,p6=function(){!pF||us(this,pY)||(ul(this,pY,!0),pq(us(this,pj).castOptions),us(this,pj).textTracks.addEventListener("change",()=>ud(this,vi,va).call(this)),ud(this,p5,p4).call(this),ul(this,pG,new pF.RemotePlayer),new pF.RemotePlayerController(us(this,pG)),ul(this,pZ,{[pF.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(ul(this,pQ,"connected"),this.dispatchEvent(new Event("connect"))):(ud(this,p2,p3).call(this),ul(this,pQ,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[pF.RemotePlayerEventType.DURATION_CHANGED]:()=>{us(this,pj).dispatchEvent(new Event("durationchange"))},[pF.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{us(this,pj).dispatchEvent(new Event("volumechange"))},[pF.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{us(this,pj).dispatchEvent(new Event("volumechange"))},[pF.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var e;null!=(e=us(this,p0,p1))&&e.isMediaLoaded&&us(this,pj).dispatchEvent(new Event("timeupdate"))},[pF.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{us(this,pj).dispatchEvent(new Event("resize"))},[pF.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{us(this,pj).dispatchEvent(new Event(this.paused?"pause":"play"))},[pF.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=us(this,p0,p1))?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&us(this,pj).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=us(this,p0,p1))?void 0:t.playerState]))},[pF.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var e;null!=(e=us(this,p0,p1))&&e.isMediaLoaded&&(await Promise.resolve(),ud(this,ve,vt).call(this))}}))},ve=new WeakSet,vt=function(){ud(this,vi,va).call(this)},vi=new WeakSet,va=async function(){var e,t,i,a,r;let n;if(!us(this,p0,p1))return;let s=(null!=(t=null==(e=us(this,pG).mediaInfo)?void 0:e.tracks)?t:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),o=[...us(this,pj).textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),l=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=o.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),d=l.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),u=l.find(({mode:e})=>"showing"===e),c=null!=(r=null==(a=null==(i=pW())?void 0:i.getSessionObj().media[0])?void 0:a.activeTrackIds)?r:[],h=c;if(c.length&&(h=h.filter(e=>!d.includes(e))),null!=u&&u.trackId&&(h=[...h,u.trackId]),n=h=[...new Set(h)],!(c.length===n.length&&c.every(e=>n.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((t,i)=>{pH().editTracksInfo(e,t,i)})}catch(e){console.error(e)}};var vs=e=>{var t,i,a,r,n,s,o,l,d;return i=class extends e{constructor(){super(...arguments),uo(this,s),uo(this,l),uo(this,a,{paused:!1}),uo(this,r,pV()),uo(this,n,void 0)}get remote(){return us(this,n)?us(this,n):globalThis.chrome?(function(){var e;let t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(null!=(e=globalThis.chrome)&&e.cast||document.querySelector(`script[src="${t}"]`))return;let i=document.createElement("script");i.src=t,document.head.append(i)}(),pO.set(this,{loadOnPrompt:()=>ud(this,l,d).call(this)}),ul(this,n,new vn(this))):super.remote}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){us(this,r).receiverApplicationId=i;return}if(us(this,s,o))switch(e){case"cast-stream-type":case"cast-src":this.load()}}async load(){var e,t;if(!us(this,s,o))return super.load();let i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType),r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],l=0;r.length&&(i.tracks=r.map(e=>{let t=++l;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}];let d=new chrome.cast.media.LoadRequest(i);d.currentTime=null!=(e=super.currentTime)?e:0,d.autoplay=!us(this,a).paused,d.activeTrackIds=n,await (null==(t=pW())?void 0:t.loadMedia(d)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(us(this,s,o)){us(this,s,o).isPaused&&(null==(e=us(this,s,o).controller)||e.playOrPause());return}return super.play()}pause(){var e;if(us(this,s,o)){us(this,s,o).isPaused||null==(e=us(this,s,o).controller)||e.playOrPause();return}super.pause()}get castOptions(){return us(this,r)}get castReceiver(){var e;return null!=(e=this.getAttribute("cast-receiver"))?e:void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get readyState(){if(us(this,s,o))switch(us(this,s,o).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return us(this,s,o)?us(this,s,o).isPaused:super.paused}get muted(){var e;return us(this,s,o)?null==(e=us(this,s,o))?void 0:e.isMuted:super.muted}set muted(e){var t;if(us(this,s,o)){(e&&!us(this,s,o).isMuted||!e&&us(this,s,o).isMuted)&&(null==(t=us(this,s,o).controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return us(this,s,o)?null!=(t=null==(e=us(this,s,o))?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(us(this,s,o)){us(this,s,o).volumeLevel=+e,null==(t=us(this,s,o).controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t,i;return us(this,s,o)&&null!=(e=us(this,s,o))&&e.isMediaLoaded?null!=(i=null==(t=us(this,s,o))?void 0:t.duration)?i:NaN:super.duration}get currentTime(){var e,t,i;return us(this,s,o)&&null!=(e=us(this,s,o))&&e.isMediaLoaded?null!=(i=null==(t=us(this,s,o))?void 0:t.currentTime)?i:0:super.currentTime}set currentTime(e){var t;if(us(this,s,o)){us(this,s,o).currentTime=e,null==(t=us(this,s,o).controller)||t.seek();return}super.currentTime=e}},a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,o=function(){var e,t;return null==(t=null==(e=pO.get(this.remote))?void 0:e.getCastPlayer)?void 0:t.call(e)},l=new WeakSet,d=async function(){us(this,a).paused=uu(i.prototype,this,"paused"),uu(i.prototype,this,"pause").call(this),this.muted=uu(i.prototype,this,"muted");try{await this.load()}catch(e){console.error(e)}},ur(i,"observedAttributes",[...null!=(t=e.observedAttributes)?t:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),i},vo=class extends Event{constructor(e,t){super(e),ur(this,"track"),this.track=t.track}},vl=new WeakMap;function vd(e){var t,i;let a;return null!=(t=vl.get(e))?t:(i={},(a=vl.get(e))||vl.set(e,a={}),Object.assign(a,i))}function vu(e,t){let i=e.videoTracks;vd(t).media=e,vd(t).renditionSet||(vd(t).renditionSet=new Set);let a=vd(i).trackSet;a.add(t);let r=a.size-1;r in vE.prototype||Object.defineProperty(vE.prototype,r,{get(){return[...vd(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new vo("addtrack",{track:t}))})}function vc(e){var t;let i=null==(t=vd(e).media)?void 0:t.videoTracks;i&&(vd(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new vo("removetrack",{track:e}))}))}var vh,vm,vp,vv,vb,vE=class extends EventTarget{constructor(){super(),uo(this,vv),uo(this,vh,void 0),uo(this,vm,void 0),uo(this,vp,void 0),vd(this).trackSet=new Set}[Symbol.iterator](){return us(this,vv,vb).values()}get length(){return us(this,vv,vb).size}getTrackById(e){var t;return null!=(t=[...us(this,vv,vb)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...us(this,vv,vb)].findIndex(e=>e.selected)}get onaddtrack(){return us(this,vh)}set onaddtrack(e){us(this,vh)&&(this.removeEventListener("addtrack",us(this,vh)),ul(this,vh,void 0)),"function"==typeof e&&(ul(this,vh,e),this.addEventListener("addtrack",e))}get onremovetrack(){return us(this,vm)}set onremovetrack(e){us(this,vm)&&(this.removeEventListener("removetrack",us(this,vm)),ul(this,vm,void 0)),"function"==typeof e&&(ul(this,vm,e),this.addEventListener("removetrack",e))}get onchange(){return us(this,vp)}set onchange(e){us(this,vp)&&(this.removeEventListener("change",us(this,vp)),ul(this,vp,void 0)),"function"==typeof e&&(ul(this,vp,e),this.addEventListener("change",e))}};vh=new WeakMap,vm=new WeakMap,vp=new WeakMap,vv=new WeakSet,vb=function(){return vd(this).trackSet};var vf=class extends Event{constructor(e,t){super(e),ur(this,"rendition"),this.rendition=t.rendition}};function vg(e){return[...vd(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...vd(e).renditionSet])}var vy,v_,vA,vT=class extends EventTarget{constructor(){super(...arguments),uo(this,vy,void 0),uo(this,v_,void 0),uo(this,vA,void 0)}[Symbol.iterator](){return vg(this).values()}get length(){return vg(this).length}getRenditionById(e){var t;return null!=(t=vg(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return vg(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of vg(this).entries())i.selected=t===e}get onaddrendition(){return us(this,vy)}set onaddrendition(e){us(this,vy)&&(this.removeEventListener("addrendition",us(this,vy)),ul(this,vy,void 0)),"function"==typeof e&&(ul(this,vy,e),this.addEventListener("addrendition",e))}get onremoverendition(){return us(this,v_)}set onremoverendition(e){us(this,v_)&&(this.removeEventListener("removerendition",us(this,v_)),ul(this,v_,void 0)),"function"==typeof e&&(ul(this,v_,e),this.addEventListener("removerendition",e))}get onchange(){return us(this,vA)}set onchange(e){us(this,vA)&&(this.removeEventListener("change",us(this,vA)),ul(this,vA,void 0)),"function"==typeof e&&(ul(this,vA,e),this.addEventListener("change",e))}};vy=new WeakMap,v_=new WeakMap,vA=new WeakMap;var vk,vw=class{constructor(){ur(this,"src"),ur(this,"id"),ur(this,"width"),ur(this,"height"),ur(this,"bitrate"),ur(this,"frameRate"),ur(this,"codec"),uo(this,vk,!1)}get selected(){return us(this,vk)}set selected(e){var t;let i;us(this,vk)!==e&&(ul(this,vk,e),t=this,(i=vd(t).media.videoRenditions)&&!vd(i).changeRequested&&(vd(i).changeRequested=!0,queueMicrotask(()=>{delete vd(i).changeRequested,vd(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};vk=new WeakMap;var vS,vI=class{constructor(){ur(this,"id"),ur(this,"kind"),ur(this,"label",""),ur(this,"language",""),ur(this,"sourceBuffer"),uo(this,vS,!1)}addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new vw;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=vd(s).media.videoRenditions,vd(u).media=vd(s).media,vd(u).track=s,(l=vd(s).renditionSet).add(u),(d=l.size-1)in vT.prototype||Object.defineProperty(vT.prototype,d,{get(){return vg(this)[d]}}),queueMicrotask(()=>{s.selected&&o.dispatchEvent(new vf("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=vd(e).media.videoRenditions,i=vd(e).track,vd(i).renditionSet.delete(e),queueMicrotask(()=>{vd(e).track.selected&&t.dispatchEvent(new vf("removerendition",{rendition:e}))})}get selected(){return us(this,vS)}set selected(e){us(this,vS)!==e&&(ul(this,vS,e),!0===e&&function(e){var t;let i=null!=(t=vd(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(vd(i).changeRequested)return;vd(i).changeRequested=!0,queueMicrotask(()=>{delete vd(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function vC(e){return[...vd(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...vd(e).renditionSet])}vS=new WeakMap;var vR,vL,vD,vx=class extends EventTarget{constructor(){super(...arguments),uo(this,vR,void 0),uo(this,vL,void 0),uo(this,vD,void 0)}[Symbol.iterator](){return vC(this).values()}get length(){return vC(this).length}getRenditionById(e){var t;return null!=(t=vC(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return vC(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of vC(this).entries())i.selected=t===e}get onaddrendition(){return us(this,vR)}set onaddrendition(e){us(this,vR)&&(this.removeEventListener("addrendition",us(this,vR)),ul(this,vR,void 0)),"function"==typeof e&&(ul(this,vR,e),this.addEventListener("addrendition",e))}get onremoverendition(){return us(this,vL)}set onremoverendition(e){us(this,vL)&&(this.removeEventListener("removerendition",us(this,vL)),ul(this,vL,void 0)),"function"==typeof e&&(ul(this,vL,e),this.addEventListener("removerendition",e))}get onchange(){return us(this,vD)}set onchange(e){us(this,vD)&&(this.removeEventListener("change",us(this,vD)),ul(this,vD,void 0)),"function"==typeof e&&(ul(this,vD,e),this.addEventListener("change",e))}};vR=new WeakMap,vL=new WeakMap,vD=new WeakMap;var vM,vN=class{constructor(){ur(this,"src"),ur(this,"id"),ur(this,"bitrate"),ur(this,"codec"),uo(this,vM,!1)}get selected(){return us(this,vM)}set selected(e){var t;let i;us(this,vM)!==e&&(ul(this,vM,e),t=this,(i=vd(t).media.audioRenditions)&&!vd(i).changeRequested&&(vd(i).changeRequested=!0,queueMicrotask(()=>{delete vd(i).changeRequested,vd(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function vO(e,t){let i=e.audioTracks;vd(t).media=e,vd(t).renditionSet||(vd(t).renditionSet=new Set);let a=vd(i).trackSet;a.add(t);let r=a.size-1;r in vV.prototype||Object.defineProperty(vV.prototype,r,{get(){return[...vd(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new vo("addtrack",{track:t}))})}function vP(e){var t;let i=null==(t=vd(e).media)?void 0:t.audioTracks;i&&(vd(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new vo("removetrack",{track:e}))}))}vM=new WeakMap;var vU,vB,vW,vH,vq,vV=class extends EventTarget{constructor(){super(),uo(this,vH),uo(this,vU,void 0),uo(this,vB,void 0),uo(this,vW,void 0),vd(this).trackSet=new Set}[Symbol.iterator](){return us(this,vH,vq).values()}get length(){return us(this,vH,vq).size}getTrackById(e){var t;return null!=(t=[...us(this,vH,vq)].find(t=>t.id===e))?t:null}get onaddtrack(){return us(this,vU)}set onaddtrack(e){us(this,vU)&&(this.removeEventListener("addtrack",us(this,vU)),ul(this,vU,void 0)),"function"==typeof e&&(ul(this,vU,e),this.addEventListener("addtrack",e))}get onremovetrack(){return us(this,vB)}set onremovetrack(e){us(this,vB)&&(this.removeEventListener("removetrack",us(this,vB)),ul(this,vB,void 0)),"function"==typeof e&&(ul(this,vB,e),this.addEventListener("removetrack",e))}get onchange(){return us(this,vW)}set onchange(e){us(this,vW)&&(this.removeEventListener("change",us(this,vW)),ul(this,vW,void 0)),"function"==typeof e&&(ul(this,vW,e),this.addEventListener("change",e))}};vU=new WeakMap,vB=new WeakMap,vW=new WeakMap,vH=new WeakSet,vq=function(){return vd(this).trackSet};var vF,v$=class{constructor(){ur(this,"id"),ur(this,"kind"),ur(this,"label",""),ur(this,"language",""),ur(this,"sourceBuffer"),uo(this,vF,!1)}addRendition(e,t,i){var a;let r,n,s,o=new vN;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=vd(a).media.audioRenditions,vd(o).media=vd(a).media,vd(o).track=a,(n=vd(a).renditionSet).add(o),(s=n.size-1)in vx.prototype||Object.defineProperty(vx.prototype,s,{get(){return vC(this)[s]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new vf("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=vd(e).media.audioRenditions,i=vd(e).track,vd(i).renditionSet.delete(e),queueMicrotask(()=>{vd(e).track.enabled&&t.dispatchEvent(new vf("removerendition",{rendition:e}))})}get enabled(){return us(this,vF)}set enabled(e){let t;us(this,vF)!==e&&(ul(this,vF,e),(t=vd(this).media.audioTracks)&&!vd(t).changeRequested&&(vd(t).changeRequested=!0,queueMicrotask(()=>{delete vd(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};vF=new WeakMap;var vK=vG(globalThis.HTMLMediaElement,"video"),vj=vG(globalThis.HTMLMediaElement,"audio");function vY(e){if(!(null!=e&&e.prototype))return e;let t=vG(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=vd(e).videoTracks;if(!i&&(i=new vE,vd(e).videoTracks=i,vK)){let a=vK.call(null!=(t=e.nativeEl)?t:e);for(let t of a)vu(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof vI)){for(let e of a)vc(e);return}vu(e,t.track)}),a.addEventListener("removetrack",e=>{vc(e.track)})}return i}(this)}});let i=vG(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=vd(e).audioTracks;if(!i&&(i=new vV,vd(e).audioTracks=i,vj)){let a=vj.call(null!=(t=e.nativeEl)?t:e);for(let t of a)vO(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof v$)){for(let e of a)vP(e);return}vO(e,t.track)}),a.addEventListener("removetrack",e=>{vP(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new vI;return a.kind=e,a.label=t,a.language=i,vu(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=vc),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new v$;return a.kind=e,a.label=t,a.language=i,vO(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=vP),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=vd(e).videoRenditions;return t||(vd(t=new vT).media=e,vd(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=vd(e).audioRenditions;return t||(vd(t=new vx).media=e,vd(e).audioRenditions=t),t};return e}function vG(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}pI.push("castchange","entercast","leavecast");var vZ,vQ,vz,vX,vJ,v0,v1,v2,v3,v5,v4={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DRM_TOKEN:"drm-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},v9=Object.values(v4),v8=class extends pN{constructor(){super(),uo(this,v3),uo(this,vZ,void 0),uo(this,vQ,void 0),uo(this,vz,void 0),uo(this,vX,{}),uo(this,vJ,void 0),uo(this,v0,void 0),uo(this,v1,void 0),uo(this,v2,void 0),ul(this,vz,iA())}static get observedAttributes(){var e;return[...v9,...null!=(e=pN.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(v4.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tB.includes(e)?this.setAttribute(v4.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tB.join()}`):this.removeAttribute(v4.PREFER_CMCD))}get playerInitTime(){return us(this,vz)}get playerSoftwareName(){var e;return null!=(e=us(this,v1))?e:"mux-video"}set playerSoftwareName(e){ul(this,v1,e)}get playerSoftwareVersion(){var e;return null!=(e=us(this,v0))?e:pS}set playerSoftwareVersion(e){ul(this,v0,e)}get _hls(){var e;return null==(e=us(this,vZ))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=iC(this.nativeEl))?e:null}get errorTranslator(){return us(this,v2)}set errorTranslator(e){ul(this,v2,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(v4.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(v4.TYPE,e):this.removeAttribute(v4.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(v4.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(v4.DEBUG,""):this.removeAttribute(v4.DEBUG))}get disableTracking(){return this.hasAttribute(v4.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(v4.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(v4.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(v4.DISABLE_COOKIES,""):this.removeAttribute(v4.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(v4.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(v4.START_TIME):this.setAttribute(v4.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(v4.PLAYBACK_ID)?this.getAttribute(v4.PLAYBACK_ID):null!=(e=iS(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(v4.PLAYBACK_ID,e):this.removeAttribute(v4.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(v4.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(v4.MAX_RESOLUTION,e):this.removeAttribute(v4.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(v4.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(v4.MIN_RESOLUTION,e):this.removeAttribute(v4.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(v4.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(v4.RENDITION_ORDER,e):this.removeAttribute(v4.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(v4.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(v4.PROGRAM_START_TIME):this.setAttribute(v4.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(v4.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(v4.PROGRAM_END_TIME):this.setAttribute(v4.PROGRAM_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(v4.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(v4.CUSTOM_DOMAIN,e):this.removeAttribute(v4.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(v4.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(v4.DRM_TOKEN,e):this.removeAttribute(v4.DRM_TOKEN))}get ended(){return iB(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(v4.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(v4.ENV_KEY,e):this.removeAttribute(v4.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(v4.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(v4.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(v4.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(v4.STREAM_TYPE))?e:iR(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(v4.STREAM_TYPE,e):this.removeAttribute(v4.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(v4.TARGET_LIVE_WINDOW)?+this.getAttribute(v4.TARGET_LIVE_WINDOW):iL(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(v4.TARGET_LIVE_WINDOW):this.setAttribute(v4.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(v4.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return ix(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(v4.LIVE_EDGE_OFFSET))return+this.getAttribute(v4.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(v4.LIVE_EDGE_OFFSET):this.setAttribute(v4.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return iD(this.nativeEl)}async addCuePoints(e){return t8(this.nativeEl,e)}get activeCuePoint(){return t6(this.nativeEl)}get cuePoints(){return function(e,t={label:t4}){let i=t3(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>t7(e)):[]}(this.nativeEl)}async addChapters(e){return ir(this.nativeEl,e)}get activeChapter(){return is(this.nativeEl)}get chapters(){return function(e,t={label:it}){var i;let a=t3(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>ia(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(v4.PREFER_PLAYBACK);if(e===tP.MSE||e===tP.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tP.MSE||e===tP.NATIVE?this.setAttribute(v4.PREFER_PLAYBACK,e):this.removeAttribute(v4.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![v4.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...us(this,vX)}}set metadata(e){ul(this,vX,null!=e?e:{}),this.mux&&this.mux.emit("hb",us(this,vX))}get _hlsConfig(){return us(this,vJ)}set _hlsConfig(e){ul(this,vJ,e)}load(){ul(this,vZ,iW(this,this.nativeEl,us(this,vZ)))}unload(){iH(this.nativeEl,us(this,vZ)),ul(this,vZ,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(pN.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case v4.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case v4.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?ud(this,v3,v5).call(this):e&&!a?this.unload():e&&a&&(this.unload(),ud(this,v3,v5).call(this));break}case"autoplay":if(i===t)break;null==(a=us(this,vZ))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=us(this,vZ))||r.setPreload(i);break;case v4.PLAYBACK_ID:this.src=ik(this);break;case v4.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case v4.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case v4.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case v4.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!us(this,vZ)&&ud(this,v3,v5).call(this)}disconnectedCallback(){this.unload()}};vZ=new WeakMap,vQ=new WeakMap,vz=new WeakMap,vX=new WeakMap,vJ=new WeakMap,v0=new WeakMap,v1=new WeakMap,v2=new WeakMap,v3=new WeakSet,v5=async function(){us(this,vQ)||(await ul(this,vQ,Promise.resolve()),ul(this,vQ,null),this.load())};var v7=class extends vs(vY(v8)){};pw.customElements.get("mux-video")||(pw.customElements.define("mux-video",v7),pw.MuxVideoElement=v7);var v6=Object.defineProperty,be=(e,t,i)=>t in e?v6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,bt=(e,t,i)=>(be(e,"symbol"!=typeof t?t+"":t,i),i),bi=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ba=(e,t,i)=>(bi(e,t,"read from private field"),i?i.call(e):t.get(e)),br=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bn=(e,t,i,a)=>(bi(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let bs={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof bp&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof bp?a.element[a.attributeName]=t:a.value=t}}}};class bo extends aS.DocumentFragment{constructor(e,t,i=bs){var a;super(),br(this,bY,void 0),br(this,bG,void 0),this.append(e.content.cloneNode(!0)),bn(this,bY,bl(this)),bn(this,bG,i),null==(a=i.createCallback)||a.call(i,this,ba(this,bY),t),i.processCallback(this,ba(this,bY),t)}update(e){ba(this,bG).processCallback(this,ba(this,bY),e)}}bY=new WeakMap,bG=new WeakMap;let bl=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new bm;for([i,a]of bu(r.value))if(i){let i=new bp(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){if(1===r.nodeType||r.data.includes("{{")){let n=[];if(r.data)for([i,a]of bu(r.data))if(i){let i=new bv(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new bb(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else bl(r,t);return t},bd={},bu=e=>{let t="",i=0,a=bd[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),bd[e]=a};class bc{get value(){return""}set value(e){}toString(){return this.value}}let bh=new WeakMap;class bm{constructor(){br(this,bZ,[])}[Symbol.iterator](){return ba(this,bZ).values()}get length(){return ba(this,bZ).length}item(e){return ba(this,bZ)[e]}append(...e){for(let t of e)t instanceof bp&&bh.set(t,this),ba(this,bZ).push(t)}toString(){return ba(this,bZ).join("")}}bZ=new WeakMap;class bp extends bc{constructor(e,t,i){super(),br(this,b0),br(this,bQ,""),br(this,bz,void 0),br(this,bX,void 0),br(this,bJ,void 0),bn(this,bz,e),bn(this,bX,t),bn(this,bJ,i)}get attributeName(){return ba(this,bX)}get attributeNamespace(){return ba(this,bJ)}get element(){return ba(this,bz)}get value(){return ba(this,bQ)}set value(e){ba(this,bQ)!==e&&(bn(this,bQ,e),ba(this,b0,b1)&&1!==ba(this,b0,b1).length?ba(this,bz).setAttributeNS(ba(this,bJ),ba(this,bX),ba(this,b0,b1)):null==e?ba(this,bz).removeAttributeNS(ba(this,bJ),ba(this,bX)):ba(this,bz).setAttributeNS(ba(this,bJ),ba(this,bX),e))}get booleanValue(){return ba(this,bz).hasAttributeNS(ba(this,bJ),ba(this,bX))}set booleanValue(e){if(ba(this,b0,b1)&&1!==ba(this,b0,b1).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}bQ=new WeakMap,bz=new WeakMap,bX=new WeakMap,bJ=new WeakMap,b0=new WeakSet,b1=function(){return bh.get(this)};class bv extends bc{constructor(e,t){super(),br(this,b2,void 0),br(this,b3,void 0),bn(this,b2,e),bn(this,b3,t?[...t]:[new Text])}get replacementNodes(){return ba(this,b3)}get parentNode(){return ba(this,b2)}get nextSibling(){return ba(this,b3)[ba(this,b3).length-1].nextSibling}get previousSibling(){return ba(this,b3)[0].previousSibling}get value(){return ba(this,b3).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),bn(this,b3,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(ba(this,b3)[0].parentNode,ba(this,b3),t,this.nextSibling))}}b2=new WeakMap,b3=new WeakMap;class bb extends bv{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),bt(this,"directive"),this.expression=a,this.template=t,this.directive=i}}let bE={string:e=>String(e)};class bf{constructor(e){this.template=e,this.state=void 0}}let bg=new WeakMap,by=new WeakMap,b_={partial:(e,t)=>{t[e.expression]=new bf(e.template)},if:(e,t)=>{var i;if(bw(e.expression,t)){if(bg.get(e)!==e.template){bg.set(e,e.template);let i=new bo(e.template,t,bT);e.replace(i),by.set(e,i)}else null==(i=by.get(e))||i.update(t)}else e.replace(""),bg.delete(e),by.delete(e)}},bA=Object.keys(b_),bT={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof bb){if(!n.directive){let e=bA.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=b_[n.directive])||a.call(b_,n,i);continue}let t=bw(e,i);if(t instanceof bf){bg.get(n)!==t.template?(bg.set(n,t.template),t=new bo(t.template,t.state,bT),n.value=t,by.set(n,t)):null==(r=by.get(n))||r.update(t.state);continue}t?(n instanceof bp&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof bp?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,bg.delete(n),by.delete(n))):n instanceof bp?n.value=void 0:(n.value=void 0,bg.delete(n),by.delete(n))}}},bk={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=bE[t])?void 0:i.call(bE,e)}};function bw(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return bS(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return bS(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=bC(d,t))}return i}if(1===d.length)return bI(d[0])?bC(d[0].token,t):bS(e);if(2===d.length){let i=bk[null==(o=d[0])?void 0:o.token];return i&&bI(d[1])?i(bC(d[1].token,t)):bS(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=bk[i];return a&&bI(d[0])&&bI(d[2])?a(bC(d[0].token,t),"|"===i?d[2].token:bC(d[2].token,t)):bS(e)}}function bS(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function bI({type:e}){return["number","boolean","string","param"].includes(e)}function bC(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):am(e)?parseFloat(e):t[e]}var bR=Object.defineProperty,bL=(e,t,i)=>t in e?bR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,bD=(e,t,i)=>(bL(e,"symbol"!=typeof t?t+"":t,i),i),bx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bM=(e,t,i)=>(bx(e,t,"read from private field"),i?i.call(e):t.get(e)),bN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bO=(e,t,i,a)=>(bx(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bP=(e,t,i)=>(bx(e,t,"access private method"),i);let bU={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},bB=aI.createElement("template");bB.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-controller:not([mediasubtitleslist]) media-captions-selectmenu,
    media-captions-button:not([mediasubtitleslist]),
    media-rendition-selectmenu[mediarenditionunavailable],
    media-audio-track-selectmenu[mediaaudiotrackunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class bW extends aS.HTMLElement{constructor(){super(),bN(this,b8),bN(this,b6),bD(this,"renderRoot"),bD(this,"renderer"),bN(this,b5,void 0),bN(this,b4,void 0),bN(this,b9,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(bU[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(i8.BREAKPOINTS_COMPUTED,this.render),bP(this,b8,b7).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=bM(this,b5))?e:this.constructor.template}set template(e){bO(this,b9,null),bO(this,b5,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>bU[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=bU[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(am(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&bP(this,b6,Ee).call(this)}connectedCallback(){bP(this,b6,Ee).call(this)}createRenderer(){this.template&&this.template!==bM(this,b4)&&(bO(this,b4,this.template),this.renderer=new bo(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(bB.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function bH(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}b5=new WeakMap,b4=new WeakMap,b9=new WeakMap,b8=new WeakSet,b7=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},b6=new WeakSet,Ee=function(){var e;let t=this.getAttribute("template");if(!t||t===bM(this,b9))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){bO(this,b9,t),bO(this,b5,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(bO(this,b9,t),bH(t).then(e=>{let t=aI.createElement("template");t.innerHTML=e,bO(this,b5,t),this.createRenderer()}).catch(console.error))},bD(bW,"template"),bD(bW,"observedAttributes",["template"]),bD(bW,"processor",bT),aS.customElements.get("media-theme")||aS.customElements.define("media-theme",bW);var bq=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bV=(e,t,i)=>(bq(e,t,"read from private field"),i?i.call(e):t.get(e)),bF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},b$=(e,t,i,a)=>(bq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bK=(e,t,i)=>(bq(e,t,"access private method"),i),bj=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends bj{}globalThis.DocumentFragment=e}var bY,bG,bZ,bQ,bz,bX,bJ,b0,b1,b2,b3,b5,b4,b9,b8,b7,b6,Ee,Et,Ei=class extends bj{},Ea=class{constructor(e,t={}){bF(this,Et,void 0),b$(this,Et,null==t?void 0:t.detail)}get detail(){return bV(this,Et)}initCustomEvent(){}};Et=new WeakMap;var Er={document:{createElement:function(e,t){return new Ei}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(Ei)},CustomEvent:Ea,EventTarget:bj,HTMLElement:Ei,HTMLVideoElement:class extends bj{}},En="undefined"==typeof window||void 0===globalThis.customElements,Es=En?Er:globalThis,Eo=En?Er.document:globalThis.document,El={code:"en"};function Ed(e,t=!0){var i;return new Eu(t&&null!=(i=null==El?void 0:El[e])?i:e,t?El.code:"en")}var Eu=class{constructor(e,t=(e=>null!=(e=El.code)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}};function Ec(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Eh(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function Em(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function Ep(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}function Ev(e){let t=(null!=e?e:"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}var Eb,EE,Ef,Eg=(e,t)=>!!e&&!!t&&(!!e.contains(t)||Eg(e,t.getRootNode().host)),Ey="mux.com",E_=(()=>{try{return"2.9.0"}catch{}return"UNKNOWN"})(),EA=(e,{token:t,customDomain:i=Ey,thumbnailTime:a,programTime:r}={})=>{let n=null==t?a:void 0,{aud:s}=Ev(t);if(!(t&&"t"!==s))return`https://image.${i}/${e}/thumbnail.webp${Ep({token:t,time:n,program_time:r})}`},ET=(e,{token:t,customDomain:i=Ey,programStartTime:a,programEndTime:r}={})=>{let{aud:n}=Ev(t);if(!(t&&"s"!==n))return`https://image.${i}/${e}/storyboard.vtt${Ep({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},Ek=e=>{if(e){if([tO.LIVE,tO.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tO.LIVE}},Ew={crossorigin:"crossOrigin",playsinline:"playsInline"},ES=class{constructor(e,t){bF(this,Eb,void 0),bF(this,EE,void 0),bF(this,Ef,[]),b$(this,Eb,e),b$(this,EE,t)}[Symbol.iterator](){return bV(this,Ef).values()}get length(){return bV(this,Ef).length}get value(){var e;return null!=(e=bV(this,Ef).join(" "))?e:""}set value(e){var t;e!==this.value&&(b$(this,Ef,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return bV(this,Ef)[e]}values(){return bV(this,Ef).values()}keys(){return bV(this,Ef).keys()}forEach(e){bV(this,Ef).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||bV(this,Ef).push(e)}),(""!==this.value||null!=(t=bV(this,Eb))&&t.hasAttribute(`${bV(this,EE)}`))&&null!=(i=bV(this,Eb))&&i.setAttribute(`${bV(this,EE)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{bV(this,Ef).splice(bV(this,Ef).indexOf(e),1)}),null==(t=bV(this,Eb))||t.setAttribute(`${bV(this,EE)}`,`${this.value}`)}contains(e){return bV(this,Ef).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};Eb=new WeakMap,EE=new WeakMap,Ef=new WeakMap;var EI=`[mux-player ${E_}]`;function EC(...e){console.warn(EI,...e)}function ER(...e){console.error(EI,...e)}function EL(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${Ed("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),EC(i)}var ED,Ex={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},EM={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},EN=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),EO=pI.filter(e=>"error"!==e),EP=Object.values(Ex).filter(e=>![Ex.PLAYSINLINE].includes(e)),EU=Object.values(EM),EB=class extends Es.HTMLElement{constructor(){super(),bF(this,ED,new WeakMap),new MutationObserver(e=>{for(let t of e)"childList"===t.type&&(t.removedNodes.forEach(e=>{var t;null==(t=bV(this,ED).get(e))||t.remove()}),t.addedNodes.forEach(e=>{var t;null!=e&&e.slot||null==(t=this.media)||t.append(EH(bV(this,ED),e))}))}).observe(this,{childList:!0,subtree:!0})}static get observedAttributes(){return[...EP,...EU]}init(){this.querySelectorAll(":scope > :not([slot])").forEach(e=>{var t;null==(t=this.media)||t.append(EH(bV(this,ED),e))}),EO.forEach(e=>{var t;null==(t=this.media)||t.addEventListener(e,e=>{this.dispatchEvent(new Event(e.type))})})}attributeChangedCallback(e,t,i){var a,r;switch(e){case EM.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case EM.VOLUME:{let e=null!=(a=Em(i))?a:1;this.media&&(this.media.volume=e);return}case EM.PLAYBACKRATE:{let e=null!=(r=Em(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:EN}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:EN}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=Em(this.getAttribute(EM.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(EM.PLAYBACKRATE,`${e}`):this.removeAttribute(EM.PLAYBACKRATE)}get crossOrigin(){return EW(this,Ex.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(Ex.CROSSORIGIN,`${e}`)}get autoplay(){return null!=EW(this,Ex.AUTOPLAY)}set autoplay(e){e?this.setAttribute(Ex.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(Ex.AUTOPLAY)}get loop(){return null!=EW(this,Ex.LOOP)}set loop(e){e?this.setAttribute(Ex.LOOP,""):this.removeAttribute(Ex.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=EW(this,Ex.MUTED)}set defaultMuted(e){e?this.setAttribute(Ex.MUTED,""):this.removeAttribute(Ex.MUTED)}get playsInline(){return null!=EW(this,Ex.PLAYSINLINE)}set playsInline(e){ER("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(Ex.PRELOAD,e):this.removeAttribute(Ex.PRELOAD)}};function EW(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}function EH(e,t){let i=e.get(t);return i||(i=t.cloneNode(),e.set(t,i)),i}ED=new WeakMap;var Eq=EB,EV=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-selectmenu-display: var(--captions-selectmenu, var(--media-captions-button-display));
  --media-rendition-selectmenu-display: var(--rendition-selectmenu);
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-selectmenu-display: var(--playback-rate-selectmenu);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--top-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--top-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--top-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-playback-rate-button-display, var(--top-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--center-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--center-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--center-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--center-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--bottom-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--bottom-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--bottom-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}
`,EF=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,E$=Eo.createElement("template");E$.innerHTML=`
  <style>
    ${EF}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var EK=class extends Es.HTMLElement{constructor(){var e;super(),this.attachShadow({mode:"open"}),null==(e=this.shadowRoot)||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),Ej(this)}close(){this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),this._previouslyFocusedElement instanceof HTMLElement&&this._previouslyFocusedElement.focus())}attributeChangedCallback(e,t,i){"open"===e&&t!==i&&(null!=i?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&Ej(this)}};function Ej(e){let t=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(e.dispatchEvent(t),t.defaultPrevented)return;let i=e.querySelector("[autofocus]:not([disabled])");!i&&e.tabIndex>=0&&(i=e),i||(i=function e(t){let i=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=null==t?void 0:t.querySelector(i.join(", "));if(!a&&"attachShadow"in Element.prototype){let i=(null==t?void 0:t.querySelectorAll("*"))||[];for(let t=0;t<i.length&&!(i[t].tagName&&i[t].shadowRoot&&(a=e(i[t].shadowRoot)));t++);}return a}(e.shadowRoot)),e._previouslyFocusedElement=Eo.activeElement,Eo.activeElement instanceof HTMLElement&&Eo.activeElement.blur(),e.addEventListener("transitionend",()=>{i instanceof HTMLElement&&i.focus({preventScroll:!0})},{once:!0})}EK.styles=EF,EK.template=E$,EK.observedAttributes=["open"],Es.customElements.get("media-dialog")||(Es.customElements.define("media-dialog",EK),Es.MediaDialog=EK);var EY=EK,EG=Eo.createElement("template");EG.innerHTML=`
  <style>
    ${EY.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var EZ=class extends EY{constructor(){var e,t;super(),null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector(".close"))||t.addEventListener("click",()=>{this.close()})}};EZ.template=EG,Es.customElements.get("mxp-dialog")||(Es.customElements.define("mxp-dialog",EZ),Es.MxpDialog=EZ);var EQ=new WeakMap,Ez=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=EQ.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=EQ.get(this.element);e&&e.delete(this.type)}}static for(t){EQ.has(t.element)||EQ.set(t.element,new Map);let i=t.attributeName.slice(2),a=EQ.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},EX=new Map,EJ=new WeakMap,E0=new WeakMap,E1=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(EX.has(this.stringsKey))return EX.get(this.stringsKey);{let e=Eo.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),EX.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(EJ.get(e)!==i){EJ.set(e,i);let t=new bo(i,this.values,this.processor);E0.set(e,t),e instanceof bv?e.replace(...t.children):e.appendChild(t);return}let a=E0.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},E2={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof bp&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof bp){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof bp&&r.attributeName.startsWith("on")&&(Ez.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof bv&&(r.replace(""),1)||n instanceof E1&&r instanceof bv&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof bv&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof bp){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function E3(e,...t){return new E1(e,t,E2)}var E5=e=>{let{tokens:t}=e;return t.drm?":host { --_cast-button-drm-display: none; }":""},E4=e=>E3`
  <style>
    ${E5(e)}
    ${EV}
  </style>
  ${E7(e)}
`,E9=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===Ek(e.streamType)&&(t+=" noarrowleft noarrowright"),t},E8=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",SELECTMENU:"selectmenu",LISTBOX:"listbox",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),E7=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,b,E,f,g,y,_,A,T,k,w,S,I,C,R,L,D,x,M,N,O,P,U,B;return E3`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${E9(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||e.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(tO.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(r=function(e){let t="";return Object.entries(e).forEach(([e,i])=>{null!=i&&(t+=`${Ec(e)}: ${i}; `)}),t?t.trim():void 0}({"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor}))&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    exportparts="${E8}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(h=e.targetLiveWindow)&&h}"
      stream-type="${null!=(m=Ek(e.streamType))&&m}"
      crossorigin="${null!=(p=e.crossOrigin)?p:""}"
      playsinline
      autoplay="${null!=(v=e.autoplay)&&v}"
      muted="${null!=(b=e.muted)&&b}"
      loop="${null!=(E=e.loop)&&E}"
      preload="${null!=(f=e.preload)&&f}"
      debug="${null!=(g=e.debug)&&g}"
      prefer-cmcd="${null!=(y=e.preferCmcd)&&y}"
      disable-tracking="${null!=(_=e.disableTracking)&&_}"
      disable-cookies="${null!=(A=e.disableCookies)&&A}"
      prefer-playback="${null!=(T=e.preferPlayback)&&T}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(k=e.beaconCollectionDomain)&&k}"
      player-software-name="${null!=(w=e.playerSoftwareName)&&w}"
      player-software-version="${null!=(S=e.playerSoftwareVersion)&&S}"
      env-key="${null!=(I=e.envKey)&&I}"
      custom-domain="${null!=(C=e.customDomain)&&C}"
      src="${e.src?e.src:!!e.playbackId&&ik(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&ik(e)}"
      drm-token="${null!=(L=null==(R=e.tokens)?void 0:R.drm)&&L}"
      exportparts="video"
    >
      ${e.storyboard?E3`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:E3``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${""!==e.poster&&null!=(D=e.poster)&&D}"
        placeholdersrc="${null!=(x=e.placeholder)&&x}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(M=e.isDialogOpen)&&M}"
      onclose="${e.onCloseErrorDialog}"
      oninitfocus="${e.onInitFocusDialog}"
    >
      ${null!=(N=e.dialog)&&N.title?E3`<h3>${e.dialog.title}</h3>`:E3``}
      <p>
        ${null==(O=e.dialog)?void 0:O.message}
        ${null!=(P=e.dialog)&&P.linkUrl?E3`<a
              href="${e.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(U=e.dialog.linkText)?U:""} ${Ed("(opens in a new window)")}"
              >${null!=(B=e.dialog.linkText)?B:e.dialog.linkUrl}</a
            >`:E3``}
      </p>
    </mxp-dialog>
  </media-theme>
`};function E6(e,t,i,a,r){var n,s,o;let l={},d={};switch(e.code){case tD.MEDIA_ERR_NETWORK:switch(l.title=Ed("Network Error",r),l.message=e.message,null==(n=e.data)?void 0:n.response.code){case 412:l.title=Ed("Video is not currently available",r),l.message=Ed("The live stream or video file are not yet ready.",r),d.message=Ed("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),d.file="412-not-playable.md";break;case 404:l.title=Ed("Video does not exist",r),l.message="",d.message=Ed("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),d.file="404-not-found.md";break;case 403:{if(l.title=Ed("Invalid playback URL",r),l.message=Ed("The video URL or playback-token are formatted with incorrect or incomplete information.",r),d.message=Ed("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),d.file="missing-signed-tokens.md",!a)break;let{exp:e,aud:t,sub:n}=Ev(a),s=Date.now()>1e3*e,o=n!==i,u="v"!==t,c={timeStyle:"medium",dateStyle:"medium"};if(s){l.title=Ed("Video URL has expired",r),l.message=Ed("The video’s secured playback-token has expired.",r),d.message=Ed("The video’s secured playback-token has expired.",r),d.context=Ed("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(El.code,c).format(1e3*e),currentDate:new Intl.DateTimeFormat(El.code,c).format(Date.now())}),d.file="403-expired-token.md";break}if(o){l.title=Ed("Video URL is formatted incorrectly",r),l.message=Ed("The video’s playback ID does not match the one encoded in the playback-token.",r),d.message=Ed("The video’s playback ID does not match the one encoded in the playback-token.",r),d.context=Ed("Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}",r).format({playbackId:i,tokenPlaybackId:n}),d.file="403-playback-id-mismatch.md";break}if(u){l.title=Ed("Video URL is formatted incorrectly",r),l.message=Ed("The playback-token is formatted with incorrect information.",r),d.message=Ed("The playback-token is formatted with incorrect information.",r),d.context=Ed("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:t}),d.file="403-incorrect-aud-value.md";break}d.message=Ed("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),d.file="403-malformatted-token.md"}}break;case tD.MEDIA_ERR_DECODE:{let{message:t}=e;l={title:Ed("Media Error",r),message:t},d.file="media-decode-error.md";break}case tD.MEDIA_ERR_SRC_NOT_SUPPORTED:{let n=null==(o=null==(s=e.data)?void 0:s.response)?void 0:o.code;if(n>=400&&n<500){e.code=tD.MEDIA_ERR_NETWORK,e.data={response:{code:n}},{dialog:l,devlog:d}=E6(e,t,i,a);break}l={title:Ed("Source Not Supported",r),message:e.message},d.file="media-src-not-supported.md";break}default:l={title:Ed("Error",r),message:e.message}}return t&&(l={title:Ed("Your device appears to be offline",r),message:Ed("Check your internet connection and try reloading this video.",r)}),{dialog:l,devlog:d}}var fe=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='listbox'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: calc(100% + 16px);
      padding: 2.5px 10px;
    }

    [part~='listbox']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='listbox']::part(option) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='listbox']::part(option-selected) {
      font-weight: 700;
    }

    media-captions-selectmenu,
    media-rendition-selectmenu,
    media-audio-track-selectmenu,
    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-background: var(--_primary-color);
      --media-option-selected-background: transparent;
      --media-option-hover-background: transparent;
      --media-option-hover-outline: var(--_accent-color) solid 1px;
      --media-text-color: var(--_text-color);
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-selectmenu {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-layout: row;
      --media-option-selected-background: var(--_accent-color);
      margin-right: 6px;
      padding: 0;
    }

    media-playback-rate-listbox[part~='listbox']::part(option) {
      padding: 6px 4px;
    }

    media-playback-rate-listbox[part~='listbox']::part(option-selected) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 2;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      animation: 0.3s linear forwards pre-play-hide;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-selectmenu: none;
      --bottom-pip-button: none;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenuButton">
    <media-captions-selectmenu part="bottom captions selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-captions-button
        slot="button"
        part="bottom captions button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
          <path
            d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
          <path
            d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
          />
          <path
            d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
          />
          <path
            d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
          />
        </svg>
      </media-captions-button>
      <media-captions-listbox slot="listbox" exportparts="option" part="bottom captions listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-captions-listbox>
    </media-captions-selectmenu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateSelect">
    <media-playback-rate-selectmenu
      part="bottom playback-rate selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-playback-rate-button slot="button" part="bottom playback-rate button"></media-playback-rate-button>
      <media-playback-rate-listbox
        slot="listbox"
        rates="{{playbackrates}}"
        exportparts="option"
        part="bottom playback-rate listbox"
      ></media-playback-rate-listbox>
    </media-playback-rate-selectmenu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-selectmenu
      part="bottom audio-track selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-audio-track-button slot="button" part="bottom audio-track button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
          <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
          <path
            d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
      </media-audio-track-button>
      <media-audio-track-listbox slot="listbox" exportparts="option" part="bottom audio-track listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-audio-track-listbox>
    </media-audio-track-selectmenu>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-selectmenu part="bottom rendition selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-rendition-button slot="button" part="bottom rendition button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
          <path
            d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        </svg>
      </media-rendition-button>
      <media-rendition-listbox slot="listbox" exportparts="option" part="bottom rendition listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-rendition-listbox>
    </media-rendition-selectmenu>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="streamtype == 'on-demand'">
          <template if="!breakpointsm"> {{>SeekBackwardButton section="center"}} </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm"> {{>SeekForwardButton section="center"}} </template>
        </template>

        <template if="streamtype == 'live'">
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton section="center"}} </template>
          </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekForwardButton section="center"}} </template>
          </template>
        </template>
      </div>

      <!-- Auotplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>PlaybackRateSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}} {{>CastButton}}
          {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateSelect}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          <template if="breakpointsm">
            {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}} {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,ft=Eo.createElement("template");"innerHTML"in ft&&(ft.innerHTML=fe);var fi,fa,fr=class extends bW{};fr.template=null==(fa=null==(fi=ft.content)?void 0:fi.children)?void 0:fa[0],Es.customElements.get("media-theme-gerwig")||Es.customElements.define("media-theme-gerwig",fr);var fn={SRC:"src",POSTER:"poster"},fs={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref"},fo=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function fl(e){let t=e.hasAttribute(fs.TITLE)?{video_title:e.getAttribute(fs.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}var fd,fu,fc,fh,fm,fp,fv,fb,fE,ff,fg,fy,f_,fA,fT,fk,fw,fS,fI,fC,fR,fL=Object.values(v4),fD=Object.values(fn),fx=Object.values(fs),fM={dialog:void 0,isDialogOpen:!1},fN={redundant_streams:!0},fO=class extends Eq{constructor(){super(),bF(this,fp),bF(this,fb),bF(this,ff),bF(this,fy),bF(this,fA),bF(this,fk),bF(this,fS),bF(this,fC),bF(this,fd,!1),bF(this,fu,{}),bF(this,fc,!0),bF(this,fh,new ES(this,"hotkeys")),bF(this,fm,{...fM,onCloseErrorDialog:()=>bK(this,ff,fg).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{Eg(this,Eo.activeElement)||e.preventDefault()}}),this.attachShadow({mode:"open"}),bK(this,fb,fE).call(this),this.isConnected&&bK(this,fp,fv).call(this)}static get observedAttributes(){var e;return[...null!=(e=Eq.observedAttributes)?e:[],...fD,...fL,...fx]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=fl(this))}attributeChangedCallback(e,t,i){var a;switch(bK(this,fp,fv).call(this),super.attributeChangedCallback(e,t,i),e){case fs.HOTKEYS:bV(this,fh).value=i;break;case fs.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&EC(Ed("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break;case fs.THUMBNAIL_TOKEN:{let{aud:e}=Ev(i);i&&"t"!==e&&EC(Ed("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:e}));break}case fs.STORYBOARD_TOKEN:{let{aud:e}=Ev(i);i&&"s"!==e&&EC(Ed("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:e}));break}case v4.PLAYBACK_ID:null!=i&&i.includes("?token")&&ER(Ed("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case v4.STREAM_TYPE:i&&![tO.LIVE,tO.ON_DEMAND,tO.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:EL({file:"invalid-stream-type.md",message:Ed("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tO.LIVE?null==this.getAttribute(fs.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[v4.PLAYBACK_ID,fn.SRC,fs.PLAYBACK_TOKEN].includes(e)&&t!==i&&b$(this,fm,{...bV(this,fm),...fM}),bK(this,fy,f_).call(this,{[null!=(a=Ew[e])?a:Eh(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(v4.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tB.includes(e)?this.setAttribute(v4.PREFER_CMCD,e):EC(`Invalid value for preferCmcd. Must be one of ${tB.join()}`):this.removeAttribute(v4.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(i9.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(i9.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(fs.THEME))?e:"gerwig"}set theme(e){this.setAttribute(fs.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(fo.includes(i))continue;let a=e.getAttribute(i);t[Eh(i)]=""===a||a}return t}set themeProps(e){var t,i;bK(this,fp,fv).call(this);let a={...this.themeProps,...e};for(let r in a){if(fo.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(Ec(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(Ec(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(v4.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(v4.PLAYBACK_ID,e):this.removeAttribute(v4.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=fP(this,fn.SRC))?e:void 0:null!=(t=this.getAttribute(fn.SRC))?t:void 0}set src(e){e?this.setAttribute(fn.SRC,e):this.removeAttribute(fn.SRC)}get poster(){var e;let t=this.getAttribute(fn.POSTER);return null!=t?t:this.playbackId&&!this.audio?EA(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:this.tokens.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(fn.POSTER,e):this.removeAttribute(fn.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(fs.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(fs.STORYBOARD_SRC,e):this.removeAttribute(fs.STORYBOARD_SRC)}get storyboard(){return this.storyboardSrc&&!this.tokens.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tO.LIVE,tO.UNKNOWN].includes(this.streamType)?void 0:ET(this.playbackId,{customDomain:this.customDomain,token:this.tokens.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(fs.AUDIO)}set audio(e){if(!e){this.removeAttribute(fs.AUDIO);return}this.setAttribute(fs.AUDIO,"")}get hotkeys(){return bV(this,fh)}get nohotkeys(){return this.hasAttribute(fs.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(fs.NOHOTKEYS);return}this.setAttribute(fs.NOHOTKEYS,"")}get thumbnailTime(){return Em(this.getAttribute(fs.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(fs.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(fs.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(fs.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=fP(this,fs.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(fs.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(fs.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=Es.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(fs.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(fs.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=Es.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(fs.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(fs.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=Es.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(fs.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(fs.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(fs.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(fs.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(fs.PLAYBACK_RATES))return this.getAttribute(fs.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(fs.PLAYBACK_RATES);return}this.setAttribute(fs.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=Em(this.getAttribute(fs.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(fs.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=Em(this.getAttribute(fs.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(fs.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(fs.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(fs.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(fs.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Em(this.getAttribute(fs.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(fs.DEFAULT_DURATION):this.setAttribute(fs.DEFAULT_DURATION,`${e}`)}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(v4.PLAYER_SOFTWARE_NAME))?e:"mux-player"}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(v4.PLAYER_SOFTWARE_VERSION))?e:E_}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(v4.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(v4.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(v4.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(v4.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(v4.MAX_RESOLUTION,e):this.removeAttribute(v4.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(v4.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(v4.MIN_RESOLUTION,e):this.removeAttribute(v4.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(v4.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(v4.RENDITION_ORDER,e):this.removeAttribute(v4.RENDITION_ORDER))}get programStartTime(){return Em(this.getAttribute(v4.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(v4.PROGRAM_START_TIME):this.setAttribute(v4.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return Em(this.getAttribute(v4.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(v4.PROGRAM_END_TIME):this.setAttribute(v4.PROGRAM_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(fs.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(fs.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):fN}set extraSourceParams(e){null==e?this.removeAttribute(fs.EXTRA_SOURCE_PARAMS):this.setAttribute(fs.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(v4.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(v4.CUSTOM_DOMAIN,e):this.removeAttribute(v4.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=fP(this,v4.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(v4.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(fs.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(fs.NO_VOLUME_PREF,""):this.removeAttribute(fs.NO_VOLUME_PREF)}get debug(){return null!=fP(this,v4.DEBUG)}set debug(e){e?this.setAttribute(v4.DEBUG,""):this.removeAttribute(v4.DEBUG)}get disableTracking(){return null!=fP(this,v4.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(v4.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=fP(this,v4.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(v4.DISABLE_COOKIES,""):this.removeAttribute(v4.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(v4.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tO.UNKNOWN}set streamType(e){this.setAttribute(v4.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(fs.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(fs.DEFAULT_STREAM_TYPE))?i:tO.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(fs.DEFAULT_STREAM_TYPE,e):this.removeAttribute(fs.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(fs.TARGET_LIVE_WINDOW)?+this.getAttribute(fs.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(fs.TARGET_LIVE_WINDOW):this.setAttribute(fs.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return Em(fP(this,v4.START_TIME))}set startTime(e){this.setAttribute(v4.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(v4.PREFER_PLAYBACK);if(e===tP.MSE||e===tP.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tP.MSE||e===tP.NATIVE?this.setAttribute(v4.PREFER_PLAYBACK,e):this.removeAttribute(v4.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(bK(this,fp,fv).call(this),!this.media){ER("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...fl(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(bK(this,fp,fv).call(this),!this.media){ER("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(bK(this,fp,fv).call(this),!this.media){ER("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(bK(this,fp,fv).call(this),!this.media){ER("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(fs.PLAYBACK_TOKEN),t=this.getAttribute(fs.DRM_TOKEN),i=this.getAttribute(fs.THUMBNAIL_TOKEN),a=this.getAttribute(fs.STORYBOARD_TOKEN);return{...bV(this,fu),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){b$(this,fu,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(fs.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(fs.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(fs.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(fs.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(fs.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(fs.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(fs.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(fs.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return t2(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}};function fP(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}fd=new WeakMap,fu=new WeakMap,fc=new WeakMap,fh=new WeakMap,fm=new WeakMap,fp=new WeakSet,fv=function(){var e,t,i,a;if(!bV(this,fd)){b$(this,fd,!0),bK(this,fy,f_).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Es.HTMLElement))throw""}catch{ER("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof v7))throw""}catch{ER("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof r2))throw""}catch{ER("<media-controller> failed to upgrade!")}this.init(),bK(this,fA,fT).call(this),bK(this,fk,fw).call(this),bK(this,fS,fI).call(this),b$(this,fc,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rt.USER_INACTIVE))||t),bK(this,fC,fR).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>bK(this,fy,f_).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>bK(this,fy,f_).call(this))}},fb=new WeakSet,fE=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},ff=new WeakSet,fg=function(e){Object.assign(bV(this,fm),e),bK(this,fy,f_).call(this)},fy=new WeakSet,f_=function(e={}){var t,i,a;let r;(function(e,t){e.renderInto(t)})(E4((t={...bV(this,fm),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(fs.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Es.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(fs.NOHOTKEYS),hotKeys:this.getAttribute(fs.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(v4.TARGET_LIVE_WINDOW),streamType:Ek(this.getAttribute(v4.STREAM_TYPE)),primaryColor:this.getAttribute(fs.PRIMARY_COLOR),secondaryColor:this.getAttribute(fs.SECONDARY_COLOR),accentColor:this.getAttribute(fs.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(r=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(r).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(fs.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(v4.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(fs.TITLE),novolumepref:this.hasAttribute(fs.NO_VOLUME_PREF),...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},fA=new WeakSet,fT=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(fo.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},fk=new WeakSet,fw=function(){var e;this.addEventListener("error",e=>{let{detail:t}=e;if(t instanceof tD||(t=new tD(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){EC(t),t.data&&EC(`${t.name} data:`,t.data);return}let{dialog:i,devlog:a}=E6(t,!window.navigator.onLine,this.playbackId,this.playbackToken);a.message&&EL(a),ER(t),t.data&&ER(`${t.name} data:`,t.data),bK(this,ff,fg).call(this,{isDialogOpen:!0,dialog:i})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tD))return e;let{devlog:r}=E6(null==(i=this.media)?void 0:i.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new tD(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},fS=new WeakSet,fI=function(){var e,t,i,a;let r=()=>bK(this,fy,f_).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},fC=new WeakSet,fR=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tO.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tO.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rt.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,bV(this,fc))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(rt.USER_INACTIVE))||t;bV(this,fc)!==a&&(b$(this,fc,a),n(i,bV(this,fc)))})},Es.customElements.get("mux-player")||(Es.customElements.define("mux-player",fO),Es.MuxPlayerElement=fO);var fU={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},fB=e=>null==e,fW=(e,t)=>!fB(t)&&e in t,fH=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),fq=(e,t)=>{if(!("boolean"==typeof t&&!t))return fW(e,fU)?fU[e]:/[A-Z]/.test(e)?fH(e):e},fV=(e,t)=>"boolean"==typeof e?"":e,fF=(e={})=>Object.entries(e).reduce((e,[t,i])=>{let a=fq(t,i);if(!a)return e;let r=fV(i,t);return e[a]=r,e},{}),f$=(...e)=>{let t=(0,n.useRef)(null);return(0,n.useEffect)(()=>{e.forEach(e=>{e&&("function"==typeof e?e(t.current):e.current=t.current)})},[e]),t},fK=Object.prototype.hasOwnProperty,fj=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!fK.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},fY=(e,t,i)=>!fj(t,e[i]),fG=(e,t,i)=>{e[i]=t},fZ=(e,t,i,a=fG,r=fY)=>(0,n.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t]),fQ=(()=>{try{return"2.9.0"}catch{}return"UNKNOWN"})(),fz=n.forwardRef(({children:e,...t},i)=>n.createElement("mux-player",fF({...t,ref:i}),e)),fX=(e,t,i)=>(0,n.useEffect)(()=>{let a=null==t?void 0:t.current;if(!(!a||!i))return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i]),fJ=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:E,onPause:f,onSeeking:g,onSeeked:y,onStalled:_,onSuspend:A,onEnded:T,onError:k,onCuePointChange:w,onCuePointsChange:S,onChapterChange:I,metadata:C,tokens:R,paused:L,playbackId:D,playbackRates:x,currentTime:M,themeProps:N,extraSourceParams:O,_hlsConfig:P,...U}=t;return fZ("playbackRates",x,e),fZ("metadata",C,e),fZ("extraSourceParams",O,e),fZ("_hlsConfig",P,e),fZ("themeProps",N,e),fZ("tokens",R,e),fZ("playbackId",D,e),fZ("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&fY(e,t,i)),fZ("currentTime",M,e,(e,t)=>{null!=t&&(e.currentTime=t)}),fX("abort",e,i),fX("canplay",e,a),fX("canplaythrough",e,r),fX("emptied",e,n),fX("loadstart",e,s),fX("loadeddata",e,o),fX("loadedmetadata",e,l),fX("progress",e,d),fX("durationchange",e,u),fX("volumechange",e,c),fX("ratechange",e,h),fX("resize",e,m),fX("waiting",e,p),fX("play",e,v),fX("playing",e,b),fX("timeupdate",e,E),fX("pause",e,f),fX("seeking",e,g),fX("seeked",e,y),fX("stalled",e,_),fX("suspend",e,A),fX("ended",e,T),fX("error",e,k),fX("cuepointchange",e,w),fX("cuepointschange",e,S),fX("chapterchange",e,I),[U]},f0=n.forwardRef((e,t)=>{let i=(0,n.useRef)(null),a=f$(i,t),[r]=fJ(i,e);return n.createElement(fz,{ref:a,playerSoftwareName:"mux-player-react",playerSoftwareVersion:fQ,...r})})}}]);