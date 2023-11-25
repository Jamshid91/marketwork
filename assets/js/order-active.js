//  Активные заказы 
order_active = new Swiper('.swiper-order-active', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.order-active-next',
      prevEl: '.order-active-prev',
    },
    pagination: {
      el: '.order-active-pagination',
      type: 'fraction',
      renderFraction: function(currentClass, tottalClass) {
          return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
      }
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            grid: {
                rows: 1,
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

// <!-- Выполнено заказы -->
order_completed = new Swiper('.swiper-order-completed', {
  loop: false,
  spaceBetween: 12,
  navigation: {
    nextEl: '.order-completed-next',
    prevEl: '.order-completed-prev',
  },
  pagination: {
    el: '.order-completed-pagination',
    type: 'fraction',
    renderFraction: function(currentClass, tottalClass) {
        return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
    }
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          grid: {
              rows: 1,
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

// <!-- Отменен заказы -->
order_canceled = new Swiper('.swiper-order-canceled', {
  loop: false,
  spaceBetween: 12,
  navigation: {
    nextEl: '.order-canceled-next',
    prevEl: '.order-canceled-prev',
  },
  pagination: {
    el: '.order-canceled-pagination',
    type: 'fraction',
    renderFraction: function(currentClass, tottalClass) {
        return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
    }
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          grid: {
              rows: 1,
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


// <!-- Все заказы -->
order_all = new Swiper('.swiper-order-all', {
  loop: false,
  spaceBetween: 12,
  navigation: {
    nextEl: '.order-all-next',
    prevEl: '.order-all-prev',
  },
  pagination: {
    el: '.order-all-pagination',
    type: 'fraction',
    renderFraction: function(currentClass, tottalClass) {
        return `<span class="' + ${currentClass} +'"></span> `+ ' / ' + `<span class="' + ${tottalClass} +'"></span> ` 
    }
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
          grid: {
              rows: 1,
              fill: 'row'
            },
      },
    576: {
        slidesPerView: 1,
        grid: {
            rows: 3,
            fill: 'row'
          },
    },
}
});



$(document).ready(function() {
  $('.my_order').hide();
  $('.my_order:first-child').show();
  $('.filter__lab').click(function() {
    let pageInfo = $(this).attr('data-radio');
    $('.my_order').hide();
    $('.' + pageInfo).show();
  })
});