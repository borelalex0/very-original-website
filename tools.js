export {createElements};

function createElements(elementType = 'div', n = 1 /*number of elements*/, textContentstring = `This is `) {
    /* create elements in the DOM */
    let tempElement = document.createElement(elementType);
    for (let i = 0; i < n; i++) {
        tempElement = document.createElement(elementType);
        tempElement.textContent = `${textContentstring}`;
        document.body.appendChild(tempElement);
    }
    return 0;
}

function changeAttribute(object, attribute, attributeValue) {
    for (let i = 0; i < object.length; i++) {
        navRight[i].setAttribute(attribute, attributeValue);
    }
    return 0;
}