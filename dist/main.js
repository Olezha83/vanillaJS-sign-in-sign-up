/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/callbacks/index.js":
/*!********************************!*\
  !*** ./src/callbacks/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSignIn\": () => (/* reexport safe */ _switch_components__WEBPACK_IMPORTED_MODULE_0__.showSignIn),\n/* harmony export */   \"showSignUp\": () => (/* reexport safe */ _switch_components__WEBPACK_IMPORTED_MODULE_0__.showSignUp)\n/* harmony export */ });\n/* harmony import */ var _switch_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-components */ \"./src/callbacks/switch-components.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/index.js?");

/***/ }),

/***/ "./src/callbacks/switch-components.js":
/*!********************************************!*\
  !*** ./src/callbacks/switch-components.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSignUp\": () => (/* binding */ showSignUp),\n/* harmony export */   \"showSignIn\": () => (/* binding */ showSignIn)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nfunction showSignUp () {\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signUpTab.onclick = () => {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_0__.signUpElement.setAttribute('display', 'block')\r\n    _helpers__WEBPACK_IMPORTED_MODULE_0__.signInElement.setAttribute('display', 'none')\r\n  }\r\n}\r\n\r\nfunction showSignIn () {\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signInTab.onclick = () => {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_0__.signInElement.setAttribute('display', 'block')\r\n    _helpers__WEBPACK_IMPORTED_MODULE_0__.signUpElement.setAttribute('display', 'none')\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/switch-components.js?");

/***/ }),

/***/ "./src/components/sign-in.js":
/*!***********************************!*\
  !*** ./src/components/sign-in.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\nclass SignIn extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow( {mode: 'closed'} )\r\n    this.wrapper = shadow.appendChild(document.createElement('main'))\r\n    this.wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.signInTemplate\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getSignInElems)(shadow)\r\n  }\r\n\r\n  connectedCallback () {\r\n    this.setAttribute('display', 'none')\r\n  }\r\n\r\n  static get observedAttributes () {\r\n    return ['display']\r\n  }\r\n  \r\n  attributeChangedCallback (attrName, oldVal, newVal) {\r\n    Object.assign(this.wrapper.style, {\r\n      display: newVal\r\n    })\r\n  }\r\n}\r\n\r\ncustomElements.define('sign-in', SignIn)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('sign-in'));\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/sign-in.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\nclass SignUp extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow( {mode: 'closed'} )\r\n    this.wrapper = shadow.appendChild(document.createElement('main'))\r\n    this.wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.signUpTemplate\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getSignUpElems)(shadow)\r\n  }\r\n\r\n  connectedCallback () {\r\n    this.setAttribute('display', 'none')\r\n  }\r\n\r\n  static get observedAttributes () {\r\n    return ['display']\r\n  }\r\n  \r\n  attributeChangedCallback (attrName, oldVal, newVal) {\r\n    Object.assign(this.wrapper.style, {\r\n      display: newVal\r\n    })\r\n  }\r\n}\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('sign-up'));\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/components/two-anchors.js":
/*!***************************************!*\
  !*** ./src/components/two-anchors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass TwoAnchors extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    this.shadow = this.attachShadow( {mode: 'closed'} )\r\n    const wrapper = this.shadow.appendChild(document.createElement('main'))\r\n    wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.twoAnchorsTemplate\r\n  }\r\n\r\n  connectedCallback () {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getTabs)(this.shadow)\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getElems)()\r\n    ;(0,_callbacks__WEBPACK_IMPORTED_MODULE_2__.showSignIn)()\r\n    ;(0,_callbacks__WEBPACK_IMPORTED_MODULE_2__.showSignUp)()\r\n  }\r\n\r\n}\r\n\r\ncustomElements.define('two-anchors', TwoAnchors)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('two-anchors'));\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/two-anchors.js?");

/***/ }),

/***/ "./src/helpers/elems-of-sign-in.js":
/*!*****************************************!*\
  !*** ./src/helpers/elems-of-sign-in.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSignInElems\": () => (/* binding */ getSignInElems),\n/* harmony export */   \"loginSignIn\": () => (/* binding */ loginSignIn),\n/* harmony export */   \"passwordSignIn\": () => (/* binding */ passwordSignIn),\n/* harmony export */   \"submitSignIn\": () => (/* binding */ submitSignIn)\n/* harmony export */ });\nlet loginSignIn, passwordSignIn, submitSignIn\r\n\r\nfunction getSignInElems (shadow) {\r\n  [loginSignIn, passwordSignIn, submitSignIn] = [\r\n    'login',\r\n    'password',\r\n    'submit'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/elems-of-sign-in.js?");

