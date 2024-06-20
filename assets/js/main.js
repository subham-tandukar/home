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

bannerCarousel = () => {
  $(".banner__section .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    // nav: true,
    autoplay: true,
    autoplayTimeout: 10000,
    mouseDrag: false,
    animateOut: "fadeOut",
    // navText: [
    //   "<div class='prev-slide custom__nav'><span></span></div>",
    //   "<div class='next-slide custom__nav'><span></span></div>",
    // ],
  });
};
reviewCarousel = () => {
  $(".review__carousel .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    margin: 70,
    // nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    // navText: [
    //   "<div class='prev-slide custom__nav'><span></span></div>",
    //   "<div class='next-slide custom__nav'><span></span></div>",
    // ],
  });
};

activitiesCarousel = () => {
  var mySlider = $(".activities__carousel .owl-carousel");
  mySlider.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: false,
    autoHeight: true,
    smartSpeed: 1000,
    margin: 30,
    responsive: {
      0: {
        items: 1.25,
      },
     
      960: {
        items: 1.5,
      },
      1200: {
        items: 2.5,
      },
    },
  });

  $(".activities-arrow .nextarrow").click(function () {
    mySlider.trigger("next.owl.carousel", [1000]);
    toggleMyArrows();
  });

  $(".activities-arrow .prevarrow").click(function () {
    mySlider.trigger("prev.owl.carousel", [1000]);
    toggleMyArrows();
  });

  $(".owl-dot").click(function () {
    var dotIndex = $(this).index();
    mySlider.trigger("to.owl.carousel", [dotIndex, 1000]);
    toggleMyArrows();
  });

  // Function to toggle arrows based on the current slide position
  function toggleMyArrows() {
    var currentIndex = mySlider.find(".owl-item.active").index();
    var totalItems = mySlider.find(".owl-item").length;

    if (currentIndex === 0) {
      $(".activities-arrow .prevarrow").addClass("disabled");
    } else {
      $(".activities-arrow .prevarrow").removeClass("disabled");
    }

    if (currentIndex === totalItems - 1) {
      $(".activities-arrow .nextarrow").addClass("disabled");
    } else {
      $(".activities-arrow .nextarrow").removeClass("disabled");
    }

    if (totalItems === 1) {
      $(".activities-arrow .nextarrow").addClass("uk-hidden");
      $(".activities-arrow .prevarrow").addClass("uk-hidden");
    } else {
      $(".activities-arrow .nextarrow").removeClass("uk-hidden");
      $(".activities-arrow .prevarrow").removeClass("uk-hidden");
    }
  }

  // Initial toggle based on initial slide position
  mySlider.on("changed.owl.carousel", function () {
    toggleMyArrows();
  });
  // Assume that 'mySlider' is your Owl Carousel instance
  mySlider.on("dragged.owl.carousel", function (event) {
    // Call the functions on touch drag
    toggleMyArrows();
  });

  toggleMyArrows();
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
  const reviewBg = document.querySelector(".review__bg");

  let reviewobserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true) {
      reviewBg.classList.add("visible");
    }
  }, options);
  reviewBg && reviewobserver.observe(reviewBg);

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

mouseMove = () => {
  $(".service__section").on("mousemove", function (event) {
    const cursor = $(".cursor");
    const { clientX, clientY } = event;
    cursor.css({
      transform: `translate(${clientX}px, ${clientY}px)`,
    });
  });
  $(".swiper-button-next").on("mouseenter", function (event) {
    const cursor = $(".cursor");
    cursor.addClass("cursor-right");
  });
  $(".swiper-button-next").on("mouseleave", function (event) {
    const cursor = $(".cursor");
    cursor.removeClass("cursor-right");
  });
  $(".swiper-button-prev").on("mouseenter", function (event) {
    const cursor = $(".cursor");
    cursor.addClass("cursor-left");
  });
  $(".swiper-button-prev").on("mouseleave", function (event) {
    const cursor = $(".cursor");
    cursor.removeClass("cursor-left");
  });
};

jQuery(document).ready(function ($) {
  headerScroll();
  menuOffcanvas();
  bannerCarousel();
  reviewCarousel();
  activitiesCarousel();
  scrollAnimation();
  mouseMove();
});
