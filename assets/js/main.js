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
  $(".ham-menu").on("click", function (e) {
    e.preventDefault();
    $(".offcanvas").addClass("show");
    $(".offcanvas__bar").addClass("showbar");
    $("html").css("overflow", "hidden");
  });

  $(".offcanvas__bar").on("click", function (e) {
    var container = $(".offcanvas__sidebar");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas").removeClass("show");
      $(".offcanvas__bar").removeClass("showbar");
      $("html").css("overflow", "visible");
    }
  });

  $(
    "#primary-menu1 > li.menu-item-has-children, #primary-menu1 > li.menu-item-has-children ul li.menu-item-has-children"
  ).append('<span><i class="fa-solid fa-chevron-right"></i></span>');
  $(document).on(
    "click",
    "#primary-menu1 > li.menu-item-has-children > a",
    function (event) {
      event.preventDefault();
      const $this = $(this),
        parent = $this.parent("li"),
        accordionBody = $this.parent("li").children("ul"),
        siblingItem = parent.siblings("li"),
        siblingBody = siblingItem.find("ul");

      if (parent.hasClass("active")) {
        parent.removeClass("active");
        parent.children("a").removeClass("show-active");
        accordionBody.slideUp(500);
      } else {
        parent.addClass("active");
        parent.children("a").addClass("show-active");
        accordionBody.slideDown(500);
        siblingItem.removeClass("active");
        siblingItem.children("a").removeClass("show-active");
        siblingBody.slideUp();
      }
    }
  );
};

destinationCarousel = () => {
  var mySlider = $(".destination__carousel .owl-carousel");
  mySlider.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navText: [
      "<div class='prev-slide custom__nav'><span></span></div>",
      "<div class='next-slide custom__nav'><span></span></div>",
    ],
    center: true,
    autoHeight: true,
    // mouseDrag: false,
    smartSpeed: 1000,
    margin: 0,
    responsive: {
      0: {
        items: 2.5,
      },

      960: {
        items: 3.5,
      },
      1200: {
        items: 4.75,
      },
    },
  });

  //   $(".destination-arrow .nextarrow").click(function () {
  //     mySlider.trigger("next.owl.carousel", [1000]);
  //     toggleMyArrows();
  //   });

  //   $(".destination-arrow .prevarrow").click(function () {
  //     mySlider.trigger("prev.owl.carousel", [1000]);
  //     toggleMyArrows();
  //   });

  //   $(".owl-dot").click(function () {
  //     var dotIndex = $(this).index();
  //     mySlider.trigger("to.owl.carousel", [dotIndex, 1000]);
  //     toggleMyArrows();
  //   });

  //   // Function to toggle arrows based on the current slide position
  //   function toggleMyArrows() {
  //     var currentIndex = mySlider.find(".owl-item.active").index();
  //     var totalItems = mySlider.find(".owl-item").length;

  //     if (currentIndex === 0) {
  //       $(".destination-arrow .prevarrow").addClass("disabled");
  //     } else {
  //       $(".destination-arrow .prevarrow").removeClass("disabled");
  //     }

  //     if (currentIndex === totalItems - 1) {
  //       $(".destination-arrow .nextarrow").addClass("disabled");
  //     } else {
  //       $(".destination-arrow .nextarrow").removeClass("disabled");
  //     }

  //     if (totalItems === 1) {
  //       $(".destination-arrow .nextarrow").addClass("uk-hidden");
  //       $(".destination-arrow .prevarrow").addClass("uk-hidden");
  //     } else {
  //       $(".destination-arrow .nextarrow").removeClass("uk-hidden");
  //       $(".destination-arrow .prevarrow").removeClass("uk-hidden");
  //     }
  //   }

  //   // Initial toggle based on initial slide position
  //   mySlider.on("changed.owl.carousel", function () {
  //     toggleMyArrows();
  //   });
  //   // Assume that 'mySlider' is your Owl Carousel instance
  //   mySlider.on("dragged.owl.carousel", function (event) {
  //     // Call the functions on touch drag
  //     toggleMyArrows();
  //   });

  //   toggleMyArrows();
};

courseAccordion = () => {
  $(".course__title").click(function () {
    var tab_id = $(this).attr("data-tab");
    if ($(this).hasClass("current")) {
      $(this).addClass("current");
    } else {
      $(".course__title").removeClass("current");
      $(".course__img").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id)
        .addClass("current")
        .hide()
        .fadeIn(900);
    }
  });
};

videoCarousel = () => {
  var mySlider = $(".video__carousel .owl-carousel");
  mySlider.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 20,
    responsive: {
      0: {
        items: 1.5,
      },

      960: {
        items: 2.5,
      },
    },
  });
};

testimonialCarousel = () => {
  var mySlider = $(".testimonial__carousel .owl-carousel");
  mySlider.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoHeight: true,
    nav: true,
    navText: [
      "<div class='prev-slide custom__nav'><span></span></div>",
      "<div class='next-slide custom__nav'><span></span></div>",
    ],
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 20,
  });
};

partnerCarousel = () => {
  var mySlider = $(".partner__carousel .owl-carousel");
  mySlider.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoHeight: true,
    nav: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 20,
    responsive: {
      0: {
        items: 2,
      },

      640: {
        items: 3,
      },
      960: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
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
};

jQuery(document).ready(function ($) {
  headerScroll();
  menuOffcanvas();
  destinationCarousel();
  courseAccordion();
  videoCarousel();
  testimonialCarousel();
  partnerCarousel();
  scrollAnimation();
});
