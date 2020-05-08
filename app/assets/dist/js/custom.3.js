(function ($) {
    "use strict";

    /**
    * ----------------------------------------------
    * Home banner carousel call
    * ----------------------------------------------
    */
    homeSlider();

    /**
     * ----------------------------------------------
     * Nav Scroll active section class call
     * ----------------------------------------------
     */
    windowScroll();
    
    /**
    * ----------------------------------------------
    * service slider call
    * ----------------------------------------------
    */

    serviceSlider()
   
    /**
     * ----------------------------------------------
     * Testimonial slider call
     * ----------------------------------------------
     */
    testimonialSlider();

})(jQuery);


/**
* ----------------------------------------------
* owl-carousel home-carousel
* ----------------------------------------------
*/
function homeSlider() {
    if($(".slider-container").length){
        $(".slider-container .owl-carousel").owlCarousel({
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            mouseDrag:false,
            items: 1,
            dots: true,
            autoplay: false,
            nav: false,
            navSpeed: 1000,
            autoplaySpeed: 1500,
            margin: 0,
            loop: true,
            navText:["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"]
        });
    }
}

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
    $(".testimonials-slider-3").owlCarousel({
        items: 1,
        slideBy: 2,
        dots: true,
        autoplay: true,
        nav: false,
        smartSpeed: 1000,
        autoplaySpeed: 3000,
        autoplayTimeOut: 6000,
        margin: 30,
        loop: true,
    });
}

/**
* ----------------------------------------------
* service slider
* ----------------------------------------------
*/
function serviceSlider(){
    var serviceSlider = $(".services-slider").owlCarousel({
        items: 3,
        dots: false,
        autoplay: false,
        nav: true,
        smartSpeed: 800,
        autoplaySpeed: 2000,
        autoplayTimeOut: 5000,
        margin: 10,
        loop: false,
        navText:["<i class='icon-arrow-left-circle'></i>","<i class='icon-arrow-right-circle'></i>"],
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
                items: 2
            },
            991: {
                items: 3
            },
            1100:{
                items: 3,
                stagePadding: 100,
            }
        },
    });
}