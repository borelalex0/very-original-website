import {createElements} from './tools.js'

const delement = document.createElement("div");
delement.style.textAlign = "center"

const h2 = document.createElement("h2");
h2.textContent = "This content created by JavaScript";

delement.appendChild(h2);
document.body.appendChild(delement);

createElements('h2', 3, 'success!');




let cliDropDown = ['ls','cd','mkdir','rmdir','rm','mv'];
let cliDropDownInsertID = 'cli-blog-section';
insertDropDown(cliDropDown, cliDropDownInsertID);

function insertDropDown(dropDownList, insertAtID) {
    let parent1 = document.getElementById(insertAtID);
    let tempul = document.createElement("ul");
    tempul.className = "nav-bar";
    tempul.id = "cliDropDownList";
    document.getElementById(insertAtID).append(tempul);
    console.log(`appended element id=${tempul}`);
    for (let i = 0; i < dropDownList.length; i++) {
        console.log(`loop ${i}`);
        let templi = document.createElement("li");
        let tempa = document.createElement("a");
        templi.className = "nav-bar-item-vertical";
        tempa.className = "nav-bar-link";
        tempa.id = dropDownList[i] + "DropDownButton";
        tempa.innerHTML = dropDownList[i];
        tempul.append(templi);
        templi.append(tempa);
        console.log(`appended element id=${tempa.id}`);
    }
}

/* 
const lsDropDownButton = document.getElementById("lsDropDownButton");
const lsDropDownButton = document.getElementById("cdDropDownButton");
const mkdirDropDownButton = document.getElementById("mkdirDropDownButton");
const lsDropDownButton = document.getElementById("lsDropDownButton");
const lsDropDownButton = document.getElementById("lsDropDownButton");
const lsDropDownButton = document.getElementById("lsDropDownButton"); 
*/

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