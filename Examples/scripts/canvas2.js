

window.onload = function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var input = document.getElementById("inputText");
    var fontType = document.getElementById("font-type");
    var fontSize = document.getElementById("font-size");
    var size = document.getElementById("size-text");
    var button = document.getElementById("btn");

    size.innerHTML = fontSize.value;
    var inputText, fontTypeValue, fontSizeValue;
    var obj = {};


    fontSize.addEventListener("mousemove", updateView, false);

    button.addEventListener("click", function () {
        updateView();
        drawPattern(obj);
    },false);


    function updateView() {
        size.innerHTML = fontSize.value;
        obj = {
            canvas: canvas,
            ctx: ctx,
            inputText: input.value,
            fontTypeValue: fontType.value,
            fontSizeValue: fontSize.value
        }
    }

}


function drawPattern(obj) {
    var ctx = obj.ctx;
    var canvas = obj.canvas;
    var inputText = obj.inputText;
    var font = obj.fontTypeValue;
    var size = obj.fontSizeValue;

    drawImage();
    drawText();
    drawRect();
    drawCircle();

    function drawImage() {
        var src = "https://mdn.mozillademos.org/files/5397/rhino.jpg";
        var image = new Image(300, 300);
        image.src = src;

        var x = canvas.width / 2 - 150;
        var y = canvas.height / 2 - 150;
        ctx.drawImage(image,x, y);
    }
    function drawCircle() {
        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.arc(200, 200, 30, 0, Math.PI * 2, false);
        ctx.stroke();
    }
    function drawRect() {
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.fillRect(20, 20, 50, 50);
    }
    function drawText() {
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.font = size + "px " + font;
        ctx.fillText(inputText, Math.random() * 500, Math.random() * 500);
        ctx.strokeText(font, Math.random() * 300, Math.random() * 300);
    }
}
