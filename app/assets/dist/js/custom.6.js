(function ($) {
    "use strict";

    $(window).on('load',function(){
        $(".to-animate-group").addClass("animated");
    })
    
    

    /**
    * ----------------------------------------------
    * Testimonial slider
    * ----------------------------------------------
    */
    testimonialSlider();


})(jQuery);

/**
* ----------------------------------------------
* Testimonial slider
* ----------------------------------------------
*/
function testimonialSlider(){
    var owl = $(".testimonials-slider-5 .owl-carousel").owlCarousel({
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        items: 1,
        dots: false,
        autoplay: false,
        nav: false,
        smartSpeed: 1500,
        margin: 30,
        mouseDrag: false,
        loop: true,
        navText: ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
        onChange: function(event){
            setTimeout(function(){
                $("#author-image").show();
                var href = $(event.currentTarget).find(".owl-item.active .item").attr("data-href");
                $("#author-image img").attr("src", href);
                $("#author-image").addClass("animated");
            },100)
        },
        onDrag: function(){
            $("#author-image").hide().removeClass("animated");
        }
    });
    $(".testimonials-slider-5 .controls .prev").on('click', function(){
        $("#author-image").hide().removeClass("animated");
        owl.trigger('prev.owl.carousel');
    })
    $(".testimonials-slider-5 .controls .next").on('click', function(){
        $("#author-image").hide().removeClass("animated");
        owl.trigger('next.owl.carousel');
    })
}
