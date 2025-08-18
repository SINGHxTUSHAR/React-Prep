function customRender(reactElement, container){
    const { type, props, children } = reactElement;

    const domElement = document.createElement(type);

    for (const [key, value] of Object.entries(props)) {
        domElement.setAttribute(key, value);
    }

    domElement.textContent = children;

    container.appendChild(domElement);
}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click here!!!!!!!!!'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer);