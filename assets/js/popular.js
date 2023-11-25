popular = new Swiper('.swiper-popular', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.popular-next',
      prevEl: '.popular-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
      576: {
          slidesPerView: 2.5,
      },
      992: {
        slidesPerView: 4.5,
      },
      1200: {
        slidesPerView: 6,
      },
  }
  });