/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	// back to top button  and header fixing

	// show/hide nav  header on page load
	showBackToTop();
	fixedHeader();

	$(window).scroll(function () {
		// show/hide back to top button on scroll
		showBackToTop();

		// show/hide header on scroll
		fixedHeader();
	});

	function showBackToTop() {

		if ($(window).scrollTop() > 500) {

			// Show fixed nav
			$(".back-to-top").fadeIn(300)
		} else {
			// Hide white nav
			$(".back-to-top").fadeOut(300)
		}
	}

	function fixedHeader() {

		if ($(window).scrollTop() > 100) {

			// Show fixed nav
			$("header").addClass('fixed-header');
		} else {
			// Hide white nav
			$("header").removeClass('fixed-header');
		}
	}

	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 600);
	});


	// mobile menu===============================

	$('.btn-mobile-open').click(function () {
		$('body').addClass('mobile-open');
	});


	$('.btn-mobile-close').click(function () {
		$('body').removeClass('mobile-open');
	});


	// filters==========$
	$('.filter-top .filter-toggle').click(function () {
		$(this).parent('.filter-top').next('ul').slideToggle(200);
	});
	// header-search
	$('.btn-search-open').click(function () {
		$('.header-center-right .header-search').addClass('active');
	});
	$('.btn-search-close').click(function () {
		$('.header-center-right .header-search').removeClass('active');
	});
});

