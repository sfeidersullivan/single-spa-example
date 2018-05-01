(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app2/assets/javascript-logo.png":
/*!*********************************************!*\
  !*** ./src/app2/assets/javascript-logo.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"0cded3a3276425911d55a2552bf361bf.png\";\n\n//# sourceURL=webpack:///./src/app2/assets/javascript-logo.png?");

/***/ }),

/***/ "./src/app2/single-spa-loader.js":
/*!***************************************!*\
  !*** ./src/app2/single-spa-loader.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar jsLogo = __webpack_require__(/*! ./assets/javascript-logo.png */ \"./src/app2/assets/javascript-logo.png\");\n\nvar bootstrap = exports.bootstrap = function bootstrap() {\n  return Promise.resolve().then(function () {\n    var el = document.getElementById('app2');\n    if (!el) {\n      el = document.createElement('div');\n      el.id = 'app2';\n      document.body.appendChild(el);\n    }\n  });\n};\n\nvar mount = exports.mount = function mount() {\n  return Promise.resolve().then(function () {\n    document.getElementById('app2').innerHTML = '<h2>\\n        This is App2, written in Javascript.\\n        <img id=\"javascript-logo\" />\\n      </h2>';\n    document.getElementById('javascript-logo').src = jsLogo;\n  });\n};\n\nvar unmount = exports.unmount = function unmount() {\n  return Promise.resolve().then(function () {\n    return document.getElementById('app2').innerHTML = '';\n  });\n};\n\n//# sourceURL=webpack:///./src/app2/single-spa-loader.js?");

/***/ })

}]);