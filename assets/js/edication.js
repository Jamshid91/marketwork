education = new Swiper('.swiper-education', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.education-next',
      prevEl: '.education-prev',
    },
    pagination: {
      el: '.education-pagination',
      type: 'fraction',
      renderFraction: function(currentClass, tottalClass) {
          return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
      }
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
              rows: 2,
              fill: 'row'
            },
      },
      992: {
        slidesPerView: 4, 
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
      1200: {
        slidesPerView: 6, 
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
  }
});