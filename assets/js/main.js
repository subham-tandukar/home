var $ = jQuery;


document.addEventListener("DOMContentLoaded", function () {
  $(".banner__section .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    animateOut: "slideOutDown",
    animateIn: "zoomIn",
    smartSpeed: 2000,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      "<div class='prev-slide custom__nav'><span></span></div>",
      "<div class='next-slide custom__nav'><span></span></div>",
    ],
    responsive: {
      0: {
        items: 1,
        mouseDrag: false,
      },
      640: {
        items: 1,
        mouseDrag: false,
      },
    },
  });

  // For testimonial carousel
  var testiOwl = $(".testimonial__carousel .owl-carousel");
  testiOwl.owlCarousel({
    items: 1,
    margin: 20,
    loop: false,
    dots: false,
    autoHeight: true,
    nav: false,
    mouseDrag: false,
  });

  $(".testi-arrow .nextarrow").click(function () {
    testiOwl.trigger("next.owl.carousel", [1500]);
    toggleTestiArrows();
  });

  $(".testi-arrow .prevarrow").click(function () {
    testiOwl.trigger("prev.owl.carousel", [1500]);
    toggleTestiArrows();
  });

  // Function to toggle arrows based on the current slide position
  function toggleTestiArrows() {
    var currentIndex = testiOwl.find(".owl-item.active").index();
    var totalItems = testiOwl.find(".owl-item").length;

    if (currentIndex === 0) {
      $(".testi-arrow .prevarrow").addClass("disabled");
    } else {
      $(".testi-arrow .prevarrow").removeClass("disabled");
    }

    if (currentIndex === totalItems - 1) {
      $(".testi-arrow .nextarrow").addClass("disabled");
    } else {
      $(".testi-arrow .nextarrow").removeClass("disabled");
    }

    if (totalItems === 1) {
      $(".testi-arrow .nextarrow").addClass("uk-hidden");
      $(".testi-arrow .prevarrow").addClass("uk-hidden");
    } else {
      $(".testi-arrow .nextarrow").removeClass("uk-hidden");
      $(".testi-arrow .prevarrow").removeClass("uk-hidden");
    }
  }

  // Initial toggle based on initial slide position
  testiOwl.on("changed.owl.carousel", function () {
    toggleTestiArrows();
  });

  toggleTestiArrows();

  // For exp carousel
  var expOwl = $(".exp__carousel .owl-carousel");
  expOwl.owlCarousel({
    center: true,
    items: 1.5,
    loop: true,
    margin: 30,
    dots: false,
    autoHeight: true,
    nav: false,
    responsive: {
      0: {
        items: 1.25,
        margin: 20,
      },
      640: {
        items: 1.5,
        margin: 30,
      },
    }
  });

  $(".exp-arrow .nextarrow").click(function () {
    expOwl.trigger("next.owl.carousel", [1500]);
  });

  $(".exp-arrow .prevarrow").click(function () {
    expOwl.trigger("prev.owl.carousel", [1500]);
  });

  // For current__grp__carousel
  var currentGrpOwl = $(".current__grp__carousel .owl-carousel");
  currentGrpOwl.owlCarousel({
  
    loop: true,
    dots: false,
    nav: false,
    autoplay:true,
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        margin: 30,
      },
      640: {
        items: 2,
        margin: 40,
      },
      960: {
        items: 3,
        margin: 50,
      },
      1200: {
        items: 4,
        margin: 60,
      },
      1600: {
        items: 5,
        margin: 80,
      },
    },
  });

  $(".currentGrp-arrow .nextarrow").click(function () {
    currentGrpOwl.trigger("next.owl.carousel", [1500]);
  });

  $(".currentGrp-arrow .prevarrow").click(function () {
    currentGrpOwl.trigger("prev.owl.carousel", [1500]);
  });

  //
  $(window).scroll(function () {
    var sticky = $(".site-header"),
      scroll = $(window).scrollTop();

    if (scroll >= 300) {
      sticky.addClass("fixed");
    } else {
      sticky.removeClass("fixed");
    }
  });

  // for destionation tab
  $(".destination__menu > ul > li").click(function () {
    var tab_id = $(this).attr("data-tab").toLowerCase();
    $(".destination__menu > ul > li").removeClass("current");
    $(".destination__content").removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id)
      .addClass("current")
      .hide()
      .fadeIn(900);
  });

  // for fullscreen menu
  $(".hamburger-toggle").on("click", function (e) {
    $(".fullscreen__menu").addClass("show__menu").removeClass("hide__menu");
    $("html").addClass("toggleOverflow");
  });
  $(".close__menu").on("click", function (e) {
    $(".fullscreen__menu").addClass("hide__menu").removeClass("show__menu");
    $("html").removeClass("toggleOverflow");
  });

  $(
    "#primary-menu1 > li.menu-item-has-children, #primary-menu1 > li.menu-item-has-children ul li.menu-item-has-children"
  ).append('<span><i class="fa-solid fa-chevron-right"></i></span>');
  $(document).on(
    "click",
    "#primary-menu1 > li.menu-item-has-children span",
    function (event) {
      $(this).parent("li").children("ul").slideToggle();
      $(this).parent("li").children("ul").toggleClass("show");
      showActive();
    }
  );
});
showActive = () => {
  $(".sub-menu").each(function () {
    if ($(this).hasClass("show")) {
      $(this).parent("li").children("a").addClass("show-active");
    } else {
      $(this).parent("li").children("a").removeClass("show-active");
    }
  });
};

let options = {
  threshold: 0.5,
};
const aboutBg = document.querySelector(".about__bg");
let aboutobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    aboutBg.classList.add("visible");
  }
}, options);
aboutBg && aboutobserver.observe(aboutBg);

const testimonialBg = document.querySelector(".testimonial__container");
let testimonialobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    testimonialBg.classList.add("visible");
  }
}, options);
testimonialBg && testimonialobserver.observe(testimonialBg);

const footerBg = document.querySelector(".site-footer");
let footerobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    footerBg.classList.add("visible");
  }
}, options);
footerBg && footerobserver.observe(footerBg);
