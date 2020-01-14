// Created by Aeryn Burgess

"use strict";

let delivInfo = {};
let delivSummary = document.getElementById("deliverTo");
let foodInfo  = {};
let foodSummary = document.getElementById("order");

function processDeliveryInfo() {
    let prop;
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;

    for (prop in delivInfo) {
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
        document.getElementById("deliverTo").style.display = 'block';
    }

}
function processFood() {
    let prop;
    let crustOpt = document.getElementsByName("crust");
    let toppings = 0;
    let toppingBoxes = document.getElementsByName("toppings");
    let instr = document.getElementById("instructions");

    if (crustOpt[0].checked) {
        foodInfo.crust = crustOpt[0].value;
    }
    else  {
        foodInfo.crust = crustOpt[1].value;
    }
    foodInfo.size =document.getElementById("size").value;
    for (let i =0; i < toppingBoxes.length; i++) {
        if (toppingBoxes[i].checked) {
            toppings ++;
            foodInfo["topping" + toppings] = toppingBoxes[i].value;
        }
    }
    if (!instr.value === ""){
        foodInfo.instructions = instr.value;
    }
    foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
    foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
    foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + " </p>";
    foodSummary.innerHTML += "<ul>";
    for (let i = 1; i < 6; i++) {
        if (foodInfo["topping"+ i]) {
            foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
        }
    }
    foodSummary.innerHTML += "</ul>";
    foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
    document.getElementById("order").style.display = "block";
}
function previewOrder() {
    processDeliveryInfo();
    processFood();
    document.getElementsByTagName("section")[0].style.display = 'block';
}

function createEventListeners() {
    let previewButton = document.getElementById("previewBtn");
    if (previewButton.addEventListener) {
        previewButton.addEventListener("click", previewOrder, false);
    }
    else if (previewButton.attachEvent) {
        previewButton.attachEvent("onclick", previewOrder);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}


