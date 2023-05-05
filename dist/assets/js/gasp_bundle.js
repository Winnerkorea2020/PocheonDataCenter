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

/***/ "./src/assets/js/gasp.js":
/*!*******************************!*\
  !*** ./src/assets/js/gasp.js ***!
  \*******************************/
/***/ (() => {

eval("const ease = window.Power4.easeInOut;\r\nconst el = document.querySelector(\"#el\");\r\nconst wrapper = document.querySelector(\"#wrapper\");\r\nconst slides = el.querySelectorAll(\".El__slide\");\r\nconst amount = slides.length;\r\nconst controller = new window.ScrollMagic.Controller();\r\nconst horizontalMovement = new window.TimelineMax();\r\n\r\nconst controller2 = new window.ScrollMagic.Controller({\r\n  vertical: false,\r\n  refreshInterval: 1,\r\n});\r\n\r\nhorizontalMovement.add([\r\n  window.TweenMax.to(wrapper, 1, {\r\n    x: `-${(100 / amount) * (amount - 1)}%`,\r\n  }),\r\n]);\r\n\r\nnew window.ScrollMagic.Scene({\r\n  triggerElement: el,\r\n  triggerHook: \"onLeave\",\r\n  duration: `${amount * 100}%`,\r\n})\r\n  .setPin(el)\r\n  .setTween(horizontalMovement)\r\n  .addTo(controller);\r\n\r\n// slides.forEach((item, index) => {\r\n//   const title = item.querySelector(\"h1\");\r\n//   const subtitle = item.querySelector(\"h2\");\r\n//   const tween = new window.TimelineMax();\r\n//   tween\r\n//     .fromTo(title, 1, { x: 0 }, { x: 500 }, 0)\r\n//     .fromTo(subtitle, 1, { x: 600 }, { x: 500 }, 0);\r\n//   new window.ScrollMagic.Scene({\r\n//     triggerElement: item,\r\n//     triggerHook: 1,\r\n//     duration: \"100%\",\r\n//   })\r\n//     .setTween(tween)\r\n//     .addTo(controller2);\r\n// });\r\n\n\n//# sourceURL=webpack://edu03/./src/assets/js/gasp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/gasp.js"]();
/******/ 	
/******/ })()
;