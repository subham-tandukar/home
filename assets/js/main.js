var $ = jQuery;

//for animation on scrolling effects
AOS.init({
  once: true,
});

// Fancybox Config
Fancybox.bind('[data-fancybox="gallery"]', {
  //
});

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
    nav: true,
    autoplay: true,
    autoplayTimeout: 10000,
    navText: [
      "<div class='prev-slide custom__nav'><span></span></div>",
      "<div class='next-slide custom__nav'><span></span></div>",
    ],
  });
};

aboutTab = () => {
  $(".about__tab__link").click(function () {
    var tab_id = $(this).attr("data-tab").toLowerCase();

    $(".about__tab__link").removeClass("current");
    $(".about__tab__content").removeClass("current");
    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
};

jQuery(document).ready(function ($) {
  headerScroll();
  menuOffcanvas();
  bannerCarousel();
  aboutTab();
});
