
var context;

window.onload = function () {
    var canvas = document.getElementById("test");
     context = canvas.getContext("2d");

    drawPattern();

}
    function drawPattern() {
        context.beginPath();
        context.fillStyle = "pink";
        context.fillRect(0, 0, 50, 120);
        context.fillStyle = "blue";
        context.fillRect(0, 0, 50, 80);
        context.fillStyle = "red";
        context.fillRect(0, 0, 50, 40);


        context.arc(400, 100, 100, Math.PI * -.25, Math.PI * .25, true);
        context.stroke();

        context.moveTo(400, 120);
        context.lineTo(480, 50);
        context.stroke();


        context.moveTo(400, 120);
        context.lineTo(480, 190);
        context.stroke();

        context.moveTo(420, 50);
        context.arc(400, 50, 20, 0 , Math.PI * 2, true);
        context.stroke();
    }

