
function resizeFunctionAbout(x) {
    if (x.matches) {
    } else {
        aboutOffers = new Swiper('.about-offers-swiper', {
        loop: false,
        spaceBetween: 12,
        breakpoints: {
          576: {
              slidesPerView: 1.5,
          },
          992: {
            slidesPerView: 1.9,
          },
          1200: {
            slidesPerView: 2.5,
          },
      }
      });
    }
  }
  
  var x = window.matchMedia("(max-width: 576px)")
  resizeFunctionAbout(x) 
  x.addListener(resizeFunctionAbout);


  const registerBtn = document.querySelector('.register__btn');

  registerBtn.addEventListener('click', () => {
    popUpLogin.children[0].children[1].classList.add('d-none')
    popUpLogin.children[0].children[2].classList.remove('d-none')
    popUpLogin.classList.remove('d-none');
  });
        