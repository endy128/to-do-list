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
    let sideHeader = divCreate('sideHeader');
    let main = divCreate('main');
    let mainHeader = divCreate('mainHeader');
    let projects = divCreate('projects');
    let items = divCreate('items');
    let span = document.createElement('span');
    let button = document.createElement('button');
    
    sideHeader = addHtmlToNode(sideHeader, 'h2', 'Projects');   
    mainHeader = addHtmlToNode(mainHeader, 'h2', 'Items');
    
    span.textContent = '+';
    button.id = 'projectAdd';
    button.appendChild(span);
    let button2 = button.cloneNode(true);
    sideHeader.appendChild(button);
    sidebar.appendChild(sideHeader);
    sidebar.appendChild(projects);

    container.appendChild(sidebar);

    button2.id = 'itemAdd';
    mainHeader.appendChild(button2);
    main.appendChild(mainHeader);
    main.appendChild(items);

    container.appendChild(main);
    content.appendChild(container);
    
    content.appendChild(renderProjForm());
    content.appendChild(renderItemForm());
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
    const editButton = document.createElement('button');
    const delButton = document.createElement('button');
    const p = document.createElement('p');

    editButton.classList.add('edit');
    editButton.dataset.index = index;
    // editButton.textContent = 'Edit';

    delButton.classList.add('delete');
    delButton.dataset.index = index;
    // delButton.textContent = 'Del';

    p.textContent = project;
    p.dataset.index = index;
    if (isActive === true) p.classList.add('selected');
    div.appendChild(p);

    div.appendChild(editButton);
    div.appendChild(delButton);

    div.classList.add('project-item');
    div.dataset.index = index;
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
    addProjectEditEventHandlers();
    addProjectDeleteEventHandlers();


}

const createHtmlItem = (item, index) => {
    // const myItems = document.querySelector('.items');

    const myItem = divCreate('item');
    const myDesc = divCreate('desc');
    const myDate = divCreate('date');
    const myDone = divCreate('done');
    const editButton = document.createElement('button');
    const delButton = document.createElement('button');

    myItem.dataset.index = index;

    editButton.classList.add('edit');
    editButton.dataset.index = index;
    // editButton.textContent = 'Edit';

    delButton.classList.add('delete');
    delButton.dataset.index = index;
    // delButton.textContent = 'Del';

    myDesc.textContent = item.desc;
    myDesc.appendChild(editButton);
    myDesc.appendChild(delButton);

    myDate.textContent = format(new Date(item.date), 'dd/MM/yyyy');
    // myDone.textContent = item.isDone;
    myDone.classList.add('checkbox');
    if (item.isDone === true) {
        myDone.classList.add('checked');
    }

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
    addItemDeleteEventHandlers();
    addItemEditEventHandlers();
    addToggleCheckboxEventHandlers();

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

    // create hidden value for use when editing
    var index = document.createElement('input');
    index.setAttribute('type', 'hidden');
    index.setAttribute('id', 'itemIndex');
    index.setAttribute('value', false);

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
    form.appendChild(index);


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
            const hiddenFormValue = document.querySelector('#itemIndex').value;

            if (hiddenFormValue != 'false') {
                const activeProject = findActiveProject(allProjects);
                allProjects[activeProject].toDoList[hiddenFormValue].desc = desc;
                allProjects[activeProject].toDoList[hiddenFormValue].date = date;
                document.getElementById('itemDesc').value = '';
                document.getElementById('itemDate').value = format(new Date(), 'yyyy-MM-dd');
                document.querySelector('#itemIndex').value = false; 
            } else {  
                var newItem = createItem(desc, date, false);
                addItemToActiveProject(newItem);
                document.getElementById('itemDesc').value = '';
            };
            

            hideForm('.itemForm');
            renderItemsList(findActiveProject(allProjects));
            saveLocalData(allProjects);

    });

    
    addProjectEventHandlers();
    addProjectEditEventHandlers();
};

