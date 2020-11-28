$(function () {
    // header top right menu============
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $(this).next('.right-menu').slideToggle(200);

    });

    // .main menu open===============
    $('.menu-open').click(function () {
        $('.menu-wrapper').addClass('active');
    });
    // main menu close ===============
    $('.close-menu-btn').click(function () {
        $('.menu-wrapper').removeClass('active');
        $('.submenu').removeClass('active');
        $('.menu-wrapper').removeClass('submenu-open');
        $('.has-sub-menu').removeClass('active');
    })

    // submenu open ===============
    $('.primary-menu .has-sub-menu .plus-minus').click(function () {
        $('.has-sub-menu').removeClass('active');
        $('.submenu').removeClass('active');
        $(this).parent('.has-sub-menu').addClass('active');
        $(this).parent('.has-sub-menu').find('.submenu').addClass('active');
        $('.menu-wrapper').addClass('submenu-open');
    });

    $('.submenu-close-btn').click(function () {
        $('.menu-wrapper').removeClass('submenu-open');
        $('.submenu').removeClass('active');
        $('.has-sub-menu').removeClass('active');
    });


    // sticky header & progress bar==================

    fixedHeader();
    progress_test();
    $(window).scroll(function () {
        // show/hide header on scroll
        fixedHeader();
        progress_test();
    });
    function fixedHeader() {

        if ($(window).scrollTop() > 100) {

            // Show fixed nav
            $("header").addClass('fixed-header');
        } else {
            // Hide white nav
            $("header").removeClass('fixed-header');
        }
    }
    // banner scroll ===============

    $('.banner-scroll').click(function () {
        $('html,body').animate({
            scrollTop: $('.banner').next('section,div').offset().top
        }, 600);
    })


    function progress_test() {
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();
        scrollPercent = (s / (d - c)) * 100;
        var position = scrollPercent;
        var pos_o = scrollPercent * 1.8
        $(".progress.blue .progress-left .progress-bar").css('transform', 'rotate(' + pos_o + 'deg' + ')');
        $(".progress.blue .progress-right .progress-bar").css('transform', 'rotate(' + pos_o + 'deg' + ')');
    }



    $('.banner-item-list').owlCarousel({
        items: 1,
        autoplay: true,
        dots: false,
        nav: true

    });
});


