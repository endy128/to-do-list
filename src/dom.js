import { createProject, createItem, findActiveProject, setActiveProject, activeProject  } from './index';
import { saveLocalData } from './local'; 
import { allProjects } from './index';
import { compareAsc, format } from 'date-fns';



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

    let span = document.createElement('span');
    span.textContent = '+';
    let button = document.createElement('button');
    button.id = 'projectAdd';
    button.appendChild(span);
    sidebar.appendChild(button);

    sidebar.appendChild(projects);
    container.appendChild(sidebar);

    main = addHtmlToNode(main, 'h2', 'Items');
    let button2 = button.cloneNode(true);
    button2.id = 'itemAdd';
    main.appendChild(button2);

    main.appendChild(items);

    container.appendChild(main);

    content.appendChild(container);

    content.appendChild(renderProjForm());
    content.appendChild(renderItemForm());
    // content.appendChild(renderProjEditForm());



};

// creates a div and add the name of the div as a class
const divCreate = (name) => {
    const div = document.createElement('div');
    div.classList.add(name);

    return div;
};

// creates a html tag, adds it to a node and if supplied, adds its text content and assigns an ID
const addHtmlToNode = (node, tag, text, id) => {
    const myTag = document.createElement(tag);
    if (text) { myTag.textContent =  text };
    if (id) {myTag.id = id };
    node.appendChild(myTag);
    return node;
}

const createHtmlProject = (project, index, isActive) => {
    const div = document.createElement('div');
    const button = document.createElement('button');
    button.classList.add('edit');
    button.dataset.index = index;
    button.textContent = 'Edit';
    div.textContent = project;
    div.appendChild(button);
    div.classList.add('project-item');
    div.dataset.index = index;
    if (isActive === true) div.classList.add('selected');
    return div;
}

const renderProjectList = (array) => {
    const projectDiv = document.querySelector('.projects');
    const activeProject = findActiveProject(allProjects);
    projectDiv.innerHTML = '';
    array.forEach((element, index) => { 
        // if the project is "active" then ensure it is created with the "selected" class
        if (index === activeProject) {
            projectDiv.appendChild(createHtmlProject(element.name, index, true));
        } else {
            projectDiv.appendChild(createHtmlProject(element.name, index));
        }
        });

    // put the event handlers back on the new nodes
    addProjectEventHandlers();
    addProjectEditEventhandlers();
}

const createHtmlItem = (item, index) => {
    // const myItems = document.querySelector('.items');

    const myItem = divCreate('item');
    const myDesc = divCreate('desc');
    const myDate = divCreate('date');
    const myDone = divCreate('done');
    const button = document.createElement('button');

    myItem.dataset.index = index;

    button.classList.add('edit');
    button.dataset.index = index;
    button.textContent = 'Edit';

    myDesc.textContent = item.desc;
    myDesc.appendChild(button);

    myDate.textContent = format(new Date(item.date), 'dd/MM/yyyy')
    myDone.textContent = item.isDone;


    myItem.appendChild(myDesc);
    myItem.appendChild(myDate);
    myItem.appendChild(myDone);


    return myItem;
}

const renderItem = (item) => {
    const myItems = document.querySelector('.items');
    myItems.appendChild(item);
}

const renderItemsList = (activeProject) => {
    const itemsDiv = document.querySelector('.items');
    itemsDiv.innerHTML = '';
    allProjects[activeProject].toDoList.forEach((arrayItem, index) => renderItem(createHtmlItem(arrayItem, index)));
}

const renderProjForm = () => {
    const formBackground = divCreate('projFormBackground');

    const projForm = divCreate('projForm');
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '');
    form.setAttribute('onsubmit', 'return false');

    // create the project name input
    var projectName = document.createElement('input');
    projectName.setAttribute('type', 'text');
    projectName.setAttribute('id', 'projectName');
    projectName.setAttribute('placeholder', 'Project Name');
    projectName.autofocus = true;

    // create hidden value for use when editing
    var index = document.createElement('input');
    index.setAttribute('type', 'hidden');
    index.setAttribute('id', 'projIndex');
    index.setAttribute('value', false);

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
    form.appendChild(index);


    projForm.appendChild(form);
    formBackground.appendChild(projForm)

    return formBackground;
}



