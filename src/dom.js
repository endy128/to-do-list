import  { createProject } from './index';
import { allProjects } from './index';


const pageSetup = () => {
    const content = document.querySelector('#content');
    
    let header = divCreate('header');
    header = addHtmlToNode(header, 'h1', 'To Do List');
    content.appendChild(header);

    const container = divCreate('container');

    let sidebar = divCreate('sidebar');
    let main = divCreate('main');
    let projects = divCreate('projects');
    let items = divCreate('items');


    sidebar = addHtmlToNode(sidebar, 'h2', 'Projects');
    sidebar = addHtmlToNode(sidebar, 'button', '+', 'projectAdd');

    sidebar.appendChild(projects);
    container.appendChild(sidebar);

    main = addHtmlToNode(main, 'h2', 'Items');
    main = addHtmlToNode(main, 'button', '+', 'itemAdd');

    main.appendChild(items);
    container.appendChild(main);

    content.appendChild(container);

    content.appendChild(renderProjForm());

};

// creates a div and add the name of the div as a class
const divCreate = (name) => {
    const div = document.createElement('div');
    div.classList.add(name);

    return div;
};

const addHtmlToNode = (node, tag, text, id) => {
    const myTag = document.createElement(tag);
    if (text) { myTag.textContent =  text };
    if (id) {myTag.id = id };
    node.appendChild(myTag);
    return node;
}

const createHtmlProject = (project) => {
    const a = document.createElement('a');
    a.textContent = project;
    return a;
}

const renderProjectList = (array) => {
    const projectDiv = document.querySelector('.projects');
    projectDiv.innerHTML = '';
    array.forEach(element => { projectDiv.appendChild(createHtmlProject(element.name));
    });
}

const createHtmlItem = (item, index) => {
    // const myItems = document.querySelector('.items');

    const myItem = divCreate('item');
    const myDesc = divCreate('desc');
    const myDate = divCreate('date');
    const myDone = divCreate('done');

    myItem.dataset.index = index;

    myDesc.textContent = item.desc;
    myDate.textContent = item.date;
    myDone.textContent = item.done;


    myItem.appendChild(myDesc);
    myItem.appendChild(myDate);
    myItem.appendChild(myDone);


    return myItem;
}

const renderItem = (item) => {
    const myItems = document.querySelector('.items');
    myItems.appendChild(item);
}

const renderProjForm = () => {
    const formBackground = divCreate('formBackground');

    const projForm = divCreate('projForm');
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '');
    form.setAttribute('onsubmit', 'return false');

    // create the project name input
    var projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('id', 'projectName');
    projectName.autofocus = true;
    projectName.setAttribute('placeholder', 'Project Name');

    // create a cancel button
    var pCancel = document.createElement('button');
    pCancel.textContent = 'Cancel';
    pCancel.id = 'projCancelButton';

    // create a submit button
    var pSubmit = document.createElement('button');
    pSubmit.textContent = 'Submit';
    pSubmit.id = 'projSubmitButton';

    form.appendChild(projectName);
    form.appendChild(pCancel);
    form.appendChild(pSubmit);


    projForm.appendChild(form);
    formBackground.appendChild(projForm)

    return formBackground;
}

const addEventHandlers = () => {

    // add the event handler for the "add" project and item buttons
    const addProject = document.querySelector('#projectAdd');
    addProject.addEventListener('click', () => {
        showForm('.projForm');
        document.querySelector('#projectName').focus();
    });

    const addItem = document.querySelector('#itemAdd');
    addItem.addEventListener('click', () => {
        console.log("PRESSED");
    });


    const projCancelButton = document.querySelector('#projCancelButton');
    projCancelButton.addEventListener('click', () => {
        document.getElementById('projectName').value = '';
        hideForm('.projForm');
    });

    const projSubmitButton = document.querySelector('#projSubmitButton');
        projSubmitButton.addEventListener('click', () => {
            
            const newProject = document.getElementById('projectName').value;
            document.getElementById('projectName').value = '';
          
            createProject(newProject);

            hideForm('.projForm');

            renderProjectList(allProjects);

            console.log(allProjects);

    });
}

const showForm = (name) => {
    document.querySelector('.formBackground').style.display = 'block';
    document.querySelector(name).style.display = 'block';
}

const hideForm = (name) => {
    document.querySelector('.formBackground').style.display = 'none';
    document.querySelector(name).style.display = 'none';
}


export { pageSetup, createHtmlItem, renderItem, addEventHandlers, renderProjectList };