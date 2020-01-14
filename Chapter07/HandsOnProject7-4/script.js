// Created by Aeryn Burgess

"use strict";


let delivInfo = {};
let delivSummary = document.getElementById('deliverTo');


function processDeliveryInfo() {
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;
    for(let prop in delivInfo) {
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
    }
}

function previewOrder() {
    processDeliveryInfo();
    document.getElementById("section")[0].style.display = "block";
}


function createEventListener() {
    let previewButton = document.getElementById("previewBtn");
    if (previewButton.addEventListener) {
        previewButton.addEventListener("click", previewOrder, false);
    } else if (previewButton.attachEvent) {
        previewButton.attachEvent("onclick", previewOrder);
    }
}


if(window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}