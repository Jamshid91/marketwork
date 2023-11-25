news = new Swiper('.swiper-news', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.news-next',
      prevEl: '.news-prev',
    },
    pagination: {
      el: '.news-pagination',
      type: 'fraction',
      renderFraction: function(currentClass, tottalClass) {
          return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
      }
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 3,
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
        slidesPerView: 3, 
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
      1200: {
        slidesPerView: 4, 
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
  }
});