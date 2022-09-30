// Running init() on page load, grab the div in the html, set global variables
addEventListener("DOMContentLoaded", init);
let main = document.getElementById("main");
// let body = document.getElementById("body");
let submitBtn;
const apiKey = "c80b9e6179cc79a9985529685d466a22"

// Helper function to run when an invalid ZIP is input
function showError() {
    cityCont.classList.add("d-none");
    tempCont.classList.add("d-none");
    condCont.classList.add("d-none");
    iconCont.classList.add("d-none");
    errorCont.classList.remove("d-none");
};

// Axios function to get data and update values on the page. Makes containers visisble.
async function getWeather(url) {
    try {
    const response = await axios.get(url);
    // console.log(response);
    cityBody.textContent = response.data.name;
    kelvBody.textContent = Math.round(response.data.main.temp) + "K";
    farBody.textContent = Math.round(((response.data.main.temp) - 273.15) * (9/5) + 32) + "\u00B0" + "F";
    celBody.textContent = Math.round((response.data.main.temp) - 273.15) + "\u00B0" + "C";
    condBody.textContent = response.data.weather[0].description;
    iconBody.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
    cityCont.classList.remove("d-none");
    tempCont.classList.remove("d-none");
    condCont.classList.remove("d-none");
    iconCont.classList.remove("d-none");
    errorCont.classList.add("d-none");
    } catch(error) {
        if(error.response) {
            // console.log("You can't do that");
            showError();
        }
    }
}

// Running on page load, hides all elements except the title and search bar/button. Adds event listener to button
function init() {
    allElements();
    cityCont.classList.add("d-none");
    tempCont.classList.add("d-none");
    condCont.classList.add("d-none");
    iconCont.classList.add("d-none");
    errorCont.classList.add("d-none");
    submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", function() {
        let zip = zipInput.value;
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}`;
        getWeather(apiUrl);
    });
};

// With the given parameters, will create an html element and nest it in the correct spot
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

// 12th wonder of the world, The Great Wall of functions for all the html elements on the page
function allElements() {
    generateElem("headerDiv", "div", "h1 text-center", "headerDiv", "Weather App", main);
    generateElem("inputCont", "div", null, "inputCont", null, main);
        generateElem("inputDiv", "div", "input-group mb-3 px-5 col-xs-2", "inputDiv", null, inputCont);
            generateElem("zipInput", "input", "form-control", "zipInput", null, inputDiv);
            generateElem("submitBtn", "button", "btn btn-outline-dark", "submitBtn", "Search", inputDiv);
    generateElem("cityCont", "div", "container p-2", "cityCont", null, main);
        generateElem("cityCard", "div", "card text-center border-dark", "cityCard", null, cityCont);
            generateElem("cityHead", "h5", "card-header bg-info", "cityHead", "City", cityCard);
            generateElem("cityBody", "div", "card-body", "cityBody", null, cityCard);
    generateElem("tempCont", "div", "container p-2", "tempCont", null, main);
        generateElem("tempGroup", "div", "card-group text-center border-dark", "tempGroup", null, tempCont);
            generateElem("kelvCard", "div", "card", "kelvCard", null, tempGroup);
                generateElem("kelvHead", "h5", "card-header bg-info text-info", "kelvHead", "hi", kelvCard);
                generateElem("kelvBody", "div", "card-body", "kelvBody", null, kelvCard);
            generateElem("farCard", "div", "card", "farCard", null, tempGroup);
                generateElem("farHead", "h5", "card-header bg-info", "farHead", "Temperature", farCard);
                generateElem("farBody", "div", "card-body", "farBody", null, farCard);
            generateElem("celCard", "div", "card flex-shrink-1", "celCard", null, tempGroup);
                generateElem("celHead", "h5", "card-header bg-info text-info", "celHead", "hi", celCard);
                generateElem("celBody", "div", "card-body", "celBody", null, celCard);
    generateElem("condCont", "div", "container p-2", "condCont", null, main);
        generateElem("condCard", "div", "card text-center border-dark", "condCard", null, condCont);
            generateElem("condHead", "h5", "card-header bg-info", "condHead", "Condition", condCard);
            generateElem("condBody", "div", "card-body", "condBody", null, condCard);
    generateElem("iconCont", "div", "container p-2", "iconCont", null, main);
        generateElem("iconCard", "div", "card text-center border-dark", "iconCard", null, iconCont);
            generateElem("iconHead", "h5", "card-header bg-info", "iconHead", "Icon", iconCard);
            generateElem("iconBody", "img", "card-image-bottom", "iconBody", "", iconCard);
    generateElem("errorCont", "div", "container p-2", "errorCont", null, main);
        generateElem("errorCard", "div", "card text-center border-dark", "errorCard", null, errorCont);
            generateElem("errorHead", "h5", "card-header bg-warning", "errorHead", "ERROR", errorCard);
            generateElem("errorBody", "div", "card-body", "errorBody", "Please enter a valid ZIP", errorCard);
zipInput.setAttribute("type", "text");
zipInput.setAttribute("placeholder", "Enter your ZIP code");
}


// The start of creating a background for each weather type
// function funBackground() {
//     if
// }