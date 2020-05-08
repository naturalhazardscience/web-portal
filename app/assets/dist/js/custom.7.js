(function ($) {
    "use strict";

    $(window).on('load', function () {
        $(".to-animate-group").addClass("animated");
    })

    windowScroll();

    /**
    * ----------------------------------------------
    * Testimonial slider
    * ----------------------------------------------
    */
    testimonialSlider();
    /**
    * ----------------------------------------------
    * Screenshot slider
    * ----------------------------------------------
    */
    screenshotSlider();
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
function testimonialSlider() {
    var owl = $(".testimonials-slider-6").owlCarousel({
        nav: true,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
        margin: 20,
        dots: false,
        navText: ['<i class="icon-arrow-left-circle"></i>', '<i class="icon-arrow-right-circle"></i>'],
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
/**
 * ----------------------------------------------
 * Screenshot slider 
 * ----------------------------------------------
 */
function screenshotSlider() {
    new Swiper('.screenshots-slider', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        effect: 'coverflow',
        spaceBetween: 0,
        speed: 900,
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.swiper-slider-button .slider-button-next',
            prevEl: '.swiper-slider-button .slider-button-prev',
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 71,
            depth: 160,
            modifier: 1,
            slideShadows: false
        },
        breakpoints: {
            1199: {
                coverflowEffect: {
                    stretch: 57
                }
            },
            992: {
                coverflowEffect: {
                    stretch: 50
                }
            },
            768: {
                coverflowEffect: {
                    stretch: 36
                }
            },
            575: {
                slidesPerView: 2.5,
                coverflowEffect: {
                    stretch: 18
                }
            },
            370: {
                slidesPerView: 2.5,
                coverflowEffect: {
                    stretch: 10
                }
            }
        }
    })
}

