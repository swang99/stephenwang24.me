/* global $ */
/*eslint-env browser*/

$('document').ready(function() {
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    }  else {
        $('nav').removeClass('sticky');
    }
    }, {
    offset: '60px;'
});
    $('.js--section-bio').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    }  else {
        $('nav').removeClass('sticky');
    }
    }, {
    offset: '60px;'
});
    $('.js--section-purpose').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    }  else {
        $('nav').removeClass('sticky');
    }
    }, {
    offset: '60px;'
});


    /* Scroll on buttons */
    $('.js--scroll-to-top-stocks').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-top-stocks').offset().top}, 1000);
    });
    
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function() {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function() {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function() {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function() {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
});    
                                 
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round'); 
        }
        
    });

    /* Modal images */

    var img = document.getElementById("RainChain01");
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("Deck");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("PurpleFlower01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("RainChain02");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("RainChain03");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("PinkFlower01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("Sunset01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("RainChain04");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("RedFlower01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("Sunset02");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("Landing01");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("YellowLily");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("LeavesBranch");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("Landing02");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    img = document.getElementById("Landing03");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
    
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
      modal.style.display = "none";
    }



    


    
