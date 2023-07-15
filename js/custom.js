(function ($) {
  "use strict";

  jQuery(document).on("ready", function () {
    const burger = document.getElementById("burger");
    const ul = document.querySelector("nav ul");
    burger.addEventListener("click", () => {
      burger.classList.toggle("show-x");
      menuList.classList.toggle("show");
    });

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 0) {
        $(".theme-header").addClass("is-sticky");
      } else {
        $(".theme-header").removeClass("is-sticky");
      }
    });
  });

  $(document).ready(function () {
    $("#burger").click(function () {
      $(".overlay").toggleClass("show-overlay");
    });
  });

  $(".lorem-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    center: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
})(jQuery);

$(".card-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  margin: 30,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
// -- Home slider End -----
