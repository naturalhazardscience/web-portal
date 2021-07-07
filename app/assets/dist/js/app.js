(function ($) {
    "use strict";

    $(window).on('load', function(){
        $(".to-animate-group").addClass("animated");
    })

    /**
    * ----------------------------------------------
    * Screenshot slider
    * ----------------------------------------------
    */
    screenshotSlider();

        /**
        * ----------------------------------------------
        * Testimonial swiper slider
        * ----------------------------------------------
        */
        //testimonialSlider();

    /**
     * ----------------------------------------------
     * Nav Scroll active section class call
     * ----------------------------------------------
     */
    windowScroll();

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
 * Screenshot slider 
 * ----------------------------------------------
 */
function screenshotSlider(){
    new Swiper ('.screenshots-slider', {
        slidesPerView: 5,
        centeredSlides: true,
        loop: true,
        spaceBetween: 38,
        speed: 1500,
        autoplay: {
            delay: 3500,
        },
        pagination: {
            el: '.screenshots .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            1199: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 3
            },
            575: {
                slidesPerView: 2,
                centeredSlides: false,
                spaceBetween: 20
            }
        }
    })
}

/**
* ----------------------------------------------
* Testimonial swiper slider
* ----------------------------------------------
*/
function testimonialSlider(){
    $(".testimonials-slider-5").owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause:true,
        margin: 20,
        dots: false,
        navText: ['<i class="icon-arrow-left-circle"></i>','<i class="icon-arrow-right-circle"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });
}
