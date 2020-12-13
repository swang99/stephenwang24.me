/* global $ */
/*eslint-env browser*/
/*jslint maxerr: 1000 */

$('document').ready(function () {
    /* Sticky nav */
    window.addEventListener('scroll', function(){
        var nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 600)
    })

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {offset: '50%'});
    
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {offset: '50%'});
    
    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {offset: '50%'});
    
    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse');
    }, {offset: '50%'});
});

/* Mobile nav */
$('.js--nav-icon').click(function () {
    var nav = $('nav');
    var icon = $('.js--nav-icon i');
    if (icon.hasClass('ion-ios-menu')) {
        icon.addClass('ion-ios-close');
        icon.removeClass('ion-ios-menu');
        nav.addClass('menu-open')
    } else {
        icon.addClass('ion-ios-menu');
        icon.removeClass('ion-ios-close');
        nav.removeClass('menu-open')
    }
});

/* Hide elements when mobile nav is clicked */
$('.js--nav-icon').click(function () {
    $('.js--hide').fadeToggle(300)});