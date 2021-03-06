var $WINDOW = $(window),
  $HTML = $('html'),
  $BODY = $('body');
var category;

$WINDOW.on('load', function () {
  category = $('.menu-dishes__title').offset().top - 17;
  console.log(category)
});

$WINDOW.on('scroll', function () {
  if ($WINDOW.scrollTop() > category) {
    $('.dishes').addClass('dishes-fixed')
  } else {
    $('.dishes').removeClass('dishes-fixed');
  }
});

$(document).ready(function () {
  $('.slider-main').slick({
    arrows: true,
    centerMode: true,
    dots: true,
    dotsClass: "slick-dots",
    slidesToShow: 1,
    variableWidth: true,
    appendArrows: $('.slick-arrow'),
    prevArrow: '<button class="slick-prev"></button>',
    nextArrow: '<button class="slick-next"></button>',
    responsive: [{
      breakpoint: 992,
      settings: {
        centerMode: false,
        variableWidth: false,
        arrows: false
      }
    }]
  });

  // $('.dishes').flickity({
  //   freeScroll: true,
  //   prevNextButtons: false,
  //   pageDots: false,
  //   // cellAlign: 'left',
  //   contain: true
  // });

  var ww = $(window).width();
  if (ww >= 1700) {
    sliderView = 8.5;
  }
  if ((ww >= 1300) && (ww < 1700)) {
    sliderView = 7.5;
  }
  if ((ww >= 1000) && (ww < 1300)) {
    sliderView = 5.5;
  }
  if ((ww >= 768) && (ww < 1000)) {
    sliderView = 3.5
  }
  if ((ww >= 320) && (ww < 768)) {
    sliderView = 2.5
  }


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: sliderView,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      clickable: true,
    },
  });

  $('.menu_close').on("click", function (e) {
    e.preventDefault();
    $(".mobile_menu_container").css("display", "none");
    $(".mobile_menu_overlay").css("display", "none");
  });
  $('.mobile_menu').on("click", function (e) {
    e.preventDefault();
    $(".mobile_menu_container").css("display", "block");
    $(".mobile_menu_overlay").css("display", "block");
  });

});

$('a[href^="#"]').click(function () {
  let anchor = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(anchor).offset().top
  }, 500);
});