/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/nav.js":
/*!******************************!*\
  !*** ./src/assets/js/nav.js ***!
  \******************************/
/***/ (() => {

eval("const nav = document.querySelector(\".nav\");\r\nconst navMenu = document.querySelector(\".nav__menu\");\r\n\r\nconst navToggle = document.querySelector(\".nav__toggle\");\r\nconst navClose = document.querySelector(\".nav__close\");\r\n\r\nnavToggle.addEventListener(\"click\", function () {\r\n  navMenu.classList.add(\"block\");\r\n  navMenu.classList.remove(\"hidden\");\r\n});\r\nnavClose.addEventListener(\"click\", function () {\r\n  navMenu.classList.remove(\"block\");\r\n  navMenu.classList.add(\"hidden\");\r\n});\r\n\n\n//# sourceURL=webpack://edu03/./src/assets/js/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/nav.js"]();
/******/ 	
/******/ })()
;