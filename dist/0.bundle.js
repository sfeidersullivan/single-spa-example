(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js!./src/app1/style.css":
/*!******************************************************!*\
  !*** ./node_modules/css-loader!./src/app1/style.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"h2{\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 40px;\\n  border-style: dashed;\\n}\\n\\nimg{\\n  width: 100px;\\n  height: 100px;\\n  padding-left: 20px;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/app1/style.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/app1/assets/react-logo.svg":
/*!****************************************!*\
  !*** ./src/app1/assets/react-logo.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1a36cc4d7f1b283edce389cb41bddb1f.svg\";\n\n//# sourceURL=webpack:///./src/app1/assets/react-logo.svg?");

/***/ }),

/***/ "./src/app1/index.js":
/*!***************************!*\
  !*** ./src/app1/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./style.css */ \"./src/app1/style.css\");\n\nvar _reactLogo = __webpack_require__(/*! ./assets/react-logo.svg */ \"./src/app1/assets/react-logo.svg\");\n\nvar _reactLogo2 = _interopRequireDefault(_reactLogo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App1 = function (_React$Component) {\n  _inherits(App1, _React$Component);\n\n  function App1() {\n    _classCallCheck(this, App1);\n\n    return _possibleConstructorReturn(this, (App1.__proto__ || Object.getPrototypeOf(App1)).apply(this, arguments));\n  }\n\n  _createClass(App1, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'h2',\n        null,\n        'This is App1, written in React.',\n        _react2.default.createElement('img', { src: _reactLogo2.default })\n      );\n    }\n  }]);\n\n  return App1;\n}(_react2.default.Component);\n\nexports.default = App1;\n\n//# sourceURL=webpack:///./src/app1/index.js?");

/***/ }),

/***/ "./src/app1/single-spa-loader.js":
/*!***************************************!*\
  !*** ./src/app1/single-spa-loader.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.bootstrap = bootstrap;\nexports.mount = mount;\nexports.unmount = unmount;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _singleSpaReact = __webpack_require__(/*! single-spa-react */ \"./node_modules/single-spa-react/lib/single-spa-react.js\");\n\nvar _singleSpaReact2 = _interopRequireDefault(_singleSpaReact);\n\nvar _index = __webpack_require__(/*! ./index.js */ \"./src/app1/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reactLifecycles = (0, _singleSpaReact2.default)({\n  React: _react2.default,\n  ReactDOM: _reactDom2.default,\n  rootComponent: _index2.default,\n  domElementGetter: domElementGetter\n});\n\nfunction bootstrap(props) {\n  return reactLifecycles.bootstrap(props);\n}\n\nfunction mount(props) {\n  return reactLifecycles.mount(props);\n}\n\nfunction unmount(props) {\n  return reactLifecycles.unmount(props);\n}\n\nfunction domElementGetter() {\n  // Make sure there is a div for us to render into\n  var el = document.getElementById('app1');\n  if (!el) {\n    el = document.createElement('div');\n    el.id = 'app1';\n    document.body.appendChild(el);\n  }\n\n  return el;\n}\n\n//# sourceURL=webpack:///./src/app1/single-spa-loader.js?");

/***/ }),

/***/ "./src/app1/style.css":
/*!****************************!*\
  !*** ./src/app1/style.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!./style.css */ \"./node_modules/css-loader/index.js!./src/app1/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/app1/style.css?");

/***/ })

}]);