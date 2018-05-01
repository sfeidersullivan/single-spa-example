(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@angular/core/esm5 lazy recursive":
/*!***************************************************************!*\
  !*** ./node_modules/@angular/core/esm5 lazy namespace object ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(function() {\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = function() { return []; };\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nmodule.exports = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./node_modules/@angular/core/esm5 lazy recursive\";\n\n//# sourceURL=webpack:///./node_modules/@angular/core/esm5_lazy_namespace_object?");

/***/ }),

/***/ "./src/app3/app.component.ts":
/*!***********************************!*\
  !*** ./src/app3/app.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/esm5/core.js\");\n// import angularLogo from './assets/angularLogo.svg';\nvar angularLogo = __webpack_require__(/*! ./assets/angular-logo.svg */ \"./src/app3/assets/angular-logo.svg\");\nvar App3 = /** @class */ (function () {\n    function App3() {\n        this.logo = angularLogo;\n    }\n    App3 = __decorate([\n        core_1.Component({\n            selector: 'app3',\n            template: \"\\n    <h2>\\n      This is App3, written in Angular.\\n      <img src={{logo}} />\\n    </h2>\\n  \",\n        })\n    ], App3);\n    return App3;\n}());\nexports.App3 = App3;\n\n\n//# sourceURL=webpack:///./src/app3/app.component.ts?");

/***/ }),

/***/ "./src/app3/app.module.ts":
/*!********************************!*\
  !*** ./src/app3/app.module.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar core_1 = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/esm5/core.js\");\nvar platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ \"./node_modules/@angular/platform-browser/esm5/platform-browser.js\");\nvar app_component_ts_1 = __webpack_require__(/*! ./app.component.ts */ \"./src/app3/app.component.ts\");\ntry {\n    core_1.enableProdMode();\n}\ncatch (err) {\n    console.info('EnableProdMode already set');\n}\nvar App3Module = /** @class */ (function () {\n    function App3Module() {\n    }\n    App3Module = __decorate([\n        core_1.NgModule({\n            declarations: [\n                app_component_ts_1.App3,\n            ],\n            imports: [platform_browser_1.BrowserModule],\n            // providers: [],\n            bootstrap: [app_component_ts_1.App3]\n        })\n    ], App3Module);\n    return App3Module;\n}());\nexports.App3Module = App3Module;\n\n\n//# sourceURL=webpack:///./src/app3/app.module.ts?");

/***/ }),

/***/ "./src/app3/assets/angular-logo.svg":
/*!******************************************!*\
  !*** ./src/app3/assets/angular-logo.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5c69e565f1ae6d7717fb3ecd2be004ad.svg\";\n\n//# sourceURL=webpack:///./src/app3/assets/angular-logo.svg?");

/***/ }),

/***/ "./src/app3/single-spa-loader.js":
/*!***************************************!*\
  !*** ./src/app3/single-spa-loader.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.unmount = exports.mount = exports.bootstrap = undefined;\n\n__webpack_require__(/*! zone.js */ \"./node_modules/zone.js/dist/zone.js\");\n\nvar _platformBrowserDynamic = __webpack_require__(/*! @angular/platform-browser-dynamic */ \"./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js\");\n\nvar _singleSpaAngular = __webpack_require__(/*! single-spa-angular2 */ \"./node_modules/single-spa-angular2/lib/single-spa-angular2.js\");\n\nvar _singleSpaAngular2 = _interopRequireDefault(_singleSpaAngular);\n\nvar _appModule = __webpack_require__(/*! ./app.module.ts */ \"./src/app3/app.module.ts\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ngLifecycles = (0, _singleSpaAngular2.default)({\n\tdomElementGetter: domElementGetter,\n\tmainModule: _appModule.App3Module,\n\tangularPlatform: (0, _platformBrowserDynamic.platformBrowserDynamic)(),\n\ttemplate: '<app3/>'\n});\n\nvar bootstrap = exports.bootstrap = [ngLifecycles.bootstrap];\n\nvar mount = exports.mount = [ngLifecycles.mount];\n\nvar unmount = exports.unmount = [ngLifecycles.unmount];\n\nfunction domElementGetter() {\n\tvar el = document.getElementById('app3');\n\tif (!el) {\n\t\tel = document.createElement('div');\n\t\tel.id = 'app3';\n\t\tdocument.body.appendChild(el);\n\t}\n\n\treturn el;\n}\n\n//# sourceURL=webpack:///./src/app3/single-spa-loader.js?");

/***/ })

}]);