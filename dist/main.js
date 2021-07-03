(()=>{"use strict";var n={383:(n,t,e)=>{e.d(t,{Z:()=>o});var i=e(645),a=e.n(i)()((function(n){return n[1]}));a.push([n.id,"/* \nThanks to Vadim Bauer for this amazing pure CSS coffee image ! \nSee the source: https://css-art.com/coffee-for-you/ \n*/\n\n#plate {\n    width: 50vmin;\n    height: 50vmin;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n    position: relative;\n    box-shadow: -2vmin 2vmin 5vmin 2vmin rgba(0, 0, 0, 0.2), inset 0 0 0 0.2vmin #ccc, inset 0 0 0 0.5vmin #fafafa, inset 0 0 10vmin 0.1vmin rgba(0, 0, 0, 0.2);\n}\n#handle {\n    width: 10%;\n    height: 30%;\n    background-color: #fff;\n    position: absolute;\n    left: 71%;\n    transform: rotate(-43deg);\n    top: 65%;\n    border-radius: 1vmin;\n    box-shadow: -2vmin -1vmin 2vmin 0vmin rgba(37, 37, 37, 0.1), 0vmin 0vmin 0vmin 0.1vmin rgba(102, 102, 102, 0.1), inset -1vmin 0 2vmin 0.1vmin #fff, inset 0 0 0.5vmin 0.5vmin #bbb, inset 0 0 10vmin 0.1vmin rgba(195, 195, 195, 0.2);\n}\n#cup {\n    width: 65%;\n    height: 65%;\n    border-radius: 50%;\n    background-color: #fff;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: -2vmin 2vmin 5vmin -2vmin rgba(0, 0, 0, 0.5), inset 0 0 0.5vmin 0.2vmin #ccc, inset 0 0 0 1vmin #fafafa;\n    z-index: 1;\n}\n#coffeBg {\n    width: 80%;\n    height: 80%;\n    border-radius: 50%;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(45deg, #35210d 0%, #231105 100%);\n    overflow: hidden;\n}\n#cupInner {\n    width: 80%;\n    height: 80%;\n    border-radius: 50%;\n    position: absolute;\n    box-shadow: 0 0 0.3vmin 0 #000, 0 0 0.5vmin 2.5vmin #dedede, inset 0 0 0.4vmin 0.1vmin rgba(0, 0, 0, 0.5);\n    background-color: transparent;\n    z-index: 1;\n}\n#foamWrapper {\n    filter: url(\"#goo\") drop-shadow(0px 0px 3px #b37a3c);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    backface-visibility: hidden;\n}\n.foam {\n    background-color: #f8c99d;\n    width: 10%;\n    height: 40%;\n    border-radius: 50%;\n    position: absolute;\n    left: -3%;\n    transform: rotate(21deg);\n    top: 22%;\n    filter: url(\"#scatter\");\n    box-shadow: inset 0 0 0.1vmin 0.2vmin rgba(53, 33, 13, 0.2);\n}\n#foam2 {\n    top: -7%;\n    left: 14%;\n    transform: rotate(53deg);\n    width: 6%;\n}\n#foam3 {\n    top: -21%;\n    left: 43%;\n    transform: rotate(75deg);\n}\n#foam4 {\n    top: -20%;\n    left: 46%;\n    transform: rotate(105deg);\n}\n#foam5 {\n    top: -9%;\n    left: 70%;\n    transform: rotate(122deg);\n    height: 30%;\n}\n#foam6 {\n    top: 8%;\n    left: 98%;\n    transform: rotate(152deg);\n    height: 60%;\n    width: 5%;\n}\n#foam7 {\n    top: 20%;\n    left: 97%;\n    transform: rotate(181deg);\n    height: 60%;\n    width: 5%;\n}\n#foam8 {\n    top: 51%;\n    left: 96%;\n    transform: rotate(211deg);\n    height: 40%;\n    width: 5%;\n}\n#foam9 {\n    top: 62%;\n    left: 70%;\n    transform: rotate(224deg);\n    height: 80%;\n    width: 5%;\n}\n#foam10 {\n    top: 72%;\n    left: 62%;\n    transform: rotate(74deg);\n    height: 50%;\n    width: 5%;\n}\n#foam11 {\n    top: 59%;\n    left: 51%;\n    transform: rotate(104deg);\n    height: 80%;\n    width: 4%;\n}\n#foam12 {\n    top: 44%;\n    left: 9%;\n    transform: rotate(124deg);\n    height: 80%;\n    width: 4%;\n}\n#foam13 {\n    top: 7%;\n    left: -6%;\n    transform: rotate(-26deg);\n    height: 80%;\n    width: 4%;\n}\n@keyframes foamMiddleAnimation {\n    0% {\n        transform: translate(0%, 0%);\n   }\n    10% {\n        transform: translate(0%, 0%);\n   }\n    50% {\n        transform: translate(45%, 20%);\n   }\n    90% {\n        transform: translate(45%, 20%);\n   }\n    100% {\n        transform: translate(45%, 20%);\n   }\n}\n#foamMiddleWrapper {\n    animation-name: foamMiddleAnimation;\n    animation-duration: 10s;\n    animation-direction: normal;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    will-change: transform, opacity;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n   /* deactivate animations for safari because it's the new IE */\n}\n/* @media not all and (min-resolution: 0.001dpcm) {\n    @supports (-webkit-appearance:none) {\n        animation-name: none;\n        animation-duration: inherit;\n        animation-timing-function: inherit;\n        will-change: inherit;\n   }\n} */\n@keyframes foamMiddleContainerAnimation {\n    0% {\n        transform: rotate(0);\n   }\n    55% {\n        transform: rotate(30deg);\n   }\n    90% {\n        transform: rotate(30deg);\n   }\n    100% {\n        opacity: 0;\n   }\n}\n#foamMiddleContainer {\n    animation-name: foamMiddleContainerAnimation;\n    animation-duration: 10s;\n    animation-direction: normal;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    will-change: transform, opacity;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n   /* deactivate animations for safari because it's the new IE */\n}\n/* @media not all and (min-resolution: 0.001dpcm) {\n    @supports (-webkit-appearance:none) {\n        animation-name: none;\n        animation-duration: inherit;\n        animation-timing-function: inherit;\n        will-change: inherit;\n   }\n} */\n.foamMiddle {\n    background-color: #f8c99d;\n    width: 13%;\n    height: 18%;\n    border-radius: 50%;\n    position: absolute;\n    left: 40%;\n    transform: rotate(21deg);\n    top: 40%;\n    filter: url(#scatter);\n    box-shadow: inset 0 0 0.1vmin 0.2vmin rgba(53, 33, 13, 0.2);\n}\n#foamMiddle2 {\n    transform: rotate(-49deg);\n    width: 10%;\n    left: 47%;\n}\n@keyframes bubbleMiddle1Animation {\n    0% {\n        transform: scale(1) translate(0%, 0%);\n   }\n    35% {\n        transform: scale(1) translate(60%, 40%);\n   }\n    45% {\n        transform: scale(0) translate(60%, 40%);\n   }\n    100% {\n        transform: scale(0) translate(60%, 40%);\n   }\n}\n#bubbleMiddle1 {\n    left: 50%;\n    top: 48%;\n    width: 7%;\n    height: 7%;\n    animation-name: bubbleMiddle1Animation;\n    animation-duration: 10s;\n    animation-direction: normal;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    will-change: transform;\n   /* deactivate animations for safari because it's the new IE */\n}\n/* @media not all and (min-resolution: 0.001dpcm) {\n    @supports (-webkit-appearance:none) {\n        animation-name: none;\n        animation-duration: inherit;\n        animation-timing-function: inherit;\n        will-change: inherit;\n   }\n} */\n@keyframes bubbleMiddle2Animation {\n    0% {\n        transform: scale(1) translate(0%, 0%);\n   }\n    39% {\n        transform: scale(1) translate(10%, 10%);\n   }\n    49% {\n        transform: scale(0) translate(10%, 10%);\n   }\n    100% {\n        transform: scale(0) translate(10%, 10%);\n   }\n}\n#bubbleMiddle2 {\n    left: 44%;\n    top: 40%;\n    width: 6%;\n    height: 7%;\n    transform: rotate(50deg);\n    animation-name: bubbleMiddle2Animation;\n    animation-duration: 10s;\n    animation-direction: normal;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    will-change: transform;\n   /* deactivate animations for safari because it's the new IE */\n}\n/* @media not all and (min-resolution: 0.001dpcm) {\n    @supports (-webkit-appearance:none) {\n        animation-name: none;\n        animation-duration: inherit;\n        animation-timing-function: inherit;\n        will-change: inherit;\n   }\n} */\n@keyframes bubbleMiddle3Animation {\n    0% {\n        transform: scale(1) translate(0%, 0%);\n   }\n    45% {\n        transform: scale(1) translate(0%, 0%);\n   }\n    55% {\n        transform: scale(0) translate(0%, 0%);\n   }\n    100% {\n        transform: scale(0) translate(50%, -40%);\n   }\n}\n#bubbleMiddle3 {\n    left: 41%;\n    top: 49%;\n    width: 7%;\n    height: 8%;\n    transform: rotate(36deg);\n    animation-name: bubbleMiddle3Animation;\n    animation-duration: 10s;\n    animation-direction: normal;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    will-change: transform;\n   /* deactivate animations for safari because it's the new IE */\n}\n/* @media not all and (min-resolution: 0.001dpcm) {\n    @supports (-webkit-appearance:none) {\n        animation-name: none;\n        animation-duration: inherit;\n        animation-timing-function: inherit;\n   }\n} */\n#bubbleMiddle4 {\n    left: 51%;\n    top: 45%;\n    width: 2%;\n    height: 2%;\n    transform: rotate(36deg);\n}\n.bubble {\n    width: 5%;\n    height: 7%;\n    border-radius: 50%;\n    background-color: #35210d;\n    position: absolute;\n    top: 40%;\n    left: 2%;\n    box-shadow: 0vmin 0vmin 0.1vmin 0vmin #35210d, inset 0 0 0.5vmin 0.2vmin #662e22;\n}\n.bubble:after {\n    display: block;\n    content: '';\n    width: 25%;\n    height: 25%;\n    border-radius: 50%;\n    background-color: #fff;\n    position: absolute;\n    right: 23%;\n    top: 12%;\n    transform: rotate(-20deg);\n    box-shadow: 0vmin 0vmin 0.3vmin 0vmin #fff;\n}\n#bubble2 {\n    left: 5%;\n    top: 30%;\n    transform: rotate(25deg);\n}\n#bubble3 {\n    left: 8%;\n    top: 23%;\n    transform: rotate(39deg);\n    width: 3%;\n    height: 5%;\n}\n#bubble4 {\n    left: 94%;\n    top: 43%;\n    transform: rotate(-10deg);\n    width: 5%;\n    height: 7%;\n}\n#bubble5 {\n    left: 95%;\n    top: 37%;\n    transform: rotate(-17deg);\n    width: 3%;\n    height: 4%;\n}\n#bubble6 {\n    left: 39%;\n    top: 0%;\n    transform: rotate(76deg);\n    width: 6%;\n    height: 9%;\n}\n#bubble7 {\n    left: 60%;\n    top: 1%;\n    transform: rotate(106deg);\n    width: 4%;\n    height: 7%;\n}\n#bubble8 {\n    left: 35%;\n    top: 91%;\n    transform: rotate(106deg);\n    width: 4%;\n    height: 7%;\n}\n#bubble9 {\n    left: 4%;\n    top: 63%;\n    transform: rotate(-23deg);\n    width: 5%;\n    height: 7%;\n}\n#bubble10 {\n    left: 2%;\n    top: 58%;\n    transform: rotate(-18deg);\n    width: 3%;\n    height: 4%;\n}\n#bubble11 {\n    left: 63%;\n    top: 91%;\n    transform: rotate(72deg);\n    width: 4%;\n    height: 6%;\n}\n#bubble12 {\n    left: 31%;\n    top: 3%;\n    transform: rotate(68deg);\n    width: 4%;\n    height: 6%;\n}\n#bubble13 {\n    left: 21%;\n    top: 85%;\n    transform: rotate(118deg);\n    width: 4%;\n    height: 6%;\n}\n#bubble14 {\n    left: 95%;\n    top: 53%;\n    transform: rotate(373deg);\n    width: 4%;\n    height: 6%;\n}\n#bubble15 {\n    left: 50%;\n    top: 0%;\n    transform: rotate(96deg);\n    width: 3%;\n    height: 5%;\n}\n.bubbleSmall {\n    width: 1%;\n    height: 2%;\n    border-radius: 50%;\n    background-color: #35210d;\n    position: absolute;\n    top: 48%;\n    left: 1%;\n    box-shadow: 0vmin 0vmin 0.1vmin 0vmin #35210d, inset 0 0 0.5vmin 0.2vmin #662e22;\n}\n.bubbleSmall:after {\n    display: block;\n    content: '';\n    width: 25%;\n    height: 25%;\n    border-radius: 50%;\n    background-color: #fff;\n    position: absolute;\n    right: 23%;\n    top: 12%;\n    transform: rotate(-20deg);\n    box-shadow: 0vmin 0vmin 0.3vmin 0vmin #fff;\n    opacity: 0.8;\n}\n#bubbleSmall2 {\n    left: 3%;\n    top: 37%;\n    height: 1%;\n}\n#bubbleSmall3 {\n    left: 6%;\n    top: 28%;\n    height: 1%;\n}\n#bubbleSmall4 {\n    left: 96%;\n    top: 35%;\n    height: 1%;\n}\n#bubbleSmall5 {\n    left: 60%;\n    top: 96%;\n    height: 1%;\n}\n#bubbleSmall6 {\n    left: 8%;\n    top: 72%;\n    height: 1%;\n}\n#innerShadow {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    position: absolute;\n    background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.22) 100%);\n}\n#glow {\n    width: 80%;\n    height: 80%;\n    border-radius: 50%;\n    background: linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.26) 90%, rgba(255, 255, 255, 0.9) 100%);\n    position: absolute;\n    z-index: 10;\n}\n@keyframes steamAnimation {\n    0% {\n        transform: translate(30%, -70%);\n        opacity: 0;\n   }\n    50% {\n        opacity: 0.3;\n   }\n    100% {\n        transform: translate(60%, -90%);\n        opacity: 0;\n   }\n}\n#steamWrapper {\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n    z-index: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#steam {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    box-shadow: -156px 492px 123px -252px #fff;\n    filter: url(#fog);\n    min-width: 600px;\n    min-height: 600px;\n    animation-name: steamAnimation;\n    animation-duration: 4s;\n    animation-direction: normal;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n    will-change: transform, opacity;\n}\n@media (max-width: 600px) {\n    #steam {\n        top: -80%;\n        box-shadow: -156px 492px 123px -252px #fff;\n   }\n}\n@media (max-width: 480px) {\n    #steam {\n        top: -160%;\n        box-shadow: -166px 492px 53px -272px #fff;\n   }\n}\n",""]);const o=a},136:(n,t,e)=>{e.d(t,{Z:()=>o});var i=e(645),a=e.n(i)()((function(n){return n[1]}));a.push([n.id,".box {\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    width: 100px;\n    height: 100px;\n    margin: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n}\n\n\n.red {\n    color: khaki;\n    background-color: red;\n}\n\n.gold {\n    color: black;\n    background-color: gold;\n}\n\n.orange {\n    color: black;\n    background-color: darkorange;\n}\n\nh1 {\n    color: white;\n}\n",""]);const o=a},556:(n,t,e)=>{e.d(t,{Z:()=>o});var i=e(645),a=e.n(i)()((function(n){return n[1]}));a.push([n.id,"div.container {\n    width: 100vw;\n    height: 100vh;\n    background-color:#4e342e;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}",""]);const o=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&a[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},695:n=>{var t={};n.exports=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}},379:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var o={},r=[],s=0;s<n.length;s++){var l=n[s],d=i.base?l[0]+i.base:l[0],m=o[d]||0,f="".concat(d," ").concat(m);o[d]=m+1;var c=e(f),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==c?(t[c].references++,t[c].updater(h)):t.push({identifier:f,updater:a(h,i),references:1}),r.push(f)}return r}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var s=e(o[r]);t[s].references--}for(var l=i(n,a),d=0;d<o.length;d++){var m=e(o[d]);0===t[m].references&&(t[m].updater(),t.splice(m,1))}o=l}}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t),t}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i=e.css,a=e.media,o=e.sourceMap;a?n.setAttribute("media",a):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,n)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}}},t={};function e(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={id:i,exports:{}};return n[i](o,o.exports,e),o.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=function(){return(n=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var a in t=arguments[e])Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}).apply(this,arguments)};function t(n){return n.toLowerCase()}Object.create,Object.create;var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],a=/[^A-Z0-9]+/gi;function o(n,t,e){return t instanceof RegExp?n.replace(t,e):t.reduce((function(n,t){return n.replace(t,e)}),n)}function r(n,t){var e=n.charAt(0),i=n.substr(1).toLowerCase();return t>0&&e>="0"&&e<="9"?"_"+e+i:""+e.toUpperCase()+i}var s=e(379),l=e.n(s),d=e(795),m=e.n(d),f=e(695),c=e.n(f),h=e(216),u=e.n(h),b=e(383),p={styleTagTransform:function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}},setAttributes:function(n){var t=e.nc;t&&n.setAttribute("nonce",t)},insert:function(n){var t=c()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}};p.domAPI=m(),p.insertStyleElement=u(),l()(b.Z,p),b.Z&&b.Z.locals&&b.Z.locals;var g=e(136),v={styleTagTransform:function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}},setAttributes:function(n){var t=e.nc;t&&n.setAttribute("nonce",t)},insert:function(n){var t=c()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}};v.domAPI=m(),v.insertStyleElement=u(),l()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var w=e(556),x={styleTagTransform:function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}},setAttributes:function(n){var t=e.nc;t&&n.setAttribute("nonce",t)},insert:function(n){var t=c()("head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}};x.domAPI=m(),x.insertStyleElement=u(),l()(w.Z,x),w.Z&&w.Z.locals&&w.Z.locals,document.getElementById("title").innerHTML=function(e,s){return void 0===s&&(s={}),function(n,e){void 0===e&&(e={});for(var r=e.splitRegexp,s=void 0===r?i:r,l=e.stripRegexp,d=void 0===l?a:l,m=e.transform,f=void 0===m?t:m,c=e.delimiter,h=void 0===c?" ":c,u=o(o("This text requires a module to run",s,"$1\0$2"),d,"\0"),b=0,p=u.length;"\0"===u.charAt(b);)b++;for(;"\0"===u.charAt(p-1);)p--;return u.slice(b,p).split("\0").map(f).join(h)}(0,n({delimiter:"",transform:r},s))}()})()})();