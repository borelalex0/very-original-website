import {createElements, insertDropDown} from './tools.js'

/* document.onload = () => {
    let cliDropDown = ['ls','cd','mkdir','rmdir','rm','mv'];
    let cliDropDownInsertID = 'cli-blog-section';
    insertDropDown(cliDropDown, cliDropDownInsertID);

} */

document.addEventListener('DOMContentLoaded', function() {
    document.body.onload = () => {
        let cliDropDown = ['ls','cd','mkdir','rmdir','rm','mv'];
        let cliDropDownInsertID = 'cli-blog-section';
        insertDropDown(cliDropDown, cliDropDownInsertID);
    
    }
});

let element = document.body;
element.html

/* const delement = document.createElement("div");
delement.style.textAlign = "center"

const h2 = document.createElement("h2");
h2.textContent = "This content created by JavaScript";

delement.appendChild(h2);
document.body.appendChild(delement);

createElements('h2', 3, 'success!'); */

/* recreate index.hmtl as an object with nested elements */
let exampleObject = {
    name: 'main',
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