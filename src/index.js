import { pageSetup, renderItem, createHtmlItem, addEventHandlers } from "./dom"; 


pageSetup();
addEventHandlers();

function createProject(name, index) {
    return {
        name,
        index,
        set propName(value) {
            this.name = value;
        },
        get propName() {
            return this.name;
        },
        get propIndex() {
            return this.index;
        },
    }
}

var test = createProject('test');

test.propName = 'New';

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

var myProject = [item1, item2, item3];


myProject.forEach((arrayItem, index) => renderItem(createHtmlItem(arrayItem, index)));

export {createProject}

// item2.setDesc = 'laundry';

// console.table(myProject);

// console.log(item1.desc);

// renderItem(createHtmlItem(item1, '1'));