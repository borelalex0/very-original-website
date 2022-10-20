function createElements(elementType, n/*number of elements*/) {
    /* create elements in the DOM*/
    let k = document.createElement(elementType);
    for (let i = 0; i < n; i++) {
        let k = document.createElement(elementType);
        k.textContent = `This is ${elementType} ${i+1}`;
        document.body.append(k);
    }
    return 0;
}
/* Style Sheet Change Functionality */
const lightModeButton = document.getElementById("lightmodebutton");
const darkModeButton = document.getElementById("darkmodebutton");
lightModeButton.onclick = function () {swapStyleSheet('./css/light-basic.css')}
darkModeButton.onclick = function () {swapStyleSheet('./css/dark-basic.css')}
function swapStyleSheet(style) {
    document.getElementById("pageStyle").setAttribute("href", style);
}
/* End Style Sheet Change Functionality */


const delement = document.createElement("div");

const h2 = document.createElement("h2");
h2.textContent = "This content created by JavaScript";

delement.appendChild(h2);
document.body.appendChild(delement);