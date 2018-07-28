(function($) {
    
    "use strict";

    //Begin Loading Animation
    $(window).load(function() {
        $(".spinner").delay(800).fadeOut();
        $(".preloader-area").delay(1200).fadeOut("slow");
    });

    // Header area add class remove class
    $(function() {
        var header = $(".header");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 200) {
                header.removeClass('header').addClass("header-alt");
            } else {
                header.removeClass("header-alt").addClass('header');
            }
        });
    });

    // Go to the page top
    var backToTop = $(".back-to-top").hide();
    $(window).scroll(function(){
        if ( $(this).scrollTop()>100 ){
            backToTop.fadeIn(1300);
        } else {
            backToTop.fadeOut(1300);
        }
    });

    //back to top
    backToTop.on("click", function (){
        $('body,html').animate({scrollTop:0},800);
        return false;
    });
    
})(jQuery);