(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app4/app4.component.js":
/*!************************************!*\
  !*** ./src/app4/app4.component.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vueLogo = __webpack_require__(/*! ./assets/vue-logo.png */ \"./src/app4/assets/vue-logo.png\");\n\nvar _vueLogo2 = _interopRequireDefault(_vueLogo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  el: '#app4',\n  data: {\n    vueLogo: _vueLogo2.default\n  },\n  template: '\\n    <div id=\"app4\">\\n      <h2>\\n        This is App4, written in Vue\\n        <img v-bind:src=\"vueLogo\" >\\n      </h2>\\n    </div>\\n  '\n};\n\n//# sourceURL=webpack:///./src/app4/app4.component.js?");

/***/ }),

/***/ "./src/app4/assets/vue-logo.png":
/*!**************************************!*\
  !*** ./src/app4/assets/vue-logo.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cf23526f451784ff137f161b8fe18d5a.png\";\n\n//# sourceURL=webpack:///./src/app4/assets/vue-logo.png?");

/***/ }),

/***/ "./src/app4/single-spa-loader.js":
/*!***************************************!*\
  !*** ./src/app4/single-spa-loader.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.unmount = exports.mount = exports.bootstrap = undefined;\n\nvar _vue = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _singleSpaVue = __webpack_require__(/*! single-spa-vue */ \"./node_modules/single-spa-vue/lib/single-spa-vue.js\");\n\nvar _singleSpaVue2 = _interopRequireDefault(_singleSpaVue);\n\nvar _app4Component = __webpack_require__(/*! ./app4.component.js */ \"./src/app4/app4.component.js\");\n\nvar _app4Component2 = _interopRequireDefault(_app4Component);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vueLifecycles = (0, _singleSpaVue2.default)({\n  Vue: _vue2.default,\n  appOptions: _app4Component2.default\n});\n\nvar bootstrap = exports.bootstrap = [vueLifecycles.bootstrap];\n\nvar mount = exports.mount = [vueLifecycles.mount];\n\nvar unmount = exports.unmount = [vueLifecycles.unmount];\n\n//# sourceURL=webpack:///./src/app4/single-spa-loader.js?");

/***/ })

}]);