/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bundle.js"
/******/ 	}
/******/
/******/
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				function onScriptComplete(event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/root-app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/single-spa/lib/single-spa.js":
/*!***************************************************!*\
  !*** ./node_modules/single-spa/lib/single-spa.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,\"__esModule\",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=21)}([function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.isActive=s,t.isntActive=function(e){return!s(e)},t.isLoaded=l,t.isntLoaded=function(e){return!l(e)},t.shouldBeActive=function(e){try{return e.activeWhen(window.location)}catch(t){(0,r.handleAppError)(t,e),e.status=c}},t.shouldntBeActive=function(e){try{return!e.activeWhen(window.location)}catch(t){(0,r.handleAppError)(t,e),e.status=c}},t.notBootstrapped=function(e){return e.status!==u},t.notSkipped=function(e){return e!==c&&(!e||e.status!==c)},t.toName=function(e){return e.name},t.SKIP_BECAUSE_BROKEN=t.UNLOADING=t.UNMOUNTING=t.UPDATING=t.MOUNTED=t.MOUNTING=t.NOT_MOUNTED=t.BOOTSTRAPPING=t.NOT_BOOTSTRAPPED=t.LOADING_SOURCE_CODE=t.NOT_LOADED=void 0;var r=n(1),o=\"NOT_LOADED\";t.NOT_LOADED=o;var i=\"LOADING_SOURCE_CODE\";t.LOADING_SOURCE_CODE=i;var u=\"NOT_BOOTSTRAPPED\";t.NOT_BOOTSTRAPPED=u;t.BOOTSTRAPPING=\"BOOTSTRAPPING\";t.NOT_MOUNTED=\"NOT_MOUNTED\";t.MOUNTING=\"MOUNTING\";var a=\"MOUNTED\";t.MOUNTED=a;t.UPDATING=\"UPDATING\";t.UNMOUNTING=\"UNMOUNTING\";t.UNLOADING=\"UNLOADING\";var c=\"SKIP_BECAUSE_BROKEN\";function s(e){return e.status===a}function l(e){return e.status!==o&&e.status!==i}t.SKIP_BECAUSE_BROKEN=c},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.handleAppError=function(e,t){var n=i(e,t);o.length?o.forEach(function(e){return e(n)}):setTimeout(function(){throw n})},t.addErrorHandler=function(e){if(\"function\"!=typeof e)throw new Error(\"a single-spa error handler must be a function\");o.push(e)},t.removeErrorHandler=function(e){if(\"function\"!=typeof e)throw new Error(\"a single-spa error handler must be a function\");var t=!1;return o=o.filter(function(n){var r=n===e;return t=t||r,!r}),t},t.transformErr=i;var r;(r=n(8))&&r.__esModule;var o=[];function i(e,t){var n,r=t.unmountThisParcel?\"Parcel\":\"Application\",o=\"\".concat(r,\" '\").concat(t.name,\"' died in status \").concat(t.status,\": \");if(e instanceof Error){try{e.message=o+e.message}catch(e){}n=e}else{console.warn(\"While \".concat(t.status,\", '\").concat(t.name,\"' rejected its lifecycle function promise with a non-Error. This will cause stack traces to not be accurate.\"));try{n=new Error(o+JSON.stringify(e))}catch(t){n=e}}return n.appName=t.name,n.name=t.name,n}},function(e,t,n){\"use strict\";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,\"__esModule\",{value:!0}),t.setBootstrapMaxTime=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(\"number\"!=typeof e||e<=0)throw new Error(\"bootstrap max time must be a positive integer number of milliseconds\");o.bootstrap={millis:e,dieOnTimeout:t}},t.setMountMaxTime=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(\"number\"!=typeof e||e<=0)throw new Error(\"mount max time must be a positive integer number of milliseconds\");o.mount={millis:e,dieOnTimeout:t}},t.setUnmountMaxTime=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(\"number\"!=typeof e||e<=0)throw new Error(\"unmount max time must be a positive integer number of milliseconds\");o.unmount={millis:e,dieOnTimeout:t}},t.setUnloadMaxTime=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(\"number\"!=typeof e||e<=0)throw new Error(\"unload max time must be a positive integer number of milliseconds\");o.unload={millis:e,dieOnTimeout:t}},t.reasonableTime=function(e,t,n){var r=1e3;return new Promise(function(o,i){var u=!1,a=!1;function c(e){if(!u)if(!0===e)a=!0,n.dieOnTimeout?i(\"\".concat(t,\" did not resolve or reject for \").concat(n.millis,\" milliseconds\")):console.error(\"\".concat(t,\" did not resolve or reject for \").concat(n.millis,\" milliseconds -- we're no longer going to warn you about it.\"));else if(!a){var o=e,s=o*r;console.warn(\"\".concat(t,\" did not resolve or reject within \").concat(s,\" milliseconds\")),s+r<n.millis&&setTimeout(function(){return c(o+1)},r)}}e.then(function(e){u=!0,o(e)}).catch(function(e){u=!0,i(e)}),setTimeout(function(){return c(1)},r),setTimeout(function(){return c(!0)},n.millis)})},t.ensureValidAppTimeouts=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);\"function\"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},o,e)};var o={bootstrap:{millis:4e3,dieOnTimeout:!1},mount:{millis:3e3,dieOnTimeout:!1},unmount:{millis:3e3,dieOnTimeout:!1},unload:{millis:3e3,dieOnTimeout:!1}}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.getProps=function(e){var t={name:e.name,mountParcel:r.mountParcel.bind(e),customProps:e.customProps};e.unmountThisParcel&&(t.unmountSelf=e.unmountThisParcel);return t};var r=n(14)},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.find=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.reroute=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];var n=arguments.length>1?arguments[1]:void 0;if(d)return new Promise(function(e,t){m.push({resolve:e,reject:t,eventArguments:n})});d=!0;var r=!0;return(0,i.isStarted)()?Promise.resolve().then(function(){var e;n&&n[0]&&(e={detail:n[0]}),window.dispatchEvent(new o.default(\"single-spa:before-routing-event\",e));var i=(0,p.getAppsToUnload)().map(p.toUnloadPromise),f=(0,l.getAppsToUnmount)().map(s.toUnmountPromise).map(function(e){return e.then(p.toUnloadPromise)}),d=f.concat(i);d.length>0&&(r=!1);var m=Promise.all(d),O=(0,l.getAppsToLoad)(),b=O.map(function(e){return(0,u.toLoadPromise)(e).then(a.toBootstrapPromise).then(function(e){return m.then(function(){return(0,c.toMountPromise)(e)})})});b.length>0&&(r=!1);var y=(0,l.getAppsToMount)().filter(function(e){return O.indexOf(e)<0}).map(function(e){return(0,a.toBootstrapPromise)(e).then(function(){return m}).then(function(){return(0,c.toMountPromise)(e)})});return y.length>0&&(r=!1),m.catch(function(e){throw v(),e}).then(function(){return v(),Promise.all(b.concat(y)).catch(function(e){throw t.forEach(function(t){return t.reject(e)}),e}).then(function(){return h(!1)})})}):Promise.resolve().then(function(){var e=(0,l.getAppsToLoad)().map(u.toLoadPromise);return e.length>0&&(r=!1),Promise.all(e).then(h).catch(function(e){throw v(),e})});function h(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=(0,l.getMountedApps)();n&&v(),t.forEach(function(e){return e.resolve(i)});try{var u=r?\"single-spa:no-app-change\":\"single-spa:app-change\";window.dispatchEvent(new o.default(u)),window.dispatchEvent(new o.default(\"single-spa:routing-event\"))}catch(e){setTimeout(function(){throw e})}if(d=!1,m.length>0){var a=m;m=[],e(a)}return i}function v(){t.forEach(function(e){(0,f.callCapturedEventListeners)(e.eventArguments)}),(0,f.callCapturedEventListeners)(n)}};var r,o=(r=n(8))&&r.__esModule?r:{default:r},i=n(16),u=n(18),a=n(13),c=n(12),s=n(7),l=n(11),f=(n(0),n(6)),p=n(9);var d=!1,m=[]},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.navigateToUrl=a,t.callCapturedEventListeners=function(e){var t=this;if(e){var n=e[0].type;u.indexOf(n)>=0&&i[n].forEach(function(n){n.apply(t,e)})}},t.routingEventsListeningTo=void 0;var r=n(5),o=n(4),i={hashchange:[],popstate:[]},u=[\"hashchange\",\"popstate\"];function a(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(\"string\"==typeof e)t=e;else if(this&&this.href)t=this.href;else{if(!(e&&e.currentTarget&&e.currentTarget.href&&e.preventDefault))throw new Error(\"singleSpaNavigate must be either called with a string url, with an <a> tag as its context, or with an event whose currentTarget is an <a> tag\");t=e.currentTarget.href,e.preventDefault()}var r=d(window.location.href),o=d(t);if(0===t.indexOf(\"#\"))window.location.hash=\"#\"+o.anchor;else if(r.host!==o.host&&o.host){if(n.isTestingEnv)return{wouldHaveReloadedThePage:!0};window.location.href=t}else!function(e,t){return t===e||t===\"/\"+e}(o.path,r.path)?window.history.pushState(null,null,t):window.location.hash=\"#\"+o.anchor}function c(){(0,r.reroute)([],arguments)}t.routingEventsListeningTo=u,window.addEventListener(\"hashchange\",c),window.addEventListener(\"popstate\",c);var s=window.addEventListener,l=window.removeEventListener;window.addEventListener=function(e,t){if(!(\"function\"==typeof t&&u.indexOf(e)>=0)||(0,o.find)(i[e],function(e){return e===t}))return s.apply(this,arguments);i[e].push(t)},window.removeEventListener=function(e,t){if(!(\"function\"==typeof t&&u.indexOf(e)>=0))return l.apply(this,arguments);i[e]=i[e].filter(function(e){return e!==t})};var f=window.history.pushState;window.history.pushState=function(e){var t=f.apply(this,arguments);return(0,r.reroute)(),t};var p=window.history.replaceState;function d(e){for(var t={strictMode:!0,key:[\"source\",\"protocol\",\"authority\",\"userInfo\",\"user\",\"password\",\"host\",\"port\",\"relative\",\"path\",\"directory\",\"file\",\"query\",\"anchor\"],q:{name:\"queryKey\",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\\/?#]+):)?(?:\\/\\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\/]*\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\\/]*@)([^:\\/?#.]+):)?(?:\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\\/?#]*)(?::(\\d*))?)(((\\/(?:[^?#](?![^?#\\/]*\\.[^?#\\/.]+(?:[?#]|$)))*\\/?)?([^?#\\/]*))(?:\\?([^#]*))?(?:#(.*))?)/}},n=t.parser[t.strictMode?\"strict\":\"loose\"].exec(e),r={},o=14;o--;)r[t.key[o]]=n[o]||\"\";return r[t.q.name]={},r[t.key[12]].replace(t.q.parser,function(e,n,o){n&&(r[t.q.name][n]=o)}),r}window.history.replaceState=function(){var e=p.apply(this,arguments);return(0,r.reroute)(),e},window.singleSpaNavigate=a},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.toUnmountPromise=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){if(e.status!==r.MOUNTED)return e;e.status=r.UNMOUNTING;var n,a=Object.keys(e.parcels).map(function(t){return e.parcels[t].unmountThisParcel()});return Promise.all(a).then(c,function(n){return c().then(function(){var i=new Error(n.message);if(t){var u=(0,o.transformErr)(i,e);throw e.status=r.SKIP_BECAUSE_BROKEN,u}(0,o.handleAppError)(i,e),e.status=r.SKIP_BECAUSE_BROKEN})}).then(function(){return e});function c(){return(0,i.reasonableTime)(e.unmount((0,u.getProps)(e)),\"Unmounting application \".concat(e.name,\"'\"),e.timeouts.unmount).then(function(){n||(e.status=r.NOT_MOUNTED)}).catch(function(n){if(t){var i=(0,o.transformErr)(n,e);throw e.status=r.SKIP_BECAUSE_BROKEN,i}(0,o.handleAppError)(n,e),e.status=r.SKIP_BECAUSE_BROKEN})}})};var r=n(0),o=n(1),i=n(2),u=n(3)},function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n(\"cat\",{detail:{foo:\"bar\"}});return\"cat\"===e.type&&\"bar\"===e.detail.foo}catch(e){}return!1}()?n:\"undefined\"!=typeof document&&\"function\"==typeof document.createEvent?function(e,t){var n=document.createEvent(\"CustomEvent\");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(this,n(19))},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.toUnloadPromise=function(e){return Promise.resolve().then(function(){var t=a[e.name];return t?e.status===r.NOT_LOADED?(c(e,t),e):e.status===r.UNLOADING?t.promise.then(function(){return e}):e.status!==r.NOT_MOUNTED?e:(e.status=r.UNLOADING,(0,i.reasonableTime)(e.unload((0,u.getProps)(e)),\"Unloading application '\".concat(e.name,\"'\"),e.timeouts.unload).then(function(){return c(e,t),e}).catch(function(n){return function(e,t,n){delete a[e.name],delete e.bootstrap,delete e.mount,delete e.unmount,delete e.unload,(0,o.handleAppError)(n,e),e.status=r.SKIP_BECAUSE_BROKEN,t.reject(n)}(e,t,n),e})):e})},t.addAppToUnload=function(e,t,n,r){a[e.name]={app:e,resolve:n,reject:r},Object.defineProperty(a[e.name],\"promise\",{get:t})},t.getAppUnloadInfo=function(e){return a[e]},t.getAppsToUnload=function(){return Object.keys(a).map(function(e){return a[e].app}).filter(r.isntActive)};var r=n(0),o=n(1),i=n(2),u=n(3),a={};function c(e,t){delete a[e.name],delete e.bootstrap,delete e.mount,delete e.unmount,delete e.unload,e.status=r.NOT_LOADED,t.resolve()}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.ensureJQuerySupport=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;e||window.$&&window.$.fn&&window.$.fn.jquery&&(e=window.$);if(e&&!o){var t=e.fn.on,n=e.fn.off;e.fn.on=function(e,n){return i.call(this,t,window.addEventListener,e,n,arguments)},e.fn.off=function(e,t){return i.call(this,n,window.removeEventListener,e,t,arguments)},o=!0}};var r=n(6),o=!1;function i(e,t,n,o,i){return\"string\"!=typeof n?e.apply(this,i):(n.split(/\\s+/).forEach(function(e){r.routingEventsListeningTo.indexOf(e)>=0&&(t(e,o),n=n.replace(e,\"\"))}),\"\"===n.trim()?this:e.apply(this,i))}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.getMountedApps=function(){return l.filter(o.isActive).map(o.toName)},t.getAppNames=f,t.getAppStatus=function(e){var t=(0,u.find)(l,function(t){return t.name===e});return t?t.status:null},t.declareChildApplication=function(e,t,n){return console.warn('declareChildApplication is deprecated and will be removed in the next major version, use \"registerApplication\" instead'),p(e,t,n)},t.registerApplication=p,t.checkActivityFunctions=function(e){for(var t=[],n=0;n<l.length;n++)l[n].activeWhen(e)&&t.push(l[n].name);return t},t.getAppsToLoad=function(){return l.filter(o.notSkipped).filter(o.isntLoaded).filter(o.shouldBeActive)},t.getAppsToUnmount=function(){return l.filter(o.notSkipped).filter(o.isActive).filter(o.shouldntBeActive)},t.getAppsToMount=function(){return l.filter(o.notSkipped).filter(o.isntActive).filter(o.isLoaded).filter(o.shouldBeActive)},t.unloadChildApplication=function(e,t){return console.warn('unloadChildApplication is deprecated and will be removed in the next major version, use \"unloadApplication\" instead'),d(e,t)},t.unloadApplication=d;var r=n(10),o=n(0),i=n(5),u=n(4),a=n(7),c=n(9);function s(e){return(s=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}var l=[];function f(){return l.map(o.toName)}function p(e,t,n){var u,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(\"string\"!=typeof e||0===e.length)throw new Error(\"The first argument must be a non-empty string 'appName'\");if(-1!==f().indexOf(e))throw new Error(\"There is already an app declared with name \".concat(e));if(\"object\"!==s(a)||Array.isArray(a))throw new Error(\"customProps must be an object\");if(!t)throw new Error(\"The application or loading function is required\");if(u=\"function\"!=typeof t?function(){return Promise.resolve(t)}:t,\"function\"!=typeof n)throw new Error(\"The activeWhen argument must be a function\");l.push({name:e,loadImpl:u,activeWhen:n,status:o.NOT_LOADED,parcels:{},customProps:a}),(0,r.ensureJQuerySupport)(),(0,i.reroute)()}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if(\"string\"!=typeof e)throw new Error(\"unloadApplication requires a string 'appName'\");var n=(0,u.find)(l,function(t){return t.name===e});if(!n)throw new Error(\"Could not unload application '\".concat(e,\"' because no such application has been declared\"));var r,o=(0,c.getAppUnloadInfo)(n.name);if(t&&t.waitForUnmount){if(o)return o.promise;var i=new Promise(function(e,t){(0,c.addAppToUnload)(n,function(){return i},e,t)});return i}return o?(r=o.promise,m(n,o.resolve,o.reject)):r=new Promise(function(e,t){(0,c.addAppToUnload)(n,function(){return r},e,t),m(n,e,t)}),r}function m(e,t,n){(0,a.toUnmountPromise)(e).then(c.toUnloadPromise).then(function(){t(),setTimeout(function(){(0,i.reroute)()})}).catch(n)}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.toMountPromise=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return e.status!==o.NOT_MOUNTED?e:(s||(window.dispatchEvent(new a.default(\"single-spa:before-first-mount\")),s=!0),(0,u.reasonableTime)(e.mount((0,c.getProps)(e)),\"Mounting application '\".concat(e.name,\"'\"),e.timeouts.mount).then(function(){return e.status=o.MOUNTED,l||(window.dispatchEvent(new a.default(\"single-spa:first-mount\")),l=!0),e}).catch(function(n){if(t){var r=(0,i.transformErr)(n,e);throw e.status=o.SKIP_BECAUSE_BROKEN,r}return(0,i.handleAppError)(n,e),e.status=o.SKIP_BECAUSE_BROKEN,e}))})};var r,o=n(0),i=n(1),u=n(2),a=(r=n(8))&&r.__esModule?r:{default:r},c=n(3);var s=!1,l=!1},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.toBootstrapPromise=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Promise.resolve().then(function(){return e.status!==r.NOT_BOOTSTRAPPED?e:(e.status=r.BOOTSTRAPPING,(0,o.reasonableTime)(e.bootstrap((0,u.getProps)(e)),\"Bootstrapping appOrParcel '\".concat(e.name,\"'\"),e.timeouts.bootstrap).then(function(){return e.status=r.NOT_MOUNTED,e}).catch(function(n){if(e.status=r.SKIP_BECAUSE_BROKEN,t){var o=(0,i.transformErr)(n,e);throw o}return(0,i.handleAppError)(n,e),e}))})};var r=n(0),o=n(2),i=n(1),u=n(3)},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.mountRootParcel=function(){return d.apply(p,arguments)},t.mountParcel=d;var r=n(15),o=n(0),i=n(13),u=n(12),a=n(17),c=n(7),s=n(2);n(1);function l(e){return(l=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}var f=0,p={parcels:{}};function d(e,t){var n=this;if(!e||\"object\"!==l(e)&&\"function\"!=typeof e)throw new Error(\"Cannot mount parcel without a config object or config loading function\");if(e.name&&\"string\"!=typeof e.name)throw new Error(\"Parcel name must be a string, if provided\");if(\"object\"!==l(t))throw new Error(\"Parcel \".concat(name,\" has invalid customProps -- must be an object\"));if(!t.domElement)throw new Error(\"Parcel \".concat(name,\" cannot be mounted without a domElement provided as a prop\"));var p,d=f++,h=\"function\"==typeof e,v=h?e:function(){return Promise.resolve(e)},O={id:d,parcels:{},status:h?o.LOADING_SOURCE_CODE:o.NOT_BOOTSTRAPPED,customProps:t,owningAppOrParcel:n,unmountThisParcel:function(){if(O.status!==o.MOUNTED)throw new Error(\"Cannot unmount parcel '\".concat(name,\"' -- it is in a \").concat(O.status,\" status\"));return(0,c.toUnmountPromise)(O,!0).then(function(e){return O.owningAppOrParcel&&delete O.owningAppOrParcel.parcels[O.id],e}).then(function(e){return y(e),e}).catch(function(e){throw O.status=o.SKIP_BECAUSE_BROKEN,P(e),e})}};n.parcels[d]=O;var b=v();if(!b||\"function\"!=typeof b.then)throw new Error(\"When mounting a parcel, the config loading function must return a promise that resolves with the parcel config\");var y,P,g=(b=b.then(function(e){if(!e)throw new Error(\"When mounting a parcel, the config loading function returned a promise that did not resolve with a parcel config\");var t=e.name||\"parcel-\".concat(d);if(!(0,r.validLifecycleFn)(e.bootstrap))throw new Error(\"Parcel \".concat(t,\" must have a valid bootstrap function\"));if(!(0,r.validLifecycleFn)(e.mount))throw new Error(\"Parcel \".concat(t,\" must have a valid mount function\"));if(!(0,r.validLifecycleFn)(e.unmount))throw new Error(\"Parcel \".concat(t,\" must have a valid unmount function\"));if(e.update&&!(0,r.validLifecycleFn)(e.update))throw new Error(\"Parcel \".concat(t,\" provided an invalid update function\"));var n=(0,r.flattenFnArray)(e.bootstrap),i=(0,r.flattenFnArray)(e.mount),u=(0,r.flattenFnArray)(e.unmount);O.status=o.NOT_BOOTSTRAPPED,O.name=t,O.bootstrap=n,O.mount=i,O.unmount=u,O.timeouts=(0,s.ensureValidAppTimeouts)(O),e.update&&(O.update=(0,r.flattenFnArray)(e.update),p.update=function(e){return O.customProps=e,m((0,a.toUpdatePromise)(O))})})).then(function(){return(0,i.toBootstrapPromise)(O,!0)}),E=g.then(function(){return(0,u.toMountPromise)(O,!0)}),w=new Promise(function(e,t){y=e,P=t});return p={mount:function(){return m(Promise.resolve().then(function(){if(O.status!==o.NOT_MOUNTED)throw new Error(\"Cannot mount parcel '\".concat(name,\"' -- it is in a \").concat(O.status,\" status\"));return n.parcels[d]=O,(0,u.toMountPromise)(O)}))},unmount:function(){return m(O.unmountThisParcel())},getStatus:function(){return O.status},loadPromise:m(b),bootstrapPromise:m(g),mountPromise:m(E),unmountPromise:m(w)}}function m(e){return e.then(function(){return null})}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.validLifecycleFn=function(e){return e&&(\"function\"==typeof e||(t=e,Array.isArray(t)&&!(0,r.find)(t,function(e){return\"function\"!=typeof e})));var t},t.flattenFnArray=function(e,t){0===(e=Array.isArray(e)?e:[e]).length&&(e=[function(){return Promise.resolve()}]);return function(n){return new Promise(function(r,i){!function u(a){var c=e[a](n);o(c)?c.then(function(){a===e.length-1?r():u(a+1)}).catch(i):i(\"\".concat(t,\" at index \").concat(a,\" did not return a promise\"))}(0)})}},t.smellsLikeAPromise=o;var r=n(4);function o(e){return e&&\"function\"==typeof e.then&&\"function\"==typeof e.catch}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.start=function(){t.started=o=!0,(0,r.reroute)()},t.isStarted=function(){return o},t.started=void 0;var r=n(5),o=!1;t.started=o;setTimeout(function(){o||console.warn(\"singleSpa.start() has not been called, \".concat(5e3,\"ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start\"))},5e3)},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.toUpdatePromise=function(e){return Promise.resolve().then(function(){if(e.status!==r.MOUNTED)throw new Error(\"Cannot update parcel '\".concat(e.name,\"' because it is not mounted\"));return e.status=r.UPDATING,(0,i.reasonableTime)(e.update((0,u.getProps)(e)),\"Updating parcel '\".concat(e.name,\"'\"),e.timeouts.mount).then(function(){return e.status=r.MOUNTED,e}).catch(function(t){var n=(0,o.transformErr)(t,e);throw e.status=r.SKIP_BECAUSE_BROKEN,n})})};var r=n(0),o=n(1),i=n(2),u=n(3)},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.toLoadPromise=function(e){return Promise.resolve().then(function(){return e.status!==r.NOT_LOADED?e:(e.status=r.LOADING_SOURCE_CODE,Promise.resolve().then(function(){var n=e.loadImpl((0,a.getProps)(e));if(!(0,u.smellsLikeAPromise)(n))throw new Error(\"single-spa loading function did not return a promise. Check the second argument to registerApplication('\".concat(e.name,\"', loadingFunction, activityFunction)\"));return n.then(function(n){var a;return\"object\"!==c(t=n)&&(a=\"does not export anything\"),(0,u.validLifecycleFn)(t.bootstrap)||(a=\"does not export a bootstrap function or array of functions\"),(0,u.validLifecycleFn)(t.mount)||(a=\"does not export a mount function or array of functions\"),(0,u.validLifecycleFn)(t.unmount)||(a=\"does not export an unmount function or array of functions\"),a?((0,i.handleAppError)(a,e),e.status=r.SKIP_BECAUSE_BROKEN,e):(e.status=r.NOT_BOOTSTRAPPED,e.bootstrap=(0,u.flattenFnArray)(t.bootstrap,\"App '\".concat(e.name,\"' bootstrap function\")),e.mount=(0,u.flattenFnArray)(t.mount,\"App '\".concat(e.name,\"' mount function\")),e.unmount=(0,u.flattenFnArray)(t.unmount,\"App '\".concat(e.name,\"' unmount function\")),e.unload=(0,u.flattenFnArray)(t.unload||[],\"App '\".concat(e.name,\"' unload function\")),e.timeouts=(0,o.ensureValidAppTimeouts)(t.timeouts),e)})}).catch(function(t){return(0,i.handleAppError)(t,e),e.status=r.SKIP_BECAUSE_BROKEN,e}));var t})};var r=n(0),o=n(2),i=n(1),u=(n(4),n(15)),a=n(3);function c(e){return(c=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}},function(e,t){var n;n=function(){return this}();try{n=n||Function(\"return this\")()||(0,eval)(\"this\")}catch(e){\"object\"==typeof window&&(n=window)}e.exports=n},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),Object.defineProperty(t,\"start\",{enumerable:!0,get:function(){return r.start}}),Object.defineProperty(t,\"ensureJQuerySupport\",{enumerable:!0,get:function(){return o.ensureJQuerySupport}}),Object.defineProperty(t,\"setBootstrapMaxTime\",{enumerable:!0,get:function(){return i.setBootstrapMaxTime}}),Object.defineProperty(t,\"setMountMaxTime\",{enumerable:!0,get:function(){return i.setMountMaxTime}}),Object.defineProperty(t,\"setUnmountMaxTime\",{enumerable:!0,get:function(){return i.setUnmountMaxTime}}),Object.defineProperty(t,\"setUnloadMaxTime\",{enumerable:!0,get:function(){return i.setUnloadMaxTime}}),Object.defineProperty(t,\"registerApplication\",{enumerable:!0,get:function(){return u.registerApplication}}),Object.defineProperty(t,\"getMountedApps\",{enumerable:!0,get:function(){return u.getMountedApps}}),Object.defineProperty(t,\"getAppStatus\",{enumerable:!0,get:function(){return u.getAppStatus}}),Object.defineProperty(t,\"unloadApplication\",{enumerable:!0,get:function(){return u.unloadApplication}}),Object.defineProperty(t,\"checkActivityFunctions\",{enumerable:!0,get:function(){return u.checkActivityFunctions}}),Object.defineProperty(t,\"getAppNames\",{enumerable:!0,get:function(){return u.getAppNames}}),Object.defineProperty(t,\"declareChildApplication\",{enumerable:!0,get:function(){return u.declareChildApplication}}),Object.defineProperty(t,\"unloadChildApplication\",{enumerable:!0,get:function(){return u.unloadChildApplication}}),Object.defineProperty(t,\"navigateToUrl\",{enumerable:!0,get:function(){return a.navigateToUrl}}),Object.defineProperty(t,\"triggerAppChange\",{enumerable:!0,get:function(){return c.reroute}}),Object.defineProperty(t,\"addErrorHandler\",{enumerable:!0,get:function(){return s.addErrorHandler}}),Object.defineProperty(t,\"removeErrorHandler\",{enumerable:!0,get:function(){return s.removeErrorHandler}}),Object.defineProperty(t,\"mountRootParcel\",{enumerable:!0,get:function(){return l.mountRootParcel}}),Object.defineProperty(t,\"NOT_LOADED\",{enumerable:!0,get:function(){return f.NOT_LOADED}}),Object.defineProperty(t,\"LOADING_SOURCE_CODE\",{enumerable:!0,get:function(){return f.LOADING_SOURCE_CODE}}),Object.defineProperty(t,\"NOT_BOOTSTRAPPED\",{enumerable:!0,get:function(){return f.NOT_BOOTSTRAPPED}}),Object.defineProperty(t,\"BOOTSTRAPPING\",{enumerable:!0,get:function(){return f.BOOTSTRAPPING}}),Object.defineProperty(t,\"NOT_MOUNTED\",{enumerable:!0,get:function(){return f.NOT_MOUNTED}}),Object.defineProperty(t,\"MOUNTING\",{enumerable:!0,get:function(){return f.MOUNTING}}),Object.defineProperty(t,\"UPDATING\",{enumerable:!0,get:function(){return f.UPDATING}}),Object.defineProperty(t,\"MOUNTED\",{enumerable:!0,get:function(){return f.MOUNTED}}),Object.defineProperty(t,\"UNMOUNTING\",{enumerable:!0,get:function(){return f.UNMOUNTING}}),Object.defineProperty(t,\"SKIP_BECAUSE_BROKEN\",{enumerable:!0,get:function(){return f.SKIP_BECAUSE_BROKEN}});var r=n(16),o=n(10),i=n(2),u=n(11),a=n(6),c=n(5),s=n(1),l=n(14),f=n(0)},function(e,t,n){e.exports=n(20)}])});\n//# sourceMappingURL=single-spa.js.map\n\n//# sourceURL=webpack:///./node_modules/single-spa/lib/single-spa.js?");

/***/ }),

