(()=>{"use strict";var e=function(){return(e=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};function r(e){return e.toLowerCase()}Object.create,Object.create;var t,n=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function i(e,r,t){return r instanceof RegExp?e.replace(r,t):r.reduce((function(e,r){return e.replace(r,t)}),e)}document.getElementById("title").innerHTML=(void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var a=t.splitRegexp,c=void 0===a?n:a,s=t.stripRegexp,u=void 0===s?o:s,l=t.transform,p=void 0===l?r:l,f=t.delimiter,v=void 0===f?" ":f,d=i(i("Hello I am here!",c,"$1\0$2"),u,"\0"),g=0,h=d.length;"\0"===d.charAt(g);)g++;for(;"\0"===d.charAt(h-1);)h--;return d.slice(g,h).split("\0").map(p).join(v)}(0,e({delimiter:"",transform:function(e,r){var t=e.charAt(0),n=e.substr(1).toLowerCase();return r>0&&t>="0"&&t<="9"?"_"+t+n:""+t.toUpperCase()+n}},t)))})();