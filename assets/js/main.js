var $ = jQuery;

headerScroll = () => {
  $(window).scroll(function () {
    var sticky = $(".site-header, .sticky__blog__head"),
      fixedMobile = $(".fixed__mobile"),
      scroll = $(window).scrollTop();

    if (scroll >= 300) {
      sticky.addClass("fixed");
      fixedMobile.addClass("visible");
    } else {
      sticky.removeClass("fixed");
      fixedMobile.removeClass("visible");
    }
  });
};

menuOffcanvas = () => {
  $(".ham-menu").on("click", function (e) {
    e.preventDefault();
    $(".offcanvas").addClass("show");
    $(".offcanvas__bar").addClass("showbar");
  });

  $(".offcanvas__bar").on("click", function (e) {
    var container = $(".offcanvas__sidebar");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas").removeClass("show");
      $(".offcanvas__bar").removeClass("showbar");
    }
  });

  setTimeout(() => {
    $(".mega-menu-list").append(
      '<span class="menu-list-icon"><i class="fa-solid fa-chevron-down"></i></span>'
    );
  }, 500);

  $(
    ".menu__title, #primary-menu1 > li.menu-item-has-children, #primary-menu1 > li.menu-item-has-children ul li.menu-item-has-children"
  ).append('<span><i class="fa-solid fa-chevron-down"></i></span>');
  $(document).on(
    "click",
    "#primary-menu1 > li.menu-item-has-children span",
    function (event) {
      $(this).parent("li").children("ul, .mega__menu").slideToggle();
      $(this).parent("li").children("ul").toggleClass("show");
      $(this).parent("li").children("a").toggleClass("show-active");
      $(this)
        .parent(".menu__title")
        .parent("div")
        .children(".menu__list ")
        .slideToggle();
      $(this).parent(".menu__title").children("a").toggleClass("show-active");
    }
  );
};

partnerCarousel = () => {
  var partner = $(".partner__carousel .owl-carousel");
  partner.owlCarousel({
    items: 2,
    nav: false,
    loop: true,
    dots: true,
    smartSpeed: 1000,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
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
      1400: {
        items: 6,
      },
    },
  });
};

scrollDown = () => {
  const bannerHeight = $(".banner__section").height();
  const scrollDown = $(".scroll__down");
  // Trigger on window scroll
  $(window).scroll(function () {
    const scrollPosition = $(this).scrollTop();

    // Calculate how far we have scrolled within the banner
    if (scrollPosition < bannerHeight) {
      const progress = scrollPosition / bannerHeight; // Value from 0 to 1
      const opacity = 1 - progress; // Opacity decreases as progress increases
      const translateY = progress * 20; // Adjust translateY value as desired

      // Apply the calculated opacity and transform
      scrollDown.css({
        opacity: opacity,
        transform: `translate(-${translateY}px, -50%)`,
      });
    } else {
      // Hide the element completely once we're beyond the banner
      scrollDown.css({
        opacity: 0,
        transform: `translate(0px, -50%)`,
      });
    }
  });
};

scrollAnimation = () => {
  let options = {
    threshold: 0.9,
  };
  const animateClass = $(
    ".animate__heading, .package__vector, .package__lotus, .animate__img, .quote__section"
  );

  animateClass.each(function (index) {
    let animateObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting === true) {
        // Add class to the current
        $(this).addClass("visible");
      }
      // else {
      //   // Remove class from the current
      //   $(this).removeClass("visible");
      // }
    }, options);

    // Observe the current
    animateObserver.observe($(this).get(0)); // Get the first element from the jQuery collection
  });
};

jQuery(document).ready(function ($) {
  headerScroll();
  menuOffcanvas();
  partnerCarousel();
  scrollDown();
  scrollAnimation();
});
