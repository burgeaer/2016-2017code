/** Created by Aeryn 1/29/2018 **/

window.onload = init;

function init() {
    var h1 = document.getElementById("page-title");
    var p = document.getElementById("message");

    var data = ["JavaScript Arrays", "JS Arrays are the worst thing ever!"];

    h1.innerHTML = data[0];
    p.innerHTML = data[1];

    h1.style.color = "blue";
    h1.style.fontFamily = "Arial";
    h1.style.fontSize = "48px";

    p.style.color = "red";
    p.style.fontFamily = "Calibri";
    p.style.fontSize = "24px";

    //generateList();

}

function generateList() {
    var ul = document.getElementById("list");
    var data =  new Array("Sports", "Programming", "Sleeping", "Vacation");
    var li = "";
    for(var i = 0; i < data.length; i++) {
        li+= "<li>" + data[i] + "</li>";
    }

    ul.innerHTML = li;

    ul.style.color = "green";
    ul.style.fontFamily = "Arial";
    ul.style.fontSize = "22px";
    ul.style.listStyleType= "square";

    //var btnR = document.getElementById("btn-R");
    //btnR.style.visibility = "visible";
    //var btnS = document.getElementById("btn-S");
   // btnS.style.visibility = "hidden";

    var buttons = document.getElementsByClassName("btn");
    buttons[0].style.visibility = "hidden";
    buttons[1].style.visibility = "visible";

}

function removeList() {
    var ul = document.getElementById("list");

    ul.innerHTML = "";

    //var btnR = document.getElementById("btn-R");
   // btnR.style.visibility = "hidden";
   // var btnS = document.getElementById("btn-S");
   // btnS.style.visibility = "visible";

    var buttons = document.getElementsByClassName("btn");
    buttons[0].style.visibility = "visible";
    buttons[1].style.visibility = "hidden";
}