/***/ "./src/root-app/index.js":
/*!*******************************!*\
  !*** ./src/root-app/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _singleSpa = __webpack_require__(/*! single-spa */ \"./node_modules/single-spa/lib/single-spa.js\");\n\n// Loading functions\nvar loadApp1 = function loadApp1() {\n  return Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(0)]).then(function() { var module = __webpack_require__(/*! ../app1/single-spa-loader.js */ \"./src/app1/single-spa-loader.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); });\n};\nvar loadApp2 = function loadApp2() {\n  return __webpack_require__.e(/*! import() */ 1).then(function() { var module = __webpack_require__(/*! ../app2/single-spa-loader.js */ \"./src/app2/single-spa-loader.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); });\n};\nvar loadApp3 = function loadApp3() {\n  return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(2)]).then(function() { var module = __webpack_require__(/*! ../app3/single-spa-loader.js */ \"./src/app3/single-spa-loader.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); });\n};\nvar loadApp4 = function loadApp4() {\n  return Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(3)]).then(function() { var module = __webpack_require__(/*! ../app4/single-spa-loader.js */ \"./src/app4/single-spa-loader.js\"); return typeof module === \"object\" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === \"object\" && module, { \"default\": module }); });\n};\n\n// isActive functions\nvar app1IsActive = function app1IsActive() {\n  return true;\n}; // window.location.hash.startsWith('#/app1');\nvar app2IsActive = function app2IsActive() {\n  return true;\n}; // window.location.hash.startsWith('#/app1');\nvar app3IsActive = function app3IsActive() {\n  return true;\n}; // window.location.hash.startsWith('#/app1');\nvar app4IsActive = function app4IsActive() {\n  return true;\n}; // window.location.hash.startsWith('#/app1');\n\n// Register apps\n(0, _singleSpa.registerApplication)('app1', loadApp1, app1IsActive);\n(0, _singleSpa.registerApplication)('app2', loadApp2, app2IsActive);\n(0, _singleSpa.registerApplication)('app3', loadApp3, app3IsActive);\n(0, _singleSpa.registerApplication)('app4', loadApp4, app4IsActive);\n\n// mount applications to the DOM\n(0, _singleSpa.start)();\n\n//# sourceURL=webpack:///./src/root-app/index.js?");

/***/ })

/******/ });