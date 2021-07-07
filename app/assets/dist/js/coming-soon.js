var workList = (function ($) {
    "use strict";

    /**
    * ----------------------------------------------
    * Content loaded call
    * ----------------------------------------------
    */
   contentLoaded()
   
   
    /**
    * ----------------------------------------------
    * Count Down Call
    * ----------------------------------------------
    */
    countDown();

    /**
    * ----------------------------------------------
    * Coming soon carousel call
    * ----------------------------------------------
    */
    comingSoonSlider();

  
})(jQuery);

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
* Content loaded
* ----------------------------------------------
*/
function contentLoaded(){
    window.onload = function(){
        hidePreLoader()
    }
}

/**
* ----------------------------------------------
* Count Down
* ----------------------------------------------
*/
function countDown(){
    $('.cd100').countdown({
        /*Set Endtime here*/
        /*Endtime must be > current time*/
        endtimeYear: 0,
        endtimeMonth: 0,
        endtimeDate: 35,
        endtimeHours: 18,
        endtimeMinutes: 0,
        endtimeSeconds: 0,
        timeZone: ""
    });
}

/**
* ----------------------------------------------
* Coming soon carousel
* ----------------------------------------------
*/
function comingSoonSlider() {
    if($(".coming-soon-slider").length){
        $(".coming-soon-slider .owl-carousel").owlCarousel({
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            mouseDrag:false,
            items: 1,
            dots: false,
            autoplay: true,
            nav: false,
            margin: 0,
            loop: true,
        });
    }
}