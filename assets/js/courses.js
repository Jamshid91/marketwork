services = new Swiper('.swiper-reviews', {
    loop: false,
    spaceBetween: 10,
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