(function ($) {
    "use strict";

    /**
    * ----------------------------------------------
    * Home swiper slider
    * ----------------------------------------------
    */
    homeSwiperSlider();

    /**
    * ----------------------------------------------
    * Testimonial swiper slider
    * ----------------------------------------------
    */
    testimonialSlider();

    /**
    * ----------------------------------------------
    * Portfolio photoswipe image slider call
    * ----------------------------------------------
    */
    photoswipe();


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
* Home swiper slider
* ----------------------------------------------
*/
function homeSwiperSlider(){
    new Swiper('.swiper-container', {
        direction: 'vertical',
        speed: 700,
        cubeEffect: {
            slideShadows: true,
        },
        autoplay: {
            delay: 4000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
}

/**
* ----------------------------------------------
* Testimonial swiper slider
* ----------------------------------------------
*/
function testimonialSlider(){
    new Swiper('.testimonials-slider-4', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
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
            $folioItems = $('.filtr-item2');

        // get items
        $folioItems.each(function (i) {

            var $folio = $(this),
                $thumbLink = $folio.find('a.thumb-img'),
                $title = $folio.find('.grid-content > h6'),
                $caption = $folio.find('.pswp-caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $width = 1920,
                $height = 700;
            console.log($thumbLink)
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

        $('.filtr-item2').on('click', function (e) {
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
