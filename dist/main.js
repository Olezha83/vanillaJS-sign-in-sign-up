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

/***/ "./src/callbacks/avatarSignUp-callback.js":
/*!************************************************!*\
  !*** ./src/callbacks/avatarSignUp-callback.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarSignUpCallback\": () => (/* binding */ avatarSignUpCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nfunction avatarSignUpCallback (file, picture) {\r\n  if (file.type.indexOf('image')) {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.avatarErrorSignUp.style, {\r\n      display: 'block'\r\n    })\r\n  }\r\n\r\n  const reader = new FileReader\r\n\r\n  reader.onload = event => {\r\n    if (!file.type.indexOf('image')) {\r\n      picture.src = event.target.result\r\n    }\r\n  }\r\n\r\n  reader.readAsDataURL(file)\r\n\r\n  ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateFormSignUp)()\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/avatarSignUp-callback.js?");

/***/ }),

/***/ "./src/callbacks/avatarSignUpClearError-callback.js":
/*!**********************************************************!*\
  !*** ./src/callbacks/avatarSignUpClearError-callback.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarSignUpClearErrorCallback\": () => (/* binding */ avatarSignUpClearErrorCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nfunction avatarSignUpClearErrorCallback () {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.avatarErrorSignUp.style, {\r\n    display: ''\r\n  })\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/avatarSignUpClearError-callback.js?");

/***/ }),

/***/ "./src/callbacks/index.js":
/*!********************************!*\
  !*** ./src/callbacks/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSignIn\": () => (/* reexport safe */ _switch_components__WEBPACK_IMPORTED_MODULE_0__.showSignIn),\n/* harmony export */   \"showSignUp\": () => (/* reexport safe */ _switch_components__WEBPACK_IMPORTED_MODULE_0__.showSignUp),\n/* harmony export */   \"loginSignUpCallback\": () => (/* reexport safe */ _loginSignUp_callback__WEBPACK_IMPORTED_MODULE_1__.loginSignUpCallback),\n/* harmony export */   \"isLoginCheckedSignUp\": () => (/* reexport safe */ _loginSignUp_callback__WEBPACK_IMPORTED_MODULE_1__.isLoginCheckedSignUp),\n/* harmony export */   \"passwordSignUpOnFocusCallback\": () => (/* reexport safe */ _passwordSignUpOnFocus_callback__WEBPACK_IMPORTED_MODULE_2__.passwordSignUpOnFocusCallback),\n/* harmony export */   \"passwordSignUpCallback\": () => (/* reexport safe */ _passwordSignUp_callback__WEBPACK_IMPORTED_MODULE_3__.passwordSignUpCallback),\n/* harmony export */   \"avatarSignUpCallback\": () => (/* reexport safe */ _avatarSignUp_callback__WEBPACK_IMPORTED_MODULE_4__.avatarSignUpCallback),\n/* harmony export */   \"avatarSignUpClearErrorCallback\": () => (/* reexport safe */ _avatarSignUpClearError_callback__WEBPACK_IMPORTED_MODULE_5__.avatarSignUpClearErrorCallback),\n/* harmony export */   \"submitSignUpCallback\": () => (/* reexport safe */ _submitSignUp_callback__WEBPACK_IMPORTED_MODULE_6__.submitSignUpCallback),\n/* harmony export */   \"loginSignInCallback\": () => (/* reexport safe */ _loginSignIn_callback__WEBPACK_IMPORTED_MODULE_7__.loginSignInCallback),\n/* harmony export */   \"isLoginCheckedSignIn\": () => (/* reexport safe */ _loginSignIn_callback__WEBPACK_IMPORTED_MODULE_7__.isLoginCheckedSignIn),\n/* harmony export */   \"passwordSignInCallback\": () => (/* reexport safe */ _passwordSignIn_callback__WEBPACK_IMPORTED_MODULE_8__.passwordSignInCallback),\n/* harmony export */   \"passwordSignInOnFocusCallback\": () => (/* reexport safe */ _passwordSignInOnFocus_callback__WEBPACK_IMPORTED_MODULE_9__.passwordSignInOnFocusCallback)\n/* harmony export */ });\n/* harmony import */ var _switch_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch-components */ \"./src/callbacks/switch-components.js\");\n/* harmony import */ var _loginSignUp_callback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginSignUp-callback */ \"./src/callbacks/loginSignUp-callback.js\");\n/* harmony import */ var _passwordSignUpOnFocus_callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./passwordSignUpOnFocus-callback */ \"./src/callbacks/passwordSignUpOnFocus-callback.js\");\n/* harmony import */ var _passwordSignUp_callback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passwordSignUp-callback */ \"./src/callbacks/passwordSignUp-callback.js\");\n/* harmony import */ var _avatarSignUp_callback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./avatarSignUp-callback */ \"./src/callbacks/avatarSignUp-callback.js\");\n/* harmony import */ var _avatarSignUpClearError_callback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatarSignUpClearError-callback */ \"./src/callbacks/avatarSignUpClearError-callback.js\");\n/* harmony import */ var _submitSignUp_callback__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submitSignUp-callback */ \"./src/callbacks/submitSignUp-callback.js\");\n/* harmony import */ var _loginSignIn_callback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loginSignIn-callback */ \"./src/callbacks/loginSignIn-callback.js\");\n/* harmony import */ var _passwordSignIn_callback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./passwordSignIn-callback */ \"./src/callbacks/passwordSignIn-callback.js\");\n/* harmony import */ var _passwordSignInOnFocus_callback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./passwordSignInOnFocus-callback */ \"./src/callbacks/passwordSignInOnFocus-callback.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/index.js?");

