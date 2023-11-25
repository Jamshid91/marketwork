const menuShowBtn = document.querySelector('.menu-btn'),
      menu= document.querySelector('.menu'),
      notificationsBtn = document.querySelector('.header-notifications__btn'),    
      myProfilBtn = document.querySelector('.header-my-profile__btn'),    
      cityBtn = document.querySelectorAll('.header-address__btn'),
      cityPopUp = document.querySelector('.popUp.city'),
      popUp = document.querySelectorAll('.popUp'),
      activeCity = document.querySelectorAll('.header-address__active'),
      popUpClose = document.querySelectorAll('.popUp .popUp__close'),
      cityPopUpLists = document.querySelectorAll('.popUp.city ul li')
      body= document.querySelector('body'),
      popUpLogin = document.querySelector('.popUp-login'),
      loginBtn = document.querySelector('.login__btn'),
      formLogin = document.querySelector('.form-login'),
      formRegisterPhone = document.querySelector('.form-registration-phone'),
      formCode = document.querySelector('.form-code'),
      formRegis = document.querySelector('.form-registration'),
      loginEmail = document.querySelector('.form-login #email'),
      loginPass = document.querySelector('.form-login #pass'),
      regisEmail = document.querySelector('.form-registration #email1'),
      regisPass = document.querySelector('.form-registration #pass1'),
      regisPassRepeat = document.querySelector('.form-registration #pass2'),
      phoneNum = document.querySelector('.form-registration-phone #phone'),
      addCode = document.querySelector('.form-code #code'),
      showPass = document.querySelectorAll('.show-pass'),
      forgotPassword = document.querySelector('.forgot-password'),
      register = document.querySelector('.register'),
      comeInLogin = document.querySelector('.have-account .come-in'),
      loginSubmit = document.querySelector('.form-login .form__btn'),
      toGetCode = document.querySelector('.form-registration-phone .form__btn'),
      openRegister = document.querySelector('.form-code .form__btn'),
      submitRegister = document.querySelector('.form-registration .form__btn');


notificationsBtn.addEventListener('click', () => {
  notificationsBtn.parentElement.classList.toggle('showNotifications')
});

myProfilBtn.addEventListener('click', () => {
  myProfilBtn.parentElement.classList.toggle('showMyprofile')
});


document.addEventListener("click",(function(e){
  notificationsBtn.parentElement.contains(e.target)||(notificationsBtn.parentElement.classList.remove('showNotifications'))
}));

document.addEventListener("click",(function(e){
  myProfilBtn.parentElement.contains(e.target)||(myProfilBtn.parentElement.classList.remove('showMyprofile'))
}));

loginBtn.addEventListener('click', () => {
  popUpLogin.classList.remove('d-none')
});

register.addEventListener('click', () => {
  formLogin.classList.add('d-none');
  formRegisterPhone.classList.remove('d-none');
});

comeInLogin.addEventListener('click', () => {
  formLogin.classList.remove('d-none');
  formRegisterPhone.classList.add('d-none');
});

// view password
showPass.forEach(show => {
  show.addEventListener('click', () => {
    let elem = show.previousElementSibling;
    if(elem.type === 'password') {
      elem.type = 'text';
      show.classList.add('showPass')
    } else {
      elem.type = 'password';
      show.classList.remove('showPass')
    }
  });
})



// login
loginSubmit.addEventListener('click', () => {
      checkInputsLogin()
      let successEmail = loginEmail.parentElement.children[2].classList;
      let successPass = loginPass.parentElement.children[3].classList;
    
      if(successEmail == 'success' && successPass == 'success') {
        loginSubmit.type = 'submit'   
      }
    });
