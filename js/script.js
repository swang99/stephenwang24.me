/* global $ */
/*eslint-env browser*/
/*jslint maxerr: 1000 */

$('document').ready(function () {
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    }
    else {
        $('nav').fadeOut(250, function() {
            $(this).removeClass('sticky');
    });
        $('nav').fadeIn(250);
    }}, {
    offset: '35px;'
});

    $('.js--section-bio').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    }
    else {
        $('nav').fadeOut(250, function() {
            $(this).removeClass('sticky');
    });
        $('nav').fadeIn(250);
    }}, {
    offset: '35px;'
});
    
    $('.js--section-purpose').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    }
    else {
        $('nav').fadeOut(250, function() {
            $(this).removeClass('sticky');
    });
        $('nav').fadeIn(250);
    }}, {
    offset: '35px;'
    });


/* Scroll on buttons */
    $('.js--scroll-to-top-stocks').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-top-stocks').offset().top}, 1000);
    });
    
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
});

/* Mobile nav */
$('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    nav.slideToggle(300);
    if (icon.hasClass('ion-ios-menu')) {
        icon.addClass('ion-ios-close');
        icon.removeClass('ion-ios-menu');
    } else {
        icon.addClass('ion-ios-menu');
        icon.removeClass('ion-ios-close');
    }
});

/* Show main nav after window resize */
$(window).resize(function() {
        if ($(this).width() > 400) {
               $(".nav-menu").show(); 
        }
});

/* Music Outreach Slideshow */
$('document').ready(function () {
    $("#lightgallery").lightGallery({
        thumbnail: true
    });
    $("#video-gallery").lightGallery({
        loadYoutubeThumbnail: 2,
        animateThumb: true,
        youtubeThumbSize: 'default',
    });
});

/* Hide elements when mobile nav is clicked */
$('.js--nav-icon').click(function () {
       $('.js--hide').fadeToggle(300) 
    });


    


    
