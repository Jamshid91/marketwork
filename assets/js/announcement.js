const   popUpAnnouncementBtn = document.querySelector('.popUp-announcement'),
        userPhoto = document.getElementById('upload'),
        serviceName = document.getElementById('service-name'),
        message = document.getElementById('message'),
        sum = document.getElementById('sum'),
        submitBtn = document.querySelector('.popUp-announcement .form__submit'),
        selects = document.querySelectorAll('.select .select-head'),
        selectList = document.querySelectorAll('.select .select-list'),
        selectListSelect = document.querySelector('.specialists-slect'),
        servicesSelect = document.querySelector('.services-slect'),
        checkSpecialist = document.getElementById('specialist'),
        checkCustomer = document.getElementById('customer'),
        announcementBtn = document.querySelectorAll('.announcement__btn');



checkSpecialist.addEventListener('change', () => {
  selectListSelect.classList.remove('d-none')
  servicesSelect.classList.add('d-none')
});

checkCustomer.addEventListener('change', () => {
  selectListSelect.classList.add('d-none')
  servicesSelect.classList.remove('d-none')
});

announcementBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popUpAnnouncementBtn.classList.remove('d-none')
    })
});

selects.forEach(select => {
  select.addEventListener('click', () => {
    select.nextElementSibling.classList.toggle('showSelect')
  });
});

selectList.forEach(list => {
  list.addEventListener('click', () => {
    list.parentElement.previousElementSibling.children[0].textContent = list.textContent;
    list.parentElement.classList.toggle('showSelect')
  })
});

userPhoto.addEventListener('change', (e) => {
          e.target.parentElement.children[1]
      if(e.target.files.length > 0) {
        let src = URL.createObjectURL(e.target.files[0]);
        let addAvatar = e.target.parentElement.children[2];
        addAvatar.src = src;
        addAvatar.classList.remove('d-none');
        userPhoto.parentElement.style.border = '1px solid transparent'
        userPhoto.parentElement.parentElement.children[2].classList.add('success') 
      }
});

submitBtn.addEventListener('click', () => {
  checkInputs()

  let successPhoto = userPhoto.parentElement.parentElement.children[2].classList;
  let successName = serviceName.parentElement.children[2].classList;
  let successSum = sum.parentElement.children[2].classList;
  let successMessage = message.parentElement.children[2].classList;

  if(successPhoto == 'success' && successName == 'success' && successSum == 'success' && successMessage == 'success') {
    submitBtn.type = 'submit'   
  }
});

function checkInputs() {
  const userPhotoValue = userPhoto.value.trim();
  const serviceNameValue = serviceName.value.trim();
  const sumValue = sum.value.trim();
  const messageValue = message.value.trim();


  if(userPhotoValue === '') {
    userPhoto.parentElement.classList.add('inputError');
    userPhoto.parentElement.style.border = '1px solid #E47169'
  } else {
  }

  if(serviceNameValue === '' || serviceNameValue.length <= 2) {
    setErrorFor(serviceName, '1px solid #E47169')
  } else {
    setSuccesFor(serviceName)
    serviceName.parentElement.children[2].classList.add('success')
  }

  if(sumValue === '') {
    setErrorFor(sum, '1px solid #E47169')
  } else {
    setSuccesFor(sum)
    sum.parentElement.children[2].classList.add('success')
  }
  
  if(messageValue === '' || messageValue.length < 10) {
    setErrorFor(message, '1px solid #E47169')
  } else {
    setSuccesFor(message)
    message.parentElement.children[2].classList.add('success')
  }
}

function setErrorFor(input, border) {
  input.style.border = border
}

function setSuccesFor(input) {
  input.style.border = `1px solid #366CF6`;
} 

serviceName.addEventListener('keypress', () => {
  serviceName.style.border = `1px solid #366CF6`;
});

sum.addEventListener('keypress', () => {
  sum.style.border = `1px solid #366CF6`;
});

message.addEventListener('keypress', () => {
  message.style.border = `1px solid #366CF6`;
});


