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
  $(".hamburger-toggle").on("click", function (e) {
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

bannerCarousel = () => {
  $(".banner__section .owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    smartSpeed: 2000,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    mouseDrag: false,
    animateOut: "fadeOut",
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
};

eventCarousel = () => {
  var mySlider = $(".event__carousel .owl-carousel");
  mySlider.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    autoHeight: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 30,
    responsive: {
      0: {
        items: 1.25,
        margin: 15,
      },

      960: {
        items: 1.45,
        margin: 30,
      },
    },
  });
};

parallaxEffect = () => {
  $(window).scroll(function () {
    var scrollY = $(this).scrollTop();
    var windowHeight = $(window).height();

    $(".parallax__wrapper").each(function () {
      var elementTop = $(this).offset().top;
      var elementHeight = $(this).height();

      // Calculate the center point of the element relative to the viewport
      var elementCenter = elementTop + elementHeight / 2;
      var viewportCenter = scrollY + windowHeight / 1.5;

      // // Calculate progress based on how close the center of the element is to the center of the viewport
      var progress = ((viewportCenter - elementCenter) / windowHeight) * 2;
      var moveImgDistance = progress * 50;

      // Transform image based on the move distance
      $(this).find("img").css("transform", `translateY(${moveImgDistance}px)`);

      if (progress <= 0) {
        // Adjust progress to move from -1 to 1 as the element's center approaches the viewport's center
        var moveTxtDistance = (1 - Math.abs(progress)) * 50;

        // Apply the calculated move distance for left and right
        $(this)
          .find(".parallax__txt")
          .css("left", moveTxtDistance + "%");
        $(this)
          .find(".parallax__txt span")
          .css("right", moveTxtDistance * 2 + "%");
      } else {
        $(this).find(".parallax__txt").css("left", "50%");
        $(this).find(".parallax__txt span").css("right", "100%");
      }
    });
  });
};

scrollAnimation = () => {
  let options = {
    threshold: 0.9,
  };

  let options2 = {
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

  const youthEmpowerment = document.querySelector(".youth__empowerment");
  let youthObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true) {
      youthEmpowerment.classList.add("visible");
    }
    //  else {
    //   youthEmpowerment.classList.remove("visible");
    // }
  }, options2);
  youthEmpowerment && youthObserver.observe(youthEmpowerment);
};

jQuery(document).ready(function ($) {
  headerScroll();
  menuOffcanvas();
  bannerCarousel();
  eventCarousel();
  parallaxEffect();
  scrollAnimation();
});
