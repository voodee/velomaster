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
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,i){var r,a,s,o=t.nodeName.toLowerCase();return"area"===o?(r=t.parentNode,a=r.name,t.href&&a&&"map"===r.nodeName.toLowerCase()?(s=e("img[usemap='#"+a+"']")[0],!!s&&n(s)):!1):(/^(input|select|textarea|button|object)$/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var n=this.css("position"),i="absolute"===n,r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return i&&"static"===t.css("position")?!1:r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==n&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])},focusable:function(n){return t(n,!isNaN(e.attr(n,"tabindex")))},tabbable:function(n){var i=e.attr(n,"tabindex"),r=isNaN(i);return(r||i>=0)&&t(n,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,n){function i(t,n,i,a){return e.each(r,function(){n-=parseFloat(e.css(t,"padding"+this))||0,i&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var r="Width"===n?["Left","Right"]:["Top","Bottom"],a=n.toLowerCase(),s={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(t){return void 0===t?s["inner"+n].call(this):this.each(function(){e(this).css(a,i(this,t)+"px")})},e.fn["outer"+n]=function(t,r){return"number"!=typeof t?s["outer"+n].call(this,t):this.each(function(){e(this).css(a,i(this,t,!0,r)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(n,i){return"number"==typeof n?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),i&&i.call(t)},n)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var n,i,r=e(this[0]);r.length&&r[0]!==document;){if(n=r.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(i=parseInt(r.css("zIndex"),10),!isNaN(i)&&0!==i))return i;r=r.parent()}return 0}}),e.ui.plugin={add:function(t,n,i){var r,a=e.ui[t].prototype;for(r in i)a.plugins[r]=a.plugins[r]||[],a.plugins[r].push([n,i[r]])},call:function(e,t,n,i){var r,a=e.plugins[t];if(a&&(i||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(r=0;r<a.length;r++)e.options[a[r][0]]&&a[r][1].apply(e.element,n)}}}),/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t=0,n=Array.prototype.slice;return e.cleanData=function(t){return function(n){var i,r,a;for(a=0;null!=(r=n[a]);a++)try{i=e._data(r,"events"),i&&i.remove&&e(r).triggerHandler("remove")}catch(s){}t(n)}}(e.cleanData),e.widget=function(t,n,i){var r,a,s,o,l={},c=t.split(".")[0];return t=t.split(".")[1],r=c+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[c]=e[c]||{},a=e[c][t],s=e[c][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new s(e,t)},e.extend(s,a,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),o=new n,o.options=e.widget.extend({},o.options),e.each(i,function(t,i){return e.isFunction(i)?void(l[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t,n=this._super,a=this._superApply;return this._super=e,this._superApply=r,t=i.apply(this,arguments),this._super=n,this._superApply=a,t}}()):void(l[t]=i)}),s.prototype=e.widget.extend(o,{widgetEventPrefix:a?o.widgetEventPrefix||t:t},l,{constructor:s,namespace:c,widgetName:t,widgetFullName:r}),a?(e.each(a._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,s,n._proto)}),delete a._childConstructors):n._childConstructors.push(s),e.widget.bridge(t,s),s},e.widget.extend=function(t){for(var i,r,a=n.call(arguments,1),s=0,o=a.length;o>s;s++)for(i in a[s])r=a[s][i],a[s].hasOwnProperty(i)&&void 0!==r&&(e.isPlainObject(r)?t[i]=e.isPlainObject(t[i])?e.widget.extend({},t[i],r):e.widget.extend({},r):t[i]=r);return t},e.widget.bridge=function(t,i){var r=i.prototype.widgetFullName||t;e.fn[t]=function(a){var s="string"==typeof a,o=n.call(arguments,1),l=this;return s?this.each(function(){var n,i=e.data(this,r);return"instance"===a?(l=i,!1):i?e.isFunction(i[a])&&"_"!==a.charAt(0)?(n=i[a].apply(i,o),n!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+a+"'")}):(o.length&&(a=e.widget.extend.apply(null,[a].concat(o))),this.each(function(){var t=e.data(this,r);t?(t.option(a||{}),t._init&&t._init()):e.data(this,r,new i(a,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i,r,a,s=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(s={},i=t.split("."),t=i.shift(),i.length){for(r=s[t]=e.widget.extend({},this.options[t]),a=0;a<i.length-1;a++)r[i[a]]=r[i[a]]||{},r=r[i[a]];if(t=i.pop(),1===arguments.length)return void 0===r[t]?null:r[t];r[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=n}return this._setOptions(s),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,i){var r,a=this;"boolean"!=typeof t&&(i=n,n=t,t=!1),i?(n=r=e(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,r=this.widget()),e.each(i,function(i,s){function o(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof s?a[s]:s).apply(a,arguments):void 0}"string"!=typeof s&&(o.guid=s.guid=s.guid||o.guid||e.guid++);var l=i.match(/^([\w:-]*)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?r.delegate(u,c,o):n.bind(c,o)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return("string"==typeof e?i[e]:e).apply(i,arguments)}var i=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,i){var r,a,s=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],a=n.originalEvent)for(r in a)r in n||(n[r]=a[r]);return this.element.trigger(n,i),!(e.isFunction(s)&&s.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,r,a){"string"==typeof r&&(r={effect:r});var s,o=r?r===!0||"number"==typeof r?n:r.effect||n:t;r=r||{},"number"==typeof r&&(r={duration:r}),s=!e.isEmptyObject(r),r.complete=a,r.delay&&i.delay(r.delay),s&&e.effects&&e.effects.effect[o]?i[t](r):o!==t&&i[o]?i[o](r.duration,r.easing,a):i.queue(function(n){e(this)[t](),a&&a.call(i[0]),n()})}}),e.widget}),/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./widget"],e):e(jQuery)}(function(e){var t=!1;return e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){return!0===e.data(n.target,t.widgetName+".preventClickEvent")?(e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(n){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(n),this._mouseDownEvent=n;var i=this,r=1===n.which,a="string"==typeof this.options.cancel&&n.target.nodeName?e(n.target).closest(this.options.cancel).length:!1;return r&&!a&&this._mouseCapture(n)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(n)&&this._mouseDelayMet(n)&&(this._mouseStarted=this._mouseStart(n)!==!1,!this._mouseStarted)?(n.preventDefault(),!0):(!0===e.data(n.target,this.widgetName+".preventClickEvent")&&e.removeData(n.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),n.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(n){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,n.target===this._mouseDownEvent.target&&e.data(n.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(n)),t=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}),/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)}(function(e){return e.widget("ui.draggable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(t){var n=this.options;return this._blurActiveElement(t),this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(n.iframeFix===!0?"iframe":n.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var n=this.document[0];if(this.handleElement.is(t.target))try{n.activeElement&&"body"!==n.activeElement.nodeName.toLowerCase()&&e(n.activeElement).blur()}catch(i){}},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,n){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!n){var i=this._uiHash();if(this._trigger("drag",t,i)===!1)return this._mouseUp({}),!1;this.position=i.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n=this,i=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(i=e.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,i)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){n._trigger("stop",t)!==!1&&n._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var n=this.options,i=e.isFunction(n.helper),r=i?e(n.helper.apply(this.element[0],[t])):"clone"===n.helper?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo("parent"===n.appendTo?this.element[0].parentNode:n.appendTo),i&&r[0]===this.element[0]&&this._setPositionRelative(),r[0]===this.element[0]||/(fixed|absolute)/.test(r.css("position"))||r.css("position","absolute"),r},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),n=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==n&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,i,r=this.options,a=this.document[0];return this.relativeContainer=null,r.containment?"window"===r.containment?void(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===r.containment?void(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):r.containment.constructor===Array?void(this.containment=r.containment):("parent"===r.containment&&(r.containment=this.helper[0].parentNode),n=e(r.containment),i=n[0],void(i&&(t=/(scroll|auto)/.test(n.css("overflow")),this.containment=[(parseInt(n.css("borderLeftWidth"),10)||0)+(parseInt(n.css("paddingLeft"),10)||0),(parseInt(n.css("borderTopWidth"),10)||0)+(parseInt(n.css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(n.css("borderRightWidth"),10)||0)-(parseInt(n.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(n.css("borderBottomWidth"),10)||0)-(parseInt(n.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=n))):void(this.containment=null)},_convertPositionTo:function(e,t){t||(t=this.position);var n="absolute"===e?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*n,left:t.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*n}},_generatePosition:function(e,t){var n,i,r,a,s=this.options,o=this._isRootNode(this.scrollParent[0]),l=e.pageX,c=e.pageY;return o&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(i=this.relativeContainer.offset(),n=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):n=this.containment,e.pageX-this.offset.click.left<n[0]&&(l=n[0]+this.offset.click.left),e.pageY-this.offset.click.top<n[1]&&(c=n[1]+this.offset.click.top),e.pageX-this.offset.click.left>n[2]&&(l=n[2]+this.offset.click.left),e.pageY-this.offset.click.top>n[3]&&(c=n[3]+this.offset.click.top)),s.grid&&(r=s.grid[1]?this.originalPageY+Math.round((c-this.originalPageY)/s.grid[1])*s.grid[1]:this.originalPageY,c=n?r-this.offset.click.top>=n[1]||r-this.offset.click.top>n[3]?r:r-this.offset.click.top>=n[1]?r-s.grid[1]:r+s.grid[1]:r,a=s.grid[0]?this.originalPageX+Math.round((l-this.originalPageX)/s.grid[0])*s.grid[0]:this.originalPageX,l=n?a-this.offset.click.left>=n[0]||a-this.offset.click.left>n[2]?a:a-this.offset.click.left>=n[0]?a-s.grid[0]:a+s.grid[0]:a),"y"===s.axis&&(l=this.originalPageX),"x"===s.axis&&(c=this.originalPageY)),{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:o?0:this.offset.scroll.top),left:l-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:o?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,n,i){return i=i||this._uiHash(),e.ui.plugin.call(this,t,[n,i,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,n,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n,i){var r=e.extend({},n,{item:i.element});i.sortables=[],e(i.options.connectToSortable).each(function(){var n=e(this).sortable("instance");n&&!n.options.disabled&&(i.sortables.push(n),n.refreshPositions(),n._trigger("activate",t,r))})},stop:function(t,n,i){var r=e.extend({},n,{item:i.element});i.cancelHelperRemoval=!1,e.each(i.sortables,function(){var e=this;e.isOver?(e.isOver=0,i.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,r))})},drag:function(t,n,i){e.each(i.sortables,function(){var r=!1,a=this;a.positionAbs=i.positionAbs,a.helperProportions=i.helperProportions,a.offset.click=i.offset.click,a._intersectsWith(a.containerCache)&&(r=!0,e.each(i.sortables,function(){return this.positionAbs=i.positionAbs,this.helperProportions=i.helperProportions,this.offset.click=i.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(r=!1),r})),r?(a.isOver||(a.isOver=1,i._parent=n.helper.parent(),a.currentItem=n.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return n.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=i.offset.click.top,a.offset.click.left=i.offset.click.left,a.offset.parent.left-=i.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=i.offset.parent.top-a.offset.parent.top,i._trigger("toSortable",t),i.dropped=a.element,e.each(i.sortables,function(){this.refreshPositions()}),i.currentItem=i.element,a.fromOutside=i),a.currentItem&&(a._mouseDrag(t),n.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),n.helper.appendTo(i._parent),i._refreshOffsets(t),n.position=i._generatePosition(t,!0),i._trigger("fromSortable",t),i.dropped=!1,e.each(i.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,n,i){var r=e("body"),a=i.options;r.css("cursor")&&(a._cursor=r.css("cursor")),r.css("cursor",a.cursor)},stop:function(t,n,i){var r=i.options;r._cursor&&e("body").css("cursor",r._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n,i){var r=e(n.helper),a=i.options;r.css("opacity")&&(a._opacity=r.css("opacity")),r.css("opacity",a.opacity)},stop:function(t,n,i){var r=i.options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,n){n.scrollParentNotHidden||(n.scrollParentNotHidden=n.helper.scrollParent(!1)),n.scrollParentNotHidden[0]!==n.document[0]&&"HTML"!==n.scrollParentNotHidden[0].tagName&&(n.overflowOffset=n.scrollParentNotHidden.offset())},drag:function(t,n,i){var r=i.options,a=!1,s=i.scrollParentNotHidden[0],o=i.document[0];s!==o&&"HTML"!==s.tagName?(r.axis&&"x"===r.axis||(i.overflowOffset.top+s.offsetHeight-t.pageY<r.scrollSensitivity?s.scrollTop=a=s.scrollTop+r.scrollSpeed:t.pageY-i.overflowOffset.top<r.scrollSensitivity&&(s.scrollTop=a=s.scrollTop-r.scrollSpeed)),r.axis&&"y"===r.axis||(i.overflowOffset.left+s.offsetWidth-t.pageX<r.scrollSensitivity?s.scrollLeft=a=s.scrollLeft+r.scrollSpeed:t.pageX-i.overflowOffset.left<r.scrollSensitivity&&(s.scrollLeft=a=s.scrollLeft-r.scrollSpeed))):(r.axis&&"x"===r.axis||(t.pageY-e(o).scrollTop()<r.scrollSensitivity?a=e(o).scrollTop(e(o).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(o).scrollTop())<r.scrollSensitivity&&(a=e(o).scrollTop(e(o).scrollTop()+r.scrollSpeed))),r.axis&&"y"===r.axis||(t.pageX-e(o).scrollLeft()<r.scrollSensitivity?a=e(o).scrollLeft(e(o).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(o).scrollLeft())<r.scrollSensitivity&&(a=e(o).scrollLeft(e(o).scrollLeft()+r.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,n,i){var r=i.options;i.snapElements=[],e(r.snap.constructor!==String?r.snap.items||":data(ui-draggable)":r.snap).each(function(){var t=e(this),n=t.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:n.top,left:n.left})})},drag:function(t,n,i){var r,a,s,o,l,c,u,d,h,p,f=i.options,m=f.snapTolerance,g=n.offset.left,v=g+i.helperProportions.width,y=n.offset.top,b=y+i.helperProportions.height;for(h=i.snapElements.length-1;h>=0;h--)l=i.snapElements[h].left-i.margins.left,c=l+i.snapElements[h].width,u=i.snapElements[h].top-i.margins.top,d=u+i.snapElements[h].height,l-m>v||g>c+m||u-m>b||y>d+m||!e.contains(i.snapElements[h].item.ownerDocument,i.snapElements[h].item)?(i.snapElements[h].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,t,e.extend(i._uiHash(),{snapItem:i.snapElements[h].item})),i.snapElements[h].snapping=!1):("inner"!==f.snapMode&&(r=Math.abs(u-b)<=m,a=Math.abs(d-y)<=m,s=Math.abs(l-v)<=m,o=Math.abs(c-g)<=m,r&&(n.position.top=i._convertPositionTo("relative",{top:u-i.helperProportions.height,left:0}).top),a&&(n.position.top=i._convertPositionTo("relative",{top:d,left:0}).top),s&&(n.position.left=i._convertPositionTo("relative",{top:0,left:l-i.helperProportions.width}).left),o&&(n.position.left=i._convertPositionTo("relative",{top:0,left:c}).left)),p=r||a||s||o,"outer"!==f.snapMode&&(r=Math.abs(u-y)<=m,a=Math.abs(d-b)<=m,s=Math.abs(l-g)<=m,o=Math.abs(c-v)<=m,r&&(n.position.top=i._convertPositionTo("relative",{top:u,left:0}).top),a&&(n.position.top=i._convertPositionTo("relative",{top:d-i.helperProportions.height,left:0}).top),s&&(n.position.left=i._convertPositionTo("relative",{top:0,left:l}).left),o&&(n.position.left=i._convertPositionTo("relative",{top:0,left:c-i.helperProportions.width}).left)),!i.snapElements[h].snapping&&(r||a||s||o||p)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,t,e.extend(i._uiHash(),{snapItem:i.snapElements[h].item})),i.snapElements[h].snapping=r||a||s||o||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,n,i){var r,a=i.options,s=e.makeArray(e(a.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});s.length&&(r=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(t){e(this).css("zIndex",r+t)}),this.css("zIndex",r+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n,i){var r=e(n.helper),a=i.options;r.css("zIndex")&&(a._zIndex=r.css("zIndex")),r.css("zIndex",a.zIndex)},stop:function(t,n,i){var r=i.options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}}),e.ui.draggable});