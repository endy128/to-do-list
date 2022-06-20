import { pageSetup, addEventHandlers, renderProjectList, renderItemsList} from "./dom"; 
import { storageAvailable, saveLocalData } from "./local";

let allProjects = [];
let activeProject = 0;


const createProject = (name) => {
    clearActiveProjects(allProjects);
    allProjects.push({
        name, 
        toDoList: [], 
        isActive: true,
    })
}

const clearActiveProjects = (array) => {
    array.forEach(element => { 
        element.isActive = false;
    });
}

// returns index of the active project
const findActiveProject = (array) => {
    return array.findIndex((project) => project.isActive === true);
}

const setActiveProject = (index) => {
    clearActiveProjects(allProjects);
    allProjects[index].isActive = true;
}


const createDefaultToDoList = () => {
    createProject('Default Project');
    createProject('Second List');
    setActiveProject(0);

    allProjects[0].toDoList = [
        {"desc":"Empty bins","date":"2021-01-01","isDone":false},
        {"desc":"Do Laundry","date":"2022-02-02","isDone":true},
        {"desc":"Place Shopping Order","date":"2023-03-03","isDone":false},
        {"desc":"Clean Car","date":"2022-06-19","isDone":false}
        ];
    allProjects[1].toDoList = [
        {"desc":"Clean Car","date":"2022-06-19","isDone":false},
        {"desc":"Do Laundry","date":"2022-02-02","isDone":true},
        {"desc":"Empty bins","date":"2021-01-01","isDone":false},
        {"desc":"Place Shopping Order","date":"2023-04-04","isDone":false}
        ];
    
}


function createItem(desc, date, isDone) {
    return {
        desc,
        date,
        isDone,
        } 
    
}



if (storageAvailable('localStorage')) {
    console.log("Local storage IS available")
    if (!localStorage.allProjects) {
        console.log("... but nothing there")
        createDefaultToDoList();
        } else {
        console.log("Loading Data");
        // loadLocalData();
        allProjects = JSON.parse(localStorage.getItem('allProjects'));
        }
    } else {
    console.log("NO Local storage available")
};



pageSetup();
renderProjectList(allProjects);
activeProject = findActiveProject(allProjects);
renderItemsList(activeProject);
addEventHandlers();





export { createProject, createItem, allProjects, activeProject, findActiveProject, setActiveProject, saveLocalData}

// item2.setDesc = 'laundry';

// console.table(myProject);

// console.log(item1.desc);

// renderItem(createHtmlItem(item1, '1'));

// console.log(allProjects[1].toDoList);
//

// console.log(allProjects[0].name);


// outputs active project INDEX
// console.log("Active Project is Index: " + findActiveProject(allProjects));

// outputs active project NAME
// console.log(allProjects[findActiveProject(allProjects)].name);
