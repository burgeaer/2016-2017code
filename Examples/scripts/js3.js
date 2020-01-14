
window.onload = function() {
    var button = document.getElementById("button");
    button.addEventListener("click", addToList, false);


}
function addToList() {
    var input = document.getElementById("input");
        //if(input.value) {

            var sticky = document.getElementById("sticky");
            var li = document.createElement("li");
            if(this.nodeName == "LI") {
                var text = document.createTextNode(this.innerHTML);
                this.remove();
            }
            else {
                var text = document.createTextNode(input.value);
            }

            li.appendChild(text);
            sticky.appendChild(li);

            input.value = "";

            rotateIt(li);

            li.addEventListener("mouseenter", hilight, false);
            li.addEventListener("mouseout", resetH, false);
            li.addEventListener("click", removeFromList1, false);

       // }
}
function rotateIt(li) {

    var rdm = Math.random()*360;

    li.style.transform = "rotate(" + rdm + "deg)";
}

function hilight() {
    this.style.border = "3px solid green";


}
function resetH() {
    this.style.border = "none";

}

function removeFromList1() {
    var unsticky = document.getElementById("unSticky");
    var data = this.innerText;
    var li = document.createElement("li");
    var text = document.createTextNode(data);

    li.appendChild(text);
    unsticky.append(li);

    rotateIt(li);

    li.addEventListener("click", addToList, false);
    this.remove();


}

