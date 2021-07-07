var workList = (function ($) {
    "use strict";

    /**
     * Fetch work list data
     */
    var workList = $.getJSON( "assets/data/works.json");

    /**
     * ----------------------------------------------
     * Nav Scroll active section class call
     * ----------------------------------------------
     */
    windowScroll();

    /**
    * ----------------------------------------------
    * Parallax call
    * ----------------------------------------------
    */
    parallax();

    /**
    * ----------------------------------------------
    * Show single Portfolio call
    * ----------------------------------------------
    */
    showSinglePortfolio();

    /**
    * ----------------------------------------------
    * Hide single Portfolio call
    * ----------------------------------------------
    */
    hideSinglePortfolio();


    /**
    * ----------------------------------------------
    * Slick Slider Call
    * ----------------------------------------------
    */
    slickSlider()

   /**
    * ----------------------------------------------
    * Typewriter call
    * ----------------------------------------------
    */
    typewriter();

   return workList

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
            if($(".header").hasClass('black-nav')){
                $(".header .navbar-brand img").attr("src", "assets/images/logo.png");
            }
        } else {
            $(".header").removeClass("fixed-nav");
            if($(".header").hasClass('black-nav')){
                $(".header .navbar-brand img").attr("src", "assets/images/logo-blk.png");
            }
        }
    })
}



/**
* ----------------------------------------------
* Show single Portfolio call
* ----------------------------------------------
*/
function showSinglePortfolio(){
    $(".filtr-item").on('click', function(e) {
        e.preventDefault();
        /**
         * Clean previous portflio content
         */
        $("#single-portfolio .portfolio-image").html("");
        $("#single-portfolio .section-header").html("");
        $("#single-portfolio .single-portfolio-content").html("");
        $("#single-portfolio .tags").html("");
        $("#single-portfolio .work-navigation-section .prev-work").html("");
        $("#single-portfolio .work-navigation-section .next-work").html("");
        var index = $(this).attr('data-index');
        var self = $(this);
        /**
         * Dynamic generate single portfolio using ajax request
         */
        workList.then(function(list){
            console.log("list", list)
            var data = list[index - 1], img, headingText, headingSubtitle,
            headerStr, tagStr, prevWork, nextWork;
            img = "<img src=assets/images/works/"+data.image+" alt='project'"+index+"/>";
            headingText = self.find(".grid-title").text();
            headingSubtitle = self.find(".grid-description").text();
            headerStr = "<h2>"+headingText+"</h2>";
            headerStr += "<p class='subtitle'>"+headingSubtitle+"</p>";
            tagStr = "<p><strong>Category: </strong><span>"+data['category'].join(", ")+"</span></p>";
            tagStr += "<p><strong>Client: </strong><span>"+data['client'].join(", ")+"</span></p>";
            tagStr += "<p><strong>Project Timeline: </strong><span>"+data['timeline']+"</span></p>";
            tagStr += "<p><strong>Tags: </strong><span>"+data['tags'].join(", ")+"</span></p>";
            prevWork = "<a href='#'><img src=assets/images/works/"+data.relatedPost1.image+" alt='related project'/></a>";
            prevWork +="<h5><span>Previous work</span>"+data.relatedPost1.projectName+"</h5>";
            nextWork = "<a href='#'><img src=assets/images/works/"+data.relatedPost2.image+" alt='related project'/></a>";
            nextWork +="<h5><span>Next work</span>"+data.relatedPost2.projectName+"</h5>";
            $("#single-portfolio .portfolio-image").append(img);
            $("#single-portfolio .section-header").html(headerStr);
            $("#single-portfolio .single-portfolio-content").html(data.content);
            $("#single-portfolio .tags").html(tagStr);
            $("#single-portfolio .work-navigation-section .prev-work").html(prevWork);
            $("#single-portfolio .work-navigation-section .next-work").html(nextWork);
            $("#single-portfolio").addClass("show");
            $("body").addClass("overflow-hidden");
        })
    });
}

/**
* ----------------------------------------------
* Hide single Portfolio call
* ----------------------------------------------
*/
function hideSinglePortfolio(){
    $('.single-portfolio .close-btn').on('click', function (e) {
        e.preventDefault();
        $("#single-portfolio").removeClass("show");
        $("body").removeClass("overflow-hidden");
    });
}


/**
* ----------------------------------------------
* Slick Slider
* ----------------------------------------------
*/
function slickSlider(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
}



/**
* ----------------------------------------------
* Parallax
* ----------------------------------------------
*/
function parallax(){
    if($("#scene").length){
        var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene, {
            relativeInput: false
        });
    }
}
