import { pageSetup, renderItem, createHtmlItem } from "./dom"; 


pageSetup();

function createProject(name) {
    return {
        name,
        set propName(value) {
            this.name = value;
        },
        get propName() {
            return this.name;
        }
    }
}

var test = createProject('test');
console.log(test);

test.propName = 'New';
console.log(test.propName);

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


item2.setDesc = 'laundry';
console.log(item1);
console.log(item2);

var myProject = [item1, item2, item3];
console.table(myProject);

console.log(item1.desc);

renderItem(createHtmlItem(item1));