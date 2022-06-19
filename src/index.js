import { pageSetup, renderItem, createHtmlItem, addEventHandlers, renderProjectList, renderItemsList} from "./dom"; 

var allProjects = [];
pageSetup();
addEventHandlers();
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

createProject('Default Project');
createProject('Second List');


console.log(allProjects[0].name);


function createItem(desc, date, isDone) {
    return {
        desc,
        date,
        isDone,
        set setDesc (value) {
            this.desc = value;
        } 
    }
}





var item1 = createItem('Empty bins', '01/01/2021', false);
var item2 = createItem('Do Laundry', '02/02/2022', true);
var item3 = createItem('Place Shopping Order', '02/02/2023', false);

// var itemsArray = [item1, item2, item3];
allProjects[1].toDoList = [item1, item2, item3];


// itemsArray.forEach((arrayItem, index) => renderItem(createHtmlItem(arrayItem, index)));





renderProjectList(allProjects);
console.log(allProjects);
activeProject = findActiveProject(allProjects);
renderItemsList(activeProject);





// outputs active project INDEX
console.log("Active Project is Index: " + findActiveProject(allProjects));

// outputs active project NAME
console.log(allProjects[findActiveProject(allProjects)].name);





export {createProject, createItem, allProjects, activeProject, findActiveProject}

// item2.setDesc = 'laundry';

// console.table(myProject);

// console.log(item1.desc);

// renderItem(createHtmlItem(item1, '1'));

// console.log(allProjects[1].toDoList);
//