const renderItemForm = () => {
    const formBackground = divCreate('itemFormBackground');

    const itemForm = divCreate('itemForm');
    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', '');
    form.setAttribute('onsubmit', 'return false');

    // create the item name input
    var itemDesc = document.createElement('input');
    itemDesc.setAttribute('type', 'text');
    itemDesc.setAttribute('id', 'itemDesc');
    itemDesc.setAttribute('placeholder', 'Description');

    // create the item date
    var itemDate = document.createElement('input');
    itemDate.setAttribute('type', 'date');
    itemDate.setAttribute('id', 'itemDate');
    itemDate.setAttribute('value', format(new Date(), 'yyyy-MM-dd'));

    // // create a hidden input for isDone, set to false
    // var isDone = document.createElement('input');
    // isDone.setAttribute('type', 'hidden');
    // isDone.setAttribute('id', 'isDone');
    // isDone.setAttribute('value', false);

    // create a cancel button
    var iCancel = document.createElement('button');
    iCancel.textContent = 'Cancel';
    iCancel.id = 'itemCancelButton';

    // create a submit button
    var iSubmit = document.createElement('button');
    iSubmit.textContent = 'Submit';
    iSubmit.id = 'itemSubmitButton';

    form.appendChild(itemDesc);
    form.appendChild(itemDate);
    form.appendChild(iCancel);
    form.appendChild(iSubmit);


    itemForm.appendChild(form);
    formBackground.appendChild(itemForm)

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
        showForm('.itemForm');
        document.querySelector('#itemDesc').focus();
    });


    const projCancelButton = document.querySelector('#projCancelButton');
    projCancelButton.addEventListener('click', () => {
        document.getElementById('projectName').value = '';
        hideForm('.projForm');
    });

    const projSubmitButton = document.querySelector('#projSubmitButton');
        projSubmitButton.addEventListener('click', () => {

            const hiddenFormValue = document.querySelector('#projIndex').value;
            if (hiddenFormValue != 'false') {

                allProjects[hiddenFormValue].name = document.getElementById('projectName').value;
                document.getElementById('projectName').value = '';
                // reset the hidden index value
                document.querySelector('#projIndex').value = false; 
            } else {
                const newProject = document.getElementById('projectName').value;
                document.getElementById('projectName').value = '';
                createProject(newProject);
            }

            hideForm('.projForm');
            renderProjectList(allProjects);
            renderItemsList(findActiveProject(allProjects));
            console.table(allProjects);
            saveLocalData(allProjects);
            

    });

    const itemCancelButton = document.querySelector('#itemCancelButton');
    itemCancelButton.addEventListener('click', () => {
        document.getElementById('itemDesc').value = '';
        hideForm('.itemForm');
    });

    const itemSubmitButton = document.querySelector('#itemSubmitButton');
        itemSubmitButton.addEventListener('click', () => {
            
            const desc = document.getElementById('itemDesc').value;
            const date = document.getElementById('itemDate').value;

            document.getElementById('itemDesc').value = '';
            // document.getElementById('itemDate').value = format(new Date(), 'yyyy-MM-dd');
          
            var newItem = createItem(desc, date, false);

            addItemToActiveProject(newItem);

            hideForm('.itemForm');

            renderItemsList(findActiveProject(allProjects));
            console.table(allProjects);

            saveLocalData(allProjects);

    });

    
    addProjectEventHandlers();
    addProjectEditEventhandlers();
    
};

const addProjectEditEventhandlers = (() => {
    return () => {
            // project edit buttons
    const projEditButtons = Array.from(document.querySelectorAll('.project-item .edit'));
    projEditButtons.forEach(button => button.addEventListener('click', () => {
        
        showForm('.projForm');
        document.querySelector('#projectName').focus();

        // sets the hidden input on the form to the index value of the project clicked on
        document.querySelector('.projForm  #projIndex').value =  button.dataset.index;
    }))
    }

})();

const addProjectEventHandlers  = (() =>{
    return () => {
        const projects = Array.from(document.querySelectorAll('.project-item'));
            projects.forEach(project => project.addEventListener('click', () => {
                removeSelectedProjects(projects);
                project.classList.add('selected');
                setActiveProject(project.dataset.index);
                renderItemsList(project.dataset.index);
                saveLocalData(allProjects);
        }));
    }
})();

const removeSelectedProjects = (projects) => {
    projects.forEach(project => project.classList.remove('selected') );
};

const addItemToActiveProject = (item) => {
    var activeProject = findActiveProject(allProjects);
    allProjects[activeProject].toDoList.push(item);
}

// show & hide the ".projForm" and ".indexForm" backgrounds & form
const showForm = (name) => {
    document.querySelector( name + 'Background').style.display = 'block';
    document.querySelector(name).style.display = 'block';
}

const hideForm = (name) => {
    document.querySelector( name + 'Background').style.display = 'none'; 
    document.querySelector(name).style.display = 'none';
}


export { pageSetup, createHtmlItem, renderItem, addEventHandlers, renderProjectList, renderItemsList };