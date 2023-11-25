news = new Swiper('.swiper-my-answers', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.my-answers-next',
      prevEl: '.my-answers-prev',
    },
    pagination: {
      el: '.my-answers-pagination',
      type: 'fraction',
      renderFraction: function(currentClass, tottalClass) {
          return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
      }
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 2,
                fill: 'row'
              },
        },
      576: {
          slidesPerView: 1,
          grid: {
              rows: 2,
              fill: 'row'
            },
      },
  }
});