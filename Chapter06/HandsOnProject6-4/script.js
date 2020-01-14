"use strict";
function removeSelectDefault() {
    let selectBox = document.getElementById("size");
    selectBox.selectedIndex = -1;
    selectBox.style.boxShadow = "none";
}
function setUpPage() {
    removeSelectDefault();
    generatePlaceHolder();
}

function zeroPlaceHolder() {
    let instrBox = document.getElementById("instructions");
    instrBox.style.color = "black";
    if (instrBox.value === instrBox.placeholder) {
        instrBox.value = "";
    }

}
function checkPlaceHolder() {
    let instrBox = document.getElementById("instructions");
    if (instrBox.value === "") {
        instrBox.value = instrBox.placeholder;
        instrBox.style.color = "rgb(178,184,183)";
    }
}
function generatePlaceHolder() {
    if(!Modernizr.input.placeholder) {
        let instrBox = document.getElementById("instructions");
        instrBox.value = instrBox.placeholder
        instrBox.style.color = "rgb(178,184,183)";
        if (instrBox.addEventListener) {
            instrBox.addEventListener("focus", zeroPlaceholder, false);
            instrBox.addEventListener("blur", checkPlaceHolder, false);
        }
        else if (instrBox.attachEvent){
            instrBox.attachEvent("onfocus", zeroPlaceholder);
            instrBox.attachEvent("onblur", checkPlaceHolder);
        }
    }
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
