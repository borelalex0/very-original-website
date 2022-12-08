export {createElements};

function createElements(elementType = 'div', n = 1 /*number of elements*/, textContentstring = `Default`) {
    /* create elements in the DOM */
    let tempElement = document.createElement(elementType);
    for (let i = 0; i < n; i++) {
        tempElement = document.createElement(elementType);
        tempElement.textContent = `${textContentstring}`;
        document.body.appendChild(tempElement);
    }
    return 0;
}

/* function that reads content of an element, if it has children, recurse, if not, log as html content. */
function readHtml() {
    let htmlObject = {
        name: document
    }
    if (htmlObject.name.hasChildNodes) {
        addChildNodes(htmlObject);
    }
    let a = htmlObject.name.getElementsByTagName('div')
    if (htmlObject.name) {
        // how to check attributes of an HTML element?
        // set html element to variable using getElementByTagName

    }
    // modify htmlObject.name to go one level deeper before returning
    return htmlObject;
}

function addChildNodes(htmlObject) {
    // create list to store childobj
    let tempChildList = [];
    // add name key and value to object
    let tempLength = htmlObject.name.childNodes.length;
    for (i = 0; i < tempLength; i++) {
        let tempChildObj = {};
        let tempChildName = htmlObject.name.childNodes[i];
        console.log(`tempChildName: ${tempChildName} i: ${i}-1`);
        tempChildObj['name'] = tempChildName;
        console.log(`tempChildObj: ${tempChildObj} i: ${i}-2`);
        tempChildList.push(tempChildObj);
        console.log(`tempChildObj: ${tempChildObj} i: ${i}-3`);
    }
    htmlObject['children'] = tempChildList;
}

/* recreate index.hmtl as an object with nested elements */
let exampleObject = {
    name: 'document',
    children: [
        {
            name: 'doctype',
            children: []
        },
        {
            name: 'html',
            children: [
                {
                    name: 'head',
                    children: [
                        {
                            name: 'meta',
                            children: [],
                            attributes: 
                                {
                                    charset: 'utf-8'
                                }
                        },
                        {
                            name: 'meta',
                            children: [],
                            attributes:
                                {
                                    name: 'viewport',
                                    content: 'width=device-width, initial-scale=1.0'
                                }
                        
                        },
                        {
                            name: 'style',
                            children: [],
                            attributes: {},
                            textContent: "@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap');"
                        },
                        {
                            name: 'link',
                            children: [],
                            attributes: {
                                id: 'pagestyle',
                                rel: 'stylesheet',
                                href: './css/basic.css'
                            }
                        },
                        {
                            name: 'title',
                            textContent: "very original website",
                        }
                    ]
                },
                {
                    name: 'body',
                    children: [
                        {
                            name: 'script'
                        }
                    ]
                }
            ]
        }
    ]
    }