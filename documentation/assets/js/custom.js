$(function() {
"use strict";
    
    /**
     * ----------------------------------------------
     * Sticky Nav
     * ----------------------------------------------
     */
    $(window).on('scroll', function(){
		var stickyTop = $('.page-content').offset().top;
        if($(this).scrollTop() >= stickyTop){
            $('aside.navbar').addClass('sticky');
        }
        else{
            $('aside.navbar').removeClass('sticky');
        }
    })

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
});