/***/ }),

/***/ "./src/callbacks/loginSignIn-callback.js":
/*!***********************************************!*\
  !*** ./src/callbacks/loginSignIn-callback.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginSignInCallback\": () => (/* binding */ loginSignInCallback),\n/* harmony export */   \"isLoginCheckedSignIn\": () => (/* binding */ isLoginCheckedSignIn)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nlet isLoginCheckedSignIn\r\n\r\nconst loginSignInCallback = async (event) => {\r\n  const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getUserDetailsSignIn)(event.target.value)\r\n\r\n  isLoginCheckedSignIn = true\r\n\r\n  if (response) {\r\n    localStorage.setItem('password', response.password)\r\n    localStorage.setItem('avatar', response.avatar)  \r\n  } else {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.loginErrorSignIn.style, {\r\n      display: 'block'\r\n    })\r\n  }\r\n\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.loginSignIn.onfocus = () => {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.loginErrorSignIn.style, {\r\n      display: ''\r\n    })\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/loginSignIn-callback.js?");

/***/ }),

/***/ "./src/callbacks/loginSignUp-callback.js":
/*!***********************************************!*\
  !*** ./src/callbacks/loginSignUp-callback.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginSignUpCallback\": () => (/* binding */ loginSignUpCallback),\n/* harmony export */   \"isLoginCheckedSignUp\": () => (/* binding */ isLoginCheckedSignUp)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nlet isLoginCheckedSignUp\r\n\r\nconst loginSignUpCallback = async (event) => {\r\n  const response = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateLoginSignUp)(event.target.value)\r\n\r\n  isLoginCheckedSignUp = true\r\n  \r\n  if (response) {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.loginErrorSignUp.style, {\r\n      display: 'block'\r\n    })\r\n  }\r\n\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.loginSignUp.onfocus = () => {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.loginErrorSignUp.style, {\r\n      display: ''\r\n    })\r\n  }\r\n\r\n  ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateFormSignUp)()\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/loginSignUp-callback.js?");

/***/ }),

/***/ "./src/callbacks/passwordSignIn-callback.js":
/*!**************************************************!*\
  !*** ./src/callbacks/passwordSignIn-callback.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordSignInCallback\": () => (/* binding */ passwordSignInCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst passwordSignInCallback = (event) => {\r\n  const passwordCheck = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validatePasswordSignIn)(event.target.value)\r\n\r\n  if (!passwordCheck) {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignIn.style, {\r\n      display: 'block'\r\n    })\r\n  }\r\n\r\n  if (passwordCheck) {\r\n    Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.avatarParagraphSignIn.style, {\r\n      display: 'block'\r\n    })\r\n\r\n    const avatarPicture = document.createElement('img')\r\n    _helpers__WEBPACK_IMPORTED_MODULE_0__.avatarParagraphSignIn.insertAdjacentElement('afterend', avatarPicture)\r\n    avatarPicture.setAttribute('id', 'avatar-picture')\r\n    avatarPicture.src = localStorage.avatar\r\n  }\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/passwordSignIn-callback.js?");

/***/ }),

/***/ "./src/callbacks/passwordSignInOnFocus-callback.js":
/*!*********************************************************!*\
  !*** ./src/callbacks/passwordSignInOnFocus-callback.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordSignInOnFocusCallback\": () => (/* binding */ passwordSignInOnFocusCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst passwordSignInOnFocusCallback = () => {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignIn.style, {\r\n    display: ''\r\n  })\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/passwordSignInOnFocus-callback.js?");

/***/ }),

/***/ "./src/callbacks/passwordSignUp-callback.js":
/*!**************************************************!*\
  !*** ./src/callbacks/passwordSignUp-callback.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordSignUpCallback\": () => (/* binding */ passwordSignUpCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\n\r\n\r\nconst passwordSignUpCallback = (event) => {\r\n  _configs__WEBPACK_IMPORTED_MODULE_1__.passwordRule.test(event.target.value)\r\n    ? Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordSignUpInfo.style, {\r\n      display: ''\r\n    })\r\n    : Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignUp.style, {\r\n      display: 'block'\r\n    })\r\n  \r\n  ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.validateFormSignUp)()\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/passwordSignUp-callback.js?");

