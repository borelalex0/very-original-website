import {createElements} from './tools.js'

const delement = document.createElement("div");
delement.style.textAlign = "center"

const h2 = document.createElement("h2");
h2.textContent = "This content created by JavaScript";

delement.appendChild(h2);
document.body.appendChild(delement);

createElements('h2',3,'success!');