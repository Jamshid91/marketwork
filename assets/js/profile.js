const likeBtn = document.querySelectorAll('.like__btn'),
      checkLabel = document.querySelectorAll('.recommendations-card-check'),
      showPhohne = document.querySelector('.profile-phone__btn')


showPhohne.addEventListener('click', () => {
    showPhohne.innerHTML = 'Контакты'
    showPhohne.nextElementSibling.classList.remove('d-none')
})

likeBtn.forEach(like => {
    like.addEventListener('click', () => {
        like.classList.toggle('liked')
    });
});

checkLabel.forEach(lab => {
    let check = 0;
    lab.addEventListener('click', () => {
        if(check == 0) {
            lab.children[0].removeAttribute('checked');
            return check = 1
        } else {
            lab.children[0].setAttribute('checked', 'checked');
            return check = 0
        }
    })
});


recommendations = new Swiper('.swiper-recommendations', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.recommendations-next',
      prevEl: '.recommendations-prev',
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
          slidesPerView: 2.5,
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

profileReviews = new Swiper('.profile-reviews', {
    loop: false,
    spaceBetween: 12,
    navigation: {
      nextEl: '.profile-review-next',
      prevEl: '.profile-review-prev',
    },
    pagination: {
      el: '.profile-review-pagination',
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
      992: {
        slidesPerView: 1, 
        grid: {
            rows: 3,
            fill: 'row'
          },
      },
  }
});