parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u,a=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,u=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw u}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,t){return e.number<t.number?-1:e.number>t.number?1:0}function o(e){var t="User";switch(e.target.value){case"user":t="User";break;case"org":t="Organization"}document.getElementById("inputUser").placeholder=t}function u(t){var n=document.getElementById("inputType").value;fetch("https://api.github.com/"+n+"/"+t.target.value+"/repos").then(function(e){return e.json()}).then(function(t){var n=document.getElementById("inputRepo");n.innerHTML="";var r,o=e(t);try{for(o.s();!(r=o.n()).done;){var u=r.value,a=document.createElement("option");a.innerText=u.name,a.value=u.name,n.appendChild(a)}}catch(i){o.e(i)}finally{o.f()}}).catch(function(e){return console.error(e)})}function a(t){var n=document.getElementById("inputUser").value;fetch("https://api.github.com/repos/".concat(n,"/").concat(t.target.value,"/issues")).then(function(e){return e.json()}).then(function(t){var n=document.getElementById("inputIssue");if(n.innerHTML="",t&&t.length){var o,u=e(t.sort(r));try{for(u.s();!(o=u.n()).done;){var a=o.value;(i=document.createElement("option")).innerText=a.title,i.value=a.number,n.appendChild(i)}}catch(c){u.e(c)}finally{u.f()}}else{var i;(i=document.createElement("option")).innerText="No Issues",i.value=-1,n.appendChild(i)}}).catch(function(e){return console.error(e)})}function i(e){var t=document.getElementById("inputUser").value,n=document.getElementById("inputRepo").value,r=e.target.value;-1!==r&&(document.getElementById("hljs-value-repo").innerText="'".concat(t,"/").concat(n,"/").concat(r,"'"))}function c(e){document.getElementById("hljs-value-theme").innerText="'"+e.target.value.toLowerCase()+"'"}function l(e){document.getElementById("hljs-value-page-size").innerText="'"+e.target.value+"'"}document.getElementById("inputType").addEventListener("change",o),document.getElementById("inputUser").addEventListener("change",u),document.getElementById("inputRepo").addEventListener("change",a),document.getElementById("inputIssue").addEventListener("change",i),document.getElementById("inputTheme").addEventListener("change",c),document.getElementById("inputPageSize").addEventListener("input",l);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/commen-tk.github.io.c5240f7f.js.map