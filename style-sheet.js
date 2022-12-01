/* Style Sheet Change Functionality */
function swapStyleSheet(style) {
    document.getElementById("pageStyle").setAttribute("href", style);
}

const lightModeButton = document.getElementById("lightModeButton");
const darkModeButton = document.getElementById("darkModeButton");
const basicModeButton = document.getElementById("basicModeButton");

lightModeButton.onclick = function () {swapStyleSheet('./css/light-basic.css')}
darkModeButton.onclick = function () {swapStyleSheet('./css/dark-basic.css')}
basicModeButton.onclick = function () {swapStyleSheet('./css/basic.css')}
/* End Style Sheet Change Functionality */