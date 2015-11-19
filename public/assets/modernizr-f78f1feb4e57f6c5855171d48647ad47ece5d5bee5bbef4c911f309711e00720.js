/*!
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(e,t,n){function i(e){T.cssText=e}function o(e,t){return i(I.join(e+";")+(t||""))}function r(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var i in e){var o=e[i];if(!a(o,"-")&&T[o]!==n)return"pfx"==t?o:!0}return!1}function l(e,t,i){for(var o in e){var a=t[e[o]];if(a!==n)return i===!1?e[o]:r(a,"function")?a.bind(i||t):a}return!1}function c(e,t,n){var i=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+D.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?s(o,t):(o=(e+" "+R.join(i+" ")+i).split(" "),l(o,t,n))}function d(){m.input=function(n){for(var i=0,o=n.length;o>i;i++)x[n[i]]=!!(n[i]in C);return x.list&&(x.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),x}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var i,o,r,a=0,s=e.length;s>a;a++)C.setAttribute("type",o=e[a]),i="text"!==C.type,i&&(C.value=b,C.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&C.style.WebkitAppearance!==n?(p.appendChild(C),r=t.defaultView,i=r.getComputedStyle&&"textfield"!==r.getComputedStyle(C,null).WebkitAppearance&&0!==C.offsetHeight,p.removeChild(C)):/^(search|tel)$/.test(o)||(i=/^(url|email)$/.test(o)?C.checkValidity&&C.checkValidity()===!1:C.value!=b)),K[e[a]]=!!i;return K}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u,f,h="2.7.1",m={},g=!0,p=t.documentElement,E="modernizr",v=t.createElement(E),T=v.style,C=t.createElement("input"),b=":)",y={}.toString,I=" -webkit- -moz- -o- -ms- ".split(" "),O="Webkit Moz O ms",D=O.split(" "),R=O.toLowerCase().split(" "),_={svg:"http://www.w3.org/2000/svg"},k={},K={},x={},w=[],S=w.slice,N=function(e,n,i,o){var r,a,s,l,c=t.createElement("div"),d=t.body,u=d||t.createElement("body");if(parseInt(i,10))for(;i--;)s=t.createElement("div"),s.id=o?o[i]:E+(i+1),c.appendChild(s);return r=["&#173;",'<style id="s',E,'">',e,"</style>"].join(""),c.id=E,(d?c:u).innerHTML+=r,u.appendChild(c),d||(u.style.background="",u.style.overflow="hidden",l=p.style.overflow,p.style.overflow="hidden",p.appendChild(u)),a=n(c,e),d?c.parentNode.removeChild(c):(u.parentNode.removeChild(u),p.style.overflow=l),!!a},A=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var i;return N("@media "+t+" { #"+E+" { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),i},L=function(){function e(e,o){o=o||t.createElement(i[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=r(o[e],"function"),r(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),B={}.hasOwnProperty;f=r(B,"undefined")||r(B.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(e,t){return B.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=S.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=t.prototype;var r=new o,a=t.apply(r,n.concat(S.call(arguments)));return Object(a)===a?a:r}return t.apply(e,n.concat(S.call(arguments)))};return i}),k.flexbox=function(){return c("flexWrap")},k.flexboxlegacy=function(){return c("boxDirection")},k.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},k.canvastext=function(){return!(!m.canvas||!r(t.createElement("canvas").getContext("2d").fillText,"function"))},k.webgl=function(){return!!e.WebGLRenderingContext},k.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:N(["@media (",I.join("touch-enabled),("),E,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},k.geolocation=function(){return"geolocation"in navigator},k.postmessage=function(){return!!e.postMessage},k.websqldatabase=function(){return!!e.openDatabase},k.indexedDB=function(){return!!c("indexedDB",e)},k.hashchange=function(){return L("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},k.history=function(){return!(!e.history||!history.pushState)},k.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},k.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},k.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),a(T.backgroundColor,"rgba")},k.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),a(T.backgroundColor,"rgba")||a(T.backgroundColor,"hsla")},k.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(T.background)},k.backgroundsize=function(){return c("backgroundSize")},k.borderimage=function(){return c("borderImage")},k.borderradius=function(){return c("borderRadius")},k.boxshadow=function(){return c("boxShadow")},k.textshadow=function(){return""===t.createElement("div").style.textShadow},k.opacity=function(){return o("opacity:.55"),/^0.55$/.test(T.opacity)},k.cssanimations=function(){return c("animationName")},k.csscolumns=function(){return c("columnCount")},k.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((e+"-webkit- ".split(" ").join(t+e)+I.join(n+e)).slice(0,-e.length)),a(T.backgroundImage,"gradient")},k.cssreflections=function(){return c("boxReflect")},k.csstransforms=function(){return!!c("transform")},k.csstransforms3d=function(){var e=!!c("perspective");return e&&"webkitPerspective"in p.style&&N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},k.csstransitions=function(){return c("transition")},k.fontface=function(){var e;return N('@font-face {font-family:"font";src:url("https://")}',function(n,i){var o=t.getElementById("smodernizr"),r=o.sheet||o.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(i.split(" ")[0])}),e},k.generatedcontent=function(){var e;return N(["#",E,"{font:0/0 a}#",E,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},k.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},k.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},k.localstorage=function(){try{return localStorage.setItem(E,E),localStorage.removeItem(E),!0}catch(e){return!1}},k.sessionstorage=function(){try{return sessionStorage.setItem(E,E),sessionStorage.removeItem(E),!0}catch(e){return!1}},k.webworkers=function(){return!!e.Worker},k.applicationcache=function(){return!!e.applicationCache},k.svg=function(){return!!t.createElementNS&&!!t.createElementNS(_.svg,"svg").createSVGRect},k.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==_.svg},k.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(y.call(t.createElementNS(_.svg,"animate")))},k.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(y.call(t.createElementNS(_.svg,"clipPath")))};for(var P in k)f(k,P)&&(u=P.toLowerCase(),m[u]=k[P](),w.push((m[u]?"":"no-")+u));return m.input||d(),m.addTest=function(e,t){if("object"==typeof e)for(var i in e)f(e,i)&&m.addTest(i,e[i]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof g&&g&&(p.className+=" "+(t?"":"no-")+e),m[e]=t}return m},i(""),v=C=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=E[e[g]];return t||(t={},p++,e[g]=p,E[p]=t),t}function r(e,n,i){if(n||(n=t),d)return n.createElement(e);i||(i=o(n));var r;return r=i.cache[e]?i.cache[e].cloneNode():m.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),!r.canHaveChildren||h.test(e)||r.tagUrn?r:i.frag.appendChild(r)}function a(e,n){if(e||(e=t),d)return e.createDocumentFragment();n=n||o(e);for(var r=n.frag.cloneNode(),a=0,s=i(),l=s.length;l>a;a++)r.createElement(s[a]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t);var i=o(e);return!v.shivCSS||c||i.hasCSS||(i.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||s(e,i),e}var c,d,u="3.7.0",f=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",p=0,E={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,d=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:f.shivCSS!==!1,supportsUnknownElements:d,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:a};e.html5=v,l(t)}(this,t),m._version=h,m._prefixes=I,m._domPrefixes=R,m._cssomPrefixes=D,m.mq=A,m.hasEvent=L,m.testProp=function(e){return s([e])},m.testAllProps=c,m.testStyles=N,m.prefixed=function(e,t,n){return t?c(e,t,n):c(e,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+w.join(" "):""),m}(this,this.document);