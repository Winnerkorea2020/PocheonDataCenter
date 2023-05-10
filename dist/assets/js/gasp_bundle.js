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

eval("const ease = window.Power4.easeInOut;\nconst el = document.querySelector(\"#el\");\nconst wrapper = document.querySelector(\"#wrapper\");\nconst slides = el.querySelectorAll(\".El__slide\");\nconst amount = slides.length;\nconst controller = new window.ScrollMagic.Controller();\nconst horizontalMovement = new window.TimelineMax();\n\nconst controller2 = new window.ScrollMagic.Controller({\n  vertical: false,\n  refreshInterval: 1,\n});\n\nhorizontalMovement.add([\n  window.TweenMax.to(wrapper, 1, {\n    x: `-${(100 / amount) * (amount - 1)}%`,\n  }),\n]);\n\nnew window.ScrollMagic.Scene({\n  triggerElement: el,\n  triggerHook: \"onLeave\",\n  duration: `${amount * 100}%`,\n})\n  .setPin(el)\n  .setTween(horizontalMovement)\n  .addTo(controller);\n\n// slides.forEach((item, index) => {\n//   const title = item.querySelector(\"h1\");\n//   const subtitle = item.querySelector(\"h2\");\n//   const tween = new window.TimelineMax();\n//   tween\n//     .fromTo(title, 1, { x: 0 }, { x: 500 }, 0)\n//     .fromTo(subtitle, 1, { x: 600 }, { x: 500 }, 0);\n//   new window.ScrollMagic.Scene({\n//     triggerElement: item,\n//     triggerHook: 1,\n//     duration: \"100%\",\n//   })\n//     .setTween(tween)\n//     .addTo(controller2);\n// });\n\n\n//# sourceURL=webpack://edu03/./src/assets/js/gasp.js?");

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