/***/ }),

/***/ "./src/callbacks/passwordSignUpOnFocus-callback.js":
/*!*********************************************************!*\
  !*** ./src/callbacks/passwordSignUpOnFocus-callback.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordSignUpOnFocusCallback\": () => (/* binding */ passwordSignUpOnFocusCallback)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nconst passwordSignUpOnFocusCallback = () => {\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordSignUpInfo.style, {\r\n    display: 'block'\r\n  })\r\n  \r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignUp.style, {\r\n    display: ''\r\n  })\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/passwordSignUpOnFocus-callback.js?");

/***/ }),

/***/ "./src/callbacks/submitSignUp-callback.js":
/*!************************************************!*\
  !*** ./src/callbacks/submitSignUp-callback.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"submitSignUpCallback\": () => (/* binding */ submitSignUpCallback)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\n\r\n\r\nconst submitSignUpCallback = () => {\r\n  fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.origin}/user/${_helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignUp.value}`, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json'\r\n    },\r\n    body: JSON.stringify({\r\n      password: _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.value,\r\n      avatar: _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarPictureSignUp.src\r\n    })\r\n  })\r\n\r\n  Object.assign(_helpers__WEBPACK_IMPORTED_MODULE_1__.congratsSignUp.style, {\r\n    display: 'block'\r\n  })\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/submitSignUp-callback.js?");

/***/ }),

/***/ "./src/callbacks/switch-components.js":
/*!********************************************!*\
  !*** ./src/callbacks/switch-components.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showSignUp\": () => (/* binding */ showSignUp),\n/* harmony export */   \"showSignIn\": () => (/* binding */ showSignIn)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n\r\n\r\nfunction showSignUp () {\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signUpElement.setAttribute('display', 'block')\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signInElement.setAttribute('display', 'none')\r\n}\r\n\r\nfunction showSignIn () {\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signInElement.setAttribute('display', 'block')\r\n  _helpers__WEBPACK_IMPORTED_MODULE_0__.signUpElement.setAttribute('display', 'none')\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/callbacks/switch-components.js?");

/***/ }),

/***/ "./src/components/sign-in.js":
/*!***********************************!*\
  !*** ./src/components/sign-in.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignIn extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow( {mode: 'closed'} )\r\n    this.wrapper = shadow.appendChild(document.createElement('main'))\r\n    this.wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.signInTemplate\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getSignInElems)(shadow)\r\n  }\r\n\r\n  connectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignIn.onblur = _callbacks__WEBPACK_IMPORTED_MODULE_2__.loginSignInCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignIn.onblur = _callbacks__WEBPACK_IMPORTED_MODULE_2__.passwordSignInCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignIn.onfocus = _callbacks__WEBPACK_IMPORTED_MODULE_2__.passwordSignInOnFocusCallback\r\n    this.setAttribute('display', 'none')\r\n  }\r\n\r\n  static get observedAttributes () {\r\n    return ['display']\r\n  }\r\n  \r\n  attributeChangedCallback (attrName, oldVal, newVal) {\r\n    Object.assign(this.wrapper.style, {\r\n      display: newVal\r\n    })\r\n  }\r\n\r\n  disconnectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignIn.onblur = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignIn.onblur = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignIn.onfocus = null\r\n  }\r\n}\r\n\r\ncustomElements.define('sign-in', SignIn)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('sign-in'));\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/sign-in.js?");

/***/ }),

/***/ "./src/components/sign-up.js":
/*!***********************************!*\
  !*** ./src/components/sign-up.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass SignUp extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow( {mode: 'closed'} )\r\n    this.wrapper = shadow.appendChild(document.createElement('main'))\r\n    this.wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.signUpTemplate\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getSignUpElems)(shadow)\r\n  }\r\n\r\n  connectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignUp.onblur = _callbacks__WEBPACK_IMPORTED_MODULE_2__.loginSignUpCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.onfocus = _callbacks__WEBPACK_IMPORTED_MODULE_2__.passwordSignUpOnFocusCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.onblur = _callbacks__WEBPACK_IMPORTED_MODULE_2__.passwordSignUpCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp.onchange = event => {\r\n      ;(0,_callbacks__WEBPACK_IMPORTED_MODULE_2__.avatarSignUpCallback)(event.target.files[0], _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarPictureSignUp)\r\n    }\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.avatarSignUpClearErrorCallback\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.submitSignUp.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.submitSignUpCallback\r\n    this.setAttribute('display', 'none')\r\n  }\r\n\r\n  static get observedAttributes () {\r\n    return ['display']\r\n  }\r\n  \r\n  attributeChangedCallback (attrName, oldVal, newVal) {\r\n    Object.assign(this.wrapper.style, {\r\n      display: newVal\r\n    })\r\n  }\r\n\r\n  disconnectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.loginSignUp.onblur = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.onfocus = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp.onblur = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp.onchange = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp.onclick = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.submitSignUp.onclick = null\r\n  }\r\n}\r\n\r\ncustomElements.define('sign-up', SignUp)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('sign-up'));\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/sign-up.js?");

/***/ }),

/***/ "./src/components/two-anchors.js":
/*!***************************************!*\
  !*** ./src/components/two-anchors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates */ \"./src/templates/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass TwoAnchors extends HTMLElement {\r\n  constructor () {\r\n    super()\r\n    const shadow = this.attachShadow( {mode: 'closed'} )\r\n    const wrapper = shadow.appendChild(document.createElement('main'))\r\n    wrapper.innerHTML = _templates__WEBPACK_IMPORTED_MODULE_0__.twoAnchorsTemplate\r\n    ;(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getTabs)(shadow)\r\n  }\r\n\r\n  connectedCallback () {\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getElems)()\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.signInTab.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.showSignIn\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.signUpTab.onclick = _callbacks__WEBPACK_IMPORTED_MODULE_2__.showSignUp\r\n  }\r\n\r\n  disconnectedCallback () {\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.signInTab.onclick = null\r\n    _helpers__WEBPACK_IMPORTED_MODULE_1__.signUpTab.onclick = null\r\n  }\r\n}\r\n\r\ncustomElements.define('two-anchors', TwoAnchors)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (document.createElement('two-anchors'));\n\n//# sourceURL=webpack://sign-in-sign-up/./src/components/two-anchors.js?");

/***/ }),

/***/ "./src/configs/index.js":
/*!******************************!*\
  !*** ./src/configs/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"origin\": () => (/* reexport safe */ _origin__WEBPACK_IMPORTED_MODULE_0__.origin),\n/* harmony export */   \"passwordRule\": () => (/* reexport safe */ _password_rule__WEBPACK_IMPORTED_MODULE_1__.passwordRule)\n/* harmony export */ });\n/* harmony import */ var _origin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./origin */ \"./src/configs/origin.js\");\n/* harmony import */ var _password_rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password-rule */ \"./src/configs/password-rule.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/configs/index.js?");

/***/ }),

/***/ "./src/configs/origin.js":
/*!*******************************!*\
  !*** ./src/configs/origin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"origin\": () => (/* binding */ origin)\n/* harmony export */ });\nconst origin = 'https://garevna-rest-api.glitch.me'\n\n//# sourceURL=webpack://sign-in-sign-up/./src/configs/origin.js?");

/***/ }),

/***/ "./src/configs/password-rule.js":
/*!**************************************!*\
  !*** ./src/configs/password-rule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"passwordRule\": () => (/* binding */ passwordRule)\n/* harmony export */ });\nconst passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/\n\n//# sourceURL=webpack://sign-in-sign-up/./src/configs/password-rule.js?");

/***/ }),

/***/ "./src/helpers/elems-of-sign-in.js":
/*!*****************************************!*\
  !*** ./src/helpers/elems-of-sign-in.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginSignIn\": () => (/* binding */ loginSignIn),\n/* harmony export */   \"loginErrorSignIn\": () => (/* binding */ loginErrorSignIn),\n/* harmony export */   \"passwordSignIn\": () => (/* binding */ passwordSignIn),\n/* harmony export */   \"passwordErrorSignIn\": () => (/* binding */ passwordErrorSignIn),\n/* harmony export */   \"avatarParagraphSignIn\": () => (/* binding */ avatarParagraphSignIn),\n/* harmony export */   \"submitSignIn\": () => (/* binding */ submitSignIn),\n/* harmony export */   \"congratsSignIn\": () => (/* binding */ congratsSignIn),\n/* harmony export */   \"getSignInElems\": () => (/* binding */ getSignInElems)\n/* harmony export */ });\nlet\r\n  loginSignIn,\r\n  loginErrorSignIn,\r\n  passwordSignIn,\r\n  passwordErrorSignIn,\r\n  avatarParagraphSignIn,\r\n  submitSignIn,\r\n  congratsSignIn\r\n\r\nfunction getSignInElems (shadow) {\r\n  [\r\n    loginSignIn,\r\n    loginErrorSignIn,\r\n    passwordSignIn,\r\n    passwordErrorSignIn,\r\n    avatarParagraphSignIn,\r\n    submitSignIn,\r\n    congratsSignIn\r\n  ] = [\r\n    'login',\r\n    'login-error',\r\n    'password',\r\n    'password-error',\r\n    'avatar-paragraph',\r\n    'submit',\r\n    'congrats'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/elems-of-sign-in.js?");

/***/ }),

/***/ "./src/helpers/elems-of-sign-up.js":
/*!*****************************************!*\
  !*** ./src/helpers/elems-of-sign-up.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSignUpElems\": () => (/* binding */ getSignUpElems),\n/* harmony export */   \"loginSignUp\": () => (/* binding */ loginSignUp),\n/* harmony export */   \"loginErrorSignUp\": () => (/* binding */ loginErrorSignUp),\n/* harmony export */   \"passwordSignUp\": () => (/* binding */ passwordSignUp),\n/* harmony export */   \"passwordSignUpInfo\": () => (/* binding */ passwordSignUpInfo),\n/* harmony export */   \"passwordErrorSignUp\": () => (/* binding */ passwordErrorSignUp),\n/* harmony export */   \"avatarSelectSignUp\": () => (/* binding */ avatarSelectSignUp),\n/* harmony export */   \"avatarPictureSignUp\": () => (/* binding */ avatarPictureSignUp),\n/* harmony export */   \"avatarErrorSignUp\": () => (/* binding */ avatarErrorSignUp),\n/* harmony export */   \"submitSignUp\": () => (/* binding */ submitSignUp),\n/* harmony export */   \"congratsSignUp\": () => (/* binding */ congratsSignUp)\n/* harmony export */ });\nlet\r\n  loginSignUp,\r\n  loginErrorSignUp,\r\n  passwordSignUp,\r\n  passwordSignUpInfo,\r\n  passwordErrorSignUp,\r\n  avatarSelectSignUp,\r\n  avatarPictureSignUp,\r\n  avatarErrorSignUp,\r\n  submitSignUp,\r\n  congratsSignUp\r\n\r\nfunction getSignUpElems (shadow) {\r\n  [\r\n    loginSignUp,\r\n    loginErrorSignUp,\r\n    passwordSignUp,\r\n    passwordSignUpInfo,\r\n    passwordErrorSignUp,\r\n    avatarSelectSignUp,\r\n    avatarPictureSignUp,\r\n    avatarErrorSignUp,\r\n    submitSignUp,\r\n    congratsSignUp\r\n  ] = [\r\n    'login',\r\n    'login-error',\r\n    'password',\r\n    'password-info',\r\n    'password-error',\r\n    'avatar-select',\r\n    'avatar-picture',\r\n    'avatar-error',\r\n    'submit',\r\n    'congrats'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/elems-of-sign-up.js?");

/***/ }),

/***/ "./src/helpers/getUserDetailsSignIn.js":
/*!*********************************************!*\
  !*** ./src/helpers/getUserDetailsSignIn.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUserDetailsSignIn\": () => (/* binding */ getUserDetailsSignIn)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\nconst getUserDetailsSignIn = async (login) => {\r\n  const { error, password, avatar } =\r\n    await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.origin}/user/${login}`)).json()\r\n  \r\n  return error ? null : { password, avatar }\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/getUserDetailsSignIn.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signUpElement\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signUpElement),\n/* harmony export */   \"signInElement\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signInElement),\n/* harmony export */   \"signUpTab\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signUpTab),\n/* harmony export */   \"signInTab\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.signInTab),\n/* harmony export */   \"getTabs\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.getTabs),\n/* harmony export */   \"getElems\": () => (/* reexport safe */ _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__.getElems),\n/* harmony export */   \"loginSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.loginSignUp),\n/* harmony export */   \"loginErrorSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.loginErrorSignUp),\n/* harmony export */   \"passwordSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.passwordSignUp),\n/* harmony export */   \"passwordSignUpInfo\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.passwordSignUpInfo),\n/* harmony export */   \"passwordErrorSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.passwordErrorSignUp),\n/* harmony export */   \"avatarSelectSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.avatarSelectSignUp),\n/* harmony export */   \"avatarPictureSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.avatarPictureSignUp),\n/* harmony export */   \"avatarErrorSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.avatarErrorSignUp),\n/* harmony export */   \"submitSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.submitSignUp),\n/* harmony export */   \"congratsSignUp\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.congratsSignUp),\n/* harmony export */   \"getSignUpElems\": () => (/* reexport safe */ _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__.getSignUpElems),\n/* harmony export */   \"loginSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.loginSignIn),\n/* harmony export */   \"loginErrorSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.loginErrorSignIn),\n/* harmony export */   \"passwordSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.passwordSignIn),\n/* harmony export */   \"passwordErrorSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.passwordErrorSignIn),\n/* harmony export */   \"avatarParagraphSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.avatarParagraphSignIn),\n/* harmony export */   \"submitSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.submitSignIn),\n/* harmony export */   \"congratsSignIn\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.congratsSignIn),\n/* harmony export */   \"getSignInElems\": () => (/* reexport safe */ _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__.getSignInElems),\n/* harmony export */   \"validateLoginSignUp\": () => (/* reexport safe */ _validateLoginSignUp__WEBPACK_IMPORTED_MODULE_3__.validateLoginSignUp),\n/* harmony export */   \"validateFormSignUp\": () => (/* reexport safe */ _validateFormSignUp__WEBPACK_IMPORTED_MODULE_4__.validateFormSignUp),\n/* harmony export */   \"getUserDetailsSignIn\": () => (/* reexport safe */ _getUserDetailsSignIn__WEBPACK_IMPORTED_MODULE_5__.getUserDetailsSignIn),\n/* harmony export */   \"validatePasswordSignIn\": () => (/* reexport safe */ _validatePasswordSignIn__WEBPACK_IMPORTED_MODULE_6__.validatePasswordSignIn)\n/* harmony export */ });\n/* harmony import */ var _tabs_and_components_refs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-and-components-refs */ \"./src/helpers/tabs-and-components-refs.js\");\n/* harmony import */ var _elems_of_sign_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elems-of-sign-up */ \"./src/helpers/elems-of-sign-up.js\");\n/* harmony import */ var _elems_of_sign_in__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elems-of-sign-in */ \"./src/helpers/elems-of-sign-in.js\");\n/* harmony import */ var _validateLoginSignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateLoginSignUp */ \"./src/helpers/validateLoginSignUp.js\");\n/* harmony import */ var _validateFormSignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateFormSignUp */ \"./src/helpers/validateFormSignUp.js\");\n/* harmony import */ var _getUserDetailsSignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getUserDetailsSignIn */ \"./src/helpers/getUserDetailsSignIn.js\");\n/* harmony import */ var _validatePasswordSignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validatePasswordSignIn */ \"./src/helpers/validatePasswordSignIn.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/index.js?");

