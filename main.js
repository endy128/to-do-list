/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageSetup\": () => (/* binding */ pageSetup)\n/* harmony export */ });\nconst pageSetup = () => {\n    const content = document.querySelector('#content');\n    \n    let header = divCreate('header');\n    header = addHtmlToNode(header, 'h1', 'To Do List');\n    content.appendChild(header);\n\n    const container = divCreate('container');\n\n    let sidebar = divCreate('sidebar');\n    let main = divCreate('main');\n    const projects = divCreate('projects');\n    let items = divCreate('items');\n\n    sidebar = addHtmlToNode(sidebar, 'h2', 'Projects');\n    sidebar.appendChild(projects);\n    container.appendChild(sidebar);\n\n    main = addHtmlToNode(main, 'h2', 'Items');\n    main.appendChild(items);\n    container.appendChild(main);\n\n    content.appendChild(container);\n\n};\n\nconst divCreate = (name) => {\n    const div = document.createElement('div');\n    div.classList.add(name);\n\n    return div;\n};\n\nconst addHtmlToNode = (node, tag, text) => {\n    const myTag = document.createElement(tag);\n    if (text) { myTag.textContent =  text };\n    node.appendChild(myTag);\n    return node;\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhZ2VTZXR1cCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBcbiAgICBsZXQgaGVhZGVyID0gZGl2Q3JlYXRlKCdoZWFkZXInKTtcbiAgICBoZWFkZXIgPSBhZGRIdG1sVG9Ob2RlKGhlYWRlciwgJ2gxJywgJ1RvIERvIExpc3QnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkaXZDcmVhdGUoJ2NvbnRhaW5lcicpO1xuXG4gICAgbGV0IHNpZGViYXIgPSBkaXZDcmVhdGUoJ3NpZGViYXInKTtcbiAgICBsZXQgbWFpbiA9IGRpdkNyZWF0ZSgnbWFpbicpO1xuICAgIGNvbnN0IHByb2plY3RzID0gZGl2Q3JlYXRlKCdwcm9qZWN0cycpO1xuICAgIGxldCBpdGVtcyA9IGRpdkNyZWF0ZSgnaXRlbXMnKTtcblxuICAgIHNpZGViYXIgPSBhZGRIdG1sVG9Ob2RlKHNpZGViYXIsICdoMicsICdQcm9qZWN0cycpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIG1haW4gPSBhZGRIdG1sVG9Ob2RlKG1haW4sICdoMicsICdJdGVtcycpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaXRlbXMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxufTtcblxuY29uc3QgZGl2Q3JlYXRlID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChuYW1lKTtcblxuICAgIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRIdG1sVG9Ob2RlID0gKG5vZGUsIHRhZywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IG15VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmICh0ZXh0KSB7IG15VGFnLnRleHRDb250ZW50ID0gIHRleHQgfTtcbiAgICBub2RlLmFwcGVuZENoaWxkKG15VGFnKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuXG5cbmV4cG9ydCB7IHBhZ2VTZXR1cCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n \n\nconsole.log(\"WINNER!!\");\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.pageSetup)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhZ2VTZXR1cCB9IGZyb20gXCIuL2RvbVwiOyBcblxuY29uc29sZS5sb2coXCJXSU5ORVIhIVwiKTtcblxucGFnZVNldHVwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;