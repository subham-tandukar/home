var $ = jQuery;

document.addEventListener("DOMContentLoaded", function () {
 
  var mainslider = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var counter = $(".fraction");
  var currentCount = $(
    '<div class="count">01/' +
      (mainslider.slides.length < 10
        ? "0" + mainslider.slides.length
        : mainslider.slides.length) +
      "<div/>"
  );
  counter.append(currentCount);

  mainslider.on("transitionStart", function () {
    var index = this.activeIndex + 1;
    var formattedIndex = ("0" + index).slice(-2); // Ensure double-digit format
    var totalSlides = mainslider.slides.length;
    var totalSlidesFormatted =
      totalSlides < 10 ? "0" + totalSlides : totalSlides;
    var currentCount = $(
      '<div class="count">' +
        formattedIndex +
        "/" +
        totalSlidesFormatted +
        "<div/>"
    );
    counter.html(currentCount);
  });

  $(window).scroll(function () {
    var sticky = $(".site-header"),
      scroll = $(window).scrollTop();

    if (scroll >= 300) {
      sticky.addClass("fixed animated");
    } else {
      sticky.removeClass("fixed animated");
    }
  });

  $(".testimonial__card .card__content").readmore({
    speed: 220,
    lessLink: '<a href="#">Read Less</a>',
  });

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

const serviceBg = document.querySelector(".service__section");
let serviceobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    serviceBg.classList.add("visible");
  }
}, options);
serviceBg && serviceobserver.observe(serviceBg);

const whyBg = document.querySelector(".why__us");
let whyobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    whyBg.classList.add("visible");
  }
}, options);
whyBg && whyobserver.observe(whyBg);

const footerBg = document.querySelector(".site-footer");
let footerobserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting === true) {
    footerBg.classList.add("visible");
  }
}, options);
footerBg && footerobserver.observe(footerBg);