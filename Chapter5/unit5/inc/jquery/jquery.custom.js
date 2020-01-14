/*
 * name: 		jquery.custom.js
 * project:		Unit 5 Assignment
 * author:		Aeryn Burgess
 *
 */

$(document).ready(function() {

    //=============================================================
    //                Code For Part 1 
    //=============================================================


    /* click to animate the registration div */
    $('#registration a').click(function (event) {
        event.preventDefault();
        if (false == $('#registration').hasClass('open')) {
            /* open the drawer and add the class */
            $('#registration').animate({
                'top': '0px'
            }, 500, function () {
                $('#registration').addClass('open');
            });
        } else {
            /* close the drawer and remove the class */
            $('#registration').animate({
                'top': '-40px'
            }, 500, function () {
                $('#registration').removeClass('open');
            });
        }
    });

    /* hover to animate the navigation div */
    $('#navigation').hover(function () {
        /* mouseover opens the drawer */
        $(this).stop().animate({
            'top': '0px'
        });
    }, function () {
        /* mouseout closes the drawer*/
        $(this).stop().animate({
            'top': '-40px'
        });
    });

    /* count the characters */
    $('textarea[name="contactComments"]').keyup(function () {
        /* get current number of characters */
        var numCharacters = $(this).val().length;
        // update characters
        $('.textInfo span').html(numCharacters);
    });


    /*Aeryn - This block of code identify's if the name the user enters is blank lines 57-69*/
    $('input[name="contactName"]').focusout(function () {

        if (0 == $(this).val().length) {

            $(this).next('span').html('&nbsp;please do not leave name blank').css({
                'color': '#FF0000'
            });
        } else {

            $(this).next('span').html('');
        }
    });

    /* is the email address a valid one? */
    $('input[name="contactEMail"]').blur(function () {
        /* set up some regex to test against */
        var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var inputEmail = $(this).val();
        /* perform the test */
        var resultEmail = regexEmail.test(inputEmail);
        /* use the result to determine if the error message will be shown */
        if (!resultEmail) {
            $(this).next('span').html('&nbsp;please enter a valid e-mail address').css({
                'color': '#FF0000'
            });
        } else {
            $(this).next('span').html('');
        }
    });

    /* did the drop down change? */
    $('select[name="subscriberStatus"]').change(function () {
        $(this).next('span').html('&nbsp;your subscriber status has changed');
    });

    /* show/hide password */
    $('#showPassword').click(function (e) {
        e.preventDefault();
        var propertyType = $('input[name="contactPassword"]').prop('type');
        if ('text' == propertyType) {
            $('input[name="contactPassword"]').prop('type', 'password');
            $(this).html('Show Password');
        } else {
            $('input[name="contactPassword"]').prop('type', 'text');
            $(this).html('Hide Password');
        }
    });

    /* enable/disable passwod field */
    $('select[name="subscriberStatus"]').change(function () {
        var selectValue = $(this).val();
        if ('subscriber' == selectValue) {
            $('input[name="contactPassword"]').prop('disabled', false);
            $('input[name="contactPassword"]').attr('placeholder', 'password required');
        } else {
            $('input[name="contactPassword"]').prop('disabled', true);
            $('input[name="contactPassword"]').attr('placeholder', 'password not required');
        }
    });

    /* add/remove a custom property */
    $('input[name="contactPassword"]').prop('defaultStatus', 'non-subscriber');
    $('select[name="subscriberStatus"]').change(function () {
        var statusValue = $(this).val();
        if ('subscriber' == statusValue) {
            $('input[name="contactPassword"]').removeProp('defaultStatus');
        }
    });

    /* set the default select value */
    $('select[name="subscriberStatus"]').val('non-subscriber');

    /*
     * check the password to make sure it has
     * upper & lower characters
     * numbers
     * a special character
     * is at least 8 characters long
     */
    $('input[name="contactPassword"]').blur(function () {
        /* the regex */
        var regexPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        /* get the value of the password */
        var thisPassword = $(this).val();
        /* perform the test */
        var resultPassword = regexPassword.test(thisPassword);
        if (!resultPassword) {
            $(this).next('span').html('&nbsp;the password must contain at least 1 upper case character, 1 lower case character, 1 number and 1 special character and must be at least 8 characters long').css({
                'color': '#FF0000'
            });
        } else {
            $(this).next('span').html('');
        }
    });

    /* get alt tags and display them as image titles */
    $('.imageGallery li img').each(function () {
        var thisAltTag = $(this).attr('alt');
        $(this).attr({
            'alt': thisAltTag + '<br />by Jay Blanchard ',
            'data-camera': 'Canon 7D'
        });
        var newAltTag = $(this).attr('alt');
        var cameraTag = $(this).attr('data-camera');
        $(this).parent().append('<br /><div class="imageTitle">' + newAltTag + '</div>');
        $(this).parent().append('<br /><div class="imageCamera">' + cameraTag + '</div>');
    });

    /* add some class to the image captions */
    $('.imageGallery li img').addClass('imageBoxShadow');
    $('.imageCamera').addClass('blueBoxShadow small_text');

    /* remove a class - really trumped up example */
    $('.imageCamera').hover(function () {
        $(this).removeClass('small_text');
    }, function () {
        $(this).addClass('small_text');
    });

    /* does the list have the imageGallery class? yet another trumped up example :-)*/
    if (true == $('ul').hasClass('imageGallery')) {
        console.log('ul has the imageGallery class');
    } else {
        console.log('ul does not have the imageGallery class');
    }


    /* Aeryn - Highlighting the image title is from lines 187-190*/
    /* highlight the title text */
    $('.imageGallery li img').click(function () {
        $(this).parent().find('.imageTitle').toggleClass('textHighlight');
    });


    /*
      * IMAGE LOADER
      * this little jewel loads all of the images in the preload
      * array into the DOM. This allows the lightbox to measure and place each
      * image properly and quickly when called.
      */
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function () {
            $('<img />').attr('src', this).appendTo('body').css('display', 'none');
        });
    }

    preload([
        'images/lv01.jpg',
        'images/lv02.jpg',
        'images/lv03.jpg',
        'images/lv04.jpg',
        'images/lv05.jpg',
        'images/lv06.jpg'
    ]);

    /* Aeryn- from lines 212-216 this block of code is being used to access the image and image information*/
    $('.imageGallery li img').click(function () {
        $('body').append('<div class="shade"></div>');
        $('.shade').css('opacity', 0.7).fadeIn();

        var imgSRC = $(this).attr('data-photo');
        /* create an image tag */
        var imgTAG = '<img src="' + imgSRC + '" />';
        /* append the modal (there is CSS associated with it) give it the current image */
        $('body').append('<div class="photoModal"></div>');
        $('.photoModal').html(imgTAG);
        /* fade the modal in and set up it's text component */
        $('.photoModal')
            .fadeIn('slow')
            .append('<div><a href="#" class="closePhoto">Close X</a></div>');
        /* get the window height */
        var windowHeight = $(window).height();
        /* set the size of the photo and its text */
        $('.photoModal img').css('height', (windowHeight - 200));
        /* measure the height and width of the modal along with border */
        var modalTopMargin = ($('.photoModal').height() + 20) / 2;
        var modalLeftMargin = ($('.photoModal').width() + 20) / 2;
        /* use that height and width to center the photo modal */
        $('.photoModal').css({
            'margin-top': -modalTopMargin,
            'margin-left': -modalLeftMargin
        });
    });


    /* reset/close/eliminate the photo modal */
    $('body').on('click', '.closePhoto', function (e) {
        e.preventDefault();
        $('.photoModal, .shade').fadeOut(function () {
            $(this).remove();
        });
    });

    /* article mover */
    $('.mover').click(function (e) {
        e.preventDefault();
        $('#content div:first').before($(this).parent('div'));
        //$(this).parent('div').insertBefore($('#content div:first'));
    });

    /* menu mover */
    if ($('.sidebar').offset()) {
        var sidebarOffset = $('.sidebar').offset();
        var paddingTop = 10;
        $(window).scroll(function () {
            if ($(window).scrollTop() > sidebarOffset.top) {
                $('.sidebar').stop().animate({
                    marginTop: $(window).scrollTop() - sidebarOffset.top + paddingTop
                });
            } else {
                $('.sidebar').stop().animate({
                    marginTop: $(window).scrollTop()
                });
            }
        });
    }

    /* add ingredients */
    $('a[href="newIngredient"]').click(function (e) {
        /*$('#ingredients').on('click', 'a[href="newIngredient"]', function(e){*/
        e.preventDefault();
        var clonedInput = $('.inputSpan').filter(':last').clone(true, true);
        var lastInputData = $('input[name="recipeIngredient[]"]').filter(':last').val();
        $('.inputSpan').filter(':last').html('<span class="inputSpan"><input name="recipeIngredient[]" placeholder="Ingredient" value="' + lastInputData + '" />&nbsp;<a href="makeSpice" class="ingredientType">change to spice</a><br /></span>');
        $('#ingredients').append(clonedInput);
        $('input[name="recipeIngredient[]"]').filter(':last').val('');
        $('input[name="recipeIngredient[]"]').filter(':last').focus();
    });

    /* change from ingredient to spice */
    $('#ingredients').on('click', '.ingredientType', function (e) {
        e.preventDefault();
        var ingredientType = $(this).attr('href');
        /* what change are we making? */
        if ('makeSpice' == ingredientType) {
            var oldElement = $(this).closest('span');
            var oldElementValue = $(this).closest('span').find('input').val();
            var newElement = '<span class="inputSpan"><input name="recipeSpice[]" placeholder="Spice" value="' + oldElementValue + '" />&nbsp;<a href="makeIngredient" class="ingredientType">change to ingredient</a><br /></span>';
            $(oldElement).replaceWith(newElement);
            $(newElement).find('input').val(oldElementValue);
        } else {
            var oldElement = $(this).closest('span');
            var oldElementValue = $(this).closest('span').find('input').val();
            var newElement = '<span class="inputSpan"><input name="recipeIngredient[]" placeholder="Ingredient" value="' + oldElementValue + '" />&nbsp;<a href="makeSpice" class="ingredientType">change to spice</a><br /></span>';
            $(oldElement).replaceWith(newElement);
            $(newElement).find('input').val(oldElementValue);
        }
    });

    /* highlight author's articles */
    $('.author').hover(function () {
        var thisAuthor = $(this).attr('data-author');
        var authorNameArray = thisAuthor.split(',');
        var authorLastName = authorNameArray[0];
        $('.author[data-author*="' + authorLastName + '"]').addClass('textHighlight');
    }, function () {
        $('.author').removeClass('textHighlight');
    });

    /* highlight title with selected tags */
    $('.articleTags span').hover(function () {
        var thisTag = $(this).html();
        var tagArray = thisTag.split(' ');
        if (2 == tagArray.length) {
            $('[data-tags~="' + tagArray[0] + '"],[data-tags~="' + tagArray[1] + '"]').parent('.article').find('h3').addClass('textHighlight');
        } else {
            //$('[data-tags~="' + thisTag + '"]').parent('.article').find('h3').addClass('textHighlight');
            $('[data-tags~="' + tagArray[0] + '"]').parent('.article').find('h3').addClass('textHighlight');
        }
    }, function () {
        $('.article h3').removeClass('textHighlight');
    });

    /* fade out all of the other articles to highlight the current one */
    $('.article h3').hover(function () {
        var thisTitle = $(this).html();
        $('h3[data-title!="' + thisTitle + '"]').parent('.article').fadeTo(350, 0.4);
    }, function () {
        $('.article').fadeTo(250, 1.0);
    });

    //=============================================================
    //                TO DO -- Your Code For Part 2 
    //=============================================================

    /*$('#product_table th').not(':first-child, :last-child').hover(function(){
        var thisIndex = $(this).index();
    $('tr').eq(6).find('td').eq(thisIndex).addClass('textHighlight');
    },function(){$('td').removeClass('textHighlight');})*/

    $('#product_table tr').slice(1, 6).find('td:first-child').hover(function () {
        $(this).parent().find('td').eq(5).addClass('textHighlight');
    }, function () {
        $('td').removeClass('textHighlight');
    });


});


