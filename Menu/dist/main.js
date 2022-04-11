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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var array_uniq__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! array-uniq */ \"./node_modules/array-uniq/index.js\");\n\nvar menu = [{\n  id: 1,\n  title: \"buttermilk pancakes\",\n  category: \"breakfast\",\n  price: 15.99,\n  img: \"./images/item-1.jpeg\",\n  desc: \"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed \"\n}, {\n  id: 2,\n  title: \"diner double\",\n  category: \"lunch\",\n  price: 13.99,\n  img: \"./images/item-2.jpeg\",\n  desc: \"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats \"\n}, {\n  id: 3,\n  title: \"godzilla milkshake\",\n  category: \"shakes\",\n  price: 6.99,\n  img: \"./images/item-3.jpeg\",\n  desc: \"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.\"\n}, {\n  id: 4,\n  title: \"country delight\",\n  category: \"breakfast\",\n  price: 20.99,\n  img: \"./images/item-4.jpeg\",\n  desc: \"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, \"\n}, {\n  id: 5,\n  title: \"egg attack\",\n  category: \"lunch\",\n  price: 22.99,\n  img: \"./images/item-5.jpeg\",\n  desc: \"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up \"\n}, {\n  id: 6,\n  title: \"oreo dream\",\n  category: \"shakes\",\n  price: 18.99,\n  img: \"./images/item-6.jpeg\",\n  desc: \"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday\"\n}, {\n  id: 7,\n  title: \"bacon overflow\",\n  category: \"breakfast\",\n  price: 8.99,\n  img: \"./images/item-7.jpeg\",\n  desc: \"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird \"\n}, {\n  id: 8,\n  title: \"american classic\",\n  category: \"lunch\",\n  price: 12.99,\n  img: \"./images/item-8.jpeg\",\n  desc: \"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  \"\n}, {\n  id: 9,\n  title: \"quarantine buddy\",\n  category: \"shakes\",\n  price: 16.99,\n  img: \"./images/item-9.jpeg\",\n  desc: \"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.\"\n}, {\n  id: 10,\n  title: \"steak dinner\",\n  category: \"dinner\",\n  price: 36.99,\n  img: \"./images/item-10.jpeg\",\n  desc: \"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.\"\n}];\nvar sectionCenter = document.querySelector(\".section-center\");\nvar container = document.querySelector(\".btn-container\");\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  displayMenuItems(menu);\n  displayMenuBtns();\n});\n\nfunction displayMenuItems(menuItems) {\n  var displayMenu = menuItems.map(function (item) {\n    return \"<article class=\\\"menu-item\\\">\\n    <img src=\".concat(item.img, \" class=\\\"photo\\\" alt=\\\"\").concat(item.title, \" />\\n    <div class=\\\"item-info\\\">\\n      <header>\\n        <h4>\").concat(item.title, \"</h4>\\n        <h4 class=\\\"price\\\">\").concat(item.price, \"</h4>\\n      </header>\\n      <p class=\\\"item-text\\\">\\n        \").concat(item.desc, \"\\n      </p>\\n    </div>\\n  </article>\");\n  });\n  displayMenu = displayMenu.join(\"\");\n  sectionCenter.innerHTML = displayMenu;\n}\n\nfunction displayMenuBtns() {\n  var categories = menu.map(function (item) {\n    return item.category;\n  });\n  categories.push(\"all\");\n  var categoriesArr = (0,array_uniq__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(categories);\n  var categoryBtn = categoriesArr.map(function (category) {\n    return \"<button class=\\\"filter-btn\\\" type=\\\"button\\\" data-id=\\\"\".concat(category, \"\\\">\").concat(category, \"</button>\");\n  }).join(\"\");\n  container.innerHTML = categoryBtn;\n  var filterBtns = document.querySelectorAll(\".filter-btn\");\n  filterBtns.forEach(function (btn) {\n    btn.addEventListener(\"click\", function (e) {\n      var category = e.currentTarget.dataset.id;\n      var menuCategory = menu.filter(function (menuItem) {\n        if (menuItem.category === category) {\n          return menuItem;\n        }\n      });\n\n      if (category === \"all\") {\n        displayMenuItems(menu);\n      } else {\n        displayMenuItems(menuCategory);\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://menu/./app.js?");

/***/ }),

/***/ "./node_modules/array-uniq/index.js":
/*!******************************************!*\
  !*** ./node_modules/array-uniq/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ arrayUniq)\n/* harmony export */ });\nfunction arrayUniq(array) {\n\treturn [...new Set(array)];\n}\n\n\n//# sourceURL=webpack://menu/./node_modules/array-uniq/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;