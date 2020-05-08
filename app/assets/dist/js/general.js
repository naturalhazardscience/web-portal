(function ($) {
    "use strict";

    
	if ($('.video-popup-btn').length) {
		$('.video-popup-btn').magnificPopup({
			type: 'iframe'
		});
	}
    /**
     * ----------------------------------------------
     * Animatation plugin AOS call
     * ----------------------------------------------
     */
    AOS.init({
        offset: 150,
        duration: 400,
        easing: 'linear',
        delay: 0,
        once: true,
        disable: 'mobile'
    });

     /**
     * ----------------------------------------------
     * Scroll to section
     * ----------------------------------------------
     */
    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: 0           // offste (in px) for fixed top navigation
    });

    /**
     * ----------------------------------------------
     * Counter Up call
     * ----------------------------------------------
     */
    
    counterUp();
    
    /**
    * ----------------------------------------------
    * sidebar menu call
    * ----------------------------------------------
    */
    sidebarMenu();

    /**
    * ----------------------------------------------
    * Portfolio photoswipe image slider call
    * ----------------------------------------------
    */
    photoswipe();

    /**
    * ----------------------------------------------
    * Subscribe Now call
    * ----------------------------------------------
    */
    subscribeNow();

    /**
     * ----------------------------------------------
     * Contact us form validation
     * ----------------------------------------------
     */
    validateContactUsForm();


    /**
    * ----------------------------------------------
    * Get started form validation
    * ----------------------------------------------
    */
    validateGetStartedForm();  

    /**
     * ----------------------------------------------
     * our work filteration data call
     * ----------------------------------------------
     */
    ourWorkDataFilteration();

    /**
     * ----------------------------------------------
     * Nav Scroll active section class call
     * ----------------------------------------------
     */
    windowScroll();

    /**
    * ----------------------------------------------
    * sponsor-carousel call
    * ----------------------------------------------
    */
    sponsorsSlider();

    /**
    * ----------------------------------------------
    * tweets-carousel call
    * ----------------------------------------------
    */
    tweetsSlider();

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
        if(scrollPos > $(document).height()/2){
            $('.scroll-top-btn').fadeIn(500);
        }
        else{
            $('.scroll-top-btn').fadeOut();
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
* sidebar menu
* ----------------------------------------------
*/
function sidebarMenu(){
    $(".sidebar-btn").on("click", function() {
        $(".sidebar-menu").addClass("active");
    })
    $(".sidebar-menu .close-sidebar").on("click", function() {
        $(".sidebar-menu").removeClass("active");
    });
    $(".sidebar-right-btn").on("click", function(){
        var href = $(this).attr('data-href');
        $(href).addClass("active");
    })
    $(".sidebar-open-nav .close-sidebar").on("click", function(){
        var href = $(this).attr('data-href');
        $(href).removeClass("active");
    })
}

/**
* ----------------------------------------------
* Portfolio photoswipe image slider
* ----------------------------------------------
*/
function photoswipe() {
    if($("#gallery").length){
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.filtr-item');

        // get items
        $folioItems.each(function (i) {

            var $folio = $(this),
                $thumbLink = $folio.find('.grid-image > a'),
                $title = $folio.find('.grid-title'),
                $caption = $folio.find('.pswp-caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $width = 1920,
                $height = 700;

            var item = {
                src: $href,
                w: $width,
                h: $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        $('.filtr-item').on('click', function (e) {
            e.preventDefault();
            var options = {
                index: parseInt($(this).attr("data-index")) - 1,
                showHideOpacity: true
            }
            // initialize PhotoSwipe
            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    }
}

/**
* ----------------------------------------------
* Subscribe Now
* ----------------------------------------------
*/
function subscribeNow() {
    if($("#subscribe").length){
        var $subscribe = $("#subscribe");
        $subscribe.ajaxChimp({
            callback: mailchimpCallback,
            url: "url" // Replace your mailchimp post url inside double quote "".  
        });

        function mailchimpCallback(resp) {
            var result = $('.subscribe-result');
            if (resp.result === 'success') {
                $subscribe[0].reset();
                result.addClass('text-success');
                result.removeClass('text-danger');
            } else if (resp.result === 'error') {
                result.addClass('text-danger');
                result.removeClass('text-success');
            }
            result
                .html(resp.msg)
                .fadeIn(1000)
                .delay(1000)
                .fadeOut(500);
        };
    }
}

/**
* ----------------------------------------------
* our work filteration data
* ----------------------------------------------
*/
function ourWorkDataFilteration() {
    if(window.Shuffle && $('.filtr-container').length){
        var Shuffle = window.Shuffle;
        var shuffleInstance = new Shuffle(document.querySelector('.filtr-container'), {
            itemSelector: '.filtr-item',
            sizer: '.work-nav',
        });

        $(".work-nav .control").on("click", function () {
            shuffleInstance.filter($(this).attr('data-filter'));
            $('.work-nav .control').removeClass('filtr-active');
            $(this).addClass('filtr-active');
        });
    }
}

/**
* ----------------------------------------------
* owl-carousel sponsor-carousel
* ----------------------------------------------
*/
function sponsorsSlider() {
    if($(".sponsors").length){
        $(".sponsors .owl-carousel").owlCarousel({
            items: 4,
            dots: false,
            autoplay: true,
            nav: false,
            navSpeed: 800,
            dotsSpeed: 800,
            autoplaySpeed: 800,
            margin: 50,
            loop: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 2
                },
                // breakpoint from 480 up
                480: {
                    items: 3
                },
                // breakpoint from 768 up
                768: {
                    items: 4
                }
            },
        });
    }
}

/**
* ----------------------------------------------
* Validate contact us form data
* ----------------------------------------------
*/
function validateContactUsForm() {
    if($('#validation-form').length){
        $('#validation-form').validate({
            focusInvalid: false,
            rules: {
                'validation-email': {
                    required: true,
                    email: true
                },
                'validation-firstname': {
                    required: true,
                },
                'validation-lastname': {
                    required: true,
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
                        document.getElementById("validation-form").reset();
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
    if($('#get-started-form').length){
        $('#get-started-form').validate({
            focusInvalid: false,
            rules: {
                'validation-email': {
                    required: true,
                    email: true
                },
                'validation-fullname': {
                    required: true,
                },
                'validation-mobile': {
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
            }
        });
    }
}

/**
* ----------------------------------------------
* tweet carousel
* ----------------------------------------------
*/
function tweetsSlider() {
    if($(".tweets-carousel").length){
        $(".tweets-carousel").owlCarousel({
            items: 1,
            dots: false,
            autoplay: true,
            nav: true,
            navSpeed: 800,
            dotsSpeed: 800,
            autoplaySpeed: 800,
            margin: 0,
            navText:['<i class="icon-arrow-left-circle"></i>','<i class="icon-arrow-right-circle"></i>'],
            loop: true,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 1
                }
            },
        });
    }
}

/**
* ----------------------------------------------
* CounterUp
* ----------------------------------------------
*/

function counterUp(){
    if($('.counter').length){
        $('.counter').counterUp({
            delay: 10
        });
    }
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