/***/ }),

/***/ "./src/helpers/tabs-and-components-refs.js":
/*!*************************************************!*\
  !*** ./src/helpers/tabs-and-components-refs.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTabs\": () => (/* binding */ getTabs),\n/* harmony export */   \"getElems\": () => (/* binding */ getElems),\n/* harmony export */   \"signUpElement\": () => (/* binding */ signUpElement),\n/* harmony export */   \"signInElement\": () => (/* binding */ signInElement),\n/* harmony export */   \"signUpTab\": () => (/* binding */ signUpTab),\n/* harmony export */   \"signInTab\": () => (/* binding */ signInTab)\n/* harmony export */ });\nlet signUpElement, signInElement, signUpTab, signInTab \r\n\r\nfunction getTabs (shadow) {\r\n  [signUpTab, signInTab] = [\r\n    'sign-up-tab',\r\n    'sign-in-tab'\r\n  ].map(id => shadow.querySelector(`#${id}`))\r\n}\r\n\r\nfunction getElems () {\r\n  [signUpElement, signInElement] = [\r\n    'sign-up',\r\n    'sign-in'\r\n  ].map(elem => document.getElementsByTagName(elem)[0])\r\n}\r\n\r\n\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/tabs-and-components-refs.js?");

/***/ }),

/***/ "./src/helpers/validateFormSignUp.js":
/*!*******************************************!*\
  !*** ./src/helpers/validateFormSignUp.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateFormSignUp\": () => (/* binding */ validateFormSignUp)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/helpers/index.js\");\n/* harmony import */ var _callbacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../callbacks */ \"./src/callbacks/index.js\");\n\r\n\r\n\r\n\r\nfunction validateFormSignUp () {\r\n  if (\r\n    (!___WEBPACK_IMPORTED_MODULE_0__.loginErrorSignUp.style.display && ___WEBPACK_IMPORTED_MODULE_0__.loginSignUp.value)\r\n    &&\r\n    (!___WEBPACK_IMPORTED_MODULE_0__.passwordErrorSignUp.style.display && ___WEBPACK_IMPORTED_MODULE_0__.passwordSignUp.value)\r\n    && \r\n    (!___WEBPACK_IMPORTED_MODULE_0__.avatarErrorSignUp.style.display && ___WEBPACK_IMPORTED_MODULE_0__.avatarSelectSignUp.value)\r\n    &&\r\n    _callbacks__WEBPACK_IMPORTED_MODULE_1__.isLoginCheckedSignUp\r\n  ) {\r\n    ___WEBPACK_IMPORTED_MODULE_0__.submitSignUp.disabled = false\r\n  }\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/validateFormSignUp.js?");

