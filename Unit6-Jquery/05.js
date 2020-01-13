$(document).ready(function() {
    // Aeryn - Exercise 1

    $("<a href='#top'>back to top</a>").insertAfter("div.chapter p:gt(2)");

    // Aeryn - Exercise 2

    $(".chapter > a").click(function() {
        $(this).after($("<p>You were here<p/>"));
    });

    // Aeryn - Exercise 3

    $("#f-author").click(function() {
        $(this).wrapInner("<b></b>");
    });

});