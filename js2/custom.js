(function ($) {
  "use strict";

  // PRE LOADER

  // MENU

  // HOME SLIDER & COURSES & CLIENTS

  $(".owl-courses").owlCarousel({
    animateOut: "fadeOut",
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    dots: false,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".owl-client").owlCarousel({
    animateOut: "fadeOut",
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  // SMOOTHSCROLL
})(jQuery);
