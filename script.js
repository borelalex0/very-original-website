function createElements(elementType, n/*number of elements*/) {
    let k = document.createElement(elementType);
    for (let i = 0; i < n; i++) {
        let k = document.createElement(elementType);
        k.textContent = `This is ${elementType} ${i+1}`;
        document.body.append(k);
    }
    return 0;
}

const delement = document.createElement("div");
const belement = document.querySelector("body");

const h2 = document.createElement("h2");
h2.textContent = "This content created by JavaScript";

delement.appendChild(h2);
document.body.appendChild(delement);