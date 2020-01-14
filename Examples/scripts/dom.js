var message = [];
window.onload = init;

    function init() {

    for(var i = 0; i < 19; i++) {
        message[i] = "e" + (i+1);
    }
    for(var j = 0; j < message.length; j++) {
        console.log(message[j])
    }
}

function showSecretMessage() {
     var target = document.getElementById("secret-message");
     var secret = document.getElementById(message[6]).innerHTML;
        secret += " " + document.getElementById(message[7]).innerHTML;
        secret += " " + document.getElementById(message[15]).innerHTML;
        secret += " " + document.getElementById(message[8]).innerHTML;
        secret += " " + document.getElementById(message[17]).innerHTML;
        secret += " " + document.getElementById(message[12]).innerHTML;
        secret += " " + document.getElementById(message[11]).innerHTML;
        secret += " " + document.getElementById(message[1]).innerHTML;

        target.innerHTML = secret;

}