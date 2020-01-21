$(document).ready (function(){
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
    });

    $('.slick-dots li button').prepend('0');
    $(".ba-hero ul.slick-dots").wrap("<div class='container dots-wrapper'></div>");
})