/***/ }),

/***/ "./src/helpers/validateLoginSignUp.js":
/*!********************************************!*\
  !*** ./src/helpers/validateLoginSignUp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateLoginSignUp\": () => (/* binding */ validateLoginSignUp)\n/* harmony export */ });\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configs */ \"./src/configs/index.js\");\n\r\n\r\nconst validateLoginSignUp = async (login) => {\r\n  const { error } = await (await fetch(`${_configs__WEBPACK_IMPORTED_MODULE_0__.origin}/user/${login}`)).json()\r\n  return !error\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/validateLoginSignUp.js?");

/***/ }),

/***/ "./src/helpers/validatePasswordSignIn.js":
/*!***********************************************!*\
  !*** ./src/helpers/validatePasswordSignIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validatePasswordSignIn\": () => (/* binding */ validatePasswordSignIn)\n/* harmony export */ });\nfunction validatePasswordSignIn (password) {\r\n  const originalPassword = localStorage.getItem('password')\r\n  return password === originalPassword\r\n}\n\n//# sourceURL=webpack://sign-in-sign-up/./src/helpers/validatePasswordSignIn.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_sign_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/sign-up */ \"./src/components/sign-up.js\");\n/* harmony import */ var _components_sign_in__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sign-in */ \"./src/components/sign-in.js\");\n/* harmony import */ var _components_two_anchors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/two-anchors */ \"./src/components/two-anchors.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.body.appendChild(_components_sign_up__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\r\n\r\ndocument.body.appendChild(_components_sign_in__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\r\n\r\ndocument.body.appendChild(_components_two_anchors__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n//# sourceURL=webpack://sign-in-sign-up/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signInTemplate\": () => (/* binding */ signInTemplate)\n/* harmony export */ });\nconst signInTemplate = `\r\n  <div class=\"wrapper\">\r\n    <p class=\"field-heading\">Enter your login</p>\r\n    <input id=\"login\" />\r\n    <div id=\"login-error\">\r\n      <p>Such user doesn't exist</p>\r\n    </div>\r\n    \r\n    <p class=\"field-heading\">Enter your password</p>\r\n    <input id=\"password\" type=\"password\" />\r\n    <div id=\"password-error\">\r\n      <p>Incorrect password</p>\r\n    </div>\r\n\r\n    <p class=\"field-heading\" id=\"avatar-paragraph\">Your avatar</p>\r\n    \r\n    <div id=\"button-paragraph\">\r\n      <button id=\"submit\">Sign in</button>\r\n    </div>\r\n    \r\n    <div id=\"congrats\">\r\n      <p>Congratulations!</p>\r\n      <p>You are now logged in!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <style>\r\n    .wrapper {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 240px;\r\n      box-shadow: 0 0 4px #0007;\r\n      padding: 8px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n    #button-paragraph {\r\n      text-align: center;\r\n      margin: 16px 0 4px;\r\n    }\r\n\r\n    #avatar-paragraph {\r\n      display: none;\r\n    }\r\n\r\n    #avatar-picture {\r\n      display: block;\r\n      width: 130px;\r\n      height: 130px;\r\n      margin-bottom: 10px;\r\n      cursor: pointer;\r\n      border: 1px solid #767676;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    #login-error, #password-error, #congrats {\r\n      display: none;\r\n      border: 1px solid #f00;\r\n      margin: 4px 0;\r\n      background: #f004;\r\n    }\r\n\r\n    #login-error>p, #password-error>p, #congrats>p {\r\n      text-align: center;\r\n      margin: 0;\r\n      font-style: italic;\r\n    }\r\n\r\n    #congrats {\r\n      margin-top: 8px;\r\n      border: 1px solid #090;\r\n      background: #0904;\r\n    }\r\n\r\n    #congrats>p:first-child {\r\n      text-transform: uppercase;\r\n    }\r\n    \r\n    .field-heading {\r\n      margin-top: 8px;\r\n      margin-bottom: 4px;\r\n      font-weight: 700;\r\n    }\r\n\r\n    field-heading:first-child {\r\n      margin-top: 2px;\r\n    }\r\n    \r\n    input {\r\n      width: 222px;\r\n    }\r\n    \r\n    input, button {\r\n      padding: 4px 8px;\r\n      border-width: 1px;\r\n      border-radius: 4px;\r\n    }\r\n  </style>\r\n`\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/signInTemplate.js?");

