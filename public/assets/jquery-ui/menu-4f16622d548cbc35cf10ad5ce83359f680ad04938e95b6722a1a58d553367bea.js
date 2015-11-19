/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,i){var r,a,o,s=t.nodeName.toLowerCase();return"area"===s?(r=t.parentNode,a=r.name,t.href&&a&&"map"===r.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&n(o)):!1):(/^(input|select|textarea|button|object)$/.test(s)?!t.disabled:"a"===s?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var n=this.css("position"),i="absolute"===n,r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return i&&"static"===t.css("position")?!1:r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])},focusable:function(n){return t(n,!isNaN(e.attr(n,"tabindex")))},tabbable:function(n){var i=e.attr(n,"tabindex"),r=isNaN(i);return(r||i>=0)&&t(n,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,n){function i(t,n,i,a){return e.each(r,function(){n-=parseFloat(e.css(t,"padding"+this))||0,i&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var r="Width"===n?["Left","Right"]:["Top","Bottom"],a=n.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(t){return void 0===t?o["inner"+n].call(this):this.each(function(){e(this).css(a,i(this,t)+"px")})},e.fn["outer"+n]=function(t,r){return"number"!=typeof t?o["outer"+n].call(this,t):this.each(function(){e(this).css(a,i(this,t,!0,r)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(n,i){return"number"==typeof n?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),i&&i.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var n,i,r=e(this[0]);r.length&&r[0]!==document;){if(n=r.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(i=parseInt(r.css("zIndex"),10),!isNaN(i)&&0!==i))return i;r=r.parent()}return 0}}),e.ui.plugin={add:function(t,n,i){var r,a=e.ui[t].prototype;for(r in i)a.plugins[r]=a.plugins[r]||[],a.plugins[r].push([n,i[r]])},call:function(e,t,n,i){var r,a=e.plugins[t];if(a&&(i||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(r=0;r<a.length;r++)e.options[a[r][0]]&&a[r][1].apply(e.element,n)}}}),/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var i,r,a;for(a=0;null!=(r=n[a]);a++)try{i=e._data(r,"events"),i&&i.remove&&e(r).triggerHandler("remove")}catch(o){}t(n)}}(e.cleanData),e.widget=function(t,n,i){var r,a,o,s,l={},c=t.split(".")[0];return t=t.split(".")[1],r=c+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[c]=e[c]||{},a=e[c][t],o=e[c][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new o(e,t)},e.extend(o,a,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),s=new n,s.options=e.widget.extend({},s.options),e.each(i,function(t,i){return e.isFunction(i)?void(l[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t,n=this._super,a=this._superApply;return this._super=e,this._superApply=r,t=i.apply(this,arguments),this._super=n,this._superApply=a,t}}()):void(l[t]=i)}),o.prototype=e.widget.extend(s,{widgetEventPrefix:a?s.widgetEventPrefix||t:t},l,{constructor:o,namespace:c,widgetName:t,widgetFullName:r}),a?(e.each(a._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,o,n._proto)}),delete a._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,r,a=n.call(arguments,1),o=0,s=a.length;s>o;o++)for(i in a[o])r=a[o][i],a[o].hasOwnProperty(i)&&void 0!==r&&(e.isPlainObject(r)?t[i]=e.isPlainObject(t[i])?e.widget.extend({},t[i],r):e.widget.extend({},r):t[i]=r);return t},e.widget.bridge=function(t,i){var r=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,s=n.call(arguments,1),l=this;return o?this.each(function(){var n,i=e.data(this,r);return"instance"===a?(l=i,!1):i?e.isFunction(i[a])&&"_"!==a.charAt(0)?(n=i[a].apply(i,s),n!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+a+"'")}):(s.length&&(a=e.widget.extend.apply(null,[a].concat(s))),this.each(function(){var t=e.data(this,r);t?(t.option(a||{}),t._init&&t._init()):e.data(this,r,new i(a,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i,r,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},i=t.split("."),t=i.shift(),i.length){for(r=o[t]=e.widget.extend({},this.options[t]),a=0;a<i.length-1;a++)r[i[a]]=r[i[a]]||{},r=r[i[a]];if(t=i.pop(),1===arguments.length)return void 0===r[t]?null:r[t];r[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=n}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,i){var r,a=this;"boolean"!=typeof t&&(i=n,n=t,t=!1),i?(n=r=e(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,r=this.widget()),e.each(i,function(i,o){function s(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(s.guid=o.guid=o.guid||s.guid||e.guid++);var l=i.match(/^([\w:-]*)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?r.delegate(u,c,s):n.bind(c,s)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return("string"==typeof e?i[e]:e).apply(i,arguments)}var i=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,i){var r,a,o=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],a=n.originalEvent)for(r in a)r in n||(n[r]=a[r]);return this.element.trigger(n,i),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,r,a){"string"==typeof r&&(r={effect:r});var o,s=r?r===!0||"number"==typeof r?n:r.effect||n:t;r=r||{},"number"==typeof r&&(r={duration:r}),o=!e.isEmptyObject(r),r.complete=a,r.delay&&i.delay(r.delay),o&&e.effects&&e.effects.effect[s]?i[t](r):s!==t&&i[s]?i[s](r.duration,r.easing,a):i.queue(function(n){e(this)[t](),a&&a.call(i[0]),n()})}}),e.widget}),/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){return function(){function t(e,t,n){return[parseFloat(e[0])*(f.test(e[0])?t/100:1),parseFloat(e[1])*(f.test(e[1])?n/100:1)]}function n(t,n){return parseInt(e.css(t,n),10)||0}function i(t){var n=t[0];return 9===n.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var r,a,o=Math.max,s=Math.abs,l=Math.round,c=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,f=/%$/,p=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==r)return r;var t,n,i=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=i.children()[0];return e("body").append(i),t=a.offsetWidth,i.css("overflow","scroll"),n=a.offsetWidth,t===n&&(n=i[0].clientWidth),i.remove(),r=t-n},getScrollInfo:function(t){var n=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),r="scroll"===n||"auto"===n&&t.width<t.element[0].scrollWidth,a="scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:r?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),i=e.isWindow(n[0]),r=!!n[0]&&9===n[0].nodeType;return{element:n,isWindow:i,isDocument:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:i||r?n.width():n.outerWidth(),height:i||r?n.height():n.outerHeight()}}},e.fn.position=function(r){if(!r||!r.of)return p.apply(this,arguments);r=e.extend({},r);var f,m,g,v,y,b,_=e(r.of),x=e.position.getWithinInfo(r.within),w=e.position.getScrollInfo(x),k=(r.collision||"flip").split(" "),C={};return b=i(_),_[0].preventDefault&&(r.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,n=(r[this]||"").split(" ");1===n.length&&(n=c.test(n[0])?n.concat(["center"]):u.test(n[0])?["center"].concat(n):["center","center"]),n[0]=c.test(n[0])?n[0]:"center",n[1]=u.test(n[1])?n[1]:"center",e=d.exec(n[0]),t=d.exec(n[1]),C[this]=[e?e[0]:0,t?t[0]:0],r[this]=[h.exec(n[0])[0],h.exec(n[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===r.at[0]?y.left+=m:"center"===r.at[0]&&(y.left+=m/2),"bottom"===r.at[1]?y.top+=g:"center"===r.at[1]&&(y.top+=g/2),f=t(C.at,m,g),y.left+=f[0],y.top+=f[1],this.each(function(){var i,c,u=e(this),d=u.outerWidth(),h=u.outerHeight(),p=n(this,"marginLeft"),b=n(this,"marginTop"),S=d+p+n(this,"marginRight")+w.width,T=h+b+n(this,"marginBottom")+w.height,j=e.extend({},y),N=t(C.my,u.outerWidth(),u.outerHeight());"right"===r.my[0]?j.left-=d:"center"===r.my[0]&&(j.left-=d/2),"bottom"===r.my[1]?j.top-=h:"center"===r.my[1]&&(j.top-=h/2),j.left+=N[0],j.top+=N[1],a||(j.left=l(j.left),j.top=l(j.top)),i={marginLeft:p,marginTop:b},e.each(["left","top"],function(t,n){e.ui.position[k[t]]&&e.ui.position[k[t]][n](j,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:h,collisionPosition:i,collisionWidth:S,collisionHeight:T,offset:[f[0]+N[0],f[1]+N[1]],my:r.my,at:r.at,within:x,elem:u})}),r.using&&(c=function(e){var t=v.left-j.left,n=t+m-d,i=v.top-j.top,a=i+g-h,l={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:j.left,top:j.top,width:d,height:h},horizontal:0>n?"left":t>0?"right":"center",vertical:0>a?"top":i>0?"bottom":"middle"};d>m&&s(t+n)<m&&(l.horizontal="center"),h>g&&s(i+a)<g&&(l.vertical="middle"),o(s(t),s(n))>o(s(i),s(a))?l.important="horizontal":l.important="vertical",r.using.call(this,e,l)}),u.offset(e.extend(j,{using:c}))})},e.ui.position={fit:{left:function(e,t){var n,i=t.within,r=i.isWindow?i.scrollLeft:i.offset.left,a=i.width,s=e.left-t.collisionPosition.marginLeft,l=r-s,c=s+t.collisionWidth-a-r;t.collisionWidth>a?l>0&&0>=c?(n=e.left+l+t.collisionWidth-a-r,e.left+=l-n):c>0&&0>=l?e.left=r:l>c?e.left=r+a-t.collisionWidth:e.left=r:l>0?e.left+=l:c>0?e.left-=c:e.left=o(e.left-s,e.left)},top:function(e,t){var n,i=t.within,r=i.isWindow?i.scrollTop:i.offset.top,a=t.within.height,s=e.top-t.collisionPosition.marginTop,l=r-s,c=s+t.collisionHeight-a-r;t.collisionHeight>a?l>0&&0>=c?(n=e.top+l+t.collisionHeight-a-r,e.top+=l-n):c>0&&0>=l?e.top=r:l>c?e.top=r+a-t.collisionHeight:e.top=r:l>0?e.top+=l:c>0?e.top-=c:e.top=o(e.top-s,e.top)}},flip:{left:function(e,t){var n,i,r=t.within,a=r.offset.left+r.scrollLeft,o=r.width,l=r.isWindow?r.scrollLeft:r.offset.left,c=e.left-t.collisionPosition.marginLeft,u=c-l,d=c+t.collisionWidth-o-l,h="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,f="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,p=-2*t.offset[0];0>u?(n=e.left+h+f+p+t.collisionWidth-o-a,(0>n||n<s(u))&&(e.left+=h+f+p)):d>0&&(i=e.left-t.collisionPosition.marginLeft+h+f+p-l,(i>0||s(i)<d)&&(e.left+=h+f+p))},top:function(e,t){var n,i,r=t.within,a=r.offset.top+r.scrollTop,o=r.height,l=r.isWindow?r.scrollTop:r.offset.top,c=e.top-t.collisionPosition.marginTop,u=c-l,d=c+t.collisionHeight-o-l,h="top"===t.my[1],f=h?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,p="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(i=e.top+f+p+m+t.collisionHeight-o-a,(0>i||i<s(u))&&(e.top+=f+p+m)):d>0&&(n=e.top-t.collisionPosition.marginTop+f+p+m-l,(n>0||s(n)<d)&&(e.top+=f+p+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,i,r,o,s=document.getElementsByTagName("body")[0],l=document.createElement("div");t=document.createElement(s?"div":"body"),i={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},s&&e.extend(i,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in i)t.style[o]=i[o];t.appendChild(l),n=s||document.documentElement,n.insertBefore(t,n.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",r=e(l).offset().left,a=r>10&&11>r,t.innerHTML="",n.removeChild(t)}()}(),e.ui.position}),/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position"],e):e(jQuery)}(function(e){return e.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var n=e(t.target);!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),n.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var n=e(t.currentTarget);n.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var n,i,r,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,i=this.previousFilter||"",r=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),r===i?a=!0:r=i+r,n=this._filterMenuItems(r),n=a&&-1!==n.index(this.active.next())?this.active.nextAll(".ui-menu-item"):n,n.length||(r=String.fromCharCode(t.keyCode),n=this._filterMenuItems(r)),n.length?(this.focus(t,n),this.previousFilter=r,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,n,i=this,r=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),n=t.parent(),i=e("<span>").addClass("ui-menu-icon ui-icon "+r).data("ui-menu-submenu-carat",!0);n.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",n.attr("id"))}),t=a.add(this.element),n=t.find(this.options.items),n.not(".ui-menu-item").each(function(){var t=e(this);i._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),n.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var n,i;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),i=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",i.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&e&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,i,r,a,o,s;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,i=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,r=t.offset().top-this.activeMenu.offset().top-n-i,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),s=t.outerHeight(),0>r?this.activeMenu.scrollTop(a+r):r+s>o&&this.activeMenu.scrollTop(a+r-o+s))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var i=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));i.length||(i=this.element),this._close(i),this.blur(t),this.activeMenu=i},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var i;this.active&&(i="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),i&&i.length&&this.active||(i=this.activeMenu.find(this.options.items)[t]()),this.focus(n,i)},nextPage:function(t){var n,i,r;return this.active?void(this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,r=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-i-r<0}),this.focus(t,n)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]()))):void this.next(t)},previousPage:function(t){var n,i,r;return this.active?void(this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,r=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-i+r>0}),this.focus(t,n)):this.focus(t,this.activeMenu.find(this.options.items).first()))):void this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)},_filterMenuItems:function(t){var n=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),i=new RegExp("^"+n,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return i.test(e.trim(e(this).text()))})}})});