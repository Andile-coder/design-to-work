(function ($) {
  "use strict";

  $(window).on("load", function () {
    // Prealoder
    $("#preloader").delay(1000).fadeOut("slow");
    $("#preloader img").css("animation-play-state", "play");
  });

  $(document).ready(function () {
    // ------------- Back top top ---------------

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 600) {
        $(".back-to-top").fadeIn(200);
      } else {
        $(".back-to-top").fadeOut(200);
      }
    });
    $(".back-to-top").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });

    // ------------- menu Toggle ---------------

    $(".menu_btn, .menu_close, .menu_modal_overlay").on("click", function () {
      $(".menu_modal").toggleClass("show");
    });

    // ------------- Cart Toggle ---------------

    $(".cart_btn, .cart_close, .cart_modal_overlay").on("click", function () {
      $(".cart_modal").toggleClass("show");
    });

    // ------------- Cart item remove ---------------

    $(".cart_remove").click(function () {
      $(this).parent(".cart_item_box").css("display", "none");
    });

    // ------------- Product slider ---------------

    $(".product_slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      infinite: false,
      speed: 500,
      asNavFor: ".product_slider_thumb",
      arrows: false,
    });
    $(".product_slider_thumb").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      asNavFor: ".product_slider",
      dots: false,
      arrows: true,
      speed: 500,
      prevArrow:
        '<button class="slick-arrow slick-prev"><img src="img/slider-left-arrow.svg" alt=""></button>',
      nextArrow:
        '<button class="slick-arrow slick-next"><img src="img/slider-right-arrow.svg" alt=""></button>',
      centerMode: false,
      focusOnSelect: true,
      draggable: false,
    });

    // ------------- Color Selection ---------------

    $(".color_list li").click(function () {
      $(this).parent().find("li").removeClass("selected");
      $(this).addClass("selected");
    });

    // ------------- button Selection ---------------

    $(".button_selection .button").click(function () {
      $(this).parent().find(".button").removeClass("active");
      $(this).addClass("active");
    });

    // ------------- button toggle ---------------

    $(".button_toggle").click(function () {
      $(this).toggleClass("active");
    });

    // ------------- count ---------------

    var count = 1;

    $(".count .plus").click(function () {
      count++;
      if ($(this).parent().find("input").val() >= 1) {
        $(this).parent().find(".mainus").removeClass("disabled");
      }
      $(this).parent().find("input").val(count);
    });

    $(".count .mainus").click(function () {
      count--;
      if ($(this).parent().find("input").val() == 2) {
        $(this).parent().find(".mainus").addClass("disabled");
        count = 1;
      }
      $(this).parent().find("input").val(count);
    });

    // ------------- Nice select ---------------

    $("select").niceSelect();

    $(".purchasing_business_partner").click(function () {
      $("#customer_info").addClass("d-none");
      $("#business_partner_info").removeClass("d-none");
    });

    $(".purchasing_person").click(function () {
      $("#customer_info").removeClass("d-none");
      $("#business_partner_info").addClass("d-none");
    });

    // aos
    AOS.init({
      duration: 1000,
      offset: 200,
    });

    // ------------- home slider ---------------

    $(".home_slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      variableWidth: true,
      infinite: true,
      speed: 1300,
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
})(jQuery);

// parallax scorlling animation disable for ipad and mobile ---------------

jarallax(document.querySelectorAll(".jarallax"), {
  disableParallax: false,
  disableVideo: false,
});
