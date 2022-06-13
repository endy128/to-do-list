const pageSetup = () => {
    const content = document.querySelector('#content');
    content.appendChild(divCreate('header'));

    const container = divCreate('container');

    container.appendChild(divCreate('sidebar'));
    container.appendChild(divCreate('main'));

    content.appendChild(container);

};

const divCreate = (name) => {
    const div = document.createElement('div');
    div.classList.add(name);

    return div;
};



export { pageSetup };