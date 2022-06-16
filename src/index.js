import { pageSetup, renderItem, createHtmlItem, addEventHandlers, renderProjectList } from "./dom"; 

var allProjects = [];
pageSetup();
addEventHandlers();



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

createProject('test');
createProject('number2');


console.log(allProjects[0].name);


function createItem(desc, date, done) {
    return {
        desc,
        date,
        done,
        set setDesc (value) {
            this.desc = value;
        } 
    }
}





var item1 = createItem('empty bins', '01/01/2021', false);
var item2 = createItem('laundry', '02/02/2022', true);
var item3 = createItem('Shoppping', '02/02/2023', false);

var itemsArray = [item1, item2, item3];


itemsArray.forEach((arrayItem, index) => renderItem(createHtmlItem(arrayItem, index)));


renderProjectList(allProjects);
console.log(allProjects);

console.log("Index: " + findActiveProject(allProjects));




export {createProject, allProjects, findActiveProject}

// item2.setDesc = 'laundry';

// console.table(myProject);

// console.log(item1.desc);

// renderItem(createHtmlItem(item1, '1'));