/***/ }),

/***/ "./src/helpers/elems-of-sign-up.js":
/*!*****************************************!*\
  !*** ./src/helpers/elems-of-sign-up.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSignUpElems\": () => (/* binding */ getSignUpElems),\n/* harmony export */   \"loginSignUp\": () => (/* binding */ loginSignUp),\n/* harmony export */   \"passwordSignUp\": () => (/* binding */ passwordSignUp),\n/* harmony export */   \"avatarSignUp\": () => (/* binding */ avatarSignUp),\n/* harmony export */   \"submitSignUp\": () => (/* binding */ submitSignUp)\n/* harmony export */ });\nlet loginSignUp, passwordSignUp, avatarSignUp, submitSignUp\r\n\r\nfunction getSignUpElems (shadow) {\r\n  [loginSignUp, passwordSignUp, avatarSignUp, submitSignUp] = [\r\n    'login',\r\n    'password',\r\n    'avatar',\r\n    'submit'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/elems-of-sign-up.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signUpElement\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signUpElement),\n/* harmony export */   \"signInElement\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signInElement),\n/* harmony export */   \"signUpTab\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signUpTab),\n/* harmony export */   \"signInTab\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signInTab),\n/* harmony export */   \"getTabs\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.getTabs),\n/* harmony export */   \"getElems\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.getElems),\n/* harmony export */   \"loginSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.loginSignUp),\n/* harmony export */   \"passwordSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp),\n/* harmony export */   \"avatarSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.avatarSignUp),\n/* harmony export */   \"submitSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.submitSignUp),\n/* harmony export */   \"getSignUpElems\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.getSignUpElems),\n/* harmony export */   \"loginSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.loginSignIn),\n/* harmony export */   \"passwordSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.passwordSignIn),\n/* harmony export */   \"submitSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.submitSignIn),\n/* harmony export */   \"getSignInElems\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.getSignInElems)\n/* harmony export */ });\n/* harmony import */ var _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-and-components-refs */ \"./src/helpers/tabs-and-components-refs.js\");\n/* harmony import */ var _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elems-of-sign-up */ \"./src/helpers/elems-of-sign-up.js\");\n/* harmony import */ var _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elems-of-sign-in */ \"./src/helpers/elems-of-sign-in.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/tabs-and-components-refs.js":
/*!*************************************************!*\
  !*** ./src/helpers/tabs-and-components-refs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTabs\": () => (/* binding */ getTabs),\n/* harmony export */   \"getElems\": () => (/* binding */ getElems),\n/* harmony export */   \"signUpElement\": () => (/* binding */ signUpElement),\n/* harmony export */   \"signInElement\": () => (/* binding */ signInElement),\n/* harmony export */   \"signUpTab\": () => (/* binding */ signUpTab),\n/* harmony export */   \"signInTab\": () => (/* binding */ signInTab)\n/* harmony export */ });\nlet signUpElement, signInElement, signUpTab, signInTab \r\n\r\nfunction getTabs (shadow) {\r\n  [signUpTab, signInTab] = [\r\n    'sign-up-tab',\r\n    'sign-in-tab'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\nfunction getElems () {\r\n  [signUpElement, signInElement] = [\r\n    'sign-up',\r\n    'sign-in'\r\n  ].map(elem => document.getElementsByTagName(elem)[0])\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/tabs-and-components-refs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_sign_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sign-up */ \"./src/components/sign-up.js\");\n/* harmony import */ var _components_sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in */ \"./src/components/sign-in.js\");\n/* harmony import */ var _components_two_anchors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/two-anchors */ \"./src/components/two-anchors.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.body.appendChild (_components_sign_up__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n\r\ndocument.body.appendChild (_components_sign_in__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\ndocument.body.appendChild (_components_two_anchors__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/index.js?");

/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"twoAnchorsTemplate\": () => (/* reexport safe */ _twoAnchorsTemplate__WEBPACK_IMPORTED_MODULE_0__.twoAnchorsTemplate),\n/* harmony export */   \"signInTemplate\": () => (/* reexport safe */ _signInTemplate__WEBPACK_IMPORTED_MODULE_1__.signInTemplate),\n/* harmony export */   \"signUpTemplate\": () => (/* reexport safe */ _signUpTemplate__WEBPACK_IMPORTED_MODULE_2__.signUpTemplate)\n/* harmony export */ });\n/* harmony import */ var _twoAnchorsTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twoAnchorsTemplate */ \"./src/templates/twoAnchorsTemplate.js\");\n/* harmony import */ var _signInTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signInTemplate */ \"./src/templates/signInTemplate.js\");\n/* harmony import */ var _signUpTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signUpTemplate */ \"./src/templates/signUpTemplate.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/index.js?");

