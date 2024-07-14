var $ = jQuery;

headerScroll = () => {
  $(window).scroll(function () {
    var sticky = $(".site-header"),
      scroll = $(window).scrollTop();

    if (scroll >= 300) {
      sticky.addClass("fixed");
    } else {
      sticky.removeClass("fixed");
    }
  });
};

menuOffcanvas = () => {
  // for fullscreen menu
  $(".hamburger-toggle").on("click", function (e) {
    e.preventDefault();
    $(".fullscreen__menu").addClass("show__menu").removeClass("hide__menu");
    $("html").addClass("toggleOverflow");
  });
  $(".close__menu").on("click", function (e) {
    $(".fullscreen__menu").addClass("hide__menu").removeClass("show__menu");
    $("html").removeClass("toggleOverflow");
  });

};

menuCarousel = () => {
  var mySlider = $(".menu__carousel .owl-carousel");
  mySlider.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    autoHeight: true,
    smartSpeed: 1000,
    margin: 30,
    navText: [
      "<div class='prev-slide custom__nav'></div>",
      "<div class='next-slide custom__nav'></div>",
    ],
    responsive: {
      0: {
        items: 1,
        margin: 15,
      },
      640: {
        items: 2,
        margin: 15,
      },
      960: {
        items: 3,
        margin: 15,
      },
      1200: {
        items: 4,
        margin: 15,
      },
    },
  });
};

testimonialCarousel = () => {
  var mySlider = $(".testimonial__carousel .owl-carousel");
  mySlider.owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: true,
    autoHeight: true,
    smartSpeed: 1000,
    margin: 40,
    navText: [
      "<div class='prev-slide custom__nav'></div>",
      "<div class='next-slide custom__nav'></div>",
    ],
  });
};

scrollAnimation = () => {
  let options = {
    threshold: 0.9,
  };
  let imgoptions = {
    threshold: 0.5,
  };

  const animateHeading = $(".animate__heading");
  const animateImg = $(".animate__img");
  const footer = document.querySelector(".footer__contact");

  let footerobserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true) {
      footer.classList.add("visible");
    }
  }, options);
  footer && footerobserver.observe(footer);

  // For animateHeading Loop through each heading --------------
  animateHeading.each(function (index) {
    let headingObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        // Add class to the current .step__grid
        $(this).addClass("visible");
      }
      // else {
      //   // Remove class from the current .step__grid
      //   $(this).removeClass("visible");
      // }
    }, options);

    // Observe the current .step__grid
    headingObserver.observe($(this).get(0)); // Get the first element from the jQuery collection
  });

  // For animateImg Loop through each img --------------
  animateImg.each(function (index) {
    let imgObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        // Add class to the current .step__grid
        $(this).addClass("visible");
      }
      // else {
      //   // Remove class from the current .step__grid
      //   $(this).removeClass("visible");
      // }
    }, imgoptions);

    // Observe the current .step__grid
    imgObserver.observe($(this).get(0)); // Get the first element from the jQuery collection
  });
};

jQuery(document).ready(function ($) {
  headerScroll();
  menuOffcanvas();
  menuCarousel();
  testimonialCarousel();
  scrollAnimation();
});
