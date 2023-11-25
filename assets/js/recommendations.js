const likeBtn = document.querySelectorAll('.like__btn'),
      checkLabel = document.querySelectorAll('.recommendations-card-check')

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
            slidesPerView: 1.5,
            grid: {
                rows: 1,
                fill: 'row'
              },
        },
      576: {
          slidesPerView: 2.5,
          grid: {
              rows: 1,
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