// login
    function checkInputsLogin() {
      const loginEmailValue = loginEmail.value.trim();
      const loginPassValue = loginPass.value.trim();
    
      if(loginEmailValue === '') {
        setErrorFor(loginEmail, '1px solid #E47169')
      }
       else {
        setSuccesFor(loginEmail)
        loginEmail.parentElement.children[2].classList.add('success')
      }
      
      if(loginPassValue === '') {
        setErrorFor(loginPass, '1px solid #E47169')
      } else {
        setSuccesFor(loginPass)
        loginPass.parentElement.children[3].classList.add('success')
      }
    }

    loginEmail.addEventListener('keypress', () => {
      loginEmail.style.border = `1px solid #366CF6`;
    })

    // phone
  toGetCode.addEventListener('click', () => {
  checkInputsPhone()
  let successphoneNum = phoneNum.parentElement.children[2].classList;

  if(successphoneNum == 'success') {
    // toGetCode.type = 'submit'   
  formCode.classList.remove('d-none');
  formRegisterPhone.classList.add('d-none');
  }
});
// phone
function checkInputsPhone() {
  const phoneNumlValue = phoneNum.value.trim();
  
  if(phoneNumlValue === '') {
    setErrorFor(phoneNum, '1px solid #E47169')
  } else {
    setSuccesFor(phoneNum)
    phoneNum.parentElement.children[2].classList.add('success')
  }
}

    // code
    openRegister.addEventListener('click', () => {
      checkInputsCode()
      let successaddCode = addCode.parentElement.children[2].classList;
    
      if(successaddCode == 'success') {
        // openRegister.type = 'submit'   
      formCode.classList.add('d-none');
      formRegis.classList.remove('d-none');
      }
    });
    // code
    function checkInputsCode() {
      const addCodeValue = addCode.value.trim();
      
      if(addCodeValue === '') {
        setErrorFor(addCode, '1px solid #E47169')
      } else {
        setSuccesFor(addCode)
        addCode.parentElement.children[2].classList.add('success')
      }
    }

// Registration
submitRegister.addEventListener('click', () => {
  checkInputsRegis()
  let successRegisEmail = regisEmail.parentElement.children[2].classList;
  let successRegisPass = regisPass.parentElement.children[3].classList;
  let successRegisPassRepeat = regisPassRepeat.parentElement.children[3].classList;

  if(successRegisEmail == 'success' && successRegisPass == 'success' && successRegisPassRepeat == 'success') {
    submitRegister.type = 'submit'   
  }
});
// Registration
function checkInputsRegis() {
  const regisEmailValue = regisEmail.value.trim();
  const regisPassValue = regisPass.value.trim();
  const regisPassRepeatValue = regisPassRepeat.value.trim();

  if(regisEmailValue === '') {
    setErrorFor(regisEmail, '1px solid #E47169')
  }
  else if(!isEmail(regisEmailValue)) {
    setErrorFor(regisEmail, '1px solid #E47169')
  }
   else {
    setSuccesFor(regisEmail)
    regisEmail.parentElement.children[2].classList.add('success')
  }
  
  if(regisPassValue === '') {
    setErrorFor(regisPass, '1px solid #E47169')
  } else {
    setSuccesFor(regisPass)
    regisPass.parentElement.children[3].classList.add('success')
  }
  if(regisPassRepeatValue === '' || regisPassRepeatValue != regisPassValue) {
    setErrorFor(regisPassRepeat, '1px solid #E47169')
  }
  else {
    setSuccesFor(regisPassRepeat)
    regisPassRepeat.parentElement.children[3].classList.add('success')
  }
}
    
    function setErrorFor(input, border) {
      input.style.border = border
    }
    
    function setSuccesFor(input) {
      input.style.border = `1px solid #366CF6`;
    } 




// menu
menuShowBtn.addEventListener('click', () => {
    menu.classList.toggle('showMenu');
    menuShowBtn.classList.toggle('clickedMenu')
    body.classList.toggle('bodyStopScroll');
});

// city
cityBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        cityPopUp.classList.remove('d-none')
    });
})

  popUpClose.forEach(close => {
    close.addEventListener('click', () => {
      close.parentElement.classList.add('popUpHide')
      setTimeout(() => {
        close.parentElement.parentElement.classList.add('d-none')
        close.parentElement.classList.remove('popUpHide')
      }, 450);
    })
  })
  
  window.addEventListener('click', (e) => {
    popUp.forEach(popup => {
      if(e.target == popup) {
        popup.children[0].classList.add('popUpHide')
        setTimeout(() => {
          popup.children[0].parentElement.classList.add('d-none')
          popup.children[0].classList.remove('popUpHide')
        }, 450);
    }
    })
  });

  cityPopUpLists.forEach(city => {
    city.addEventListener('click', () => {
        activeCity.forEach(active => {
            active.textContent = city.textContent;
        })
        cityPopUp.classList.add('d-none')
    })
  });
  
  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

// input mask
$(".phone").inputmask({"mask": "+7(999) 999-99-99"});
$("#code").inputmask({"mask": "9999"});
