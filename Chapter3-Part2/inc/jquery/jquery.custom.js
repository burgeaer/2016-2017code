/*
 * project:		Graphics Programming with Dynamic Elements - Assignment 3
 * author:	Aeryn Burgess
 * date:
 */

$(document).ready(function(){
	/* click to animate the registration div */

	$('#registration a').click(function(event){
		event.preventDefault();
		if(false == $('#registration').hasClass('open')) {
			/* open the drawer and add the class */
			$('#registration').animate({
				'top': '0px'
			}, 500, function(){
				$('#registration').addClass('open');
			});
		} else {
			/* close the drawer and remove the class */
			$('#registration').animate({
				'top': '-40px' 
			}, 500, function(){
				$('#registration').removeClass('open');
			});
		}
	});
	
	/* hover to animate the navigation div */
	$('#navigation').hover(function(){
		/* mouseover opens the drawer */
		$(this).stop().animate({
			'top': '0px'
		});
	},function(){
		/* mouseout closes the drawer*/
		$(this).stop().animate({
			'top': '-40px'
		});
	});
	
	/* count the characters */
	$('textarea[name="contactComments"]').keyup(function(){
		/* get current number of characters */
		var numCharacters = $(this).val().length;
		// update characters
		$('.textInfo span').html(numCharacters);
	});
	
	/* is the name field left blank? */
	$('input[name="contactName"]').focusout(function(){
		/* find the length of the value of the input box */
		if(0 == $(this).val().length) {
			/* change the span to have the error message, make it red! */
			$(this).next('span').html('&nbsp;please do not leave name blank').css({
				'color': '#FF0000'
			});
		} else {
			/* this takes care of resetting the message when the user corrects the error */
			$(this).next('span').html('');
		}
	});
	
	/* is the email address a valid one? */
	$('input[name="contactEMail"]').blur(function() {
	   	/* set up some regex to test against */
	   	var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	   	var inputEmail = $(this).val();
	   	/* perform the test */
	   	var resultEmail = regexEmail.test(inputEmail);
	   	/* use the result to determine if the error message will be shown */
	   	if(!resultEmail){
	   		$(this).next('span').html('&nbsp;please enter a valid e-mail address').css({
				'color': '#FF0000'
			});
	   	} else {
	   		$(this).next('span').html('');
	   	}    	
	});
	
	/* did the drop down change? */
	$('select[name="subscriberStatus"]').change(function(){
		$(this).next('span').html('&nbsp;your subscriber status has changed');
	});
	
	/* show/hide password */
	$('#showPassword').click(function(e) {
		e.preventDefault();
		var propertyType = $('input[name="contactPassword"]').prop('type');
		if('text' == propertyType) {
			$('input[name="contactPassword"]').prop('type', 'password');
			$(this).html('Show Password');
		} else {
			$('input[name="contactPassword"]').prop('type', 'text');
			$(this).html('Hide Password');
		}
	});
	
	/* TO-DO HERE */

	/* Change subscriber status */

    $('select[name="subscriberStatus"]')
        .change(function() {
            var selectValue = $(this).val();
            if('subscriber' == selectValue) {
                $('input[name="contactPassword"]')
                    .prop('disabled', false);
                $('input[name="contactPassword"]')
                    .attr('placeholder', 'password required');
            } else {
                $('input[name="contactPassword"]')
                    .prop('disabled', true);
                $('input[name="contactPassword"]')
                    .attr('placeholder', 'password not required');
            }
        });

    /*Removing prop*/
    $('input[name="contactPassword"]')
        .prop('defaultStatus', 'non-subscriber');
	$('select[name="subscriberStatus"]').change(function() {
        var statusValue = $(this).val();
        if('subscriber' == statusValue) {
            $('input [name="contactPassword"]')
                .removeProp('defaultStatus');
        }
    });
	/*Using Val*/

$('select[name="subscriberStatus"]')
    .val('non-subscriber');

$('input[name="contactPassword"]').blur(function() {
        var regexPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[AZ])(?=.*[a-z]).*$/;
        var thisPassword = $(this).val();
        var resultPassword = regexPassword.test(thisPassword);
        if(!resultPassword){
            $(this).next('span').html('&nbsp;the password must contain at least 1 upper case character, 1 lower case character, 1 number and 1 special character and must be at least 8 characters long').css({'color': '#FF0000'});
        } else {
            $(this).next('span').html('');
        }
    });
});