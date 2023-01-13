/* 
Turn script with import into type="module" in html when turning this on.
This will break CORS resulting in errors running this js file 
when loading outside of https.

import {createElements, insertDropDown} from './tools.js'
document.onload = () => {
    let cliDropDown = ['ls','cd','mkdir','rmdir','rm','mv'];
    let cliDropDownInsertID = 'cli-blog-section';
    insertDropDown(cliDropDown, cliDropDownInsertID);

} 
*/

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

function extendDropDown() {
    // declare the link as a variable
    let acc = document.getElementsByClassName("nav-bar-item-vertical");
    console.log(acc);
    console.log(acc.length);
    for (let i = 0; i < acc.length; i++) {
        console.log(`Iteration: ${i}`);
        acc[i].addEventListener("click", function() {
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");
      
          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
}

// creates dropdown list once all html content is loaded.
document.addEventListener('DOMContentLoaded', () => {
        let cliDropDown = ['ls','cd','mkdir','rmdir','rm','mv'];
        insertDropDown(cliDropDown, 'cli-blog-section');
        extendDropDown();
});

/*
const delement = document.createElement("div");
delement.style.textAlign = "center"

const h2 = document.createElement("h2");
h2.textContent = "This content created by JavaScript";

delement.appendChild(h2);
document.body.appendChild(delement);

createElements('h2', 3, 'success!');
*/