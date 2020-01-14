"use strict";
let formValidity = true;
function validateNumbers() {
    let numberInputs = document.querySelectorAll("#contactinfo input[type=number");
    let numErrorDiv = document.getElementById("numErrorText");
    let elementCount = numberInputs.length;
    let numbersValidity = true;
    let currentElement;
    try {
        for(let i = 0; i < elementCount; i++) {
            currentElement = numberInputs[i];
            if (isNaN(currentElement.value) || currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                numbersValidity = false;

            }
            else {
                currentElement.style.background = "white";
            }
        }
        if (numbersValidity === false) {
            throw "Zip and Social Security values must be numbers.";
        }
        numErrorDiv.style.display = "none";
        numErrorDiv.innerHTML = "";

    }
    catch(msg) {
        numErrorDiv.style.display = "block";
        numErrorDiv.innerHTML = msg;
        formValidity = false;
    }
}
function validateRequired() {
    let inputElements = document.querySelectorAll("#contactinfo input");
    let errorDiv = document.getElementById("errorText");
    let elementCount = inputElements.length;
    let requiredValidity = true;
    let currentElement;
    try {
        for(let i = 0; i < elementCount; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                requiredValidity = false;

            }
            else {
                currentElement.style.background = "white";
            }
        }
        if (requiredValidity === false) {
            throw "Please Complete All Fields.";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";

    }
    catch(msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}
function advanceSsn() {
    let ssnFields = document.getElementsByClassName("ssn");
    let currentField = document.activeElement;
    if (currentField.value.length === currentField.maxLength) {
        if (currentField === ssnFields[0]) {
            ssnFields[1].focus();
        }
        if (currentField === ssnFields[1]) {
            ssnFields[2].focus();
        }
        if (currentField === ssnFields[2]) {
            document.getElementById("submitBtn").focus();
        }
    }
}
function createEventListeners() {
    let form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    }
    else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
    let ssnFields = document.getElementsByClassName("ssn");
    for (let i = 0; i < ssnFields.length; i++) {
        if (ssnFields[i].addEventListener) {
            ssnFields[i].addEventListener("input", advanceSsn, false);
        }
        else if (ssnFields[i].attachEvent) {
            ssnFields[i].addEventListener("oninput", advanceSsn);
        }

    }

}
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
    formValidity = true;
    validateRequired();
    validateNumbers();
    if(formValidity === true) {
        document.getElementsByTagName("form")[0].submit();
    }

}

function zeroPlaceholder() {
    let addressBox = document.getElementById("addrinput");
    addressBox.style.color = "black";
    if (addressBox.value === addressBox.placeholder) {
        addressBox = "";
    }
}
function checkPlaceHolder() {
    let addressBox = document.getElementById("addrinput");
    if (addressBox.value === "") {
        addressBox.style.color = "rgb(178,184,183)";
        addressBox.value = addressBox.placeholder;
    }
}
function generatePlaceHolder() {
    let addressBox = document.getElementById("addrinput");
    addressBox.value = addressBox.placeholder;
    addressBox.style.color = "rgb(178,184,183)";
    if (addressBox.addEventListener) {
        addressBox.addEventListener("focus", zeroPlaceholder, false);
    }
    else if (addressBox.attachEvent){
        addressBox.attachEvent("onfocus", zeroPlaceholder);
        addressBox.attachEvent("onblur", checkPlaceHolder);
    }
}
function setUpPage() {
    createEventListeners();
    generatePlaceHolder();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
