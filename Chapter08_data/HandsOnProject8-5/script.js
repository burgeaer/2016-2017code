let list = [];

function generateList() {
    let listItems = document.getElementsByTagName("li");
    for (let i = listItems.length -1; i >= 0; i--) {
        document.getElementsByTagName("ol")[0].removeChild(listItems[i]);
    }
    for (let i = 0; i < list.length; i++){
        let newItem = "<span class='first'>first</span>" + "<span class='last'>last</span>" + list[i];
        let newListItem = document.createElement("li");
        newListItem .innerHTML = newItem;
        document.getElementsByTagName("ol")[0].appendChild(newListItem);
        let firstButtons = document.querySelectorAll(".first");
        let lastFirstButton = firstButtons[firstButtons.length - 1];
        let lastButtons = document.querySelectorAll(".last");
        let lastLastButtons = lastButtons[firstButtons.length - 1];
        if (lastFirstButton.addEventListener) {
            lastFirstButton.addEventListener("click", moveToTop, false);
            lastLastButtons.addEventListener("click", moveToBottom, false);
        }
        else if (lastFirstButton.attachEvent) {
            lastFirstButton.attachEvent("onclick", moveToTop);
            lastLastButtons.attachEvent("onclick", moveToBottom);
        }
    }
}
function addItem() {
    let newItem = document.getElementById("newItem");
    list.push(newItem.value);
    newItem.focus();
    newItem.value = "";
    generateList();
}
function moveToTop(evt) {
    if (evt === undefined) {
        evt = window.event;
    }
    let callerElement = evt.target || evt.srcElement;
    let listItems = document.getElementsByTagName("li");
    let parentItem = callerElement.parentNode;
    for (let i = 0; i < list.length; i++) {
        if (parentItem.innerHTML.search(list[i]) !== -1) {
            let itemToMove = list.splice(i, 1);
            list.unshift(itemToMove);
        }
    }
    generateList();
}
function createEventListener() {
    let addButton = document.getElementById("button");
    if(addButton.addEventListener){
        addButton.addEventListener("click", addItem, false);
    }
    else if(addButton.attachEvent) {
        addButton.attachEvent("onclick", addItem);
    }
}

if(window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}