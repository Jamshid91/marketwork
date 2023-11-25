vacancies = new Swiper('.swiper-vacancies', {
  loop: false,
  spaceBetween: 12,
  navigation: {
    nextEl: '.vacancies-next',
    prevEl: '.vacancies-prev',
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          grid: {
              rows: 6,
              fill: 'row'
            },
      },
    576: {
        slidesPerView: 2,
        grid: {
            rows: 3,
            fill: 'row'
          },
    },
    767: {
      slidesPerView: 3, 
      grid: {
          rows: 3,
          fill: 'row'
        },
    },
}
});