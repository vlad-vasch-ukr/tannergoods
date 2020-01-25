$(document).ready (function(){
    //hero
 
    $(window).on('resize', function(){
        if ($(this).width() > 991) {
            $('.ba-header-nav').show();
        }
    });

    $('.ba-menu-btn').on('click', function(){
        
        $('.ba-header nav').toggleClass('active');
        $('#showSearch  i').toggleClass('fa-bars');
    });

    $('.ba-hero-slider').slick({
        speed: 1000,
        //autoplay: true,
        arrows: true,
        dots: true,
        fade: true
    });

    $('.slick-dots li button').prepend('0');
    $(".ba-hero ul.slick-dots").wrap("<div class='container dots-wrapper'></div>");

    new WOW().init();
    //models


    $('.ba-models-slider').slick({
        speed: 3000,
        //autoplay: true,
        infinite: true,
        arrows: true,
        prevArrow: $('.slide-prev'),
        nextArrow: $('.slide-next'),
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        mobileFirst: true,
        //fade: true,
        //useTransform: true,
        //adaptiveHeight: true,
        /*responsive: [
                    {
                      breakpoint: 765,
                        settings: {
                        slidesToShow: 1,
                        infinite: true,
                        variableWidth: false,
                      }
                    },
                    ]*/
    });

    $('.ba-section-models .slick-dots li button').prepend('0');
    $(".ba-section-models ul.slick-dots").wrap("<div class='models-dots-wrapper'></div>");

})