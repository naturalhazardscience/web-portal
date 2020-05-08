(function ($) {
    "use strict";

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
    * SVG Animation cALL
    * ----------------------------------------------
    */
    svgAnimation();

    /**
    * ----------------------------------------------
    * Jparallax video call
    * ----------------------------------------------
    */
    jParallax();

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
        if($(".bottom-nav").length){
            if (scrollPos >= $(".banner-slide").height() - $(".bottom-nav").outerHeight()) {
                $(".bottom-nav").addClass("fixed-nav");
            } else {
                $(".bottom-nav").removeClass("fixed-nav");
            }
        }
        else{
            if (scrollPos >= 20) {
                $(".header").addClass("fixed-nav");
                $(".header .navbar-brand img").attr("src", "assets/images/logo-blue.png");
            } else {
                $(".header").removeClass("fixed-nav");
                $(".header .navbar-brand img").attr("src", "assets/images/logo.png");
            }
        }
        if((scrollPos > $("#about").offset().top - 50) && (scrollPos <  $("#about").offset().top + $("#about").height())){
            skillsProgress();
        }
    })
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
* Skills progress bar
* ----------------------------------------------
*/
function skillsProgress(){
    $(".skills-progress span").each(function(){
        var dataValue = $(this).attr("data-value");
        $(this).width(dataValue).addClass('show-width');
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

/**
* ----------------------------------------------
* SVG Animation 
* ----------------------------------------------
*/
function svgAnimation(){
    if($(".svg-animation").length){
        new Vivus('my-svg1', {
            type: 'sync', 
            duration: 100,
        }, function(){
            setTimeout(function(){
                $("#my-svg1").parents('.svg-object').next().addClass('show');
                $("#my-svg2").parents('.svg-object').addClass('show')
            new Vivus('my-svg2', {type: 'sync', duration: 100},
                function(){
                    setTimeout(function(){
                        $("#my-svg2").parents('.svg-object').next().addClass('show');
                        $("#my-svg3").parents('.svg-object').addClass('show')
                        new Vivus('my-svg3', {type: 'sync', duration: 100},
                        function(){
                            setTimeout(function(){
                                $("#my-svg3").parents('.svg-object').next().addClass('show');
                                $("#my-svg4").parents('.svg-object').addClass('show')
                                new Vivus('my-svg4', {type: 'sync', duration: 100});
                            }, 100)
                        }
                        );
                    }, 100)
                }
                );
            }, 100)
        })
    }
}

/**
* ----------------------------------------------
* Jparallax video
* ----------------------------------------------
*/
function jParallax(){
    if($('.jarallax').length){
        $('.jarallax').jarallax({
            disableParallax: /iPad|iPhone|iPod|Android/,
            imgSrc: 'assets/images/bg-9.jpg'
        });
    }
}