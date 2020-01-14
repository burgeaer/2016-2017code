$(document).ready(function() {

    /* Images */
    if (true === $('ul').hasClass('imageGallery')) {
        console.log('ul has the imageGallery class');
    } else {
        console.log('ul does not have the imageGallery class');
    }
    $('.imageGallery li img').each(function () {
        var thisAltTag = $(this).attr('alt');
        $(this).parent().append('<br /><span class="imageTitle">' + thisAltTag + '</span>');
    });
    $('.imageGallery li img').each(function () {
        var thisAltTag = $(this).attr('alt');
        $(this).attr({
            'alt': thisAltTag + '<br />by **Your Name** ', 'data-camera': 'Canon 7D'
        });
        var newAltTag = $(this).attr('alt');
        var cameraTag = $(this).attr('data-camera');
        $(this).parent().append('<br /><span class="imageTitle">' + newAltTag + '</span>');
        $(this).parent().append('<br /><span class="imageCamera">' + cameraTag + '</span>');
    });
    $('.imageGallery li img').addClass('imageBoxShadow');
    $('.imageCamera').addClass('blueBoxShadow small_text');
    $('.imageCamera').hover(function () {
            $(this).removeClass('small_text');
        },
        function () {
            $(this).addClass('small_text');
        });


    $('.imageGallery li img').click(function () {
        $(this).parent().find('.imageTitle').toggleClass('textHighlight');
    });
});