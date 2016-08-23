// To show and hide memnu
$(document).ready(function(){
    'use strict';
    $(window).scroll(function(){
      'use strict';
      if($(window).scrollTop() < 80){
        $('.navbar').css({
          'margin-top': '-100px',
          'opacity': '0'
        });
      } else {
        $('.navbar').css({
          'margin-top': '0px',
          'opacity': '1'
        });
        $('.navbar-default').css({
          'background-color': 'rgba(59, 59, 59, 0.7)',
          'border-color': '#444'
        });

        $('.navbar-brand img').css({
          'height' : '35px',
          'padding-top': '0px'
        });

        $('.navbar-nav > li > a').css({
          'padding-top': '15px'
        });
      }
    });
});


$(document).ready(function(){
  'use strict'
  $('.nav-item, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.nav-item').on('click',function(){
    $(this).closest('ul').find('.active').removeClass('active');
    $(this).parent().addClass('active');
  });


  $(window).scroll(function(){
    $('section').each(function(){
      var bb = $(this).attr('id');
      var heigh = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;

      if ($(window).scrollTop() > grttop && $(window).scrollTop() < heigh + grttop){
      $('.navbar-nav li a[href="#'+bb+'"]').parent().addClass('active');
      }
      else {
          $('.navbar-nav li a[href="#'+bb+'"]').parent().removeClass('active');
      }
    });
  });
});


$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    SlideMargin: 50
  });


  $('.counter-number').counterUp({
      delay: 10,
      time: 1000
  });

});


//For animation with woo and animate.css
$(document).ready(function(){
  new WOW().init();
});