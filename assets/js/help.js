question = new Swiper('.swiper-question', {
    loop: false,
    slidesPerView: 1,
    grid: {
        rows: 2,
        fill: 'row'
      },
    navigation: {
      nextEl: '.question-next',
      prevEl: '.question-prev',
    },
    pagination: {
      el: '.question-pagination',
      type: 'fraction',
      renderFraction: function(currentClass, tottalClass) {
          return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
      }
    },
});