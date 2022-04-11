// my useful variables
const output = document.querySelector("#display");
const formula = document.querySelector("#formula");

// why use eval when I can use evil
const evil = f => Function('"use strict";return (' + f + ')')();

// find my buttons
const buttons = document.querySelectorAll("input"); // oops am selecting the input[type=text] too

// add event listener for each button
buttons.forEach(button => {
    if(button.type === "button"){
        if(button.value === "DEL"){
            button.addEventListener("dblclick", () => {
                formula.innerHTML = "";
                output.value = "";
            });
        }
        button.addEventListener("click", (e) => {
            if(e.target.value !== "=" && e.target.value !== "DEL"){
                formula.innerHTML = "";
                output.value += e.target.value;
            } else if(e.target.value === "DEL"){
                formula.innerHTML = "";
                output.value = output.value.slice(0, -1);
            } else if(e.target.value === "="){
                formula.innerHTML = output.value;
                output.value = output.value !== "" ? evil(output.value) : "";
            };
        });
    };
});