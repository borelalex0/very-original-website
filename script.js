const delement = document.createElement("div");
const belement = document.querySelector("body");

const h2 = document.createElement("h2");
h2.textContent = "This content created by JavaScript";

delement.appendChild(h2);
belement.appendChild(delement);