const addToggleCheckboxEventHandlers = (() => {
    return () => {
        const checkboxes = Array.from(document.querySelectorAll('.checkbox'));
        checkboxes.forEach(checkbox => checkbox.addEventListener('click', (e) => {
            console.log(checkbox.parentNode.dataset.index);
            const index = checkbox.parentNode.dataset.index;
            toggleCheckbox(index, e);
            // redraw the item list or amend the clicked div
        }))
    };
})();

const toggleCheckbox = (index, e) => {
    const activeProject = findActiveProject(allProjects);
    // toggel boolean of index
    if (allProjects[activeProject].toDoList[index].isDone === false) {
        allProjects[activeProject].toDoList[index].isDone = true;

    } else {
        allProjects[activeProject].toDoList[index].isDone = false;
    }
    console.log(allProjects[activeProject].toDoList[index].isDone);
    // toggle the class
    e.target.classList.toggle('checked');
    console.table(allProjects[activeProject])
}

const addItemDeleteEventHandlers = (() => {
    return () => {
        const itemDeleteButtons = Array.from(document.querySelectorAll('.desc .delete'));
        itemDeleteButtons.forEach(button => button.addEventListener('click', () => {
            console.log("Item Del Index: " + button.dataset.index);
            console.log("Active Project: " + findActiveProject(allProjects));
            let activeProject = findActiveProject(allProjects);
            allProjects[activeProject].toDoList.splice(button.dataset.index, 1);
            console.table(allProjects[activeProject]);
            renderItemsList(activeProject);
        }))
    };
})();

const addProjectDeleteEventHandlers = (() => {
    return () => {
            // project edit buttons
    const projDeleteButtons = Array.from(document.querySelectorAll('.project-item .delete'));
    projDeleteButtons.forEach(button => button.addEventListener('click', () => {        
        // remove the project
         allProjects.splice(button.dataset.index, 1);
         
         removeSelectedClassFromProjects();

         // check if it's NOT the last project before setting the first project to be active
         if (allProjects.length > 1) {
            setActiveProject(0);
            renderItemsList(0);
         }
         renderProjectList(allProjects);
         saveLocalData(allProjects);
         
    }))
    }

})();

const addItemEditEventHandlers = (() => {
    return () => {
            // item edit buttons
    const itemEditButtons = Array.from(document.querySelectorAll('.desc .edit'));
    itemEditButtons.forEach(button => button.addEventListener('click', () => {
        const activeProject = findActiveProject(allProjects);
        const index = button.dataset.index;
        // have the form input boxes populated with correct data for easy editing
        document.querySelector('#itemDesc').value = allProjects[activeProject].toDoList[index].desc;
        document.querySelector('#itemDate').value = allProjects[activeProject].toDoList[index].date;

        showForm('.itemForm');
        document.querySelector('#itemDesc').focus();

        // sets the hidden input on the form to the index value of the project clicked on
        document.querySelector('.itemForm  #itemIndex').value =  index;
    }))
    }

})();

const addProjectEditEventHandlers = (() => {
    return () => {
            // project edit buttons
    const projEditButtons = Array.from(document.querySelectorAll('.project-item .edit'));
    projEditButtons.forEach(button => button.addEventListener('click', () => {
        const activeProject = findActiveProject(allProjects);
        const index = button.dataset.index;
        // have the form input boxes populated with correct data for easy editing
        document.querySelector('#projectName').value = allProjects[activeProject].name;

        showForm('.projForm');
        document.querySelector('#projectName').focus();

        // sets the hidden input on the form to the index value of the project clicked on
        document.querySelector('.projForm  #projIndex').value =  index;
    }))
    }

})();

const addProjectEventHandlers  = (() =>{
    return () => {
        const projects = Array.from(document.querySelectorAll('.project-item p'));
            projects.forEach(project => project.addEventListener('click', () => {
                removeSelectedClassFromProjects();
                project.classList.add('selected');
                setActiveProject(project.dataset.index);
                renderItemsList(project.dataset.index);
                saveLocalData(allProjects);
        }));
    }
})();

// removes class "selected" form all project items
const removeSelectedClassFromProjects = () => {
    const projects = Array.from(document.querySelectorAll('.project-item p'));
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