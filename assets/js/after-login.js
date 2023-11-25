const replyBtns = document.querySelectorAll('.review-reply__btn'),
      myServices = document.querySelector('.my-services-item-head')

myServices.addEventListener('click', () => {
    myServices.parentElement.classList.toggle('showMyServices')
})

replyBtns.forEach(reply => {
    let count = 0;
    reply.addEventListener('click', () => {
        if(count == 0) {
            reply.innerText = 'Отмена'
            reply.nextElementSibling.classList.remove('d-none')
            return count = 1;
        } else {
            reply.innerText = 'Ответить'
            reply.nextElementSibling.classList.add('d-none')
            return count = 0;
        }
    })
})

recommendations = new Swiper('.swiper-recommendations', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.recommendations-next',
      prevEl: '.recommendations-prev',
    },
    pagination: {
      el: '.recommendations-pagination',
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
          slidesPerView: 2,
          grid: {
              rows: 2,
              fill: 'row'
            },
      },
      992: {
        slidesPerView: 3.5, 
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
      1200: {
        slidesPerView: 5, 
        grid: {
            rows: 2,
            fill: 'row'
          },
      },
  }
});

profileReviews = new Swiper('.swiper-profile-reviews', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.profile-reviews-next',
      prevEl: '.profile-reviews-prev',
    },
    pagination: {
      el: '.profile-reviews-pagination',
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
      768: {
        slidesPerView: 1, 
        grid: {
            rows: 3,
            fill: 'row'
          },
      },
  }
});