var workList = (function ($) {
    "use strict";

    /**
     * ----------------------------------------------
     * Nav Scroll active section class call
     * ----------------------------------------------
     */
    windowScroll();

    /**
     * ----------------------------------------------
     * Testimonial slider call
     * ----------------------------------------------
     */
    testimonialSlider();
  
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
    })
}



/**
* ----------------------------------------------
* Testimonial slider
* ----------------------------------------------
*/

function testimonialSlider(){
    $(".testimonials-slider-2").owlCarousel({
        items: 1,
        dots: true,
        autoplay: false,
        nav: false,
        smartSpeed: 800,
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        margin: 30,
        loop: true,
        navText: ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
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
            },
            1000:{
                items: 2
            }
        },
    });
}

