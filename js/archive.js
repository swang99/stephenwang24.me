/* Scroll on buttons */
$('.js--scroll-to-top-stocks').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-top-stocks').offset().top}, 1000);
});

$('.js--scroll-to-features').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});

/* MIC sticky nav */
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

/* Music Outreach Slideshow */
$('document').ready(function () {
    $('.lightgallery').lightGallery({
        thumbnail: true
    });
    $('.videogallery').lightGallery({
        loadYoutubeThumbnail: 2,
        animateThumb: true,
        youtubeThumbSize: 'default',
    });
});