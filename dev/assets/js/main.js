$(document).ready(function(){
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
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerPadding: '20px',
                variableWidth: false
              }
            }
        ]
    });
    // --- AOS ---
    AOS.init();
})