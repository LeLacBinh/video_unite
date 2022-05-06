$(document).ready(function() {
    $('.c-pick-up__slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: true,
        variableWidth: true,
        focusOnSelect: true,
        centerPadding: '55px',
        prevArrow: $('.c-pick-up .prev'),
        nextArrow: $('.c-pick-up .next'),
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerPadding: '20px'
            }
        }]
    });

    $('.c-preamble__body').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        fade: true,
        cssEase: 'linear'
    });


    // Header Button Nav
    $(function() {
        $('.c-trigger').on('click', function() {
            $(this).toggleClass('is-active');
            $('.c-header').toggleClass('is-active');
            $('body').toggleClass('is-active');
            return false;
        });
    });

    //Add padding top
    $("main").css({
        "padding-top": $(".c-header").outerHeight()
    });

    // --- AOS ---
    AOS.init();
})