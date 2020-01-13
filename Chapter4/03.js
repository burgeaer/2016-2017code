// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

// Exercise 1-5  Pgs 82-83, Aeryn Burgess

$(document).ready(function () {


//#1. When Charles Dickens is clicked, apply the selected style to it

$('author').on('click', function () {
   $(this).toggleClass('selected');
})

//#2. When a chapter title is double clicked toggle the visiblity

$('chapter-title').on('dblclick', function () {
    $('#chapter-1 > p').toggleClass("hidden");
    
});

// #3. When the user presses the right right arrow key, cycle to the next body class. The key code for the right arrow key is 39.
var style = ["default", "narrow", "large"],
    i = 1;
$(document).on("keyup", function () {
    if(event.keyCode == 39) {
        setBodyClass(style[i]);
        i = i + 1;
        if (i > 2) {
            i = 0;
        }
    }
});

// #4. Challenge 1

$('p').on("mousemove", function (event) {
    console.log(event.pageX, event.pageY);
})

// #5. Challenge 2

$(document).mousedown(function () {
    y_down = event.pageY;
    console.log(y_down);
})
.mouseup(function() {
    y_up = event.pageY;
    console.log(y_up);

    if (y_up < y_down) {
        $('p').addClass("hidden");
    }
    else {
        $('p').removeClass("hidden");
    }
});

})