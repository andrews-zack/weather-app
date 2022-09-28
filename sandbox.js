// let city = document.getElementById("city");
// let temp = document.getElementById("temp");
// let condition = document.getElementById("condition");
// let icon = document.getElementById("icon");
// let zipError = document.getElementById("zip-error");

// function showError() {
//     city.setAttribute("class", "d-none");
//     temp.setAttribute("class", "d-none");
//     condition.setAttribute("class", "d-none");
//     icon.setAttribute("class", "d-none");
//     zipError.classList.remove("d-none");
// };

// showError();

let main = document.getElementById("main");
let div1 = document.createElement("div");
div1.textContent = "Weather App";
main.appendChild(div1);
div1.classList.add("h1", "text-center");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
div2.classList.add("container")
main.appendChild(div2);

// function generateElem(elem, className, ) {
// }