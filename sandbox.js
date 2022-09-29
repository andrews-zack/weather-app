// let city = document.getElementById("city");
// let temp = document.getElementById("temp");
// let condition = document.getElementById("condition");
// let icon = document.getElementById("icon");
// let zipError = document.getElementById("zip-error");

function showError() {
    city.setAttribute("class", "d-none");
    temp.setAttribute("class", "d-none");
    condition.setAttribute("class", "d-none");
    icon.setAttribute("class", "d-none");
    zipError.classList.remove("d-none");
};

function init() {
    allElements();
    
};

// showError();

let main = document.getElementById("main");
// let div1 = document.createElement("div");
// div1.textContent = "Weather App";
// main.appendChild(div1);
// div1.classList.add("h1", "text-center");
// let div2 = document.createElement("div");
// let div3 = document.createElement("div");
// div2.classList.add("container")
// main.appendChild(div2);
// div2.appendChild(div3);
// div3.classList.add("input-group", "mb-3");
// let zipInput = document.createElement("input");
// div3.appendChild(zipInput);
// zipInput.classList.add("form-control");
// zipInput.setAttribute("type", "text");
// zipInput.setAttribute("placeholder", "Enter your ZIP code");
// let zipBtn = document.createElement("button");
// div3.appendChild(zipBtn);
// zipBtn.classList.add("btn", "btn-outline-dark");
// zipBtn.setAttribute("type", "button");
// zipBtn.textContent = "Search";

function generateElem(
    childVar,
    elem,
    Bclass,
    elemId,
    elemText,
    parentVar,
    ) {
        childVar = document.createElement(elem);
        childVar.className = Bclass;
        childVar.textContent = elemText;
        childVar.id = elemId;
        parentVar.appendChild(childVar);
        window[childVar] = document.getElementById(childVar);
};

// let headerDiv = document.getElementById("headerDiv");
// let inputCont = document.getElementById("inputCont");

function allElements() {
generateElem("headerDiv", "div", "h1 text-center", "headerDiv", "Weather App", main);
generateElem("inputCont", "div", null, "inputCont", null, main);
    generateElem("inputDiv", "div", "input-group mb-3 px-5 col-xs-2", "inputDiv", null, inputCont);
        generateElem("zipInput", "input", "form-control", "zipInput", null, inputDiv);
        generateElem("submitBtn", "button", "btn btn-outline-dark", "submitBtn", "Search", inputDiv);
generateElem("cityCont", "div", "container p-2", "cityCont", null, main);
    generateElem("cityCard", "div", "card text-center border-dark", "cityCard", null, cityCont);
        generateElem("cityHead", "h5", "card-header bg-info", "cityHead", "City", cityCard);
        generateElem("cityBody", "div", "card-body", "cityBody", "Placeholder", cityCard);
generateElem("tempCont", "div", "container p-2", "tempCont", null, main);
    generateElem("tempGroup", "div", "card-group text-center border-dark", "tempGroup", null, tempCont);
        generateElem("kelvCard", "div", "card col-12", "kelvCard", null, tempGroup);
            generateElem("kelvHead", "h5", "card-header bg-info text-info", "kelvHead", "hi", kelvCard);
            generateElem("kelvBody", "div", "card-body", "kelvBody", "Placeholder", kelvCard);
        generateElem("farCard", "div", "card col-12", "farCard", null, tempGroup);
            generateElem("farHead", "h5", "card-header bg-info", "farHead", "Temperature", farCard);
            generateElem("farBody", "div", "card-body", "farBody", "Placeholder", farCard);
        generateElem("celCard", "div", "card col-12", "celCard", null, tempGroup);
            generateElem("celHead", "h5", "card-header bg-info text-info", "celHead", "hi", celCard);
            generateElem("celBody", "div", "card-body", "celBody", "Placeholder", celCard);
generateElem("condCont", "div", "container p-2", "condCont", null, main);
    generateElem("condCard", "div", "card text-center border-dark", "condCard", null, condCont);
        generateElem("condHead", "h5", "card-header bg-info", "condHead", "Condition", condCard);
        generateElem("condBody", "div", "card-body", "condBody", "Placeholder", condCard);
generateElem("iconCont", "div", "container p-2", "iconCont", null, main);
    generateElem("iconCard", "div", "card text-center border-dark", "iconCard", null, iconCont);
        generateElem("iconHead", "h5", "card-header bg-info", "iconHead", "Icon", iconCard);
        generateElem("iconBody", "img", "card-image-bottom", "iconBody", "", iconCard);
generateElem("errorCont", "div", "container p-2 d-none", "errorCont", null, main);
    generateElem("errorCard", "div", "card text-center border-dark", "errorCard", null, errorCont);
        generateElem("errorHead", "h5", "card-header bg-warning", "errorHead", "ERROR", errorCard);
        generateElem("errorBody", "div", "card-body", "errorBody", "Please enter a valid ZIP", errorCard);
zipInput.setAttribute("type", "text");
zipInput.setAttribute("placeholder", "Enter your ZIP code");
}







// function setAttributes(element, attributes) {
//     Object.keys(attributes).forEach(attr => {
//         element.setAttribute(attr, attributes[attr]);
//     });
// }

// const attributes = {
//     type: "text",
//     placeholder: "Enter your ZIP code",
// }

// function generateElem(elem, className, ) {
// }