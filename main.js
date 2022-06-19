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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addEventHandlers\": () => (/* binding */ addEventHandlers),\n/* harmony export */   \"createHtmlItem\": () => (/* binding */ createHtmlItem),\n/* harmony export */   \"pageSetup\": () => (/* binding */ pageSetup),\n/* harmony export */   \"renderItem\": () => (/* binding */ renderItem),\n/* harmony export */   \"renderItemsList\": () => (/* binding */ renderItemsList),\n/* harmony export */   \"renderProjectList\": () => (/* binding */ renderProjectList)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\nconst pageSetup = () => {\n    const content = document.querySelector('#content');\n    \n    let header = divCreate('header');\n    header = addHtmlToNode(header, 'h1', 'To Do List');\n    content.appendChild(header);\n\n    const container = divCreate('container');\n\n    let sidebar = divCreate('sidebar');\n    let main = divCreate('main');\n    let projects = divCreate('projects');\n    let items = divCreate('items');\n\n    sidebar = addHtmlToNode(sidebar, 'h2', 'Projects');\n\n    let span = document.createElement('span');\n    span.textContent = '+';\n    let button = document.createElement('button');\n    button.id = 'projectAdd';\n    button.appendChild(span);\n    sidebar.appendChild(button);\n\n    sidebar.appendChild(projects);\n    container.appendChild(sidebar);\n\n    main = addHtmlToNode(main, 'h2', 'Items');\n    let button2 = button.cloneNode(true);\n    button2.id = 'itemAdd';\n    main.appendChild(button2);\n\n    main.appendChild(items);\n\n    container.appendChild(main);\n\n    content.appendChild(container);\n\n    content.appendChild(renderProjForm());\n\n};\n\n// creates a div and add the name of the div as a class\nconst divCreate = (name) => {\n    const div = document.createElement('div');\n    div.classList.add(name);\n\n    return div;\n};\n\n// creates a html tag, adds it to a node and if supplied, adds its text content and assigns an ID\nconst addHtmlToNode = (node, tag, text, id) => {\n    const myTag = document.createElement(tag);\n    if (text) { myTag.textContent =  text };\n    if (id) {myTag.id = id };\n    node.appendChild(myTag);\n    return node;\n}\n\nconst createHtmlProject = (project) => {\n    const a = document.createElement('a');\n    a.textContent = project;\n    return a;\n}\n\nconst renderProjectList = (array) => {\n    const projectDiv = document.querySelector('.projects');\n    projectDiv.innerHTML = '';\n    array.forEach(element => { projectDiv.appendChild(createHtmlProject(element.name));\n    });\n}\n\nconst createHtmlItem = (item, index) => {\n    // const myItems = document.querySelector('.items');\n\n    const myItem = divCreate('item');\n    const myDesc = divCreate('desc');\n    const myDate = divCreate('date');\n    const myDone = divCreate('done');\n\n    myItem.dataset.index = index;\n\n    myDesc.textContent = item.desc;\n    myDate.textContent = item.date;\n    myDone.textContent = item.done;\n\n\n    myItem.appendChild(myDesc);\n    myItem.appendChild(myDate);\n    myItem.appendChild(myDone);\n\n\n    return myItem;\n}\n\nconst renderItem = (item) => {\n    const myItems = document.querySelector('.items');\n    myItems.appendChild(item);\n}\n\nconst renderItemsList = (activeProject) => {\n    const itemsDiv = document.querySelector('.items');\n    itemsDiv.innerHTML = '';\n    _index__WEBPACK_IMPORTED_MODULE_0__.allProjects[activeProject].toDoList.forEach((arrayItem, index) => renderItem(createHtmlItem(arrayItem, index)));\n}\n\nconst renderProjForm = () => {\n    const formBackground = divCreate('formBackground');\n\n    const projForm = divCreate('projForm');\n    const form = document.createElement('form');\n    form.setAttribute('method', 'post');\n    form.setAttribute('action', '');\n    form.setAttribute('onsubmit', 'return false');\n\n    // create the project name input\n    var projectName = document.createElement('input');\n    projectName.setAttribute('type', 'text');\n    projectName.setAttribute('id', 'projectName');\n    projectName.setAttribute('placeholder', 'Project Name');\n    projectName.autofocus = true;\n\n    // create a cancel button\n    var pCancel = document.createElement('button');\n    pCancel.textContent = 'Cancel';\n    pCancel.id = 'projCancelButton';\n\n    // create a submit button\n    var pSubmit = document.createElement('button');\n    pSubmit.textContent = 'Submit';\n    pSubmit.id = 'projSubmitButton';\n\n    form.appendChild(projectName);\n    form.appendChild(pCancel);\n    form.appendChild(pSubmit);\n\n\n    projForm.appendChild(form);\n    formBackground.appendChild(projForm)\n\n    return formBackground;\n}\n\nconst addEventHandlers = () => {\n\n    // add the event handler for the \"add\" project and item buttons\n    const addProject = document.querySelector('#projectAdd');\n    addProject.addEventListener('click', () => {\n        showForm('.projForm');\n        document.querySelector('#projectName').focus();\n    });\n\n    const addItem = document.querySelector('#itemAdd');\n    addItem.addEventListener('click', () => {\n        console.log(\"PRESSED\");\n    });\n\n\n    const projCancelButton = document.querySelector('#projCancelButton');\n    projCancelButton.addEventListener('click', () => {\n        document.getElementById('projectName').value = '';\n        hideForm('.projForm');\n    });\n\n    const projSubmitButton = document.querySelector('#projSubmitButton');\n        projSubmitButton.addEventListener('click', () => {\n            \n            const newProject = document.getElementById('projectName').value;\n            document.getElementById('projectName').value = '';\n          \n            (0,_index__WEBPACK_IMPORTED_MODULE_0__.createProject)(newProject);\n\n            hideForm('.projForm');\n\n            renderProjectList(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n            renderItemsList((0,_index__WEBPACK_IMPORTED_MODULE_0__.findActiveProject)(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects));\n            console.table(_index__WEBPACK_IMPORTED_MODULE_0__.allProjects);\n\n    });\n}\n\nconst showForm = (name) => {\n    document.querySelector('.formBackground').style.display = 'block';\n    document.querySelector(name).style.display = 'block';\n}\n\nconst hideForm = (name) => {\n    document.querySelector('.formBackground').style.display = 'none';\n    document.querySelector(name).style.display = 'none';\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcz9jYmYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAgeyBjcmVhdGVQcm9qZWN0LCBmaW5kQWN0aXZlUHJvamVjdCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgYWxsUHJvamVjdHMsIGFjdGl2ZVByb2plY3QgfSBmcm9tICcuL2luZGV4JztcblxuXG5jb25zdCBwYWdlU2V0dXAgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgbGV0IGhlYWRlciA9IGRpdkNyZWF0ZSgnaGVhZGVyJyk7XG4gICAgaGVhZGVyID0gYWRkSHRtbFRvTm9kZShoZWFkZXIsICdoMScsICdUbyBEbyBMaXN0Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZGl2Q3JlYXRlKCdjb250YWluZXInKTtcblxuICAgIGxldCBzaWRlYmFyID0gZGl2Q3JlYXRlKCdzaWRlYmFyJyk7XG4gICAgbGV0IG1haW4gPSBkaXZDcmVhdGUoJ21haW4nKTtcbiAgICBsZXQgcHJvamVjdHMgPSBkaXZDcmVhdGUoJ3Byb2plY3RzJyk7XG4gICAgbGV0IGl0ZW1zID0gZGl2Q3JlYXRlKCdpdGVtcycpO1xuXG4gICAgc2lkZWJhciA9IGFkZEh0bWxUb05vZGUoc2lkZWJhciwgJ2gyJywgJ1Byb2plY3RzJyk7XG5cbiAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJysnO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSAncHJvamVjdEFkZCc7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcblxuICAgIG1haW4gPSBhZGRIdG1sVG9Ob2RlKG1haW4sICdoMicsICdJdGVtcycpO1xuICAgIGxldCBidXR0b24yID0gYnV0dG9uLmNsb25lTm9kZSh0cnVlKTtcbiAgICBidXR0b24yLmlkID0gJ2l0ZW1BZGQnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnV0dG9uMik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGl0ZW1zKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVyUHJvakZvcm0oKSk7XG5cbn07XG5cbi8vIGNyZWF0ZXMgYSBkaXYgYW5kIGFkZCB0aGUgbmFtZSBvZiB0aGUgZGl2IGFzIGEgY2xhc3NcbmNvbnN0IGRpdkNyZWF0ZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cbiAgICByZXR1cm4gZGl2O1xufTtcblxuLy8gY3JlYXRlcyBhIGh0bWwgdGFnLCBhZGRzIGl0IHRvIGEgbm9kZSBhbmQgaWYgc3VwcGxpZWQsIGFkZHMgaXRzIHRleHQgY29udGVudCBhbmQgYXNzaWducyBhbiBJRFxuY29uc3QgYWRkSHRtbFRvTm9kZSA9IChub2RlLCB0YWcsIHRleHQsIGlkKSA9PiB7XG4gICAgY29uc3QgbXlUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgaWYgKHRleHQpIHsgbXlUYWcudGV4dENvbnRlbnQgPSAgdGV4dCB9O1xuICAgIGlmIChpZCkge215VGFnLmlkID0gaWQgfTtcbiAgICBub2RlLmFwcGVuZENoaWxkKG15VGFnKTtcbiAgICByZXR1cm4gbm9kZTtcbn1cblxuY29uc3QgY3JlYXRlSHRtbFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgcmV0dXJuIGE7XG59XG5cbmNvbnN0IHJlbmRlclByb2plY3RMaXN0ID0gKGFycmF5KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIHByb2plY3REaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHsgcHJvamVjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVIdG1sUHJvamVjdChlbGVtZW50Lm5hbWUpKTtcbiAgICB9KTtcbn1cblxuY29uc3QgY3JlYXRlSHRtbEl0ZW0gPSAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAvLyBjb25zdCBteUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zJyk7XG5cbiAgICBjb25zdCBteUl0ZW0gPSBkaXZDcmVhdGUoJ2l0ZW0nKTtcbiAgICBjb25zdCBteURlc2MgPSBkaXZDcmVhdGUoJ2Rlc2MnKTtcbiAgICBjb25zdCBteURhdGUgPSBkaXZDcmVhdGUoJ2RhdGUnKTtcbiAgICBjb25zdCBteURvbmUgPSBkaXZDcmVhdGUoJ2RvbmUnKTtcblxuICAgIG15SXRlbS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgICBteURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gICAgbXlEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kYXRlO1xuICAgIG15RG9uZS50ZXh0Q29udGVudCA9IGl0ZW0uZG9uZTtcblxuXG4gICAgbXlJdGVtLmFwcGVuZENoaWxkKG15RGVzYyk7XG4gICAgbXlJdGVtLmFwcGVuZENoaWxkKG15RGF0ZSk7XG4gICAgbXlJdGVtLmFwcGVuZENoaWxkKG15RG9uZSk7XG5cblxuICAgIHJldHVybiBteUl0ZW07XG59XG5cbmNvbnN0IHJlbmRlckl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG15SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMnKTtcbiAgICBteUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW0pO1xufVxuXG5jb25zdCByZW5kZXJJdGVtc0xpc3QgPSAoYWN0aXZlUHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zJyk7XG4gICAgaXRlbXNEaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgYWxsUHJvamVjdHNbYWN0aXZlUHJvamVjdF0udG9Eb0xpc3QuZm9yRWFjaCgoYXJyYXlJdGVtLCBpbmRleCkgPT4gcmVuZGVySXRlbShjcmVhdGVIdG1sSXRlbShhcnJheUl0ZW0sIGluZGV4KSkpO1xufVxuXG5jb25zdCByZW5kZXJQcm9qRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtQmFja2dyb3VuZCA9IGRpdkNyZWF0ZSgnZm9ybUJhY2tncm91bmQnKTtcblxuICAgIGNvbnN0IHByb2pGb3JtID0gZGl2Q3JlYXRlKCdwcm9qRm9ybScpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcnKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnb25zdWJtaXQnLCAncmV0dXJuIGZhbHNlJyk7XG5cbiAgICAvLyBjcmVhdGUgdGhlIHByb2plY3QgbmFtZSBpbnB1dFxuICAgIHZhciBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZS5hdXRvZm9jdXMgPSB0cnVlO1xuXG4gICAgLy8gY3JlYXRlIGEgY2FuY2VsIGJ1dHRvblxuICAgIHZhciBwQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcENhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIHBDYW5jZWwuaWQgPSAncHJvakNhbmNlbEJ1dHRvbic7XG5cbiAgICAvLyBjcmVhdGUgYSBzdWJtaXQgYnV0dG9uXG4gICAgdmFyIHBTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgcFN1Ym1pdC5pZCA9ICdwcm9qU3VibWl0QnV0dG9uJztcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocENhbmNlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwU3VibWl0KTtcblxuXG4gICAgcHJvakZvcm0uYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybUJhY2tncm91bmQuYXBwZW5kQ2hpbGQocHJvakZvcm0pXG5cbiAgICByZXR1cm4gZm9ybUJhY2tncm91bmQ7XG59XG5cbmNvbnN0IGFkZEV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG5cbiAgICAvLyBhZGQgdGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBcImFkZFwiIHByb2plY3QgYW5kIGl0ZW0gYnV0dG9uc1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdEFkZCcpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNob3dGb3JtKCcucHJvakZvcm0nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3ROYW1lJykuZm9jdXMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbUFkZCcpO1xuICAgIGFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUFJFU1NFRFwiKTtcbiAgICB9KTtcblxuXG4gICAgY29uc3QgcHJvakNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qQ2FuY2VsQnV0dG9uJyk7XG4gICAgcHJvakNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJykudmFsdWUgPSAnJztcbiAgICAgICAgaGlkZUZvcm0oJy5wcm9qRm9ybScpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvalN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qU3VibWl0QnV0dG9uJyk7XG4gICAgICAgIHByb2pTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKS52YWx1ZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpLnZhbHVlID0gJyc7XG4gICAgICAgICAgXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICBoaWRlRm9ybSgnLnByb2pGb3JtJyk7XG5cbiAgICAgICAgICAgIHJlbmRlclByb2plY3RMaXN0KGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zTGlzdChmaW5kQWN0aXZlUHJvamVjdChhbGxQcm9qZWN0cykpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZShhbGxQcm9qZWN0cyk7XG5cbiAgICB9KTtcbn1cblxuY29uc3Qgc2hvd0Zvcm0gPSAobmFtZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQmFja2dyb3VuZCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmNvbnN0IGhpZGVGb3JtID0gKG5hbWUpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUJhY2tncm91bmQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuXG5leHBvcnQgeyBwYWdlU2V0dXAsIGNyZWF0ZUh0bWxJdGVtLCByZW5kZXJJdGVtLCBhZGRFdmVudEhhbmRsZXJzLCByZW5kZXJQcm9qZWN0TGlzdCwgcmVuZGVySXRlbXNMaXN0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/dom.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeProject\": () => (/* binding */ activeProject),\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"findActiveProject\": () => (/* binding */ findActiveProject)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n \n\nvar allProjects = [];\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.pageSetup)();\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.addEventHandlers)();\nlet activeProject = 0;\n\n\nconst createProject = (name) => {\n    clearActiveProjects(allProjects);\n    allProjects.push({\n        name, \n        toDoList: [], \n        isActive: true,\n    })\n}\n\nconst clearActiveProjects = (array) => {\n    array.forEach(element => { \n        element.isActive = false;\n    });\n}\n\n// returns index of the active project\nconst findActiveProject = (array) => {\n    return array.findIndex((project) => project.isActive === true);\n}\n\ncreateProject('Default Project');\ncreateProject('Second List');\n\n\nconsole.log(allProjects[0].name);\n\n\nfunction createItem(desc, date, done) {\n    return {\n        desc,\n        date,\n        done,\n        set setDesc (value) {\n            this.desc = value;\n        } \n    }\n}\n\n\n\n\n\nvar item1 = createItem('Empty bins', '01/01/2021', false);\nvar item2 = createItem('Do Laundry', '02/02/2022', true);\nvar item3 = createItem('Place Shopping Order', '02/02/2023', false);\n\n// var itemsArray = [item1, item2, item3];\nallProjects[1].toDoList = [item1, item2, item3];\n\n\n// itemsArray.forEach((arrayItem, index) => renderItem(createHtmlItem(arrayItem, index)));\n\n\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjectList)(allProjects);\nconsole.log(allProjects);\nactiveProject = findActiveProject(allProjects);\n(0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderItemsList)(activeProject);\n\n\n\n\n\n// outputs active project INDEX\nconsole.log(\"Active Project is Index: \" + findActiveProject(allProjects));\n\n// outputs active project NAME\nconsole.log(allProjects[findActiveProject(allProjects)].name);\n\n\n\n\n\n\n\n// item2.setDesc = 'laundry';\n\n// console.table(myProject);\n\n// console.log(item1.desc);\n\n// renderItem(createHtmlItem(item1, '1'));\n\n// console.log(allProjects[1].toDoList);\n////# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhZ2VTZXR1cCwgcmVuZGVySXRlbSwgY3JlYXRlSHRtbEl0ZW0sIGFkZEV2ZW50SGFuZGxlcnMsIHJlbmRlclByb2plY3RMaXN0LCByZW5kZXJJdGVtc0xpc3R9IGZyb20gXCIuL2RvbVwiOyBcblxudmFyIGFsbFByb2plY3RzID0gW107XG5wYWdlU2V0dXAoKTtcbmFkZEV2ZW50SGFuZGxlcnMoKTtcbmxldCBhY3RpdmVQcm9qZWN0ID0gMDtcblxuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjbGVhckFjdGl2ZVByb2plY3RzKGFsbFByb2plY3RzKTtcbiAgICBhbGxQcm9qZWN0cy5wdXNoKHtcbiAgICAgICAgbmFtZSwgXG4gICAgICAgIHRvRG9MaXN0OiBbXSwgXG4gICAgICAgIGlzQWN0aXZlOiB0cnVlLFxuICAgIH0pXG59XG5cbmNvbnN0IGNsZWFyQWN0aXZlUHJvamVjdHMgPSAoYXJyYXkpID0+IHtcbiAgICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4geyBcbiAgICAgICAgZWxlbWVudC5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH0pO1xufVxuXG4vLyByZXR1cm5zIGluZGV4IG9mIHRoZSBhY3RpdmUgcHJvamVjdFxuY29uc3QgZmluZEFjdGl2ZVByb2plY3QgPSAoYXJyYXkpID0+IHtcbiAgICByZXR1cm4gYXJyYXkuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlzQWN0aXZlID09PSB0cnVlKTtcbn1cblxuY3JlYXRlUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG5jcmVhdGVQcm9qZWN0KCdTZWNvbmQgTGlzdCcpO1xuXG5cbmNvbnNvbGUubG9nKGFsbFByb2plY3RzWzBdLm5hbWUpO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oZGVzYywgZGF0ZSwgZG9uZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlc2MsXG4gICAgICAgIGRhdGUsXG4gICAgICAgIGRvbmUsXG4gICAgICAgIHNldCBzZXREZXNjICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5kZXNjID0gdmFsdWU7XG4gICAgICAgIH0gXG4gICAgfVxufVxuXG5cblxuXG5cbnZhciBpdGVtMSA9IGNyZWF0ZUl0ZW0oJ0VtcHR5IGJpbnMnLCAnMDEvMDEvMjAyMScsIGZhbHNlKTtcbnZhciBpdGVtMiA9IGNyZWF0ZUl0ZW0oJ0RvIExhdW5kcnknLCAnMDIvMDIvMjAyMicsIHRydWUpO1xudmFyIGl0ZW0zID0gY3JlYXRlSXRlbSgnUGxhY2UgU2hvcHBpbmcgT3JkZXInLCAnMDIvMDIvMjAyMycsIGZhbHNlKTtcblxuLy8gdmFyIGl0ZW1zQXJyYXkgPSBbaXRlbTEsIGl0ZW0yLCBpdGVtM107XG5hbGxQcm9qZWN0c1sxXS50b0RvTGlzdCA9IFtpdGVtMSwgaXRlbTIsIGl0ZW0zXTtcblxuXG4vLyBpdGVtc0FycmF5LmZvckVhY2goKGFycmF5SXRlbSwgaW5kZXgpID0+IHJlbmRlckl0ZW0oY3JlYXRlSHRtbEl0ZW0oYXJyYXlJdGVtLCBpbmRleCkpKTtcblxuXG5cblxuXG5yZW5kZXJQcm9qZWN0TGlzdChhbGxQcm9qZWN0cyk7XG5jb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG5hY3RpdmVQcm9qZWN0ID0gZmluZEFjdGl2ZVByb2plY3QoYWxsUHJvamVjdHMpO1xucmVuZGVySXRlbXNMaXN0KGFjdGl2ZVByb2plY3QpO1xuXG5cblxuXG5cbi8vIG91dHB1dHMgYWN0aXZlIHByb2plY3QgSU5ERVhcbmNvbnNvbGUubG9nKFwiQWN0aXZlIFByb2plY3QgaXMgSW5kZXg6IFwiICsgZmluZEFjdGl2ZVByb2plY3QoYWxsUHJvamVjdHMpKTtcblxuLy8gb3V0cHV0cyBhY3RpdmUgcHJvamVjdCBOQU1FXG5jb25zb2xlLmxvZyhhbGxQcm9qZWN0c1tmaW5kQWN0aXZlUHJvamVjdChhbGxQcm9qZWN0cyldLm5hbWUpO1xuXG5cblxuXG5cbmV4cG9ydCB7Y3JlYXRlUHJvamVjdCwgYWxsUHJvamVjdHMsIGFjdGl2ZVByb2plY3QsIGZpbmRBY3RpdmVQcm9qZWN0fVxuXG4vLyBpdGVtMi5zZXREZXNjID0gJ2xhdW5kcnknO1xuXG4vLyBjb25zb2xlLnRhYmxlKG15UHJvamVjdCk7XG5cbi8vIGNvbnNvbGUubG9nKGl0ZW0xLmRlc2MpO1xuXG4vLyByZW5kZXJJdGVtKGNyZWF0ZUh0bWxJdGVtKGl0ZW0xLCAnMScpKTtcblxuLy8gY29uc29sZS5sb2coYWxsUHJvamVjdHNbMV0udG9Eb0xpc3QpO1xuLy8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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