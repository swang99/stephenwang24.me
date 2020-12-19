/* global $ */
/*eslint-env browser*/
/*jslint maxerr: 1000 */

$('document').ready(function () {
    /* Sticky nav */
    window.addEventListener('scroll', function(){
        var nav = $('nav');
        for (i = 0; i < nav.length; i++) {
            nav[i].classList.toggle('sticky', window.scrollY > 0);
          }
    })

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {offset: '50%'});
    
    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {offset: '50%'});
});

/* Mobile nav */
$('.js--nav-icon').click(function () {
    var nav = $('.mobile-nav');
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

/* About slideshow */
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("abtSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}