/*  JavaScript 6th Edition
    Chapter 11
    Hands-on Project 11-1

    Author: Aeryn Burgess
    Date:  4/11/18 

    Filename: script.js
*/

"use strict";
var httpRequest = false;
function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    }
    catch (requestError) {
        return false;
    }
    return httpRequest;
}

function getResults(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    var entry = document.getElementsByTagName("input")[0].value;
    if (!httpRequest) {
        httpRequest = getRequestObject();
    }
    httpRequest.abort();
    httpRequest.open("get", "search.php?q=" + entry, true);
    httpRequest.send();
    httpRequest.onreadystatechange = displaySuggestions;
}

function displaySuggestions() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        var searchResults = JSON.parse(httpRequest.responseText);

        //German weather site
        var baseURL = "https://www.meteoblue.com/de/wetter/vorhersage/woche/";

        var items = searchResults.results;
        var articleEl = document.getElementsByTagName("article")[0];
        for (var i = 0; i < items.length; i++) {
            var newDiv = document.createElement("div");
            var head = document.createDocumentFragment();
            var newP1 = document.createElement("p");
            var newP2 = document.createElement("p");
            var newP3 = document.createElement("p");
            var newA = document.createElement("a");
            head.appendChild(newP1);
            newA.innerHTML = items[i].name;  //city name
            newA.setAttribute("href", baseURL + items[i].url);  //Url
            newP1.appendChild(newA);
            newP1.className = "head";
            newP2.innerHTML = items[i].url;  //the url text
            newP2.className = "url";
            newP3.innerHTML = items[i].country; //Country name
            newDiv.appendChild(head);
            newDiv.appendChild(newP2);
            newDiv.appendChild(newP3);
            articleEl.appendChild(newDiv);
        }
    }
}


var form = document.getElementsByTagName("form")[0];
if (form.addEventListener) {
    form.addEventListener("submit", getResults, false);
} else if (form.attachEvent) {
    form.attachEvent("onsubmit", getResults);
}
