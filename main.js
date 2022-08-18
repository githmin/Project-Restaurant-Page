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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openAbout)\n/* harmony export */ });\nfunction openAbout(){\n    let home__content = document.getElementById('home__content');\n    let about__container = document.createElement('div');\n    about__container.classList.add('about__container');\n    home__content.appendChild(about__container);\n\n    let about = document.createElement('div');\n    about.classList.add('about');\n    about__container.appendChild(about);\n\n    let img = document.createElement('img');\n    img.src=\"./assets/pizza2.png\";\n    img.classList.add('aboutImg');\n    about.appendChild(img);\n\n    let h1 = document.createElement('h1');\n    h1.classList.add('aboutLogo');\n    h1.innerText = \"Bake n` take\";\n    about.appendChild(h1);\n\n    let since = document.createElement('p');\n    since.classList.add('since');\n    since.innerText=\"~ Since 1998 ~\";\n    about.appendChild(since);\n\n    let aboutPara =document.createElement('p');\n    aboutPara.classList.add('aboutPara');\n    aboutPara.innerText=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\n    about.appendChild(aboutPara);\n}\n\n//# sourceURL=webpack://webpack-demo/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openHome)\n/* harmony export */ });\nfunction openHome(){\n    var home__content = document.getElementById('home__content');\n    var newP = document.createElement('p');\n    newP.setAttribute(\"id\",\"home__text\");\n    newP.innerHTML= \"Bake n` take\";\n    home__content.appendChild(newP);\n    var newP2 = document.createElement('p');\n    newP2.setAttribute(\"id\",\"home__location\");\n    newP2.innerHTML = \"COLOMBO, LK\";\n    home__content.appendChild(newP2);\n}\n\n//# sourceURL=webpack://webpack-demo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/home.js */ \"./src/home.js\");\n/* harmony import */ var _src_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/menu.js */ \"./src/menu.js\");\n/* harmony import */ var _src_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/about.js */ \"./src/about.js\");\n\n\n\n\n// openHome();\n// openMenu();\n// openAbout();\n\nlet home = document.getElementById('home');\nhome.addEventListener(\"click\", _src_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nlet menu = document.getElementById('menu');\nmenu.addEventListener(\"click\", _src_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nlet about = document.getElementById('about');\nabout.addEventListener(\"click\", _src_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openMenu)\n/* harmony export */ });\nfunction openMenu(){\n    var home__content = document.getElementById('home__content');\n    var cards = document.createElement('div');\n    cards.classList.add(\"cards\");\n    home__content.appendChild(cards);\n    var card__container = document.createElement('div');\n    card__container.classList.add(\"card__container\");\n    cards.appendChild(card__container);\n\n\n\n    var card = document.createElement('div');\n    card.classList.add(\"card\");\n    card__container.appendChild(card);\n\n    let img = document.createElement('img');\n    img.src=\"./assets/pizza1.png\";\n    img.classList.add('pizzaImg');\n    card.appendChild(img);\n    let name = document.createElement('div');\n    name.classList.add('name','cardText', 'para');\n    name.innerHTML = \"Cheese Pizza\";\n    card.appendChild(name);\n    let pizzaPara = document.createElement('p');\n    pizzaPara.classList.add('pizzaPara', 'cardText');\n    pizzaPara.innerText = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in ligula quis eros egestas elementum ac sit amet elit. Aenean quis vestibulum urna, non scelerisque urna. In et purus nec purus faucibus dictum eu id ante. Nam scelerisque, nibh eu ornare mollis.\";\n    card.appendChild(pizzaPara);\n    let button = document.createElement('button');\n    button.classList.add('buy__now');\n    button.innerHTML = \"Buy Now\";\n    card.appendChild(button);\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/menu.js?");

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