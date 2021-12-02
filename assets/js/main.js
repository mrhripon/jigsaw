(function ($) {
  "use strict";

  $(document).ready(function () {

    // Query For Mobile Menu Activation 
    $('.toggle-btn').on('click', function () {
      $('.mobile-menu-wrapper, .overlay').addClass('show');
    })
    $('.close-mobile-menu, .overlay , .mobile-menu a').on('click', function () {
      $('.mobile-menu-wrapper, .overlay').removeClass('show');
    })

    $("#header").sticky({ topSpacing: 0 });

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 200) {
        $('header .logo').addClass('show');
      }
      else {
        $('header .logo').removeClass('show');
      }
    });


    if ($('.go-to-next-section').length > 0) {
      $(".go-to-next-section").click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(href).offset().top
        }, '1000');
      });
    }


    // Slider Activation 
    $('.w-film').slick({
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('.w-award').slick({
      infinite: true,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('.w-news').slick({
      infinite: true,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });


    // Action Aos Jquery Plugins 
    // AOS.init({
    //   disable: 'mobile',
    //   duration: 1000
    // });

    // Play youtube video automatically when the section visible 


    // Play when in viewport
    $(window).on('scroll load', function () {
      $('.full-view-video iframe').each(function (i) {
        player.pauseVideo();
        var scroll_position = $(window).scrollTop();
        var bottom_of_video = $(this).offset().top + ($(this).outerHeight() / 2);
        var bottom_of_window3 = $(window).scrollTop() + $(window).height();
        if (bottom_of_window3 > bottom_of_video && scroll_position < bottom_of_video) {
          player.playVideo();
          $('#player').css({ 'opacity': '1' });
        } else {
          player.pauseVideo();
          $('#player').css({ 'opacity': '.6' });
        }
      });
    });



    //   Query For scroll back to top 
    var back = $('.back-to-top');
    back.on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0,
      }, 900);
    })
    $(window).on('scroll', function () {
      var self = $(this),
        height = self.height(),
        top = self.scrollTop();
      if (top > height) {
        back.addClass('visible');
      } else {
        back.removeClass('visible');
      }
    })


  });

})(jQuery); // End line