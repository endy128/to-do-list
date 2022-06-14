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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHtmlItem\": () => (/* binding */ createHtmlItem),\n/* harmony export */   \"pageSetup\": () => (/* binding */ pageSetup),\n/* harmony export */   \"renderItem\": () => (/* binding */ renderItem)\n/* harmony export */ });\nconst pageSetup = () => {\n    const content = document.querySelector('#content');\n    \n    let header = divCreate('header');\n    header = addHtmlToNode(header, 'h1', 'To Do List');\n    content.appendChild(header);\n\n    const container = divCreate('container');\n\n    let sidebar = divCreate('sidebar');\n    let main = divCreate('main');\n    let projects = divCreate('projects');\n    let items = divCreate('items');\n\n    projects = addHtmlToNode(projects, 'button', '+');\n    items = addHtmlToNode(items, 'button', '+');\n\n    sidebar = addHtmlToNode(sidebar, 'h2', 'Projects');\n    sidebar.appendChild(projects);\n    container.appendChild(sidebar);\n\n    main = addHtmlToNode(main, 'h2', 'Items');\n    main.appendChild(items);\n    container.appendChild(main);\n\n    content.appendChild(container);\n\n};\n\nconst divCreate = (name) => {\n    const div = document.createElement('div');\n    div.classList.add(name);\n\n    return div;\n};\n\nconst addHtmlToNode = (node, tag, text) => {\n    const myTag = document.createElement(tag);\n    if (text) { myTag.textContent =  text };\n    node.appendChild(myTag);\n    return node;\n}\n\n\nconst createHtmlItem = (item) => {\n    // const myItems = document.querySelector('.items');\n\n    const myItem = divCreate('item');\n    const myDesc = divCreate('desc');\n    const myDate = divCreate('date');\n    const myDone = divCreate('done');\n\n    myDesc.textContent = item.desc;\n    myDate.textContent = item.date;\n    myDone.textContent = item.done;\n\n\n    myItem.appendChild(myDesc);\n    myItem.appendChild(myDate);\n    myItem.appendChild(myDone);\n\n\n    return myItem;\n}\n\nconst renderItem = (item) => {\n    const myItems = document.querySelector('.items');\n    myItems.appendChild(item);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhZ2VTZXR1cCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBcbiAgICBsZXQgaGVhZGVyID0gZGl2Q3JlYXRlKCdoZWFkZXInKTtcbiAgICBoZWFkZXIgPSBhZGRIdG1sVG9Ob2RlKGhlYWRlciwgJ2gxJywgJ1RvIERvIExpc3QnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkaXZDcmVhdGUoJ2NvbnRhaW5lcicpO1xuXG4gICAgbGV0IHNpZGViYXIgPSBkaXZDcmVhdGUoJ3NpZGViYXInKTtcbiAgICBsZXQgbWFpbiA9IGRpdkNyZWF0ZSgnbWFpbicpO1xuICAgIGxldCBwcm9qZWN0cyA9IGRpdkNyZWF0ZSgncHJvamVjdHMnKTtcbiAgICBsZXQgaXRlbXMgPSBkaXZDcmVhdGUoJ2l0ZW1zJyk7XG5cbiAgICBwcm9qZWN0cyA9IGFkZEh0bWxUb05vZGUocHJvamVjdHMsICdidXR0b24nLCAnKycpO1xuICAgIGl0ZW1zID0gYWRkSHRtbFRvTm9kZShpdGVtcywgJ2J1dHRvbicsICcrJyk7XG5cbiAgICBzaWRlYmFyID0gYWRkSHRtbFRvTm9kZShzaWRlYmFyLCAnaDInLCAnUHJvamVjdHMnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBtYWluID0gYWRkSHRtbFRvTm9kZShtYWluLCAnaDInLCAnSXRlbXMnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGl0ZW1zKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbn07XG5cbmNvbnN0IGRpdkNyZWF0ZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cbiAgICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkSHRtbFRvTm9kZSA9IChub2RlLCB0YWcsIHRleHQpID0+IHtcbiAgICBjb25zdCBteVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBpZiAodGV4dCkgeyBteVRhZy50ZXh0Q29udGVudCA9ICB0ZXh0IH07XG4gICAgbm9kZS5hcHBlbmRDaGlsZChteVRhZyk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cblxuY29uc3QgY3JlYXRlSHRtbEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIC8vIGNvbnN0IG15SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMnKTtcblxuICAgIGNvbnN0IG15SXRlbSA9IGRpdkNyZWF0ZSgnaXRlbScpO1xuICAgIGNvbnN0IG15RGVzYyA9IGRpdkNyZWF0ZSgnZGVzYycpO1xuICAgIGNvbnN0IG15RGF0ZSA9IGRpdkNyZWF0ZSgnZGF0ZScpO1xuICAgIGNvbnN0IG15RG9uZSA9IGRpdkNyZWF0ZSgnZG9uZScpO1xuXG4gICAgbXlEZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjO1xuICAgIG15RGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZGF0ZTtcbiAgICBteURvbmUudGV4dENvbnRlbnQgPSBpdGVtLmRvbmU7XG5cblxuICAgIG15SXRlbS5hcHBlbmRDaGlsZChteURlc2MpO1xuICAgIG15SXRlbS5hcHBlbmRDaGlsZChteURhdGUpO1xuICAgIG15SXRlbS5hcHBlbmRDaGlsZChteURvbmUpO1xuXG5cbiAgICByZXR1cm4gbXlJdGVtO1xufVxuXG5jb25zdCByZW5kZXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBteUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zJyk7XG4gICAgbXlJdGVtcy5hcHBlbmRDaGlsZChpdGVtKTtcbn1cblxuXG5leHBvcnQgeyBwYWdlU2V0dXAsIGNyZWF0ZUh0bWxJdGVtLCByZW5kZXJJdGVtIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n \n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.pageSetup)();\n\nfunction createProject(name) {\n    return {\n        name,\n        set propName(value) {\n            this.name = value;\n        },\n        get propName() {\n            return this.name;\n        }\n    }\n}\n\nvar test = createProject('test');\nconsole.log(test);\n\ntest.propName = 'New';\nconsole.log(test.propName);\n\nfunction createItem(desc, date, done) {\n    return {\n        desc,\n        date,\n        done,\n        set setDesc (value) {\n            this.desc = value;\n        } \n    }\n}\n\nvar item1 = createItem('empty bins', '01/01/2021', false);\nvar item2 = createItem('laundry', '02/02/2022', true);\nvar item3 = createItem('Shoppping', '02/02/2023', false);\n\n\nitem2.setDesc = 'laundry';\nconsole.log(item1);\nconsole.log(item2);\n\nvar myProject = [item1, item2, item3];\nconsole.table(myProject);\n\nconsole.log(item1.desc);\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderItem)((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlItem)(item1));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYWdlU2V0dXAsIHJlbmRlckl0ZW0sIGNyZWF0ZUh0bWxJdGVtIH0gZnJvbSBcIi4vZG9tXCI7IFxuXG5cbnBhZ2VTZXR1cCgpO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBzZXQgcHJvcE5hbWUodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcHJvcE5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG52YXIgdGVzdCA9IGNyZWF0ZVByb2plY3QoJ3Rlc3QnKTtcbmNvbnNvbGUubG9nKHRlc3QpO1xuXG50ZXN0LnByb3BOYW1lID0gJ05ldyc7XG5jb25zb2xlLmxvZyh0ZXN0LnByb3BOYW1lKTtcblxuZnVuY3Rpb24gY3JlYXRlSXRlbShkZXNjLCBkYXRlLCBkb25lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzYyxcbiAgICAgICAgZGF0ZSxcbiAgICAgICAgZG9uZSxcbiAgICAgICAgc2V0IHNldERlc2MgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmRlc2MgPSB2YWx1ZTtcbiAgICAgICAgfSBcbiAgICB9XG59XG5cbnZhciBpdGVtMSA9IGNyZWF0ZUl0ZW0oJ2VtcHR5IGJpbnMnLCAnMDEvMDEvMjAyMScsIGZhbHNlKTtcbnZhciBpdGVtMiA9IGNyZWF0ZUl0ZW0oJ2xhdW5kcnknLCAnMDIvMDIvMjAyMicsIHRydWUpO1xudmFyIGl0ZW0zID0gY3JlYXRlSXRlbSgnU2hvcHBwaW5nJywgJzAyLzAyLzIwMjMnLCBmYWxzZSk7XG5cblxuaXRlbTIuc2V0RGVzYyA9ICdsYXVuZHJ5JztcbmNvbnNvbGUubG9nKGl0ZW0xKTtcbmNvbnNvbGUubG9nKGl0ZW0yKTtcblxudmFyIG15UHJvamVjdCA9IFtpdGVtMSwgaXRlbTIsIGl0ZW0zXTtcbmNvbnNvbGUudGFibGUobXlQcm9qZWN0KTtcblxuY29uc29sZS5sb2coaXRlbTEuZGVzYyk7XG5cbnJlbmRlckl0ZW0oY3JlYXRlSHRtbEl0ZW0oaXRlbTEpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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