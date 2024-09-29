var $ = jQuery;

Fancybox.bind("[data-fancybox]", {
  // Custom options
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
  $(
    "#offcanvas-overlay #primary-menu1 > li.menu-item-has-children, #offcanvas-overlay #primary-menu1 > li.menu-item-has-children ul li.menu-item-has-children"
  ).append('<span><i class="fa-solid fa-caret-down"></i></span>');

  $("#offcanvas-overlay #primary-menu1 > li.menu-item-has-children span").click(
    function (e) {
      $(this).parent("li").children("ul").slideToggle();
      $(this).parent("li").children("ul").toggleClass("show");
      $(this).parent("li").children("a").toggleClass("show-active");
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

partnerCarousel = () => {
  $(".partner__section .owl-carousel").owlCarousel({
    items: 1,
    loop: false,
    margin: 30,
    dots: false,
    smartSpeed: 1000,
    nav: false,
    // autoplay: true,
    // autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 3,
      },
      640: {
        items: 4,
      },
      768: {
        items: 5,
      },
      960: {
        items: 6,
      },
      1200: {
        items: 7,
      },
    
    },
  });
};

numberIncrement = () => {
  let options = {
    threshold: 0.9,
  };

  const infoSection = $(".info__section");
  const infoCount = $(".info__wrapper span");

  infoSection.each(function (index) {
    let sectionObserver = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting === true) {
        infoCounter();
        observer.disconnect(); // Stop observing once the animation starts
      }
    }, options);

    sectionObserver.observe($(this).get(0));
  });

  const infoCounter = () => {
    infoCount.each(function () {
      const $this = $(this);
      const finalValue = parseInt($this.text());
      const incrementTime = 2000; // total time to increment (in milliseconds)
      const intervalTime = 20; // interval time for each increment (in milliseconds)
      const incrementValue = Math.ceil(
        finalValue / (incrementTime / intervalTime)
      );

      let currentValue = 0;
      $this.text(currentValue);

      const interval = setInterval(() => {
        currentValue += incrementValue;
        if (currentValue < finalValue) {
          $this.text(currentValue);
        } else {
          $this.text(finalValue); // ensure the final value is exact
          clearInterval(interval);
        }
      }, intervalTime);
    });
  };
};

cardParallax = () => {
  // For featured Section
  const featuredparent = ".featured__section .parallax__card";
  const featuredHead = ".featured__section .parallax__head";
  const allChild = $(`${featuredparent} > div`);
  const firstChild = $(`${featuredparent} > div:first-child`);
  const secondChild = $(`${featuredparent} > div:nth-child(2)`);
  const thirdChild = $(`${featuredparent} > div:nth-child(3)`);

  // For event section
  const eventparent = ".events__section .parallax__card";
  const eventHead = ".events__section .parallax__head";
  const allChild1 = $(`${eventparent} > div`);
  const secondChild1 = $(`${eventparent} > div:nth-child(2)`);
  const thirdChild1 = $(`${eventparent} > div:nth-child(3)`);
  const lastChild1 = $(`${eventparent} > div:nth-child(4)`);

  function animate(target, startY, easingVal) {
    return `
    target: .${target}; start: 50%; end: 100%; y: ${startY},0;  end: 50vh + 50%; easing: ${easingVal}
  `;
  }

  function updateParallax() {
    if ($(window).width() > 1200) {
      // For featured Section
      $(featuredHead).attr(
        "data-uk-parallax",
        animate("featured__section", "300", "-1")
      );
      $(firstChild).attr(
        "data-uk-parallax",
        animate("featured__section", "400", "0")
      );
      $(secondChild).attr(
        "data-uk-parallax",
        animate("featured__section", "300", "-1")
      );
      $(thirdChild).attr(
        "data-uk-parallax",
        animate("featured__section", "200", "-2")
      );

      // For event section
      $(eventHead).attr(
        "data-uk-parallax",
        animate("events__section", "100", "-1")
      );
      $(secondChild1).attr(
        "data-uk-parallax",
        animate("events__section", "200", "-2")
      );
      $(thirdChild1).attr(
        "data-uk-parallax",
        animate("events__section", "300", "-1")
      );
      $(lastChild1).attr(
        "data-uk-parallax",
        animate("events__section", "400", "0")
      );
    } else {
      // For featured Section
      $(allChild).removeAttr("data-uk-parallax");
      $(featuredHead).removeAttr("data-uk-parallax");

      // For event section
      $(allChild1).removeAttr("data-uk-parallax");
      $(eventHead).removeAttr("data-uk-parallax");
    }
  }

  updateParallax(); // Initial call to set parallax based on window width

  $(window).resize(function () {
    updateParallax(); // Call the function when the window is resized
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
  partnerCarousel();
  numberIncrement();
  cardParallax();
  scrollAnimation();
});
