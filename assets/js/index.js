
function resizeFunction(x) {
  if (x.matches) {
  } else {
    specialists = new Swiper('.swiper-specialists', {
      loop: false,
      spaceBetween: 10,
      parallax:true,
      mousewheel: {
      invert: false,
      },
      mousewheelReleaseOnEdges: true,
      breakpoints: {
        576: {
            slidesPerView: 3.1,
        },
        992: {
          slidesPerView: 4.1,
        },
        1200: {
          slidesPerView: 6.1,
        },
    }
    });

    var services = new Swiper('.swiper-services', {
      loop: false,
      spaceBetween: 10,
      initialSlide: 3,
      parallax:true,
      mousewheel: {
      invert: false,
      },
      mousewheelReleaseOnEdges: true,
      navigation: {
        nextEl: '.services-next',
        prevEl: '.services-prev',
      }, 
      breakpoints: {
        576: {
            slidesPerView: 3.1,
        },
        992: {
          slidesPerView: 4.1,
        },
        1200: {
          slidesPerView: 6.1,
        },
    },

    });
  }
}

var x = window.matchMedia("(max-width: 576px)")
resizeFunction(x) 
x.addListener(resizeFunction)


services = new Swiper('.swiper-reviews', {
  loop: false,
  spaceBetween: 10,
  parallax:true,
  mousewheel: {
  invert: false,
  },
  mousewheelReleaseOnEdges: true,
  navigation: {
    nextEl: '.reviews-next',
    prevEl: '.reviews-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
  },
    576: {
        slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
}
});

