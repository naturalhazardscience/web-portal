(function ($) {
    "use strict";
    $('.scroll-top-btn').on('click', function() {
        $('body,html').animate({
            scrollTop: 0
        })
    });

    /**
     * ----------------------------------------------
     * Nav Scroll active section class call
     * ----------------------------------------------
     */
    windowScroll();

    /**
    * ----------------------------------------------
    * Get started form validation
    * ----------------------------------------------
    */
   validateGetStartedForm()

    /**
    * ----------------------------------------------
    * Contact form validation
    * ----------------------------------------------
    */
    validateContactForm()

    /**
    * ----------------------------------------------
    * Content loaded call
    * ----------------------------------------------
    */
   contentLoaded()
  
})(jQuery);


/**
 * ----------------------------------------------
 * Nav Scroll active section class 
 * ----------------------------------------------
 */
function windowScroll() {
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos >= 20) {
            $(".header").addClass("fixed-nav");
            $(".header .navbar-brand img").attr("src", "assets/images/logo-blue.png");
        } else {
            $(".header").removeClass("fixed-nav");
            $(".header .navbar-brand img").attr("src", "assets/images/logo.png");
        }
        if(scrollPos > ($(document).height() / 2)){
            $('.scroll-top-btn').fadeIn(2000);
        }
        else{
            $('.scroll-top-btn').fadeOut(1000); 
        }
    })
}

/**
* ----------------------------------------------
* Hide preloader
* ----------------------------------------------
*/
function hidePreLoader(){
    $(".preloader").fadeOut(500);
}


/**
* ----------------------------------------------
* Validate get started form data
* ----------------------------------------------
*/
function validateContactForm() {
    if($('#contact-form').length) {
        $('#contact-form').validate({
            focusInvalid: false,
            rules: {
                'validation-firstname': {
                    required: true,
                },
                'validation-lastname': {
                    required: true,
                },
                'validation-email': {
                    required: true,
                    email: true
                },
                'validation-phone': {
                    required: true,
                },
                'validation-message': {
                    required: true,
                },
                'validation-required': {
                    required: true
                }
            },

            // Errors
            //

            errorPlacement: function errorPlacement(error, element) {
                var $parent = $(element).parents('.form-group');

                // Do not duplicate errors
                if ($parent.find('.jquery-validation-error').length) { return; }

                $parent.append(
                    error.addClass('jquery-validation-error small form-text invalid-feedback')
                );
            },
            highlight: function (element) {
                var $el = $(element);
                var $parent = $el.parents('.form-check');
                if ($parent.length > 0) {
                    $parent.addClass('is-invalid');
                }
                else {
                    $el.addClass('is-invalid');
                }
                // Select2 and Tagsinput
                if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
                    $el.parent().addClass('is-invalid');
                }
            },
            unhighlight: function (element) {
                $(element).parents('.form-check').removeClass('is-invalid');
            },
            submitHandler: function(form) {
                var url = "index.php";
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(form).serialize(),
                    success: function (data) {
                        $("#message").html(data);
                        $("#message").fadeIn();
                        $("#message").removeClass('d-none');
                        document.getElementById("comment-form").reset();
                        setTimeout(function(){
                            $("#message").fadeOut();
                            $("#message").addClass('d-none');
                        }, 4000)
                    }
                });
            }
        });
    }
}

/**
* ----------------------------------------------
* Validate get started form data
* ----------------------------------------------
*/
function validateGetStartedForm() {
    $('#comment-form').validate({
        focusInvalid: false,
        rules: {
            'validation-email': {
                required: true,
                email: true
            },
            'validation-name': {
                required: true,
            },
            'validation-subject': {
                required: true,
            },
            'validation-message': {
                required: true,
            },
            'validation-required': {
                required: true
            }
        },

        // Errors
        //

        errorPlacement: function errorPlacement(error, element) {
            var $parent = $(element).parents('.form-group');

            // Do not duplicate errors
            if ($parent.find('.jquery-validation-error').length) { return; }

            $parent.append(
                error.addClass('jquery-validation-error small form-text invalid-feedback')
            );
        },
        highlight: function (element) {
            var $el = $(element);
            var $parent = $el.parents('.form-check');
            if ($parent.length > 0) {
                $parent.addClass('is-invalid');
            }
            else {
                $el.addClass('is-invalid');
            }
            // Select2 and Tagsinput
            if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {
                $el.parent().addClass('is-invalid');
            }
        },
        unhighlight: function (element) {
            $(element).parents('.form-check').removeClass('is-invalid');
        },
    });
}


/**
* ----------------------------------------------
* Content loaded
* ----------------------------------------------
*/
function contentLoaded(){
    window.onload = function(){
        hidePreLoader()
    }
}