/***/ }),

/***/ "./src/templates/signUpTemplate.js":
/*!*****************************************!*\
  !*** ./src/templates/signUpTemplate.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signUpTemplate\": () => (/* binding */ signUpTemplate)\n/* harmony export */ });\nconst signUpTemplate = `\r\n  <div class=\"wrapper\">\r\n    <p class=\"field-heading\">Enter your login</p>\r\n    <input id=\"login\" />\r\n    <div id=\"login-error\">\r\n      <p>This login is not available.</p>\r\n      <p>Choose another login</p>\r\n    </div>\r\n\r\n    <p class=\"field-heading\">Enter your password</p>\r\n    <input id=\"password\" type=\"password\" />\r\n    <div id=\"password-info\">\r\n      <p>Password rules:</p>\r\n      <ul>\r\n        <li><span>From 6 to 16 characters</span></li>\r\n        <li><span>Any English letters</span></li>\r\n        <li><span>At least one digit</span></li>\r\n        <li><span>At least one special symbol: !@#$%^&*</span></li>\r\n      </ul>\r\n    </div>\r\n    <div id=\"password-error\">\r\n      <p>This password is incorrect.</p>\r\n      <p>See password rules above</p>\r\n    </div>\r\n\r\n    <p class=\"field-heading\">Choose your avatar</p>\r\n    <label for=\"avatar-select\">\r\n      <img src=\"https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png\" id=\"avatar-picture\" alt=\"user avatar\">\r\n    </label>\r\n    <input id=\"avatar-select\" type=\"file\" />\r\n    <div id=\"avatar-error\">\r\n      <p>Illegal file type. Choose image file</p>\r\n    </div>\r\n\r\n    <div id=\"button-paragraph\">\r\n      <button id=\"submit\" disabled>Sign up</button>\r\n    </div>\r\n\r\n    <div id=\"congrats\">\r\n      <p>Congratulations!</p>\r\n      <p>You are registered now!</p>\r\n    </div>\r\n  </div>\r\n  \r\n  <style>\r\n    .wrapper {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      width: 240px;\r\n      box-shadow: 0 0 4px #0007;\r\n      padding: 8px;\r\n      border-radius: 4px;\r\n    }\r\n    \r\n    #button-paragraph {\r\n      text-align: center;\r\n      margin: 16px 0 4px;\r\n    }\r\n    \r\n    #avatar-picture {\r\n      display: block;\r\n      width: 130px;\r\n      height: 130px;\r\n      margin-bottom: 10px;\r\n      cursor: pointer;\r\n      border: 1px solid #767676;\r\n      border-radius: 50%;\r\n    }\r\n\r\n    #login-error, #password-error, #avatar-error, #congrats {\r\n      display: none;\r\n      border: 1px solid #f00;\r\n      margin: 4px 0;\r\n      background: #f004;\r\n    }\r\n\r\n    #login-error>p, #password-error>p, #avatar-error>p, #congrats>p {\r\n      text-align: center;\r\n      margin: 0;\r\n      font-style: italic;\r\n    }\r\n    \r\n    #password-info {\r\n      display: none;\r\n      border-radius: 4px;\r\n      border: 1px solid #ddd;\r\n      padding: 4px;\r\n      margin: 4px 0;\r\n      font-size: 12px;\r\n    }\r\n\r\n    #password-info p {\r\n      margin: 0;\r\n      font-style: italic;\r\n    }\r\n\r\n    #password-info ul {\r\n      padding-inline-start: 16px;\r\n      margin: 4px 0 0;\r\n    }\r\n\r\n    #password-info span {\r\n      position: relative;\r\n      left: -3px;\r\n    }\r\n\r\n    #congrats {\r\n      margin-top: 8px;\r\n      border: 1px solid #090;\r\n      background: #0904;\r\n    }\r\n\r\n    #congrats>p:first-child {\r\n      text-transform: uppercase;\r\n    }\r\n    \r\n    .field-heading {\r\n      margin-top: 8px;\r\n      margin-bottom: 4px;\r\n      font-weight: 700;\r\n    }\r\n    \r\n    .field-heading:first-child {\r\n      margin-top: 2px;\r\n    }\r\n    \r\n    input {\r\n      width: 222px;\r\n    }\r\n    \r\n    input, button {\r\n      padding: 4px 8px;\r\n      border-width: 1px;\r\n      border-radius: 4px;\r\n    }\r\n    \r\n    input[type=\"file\"] {\r\n      display: none;\r\n    }\r\n  </style>\r\n`\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/signUpTemplate.js?");

/***/ }),

/***/ "./src/templates/twoAnchorsTemplate.js":
/*!*********************************************!*\
  !*** ./src/templates/twoAnchorsTemplate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"twoAnchorsTemplate\": () => (/* binding */ twoAnchorsTemplate)\n/* harmony export */ });\nconst twoAnchorsTemplate = `\r\n  <div class=\"anchors\">\r\n    <span id=\"sign-up-tab\">Sign up</span>\r\n    <span id=\"sign-in-tab\">Sign in</span>\r\n  </div>\r\n\r\n  <style>\r\n    .anchors {\r\n      text-align: center;\r\n      border-bottom: 1px solid #000;\r\n      padding-bottom: 5px;\r\n      width: 256px;\r\n      margin: 0 auto;\r\n    }\r\n    \r\n    span {\r\n      font-weight: 700;\r\n      font-variant: small-caps;\r\n      margin: 10px;\r\n      color: #551a8b;\r\n      cursor: pointer;\r\n    }\r\n  </style>\r\n`\n\n//# sourceURL=webpack://sign-in-sign-up/./src/templates/twoAnchorsTemplate.js?");

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