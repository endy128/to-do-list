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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventHandlers\": () => (/* binding */ addEventHandlers),\n/* harmony export */   \"createHtmlItem\": () => (/* binding */ createHtmlItem),\n/* harmony export */   \"pageSetup\": () => (/* binding */ pageSetup),\n/* harmony export */   \"renderItem\": () => (/* binding */ renderItem)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nconst pageSetup = () => {\n    const content = document.querySelector('#content');\n    \n    let header = divCreate('header');\n    header = addHtmlToNode(header, 'h1', 'To Do List');\n    content.appendChild(header);\n\n    const container = divCreate('container');\n\n    let sidebar = divCreate('sidebar');\n    let main = divCreate('main');\n    let projects = divCreate('projects');\n    let items = divCreate('items');\n\n    projects = addHtmlToNode(projects, 'button', '+', 'projectAdd');\n    items = addHtmlToNode(items, 'button', '+', 'itemAdd');\n\n    sidebar = addHtmlToNode(sidebar, 'h2', 'Projects');\n    sidebar.appendChild(projects);\n    container.appendChild(sidebar);\n\n    main = addHtmlToNode(main, 'h2', 'Items');\n    main.appendChild(items);\n    container.appendChild(main);\n\n    content.appendChild(container);\n\n    content.appendChild(renderProjForm());\n\n};\n\n// creates a div and add the name of the div as a class\nconst divCreate = (name) => {\n    const div = document.createElement('div');\n    div.classList.add(name);\n\n    return div;\n};\n\nconst addHtmlToNode = (node, tag, text, id) => {\n    const myTag = document.createElement(tag);\n    if (text) { myTag.textContent =  text };\n    if (id) {myTag.id = id };\n    node.appendChild(myTag);\n    return node;\n}\n\n\nconst createHtmlItem = (item, index) => {\n    // const myItems = document.querySelector('.items');\n\n    const myItem = divCreate('item');\n    const myDesc = divCreate('desc');\n    const myDate = divCreate('date');\n    const myDone = divCreate('done');\n\n    myItem.dataset.index = index;\n\n    myDesc.textContent = item.desc;\n    myDate.textContent = item.date;\n    myDone.textContent = item.done;\n\n\n    myItem.appendChild(myDesc);\n    myItem.appendChild(myDate);\n    myItem.appendChild(myDone);\n\n\n    return myItem;\n}\n\nconst renderItem = (item) => {\n    const myItems = document.querySelector('.items');\n    myItems.appendChild(item);\n}\n\nconst renderProjForm = () => {\n    const formBackground = divCreate('formBackground');\n\n    const projForm = divCreate('projForm');\n    const form = document.createElement('form');\n    form.setAttribute('method', 'post');\n    form.setAttribute('action', '');\n    form.setAttribute('onsubmit', 'return false');\n\n    // create the project name input\n    var projectName = document.createElement('input');\n    projectName.setAttribute('type', 'text');\n    projectName.setAttribute('name', 'projectName');\n    projectName.setAttribute('placeholder', 'Project Name');\n\n    // create a cancel button\n    var pCancel = document.createElement('button');\n    pCancel.textContent = 'Cancel';\n    pCancel.id = 'projCancelButton';\n\n    // create a submit button\n    var pSubmit = document.createElement('button');\n    pSubmit.textContent = 'Submit';\n    pSubmit.id = 'projSubmitButton';\n\n    form.appendChild(projectName);\n    form.appendChild(pCancel);\n    form.appendChild(pSubmit);\n\n\n    projForm.appendChild(form);\n    formBackground.appendChild(projForm)\n\n    return formBackground;\n}\n\nconst addEventHandlers = () => {\n\n    // add the event handler for the \"add\" project and item buttons\n    const addProject = document.querySelector('#projectAdd');\n    addProject.addEventListener('click', () => {\n        showForm('.projForm');\n    });\n\n    const addItem = document.querySelector('#itemAdd');\n    addItem.addEventListener('click', () => {\n        console.log(\"PRESSED\");\n    });\n\n    \n    const projCancelButton = document.querySelector('#projCancelButton');\n    projCancelButton.addEventListener('click', () => {\n        hideForm('.projForm');\n    });\n}\n\nconst showForm = (name) => {\n    document.querySelector('.formBackground').style.display = 'block';\n    document.querySelector(name).style.display = 'block';\n}\n\nconst hideForm = (name) => {\n    document.querySelector('.formBackground').style.display = 'none';\n    document.querySelector(name).style.display = 'none';\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzP2NiZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICB7Y3JlYXRlUHJvamVjdH0gZnJvbSAnLi9pbmRleCc7XG5cblxuY29uc3QgcGFnZVNldHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIFxuICAgIGxldCBoZWFkZXIgPSBkaXZDcmVhdGUoJ2hlYWRlcicpO1xuICAgIGhlYWRlciA9IGFkZEh0bWxUb05vZGUoaGVhZGVyLCAnaDEnLCAnVG8gRG8gTGlzdCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRpdkNyZWF0ZSgnY29udGFpbmVyJyk7XG5cbiAgICBsZXQgc2lkZWJhciA9IGRpdkNyZWF0ZSgnc2lkZWJhcicpO1xuICAgIGxldCBtYWluID0gZGl2Q3JlYXRlKCdtYWluJyk7XG4gICAgbGV0IHByb2plY3RzID0gZGl2Q3JlYXRlKCdwcm9qZWN0cycpO1xuICAgIGxldCBpdGVtcyA9IGRpdkNyZWF0ZSgnaXRlbXMnKTtcblxuICAgIHByb2plY3RzID0gYWRkSHRtbFRvTm9kZShwcm9qZWN0cywgJ2J1dHRvbicsICcrJywgJ3Byb2plY3RBZGQnKTtcbiAgICBpdGVtcyA9IGFkZEh0bWxUb05vZGUoaXRlbXMsICdidXR0b24nLCAnKycsICdpdGVtQWRkJyk7XG5cbiAgICBzaWRlYmFyID0gYWRkSHRtbFRvTm9kZShzaWRlYmFyLCAnaDInLCAnUHJvamVjdHMnKTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5cbiAgICBtYWluID0gYWRkSHRtbFRvTm9kZShtYWluLCAnaDInLCAnSXRlbXMnKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGl0ZW1zKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHJlbmRlclByb2pGb3JtKCkpO1xuXG59O1xuXG4vLyBjcmVhdGVzIGEgZGl2IGFuZCBhZGQgdGhlIG5hbWUgb2YgdGhlIGRpdiBhcyBhIGNsYXNzXG5jb25zdCBkaXZDcmVhdGUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZEh0bWxUb05vZGUgPSAobm9kZSwgdGFnLCB0ZXh0LCBpZCkgPT4ge1xuICAgIGNvbnN0IG15VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGlmICh0ZXh0KSB7IG15VGFnLnRleHRDb250ZW50ID0gIHRleHQgfTtcbiAgICBpZiAoaWQpIHtteVRhZy5pZCA9IGlkIH07XG4gICAgbm9kZS5hcHBlbmRDaGlsZChteVRhZyk7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cblxuY29uc3QgY3JlYXRlSHRtbEl0ZW0gPSAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAvLyBjb25zdCBteUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zJyk7XG5cbiAgICBjb25zdCBteUl0ZW0gPSBkaXZDcmVhdGUoJ2l0ZW0nKTtcbiAgICBjb25zdCBteURlc2MgPSBkaXZDcmVhdGUoJ2Rlc2MnKTtcbiAgICBjb25zdCBteURhdGUgPSBkaXZDcmVhdGUoJ2RhdGUnKTtcbiAgICBjb25zdCBteURvbmUgPSBkaXZDcmVhdGUoJ2RvbmUnKTtcblxuICAgIG15SXRlbS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgICBteURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gICAgbXlEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlO1xuICAgIG15RG9uZS50ZXh0Q29udGVudCA9IGl0ZW0uZG9uZTtcblxuXG4gICAgbXlJdGVtLmFwcGVuZENoaWxkKG15RGVzYyk7XG4gICAgbXlJdGVtLmFwcGVuZENoaWxkKG15RGF0ZSk7XG4gICAgbXlJdGVtLmFwcGVuZENoaWxkKG15RG9uZSk7XG5cblxuICAgIHJldHVybiBteUl0ZW07XG59XG5cbmNvbnN0IHJlbmRlckl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG15SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMnKTtcbiAgICBteUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xufVxuXG5jb25zdCByZW5kZXJQcm9qRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtQmFja2dyb3VuZCA9IGRpdkNyZWF0ZSgnZm9ybUJhY2tncm91bmQnKTtcblxuICAgIGNvbnN0IHByb2pGb3JtID0gZGl2Q3JlYXRlKCdwcm9qRm9ybScpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJyk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIHByb2plY3QgbmFtZSBpbnB1dFxuICAgIHZhciBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdE5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgTmFtZScpO1xuXG4gICAgLy8gY3JlYXRlIGEgY2FuY2VsIGJ1dHRvblxuICAgIHZhciBwQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcENhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHBDYW5jZWwuaWQgPSAncHJvakNhbmNlbEJ1dHRvbic7XG5cbiAgICAvLyBjcmVhdGUgYSBzdWJtaXQgYnV0dG9uXG4gICAgdmFyIHBTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgcFN1Ym1pdC5pZCA9ICdwcm9qU3VibWl0QnV0dG9uJztcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocENhbmNlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwU3VibWl0KTtcblxuXG4gICAgcHJvakZvcm0uYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybUJhY2tncm91bmQuYXBwZW5kQ2hpbGQocHJvakZvcm0pXG5cbiAgICByZXR1cm4gZm9ybUJhY2tncm91bmQ7XG59XG5cbmNvbnN0IGFkZEV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG5cbiAgICAvLyBhZGQgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBcImFkZFwiIHByb2plY3QgYW5kIGl0ZW0gYnV0dG9uc1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEFkZCcpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNob3dGb3JtKCcucHJvakZvcm0nKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbUFkZCcpO1xuICAgIGFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUFJFU1NFRFwiKTtcbiAgICB9KTtcblxuICAgIFxuICAgIGNvbnN0IHByb2pDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvakNhbmNlbEJ1dHRvbicpO1xuICAgIHByb2pDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGhpZGVGb3JtKCcucHJvakZvcm0nKTtcbiAgICB9KTtcbn1cblxuY29uc3Qgc2hvd0Zvcm0gPSAobmFtZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQmFja2dyb3VuZCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmNvbnN0IGhpZGVGb3JtID0gKG5hbWUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUJhY2tncm91bmQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuXG5leHBvcnQgeyBwYWdlU2V0dXAsIGNyZWF0ZUh0bWxJdGVtLCByZW5kZXJJdGVtLCBhZGRFdmVudEhhbmRsZXJzIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n \n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.pageSetup)();\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.addEventHandlers)();\n\nfunction createProject(name, index) {\n    return {\n        name,\n        index,\n        set propName(value) {\n            this.name = value;\n        },\n        get propName() {\n            return this.name;\n        },\n        get propIndex() {\n            return this.index;\n        },\n    }\n}\n\nvar test = createProject('test');\n\ntest.propName = 'New';\n\nfunction createItem(desc, date, done) {\n    return {\n        desc,\n        date,\n        done,\n        set setDesc (value) {\n            this.desc = value;\n        } \n    }\n}\n\n\n\nvar item1 = createItem('empty bins', '01/01/2021', false);\nvar item2 = createItem('laundry', '02/02/2022', true);\nvar item3 = createItem('Shoppping', '02/02/2023', false);\n\nvar myProject = [item1, item2, item3];\n\n\nmyProject.forEach((arrayItem, index) => (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderItem)((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createHtmlItem)(arrayItem, index)));\n\n\n\n// item2.setDesc = 'laundry';\n\n// console.table(myProject);\n\n// console.log(item1.desc);\n\n// renderItem(createHtmlItem(item1, '1'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFnZVNldHVwLCByZW5kZXJJdGVtLCBjcmVhdGVIdG1sSXRlbSwgYWRkRXZlbnRIYW5kbGVycyB9IGZyb20gXCIuL2RvbVwiOyBcblxuXG5wYWdlU2V0dXAoKTtcbmFkZEV2ZW50SGFuZGxlcnMoKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lLCBpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBzZXQgcHJvcE5hbWUodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcHJvcE5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgcHJvcEluZGV4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG52YXIgdGVzdCA9IGNyZWF0ZVByb2plY3QoJ3Rlc3QnKTtcblxudGVzdC5wcm9wTmFtZSA9ICdOZXcnO1xuXG5mdW5jdGlvbiBjcmVhdGVJdGVtKGRlc2MsIGRhdGUsIGRvbmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZXNjLFxuICAgICAgICBkYXRlLFxuICAgICAgICBkb25lLFxuICAgICAgICBzZXQgc2V0RGVzYyAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzYyA9IHZhbHVlO1xuICAgICAgICB9IFxuICAgIH1cbn1cblxuXG5cbnZhciBpdGVtMSA9IGNyZWF0ZUl0ZW0oJ2VtcHR5IGJpbnMnLCAnMDEvMDEvMjAyMScsIGZhbHNlKTtcbnZhciBpdGVtMiA9IGNyZWF0ZUl0ZW0oJ2xhdW5kcnknLCAnMDIvMDIvMjAyMicsIHRydWUpO1xudmFyIGl0ZW0zID0gY3JlYXRlSXRlbSgnU2hvcHBwaW5nJywgJzAyLzAyLzIwMjMnLCBmYWxzZSk7XG5cbnZhciBteVByb2plY3QgPSBbaXRlbTEsIGl0ZW0yLCBpdGVtM107XG5cblxubXlQcm9qZWN0LmZvckVhY2goKGFycmF5SXRlbSwgaW5kZXgpID0+IHJlbmRlckl0ZW0oY3JlYXRlSHRtbEl0ZW0oYXJyYXlJdGVtLCBpbmRleCkpKTtcblxuZXhwb3J0IHtjcmVhdGVQcm9qZWN0fVxuXG4vLyBpdGVtMi5zZXREZXNjID0gJ2xhdW5kcnknO1xuXG4vLyBjb25zb2xlLnRhYmxlKG15UHJvamVjdCk7XG5cbi8vIGNvbnNvbGUubG9nKGl0ZW0xLmRlc2MpO1xuXG4vLyByZW5kZXJJdGVtKGNyZWF0ZUh0bWxJdGVtKGl0ZW0xLCAnMScpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;