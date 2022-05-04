$(document).ready(function() {
    AOS.init();

    // Header Button Nav
    $(function() {
        $('.c-trigger').on('click', function() {
            $(this).toggleClass('is-active');
            $('.c-header').toggleClass('is-active');
            return false;
        });
    });

    //Add padding top
    $("main").css({
        "padding-top": $(".c-header").outerHeight()
    });
})