/***/ }),

/***/ "./src/templates/signInTemplate.js":
/*!*****************************************!*\
  !*** ./src/templates/signInTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signInTemplate\": () => (/* binding */ signInTemplate)\n/* harmony export */ });\nconst signInTemplate = `\r\n  <div class=\"wrapper\">\r\n    <p>Enter your login</p>\r\n    <input id=\"login\" type=\"text\">\r\n    <p>Enter your password</p>\r\n    <input id=\"password\" type=\"password\">\r\n    <button id=\"submit\">Sign in</button>\r\n  </div>\r\n\r\n  <style>\r\n    .wrapper {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 344px;\r\n      box-shadow: 0 0 4px #0007;\r\n      padding: 8px;\r\n      border-radius: 4px;\r\n    }\r\n    \r\n    p {\r\n      margin-top: 8px;\r\n      margin-bottom: 4px;\r\n      font-weight: 700;\r\n    }\r\n\r\n    p:first-child {\r\n      margin-top: 2px;\r\n    }\r\n    \r\n    input {\r\n      width: 240px;\r\n    }\r\n    \r\n    input, button {\r\n      padding: 4px 8px;\r\n      border-width: 1px;\r\n      border-radius: 4px;\r\n    }\r\n  </style>\r\n`\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/signInTemplate.js?");

/***/ }),

/***/ "./src/templates/signUpTemplate.js":
/*!*****************************************!*\
  !*** ./src/templates/signUpTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signUpTemplate\": () => (/* binding */ signUpTemplate)\n/* harmony export */ });\nconst signUpTemplate = `\r\n  <div class=\"wrapper\">\r\n    <p>Enter your login</p>\r\n    <input id=\"login\" type=\"text\">\r\n    <p>Enter your password</p>\r\n    <input id=\"password\" type=\"password\">\r\n    <p>Choose your avatar</p>\r\n    <input id=\"avatar\" type=\"file\">\r\n    <button id=\"submit\">Sign up</button>\r\n  </div>\r\n\r\n  <style>\r\n    .wrapper {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 344px;\r\n      box-shadow: 0 0 4px #0007;\r\n      padding: 8px;\r\n      border-radius: 4px;\r\n    }\r\n    \r\n    p {\r\n      margin-top: 8px;\r\n      margin-bottom: 4px;\r\n      font-weight: 700;\r\n    }\r\n\r\n    p:first-child {\r\n      margin-top: 2px;\r\n    }\r\n\r\n    input {\r\n      width: 240px;\r\n    }\r\n    \r\n    input, button {\r\n      padding: 4px 8px;\r\n      border-width: 1px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n    button {\r\n      vertical-align: middle;\r\n    }\r\n\r\n    input:last-of-type {\r\n      vertical-align: middle;\r\n    }\r\n\r\n    input[type=\"file\"] {\r\n      padding: 0 16px 4px 0;\r\n    }\r\n  </style>\r\n`\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/signUpTemplate.js?");

/***/ }),

/***/ "./src/templates/twoAnchorsTemplate.js":
/*!*********************************************!*\
  !*** ./src/templates/twoAnchorsTemplate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"twoAnchorsTemplate\": () => (/* binding */ twoAnchorsTemplate)\n/* harmony export */ });\nconst twoAnchorsTemplate = `\r\n  <div class=\"anchors\">\r\n    <span id=\"sign-up-tab\">Sign up</span>\r\n    <span id=\"sign-in-tab\">Sign in</span>\r\n  </div>\r\n\r\n  <style>\r\n    .anchors {\r\n      text-align: center;\r\n      border-bottom: 1px solid #000;\r\n      padding-bottom: 5px;\r\n      width: 360px;\r\n      margin: 0 auto;\r\n    }\r\n    \r\n    span {\r\n      font-weight: 700;\r\n      font-variant: small-caps;\r\n      margin: 10px;\r\n      color: #551a8b;\r\n      cursor: pointer;\r\n    }\r\n  </style>\r\n`\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/twoAnchorsTemplate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;