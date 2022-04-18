// my useful variables
const output = document.querySelector("#display");
const formula = document.querySelector("#formula");

// why use eval when I can use evil
const evil = f => Function('"use strict";return (' + f + ')')();

// find my buttons
const buttons = document.querySelectorAll("input"); // oops am selecting the input[type=text] too

// total 
let total = "";

// add event listener for each button
buttons.forEach(button => {
    if(button.type === "button"){
        button.addEventListener("click", (e) => {
            if(e.target.value !== "=" && e.target.value !== "DEL" && e.target.value !== "C" && e.target.value !== "ON" && e.target.value !== "x^2"){
                
                formula.innerHTML = "";
                total += e.target.value;
                output.innerHTML = total;
            } else if(e.target.value === "DEL"){
                formula.innerHTML = "";
                total = total.slice(0, -1);
                output.innerHTML = total;
            } else if(e.target.value === "="){
                formula.innerHTML = total;
                output.innerHTML = evil(total);
            } else if(e.target.value === "x^2"){
                total += "**2";
                output.innerHTML = total;
            } else if(e.target.value === "C"){
                total = "";
                formula.innerHTML = "";
                output.innerHTML = "";
            }
        });
    };
});