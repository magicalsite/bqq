var $WINDOW = $(window),
  $HTML = $('html'),
  $BODY = $('body');
var category;

$('a[href^="#"]').click(function () {
  let anchor = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(anchor).offset().top
  }, 700);
});

$WINDOW.on('load', function () {
  category = $('.menu-dishes__title').offset().top;
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

  $("div.dishes").smoothDivScroll({
    mousewheelScrolling: "allDirections",
    manualContinuousScrolling: false,
    touchScrolling: true,
    visibleHotSpotBackgrounds: "always",
  });
});


$(function () {
  $(document).on("click", ".mobile_menu_container .parent", function (e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).siblings("ul").addClass("loaded").addClass("activity");
  });
  $(document).on("click", "#menu_close", function (e) {
    e.preventDefault();
    $(".mobile_menu_container .activity").removeClass("activity");
    $(this).parent().parent().removeClass("loaded");
    $('html').removeClass('hid')
    $(this).parent().parent().parent().parent().addClass("activity");
    $(".mobile_menu_container").css("display", "none");
    $(".mobile_menu_overlay").css("display", "none");
  });
  $(document).on("click", ".mobile_menu", function (e) {
    e.preventDefault();
    $('html').addClass('hid')
    $(".mobile_menu_container").css("display", "block");
    $(".mobile_menu_container").addClass("loaded");
    $(".mobile_menu_overlay").fadeIn();
  });
  $(document).on("click", ".mobile_menu_overlay", function (e) {
    $(".mobile_menu_container").removeClass("loaded");
    $(this).fadeOut(function () {
      $(".mobile_menu_container .loaded").removeClass("loaded");
      $(".mobile_menu_container .activity").removeClass("activity");
    });
  });
})