const pageSetup = () => {
    const content = document.querySelector('#content');
    
    let header = divCreate('header');
    header = addHtmlToNode(header, 'h1', 'To Do List');
    content.appendChild(header);

    const container = divCreate('container');

    let sidebar = divCreate('sidebar');
    let main = divCreate('main');
    const projects = divCreate('projects');
    let items = divCreate('items');

    sidebar = addHtmlToNode(sidebar, 'h2', 'Projects');
    sidebar.appendChild(projects);
    container.appendChild(sidebar);

    main = addHtmlToNode(main, 'h2', 'Items');
    main.appendChild(items);
    container.appendChild(main);

    content.appendChild(container);

};

const divCreate = (name) => {
    const div = document.createElement('div');
    div.classList.add(name);

    return div;
};

const addHtmlToNode = (node, tag, text) => {
    const myTag = document.createElement(tag);
    if (text) { myTag.textContent =  text };
    node.appendChild(myTag);
    return node;
}



export { pageSetup };