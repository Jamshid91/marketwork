const   newUserPhoto = document.getElementById('upload-new'),
        newServiceName = document.getElementById('new-service-name'),
        newMessage = document.getElementById('new-message'),
        newSum = document.getElementById('new-sum'),
        newSubmitBtn = document.querySelector('.new-service .form__submit'),
        newSelectListSelect = document.querySelector('.new-service .specialists-slect'),
        newServicesSelect = document.querySelector('.new-service .services-slect'),
        newCheckSpecialist = document.getElementById('new-specialist'),
        newCheckCustomer = document.getElementById('new-customer');



newCheckSpecialist.addEventListener('change', () => {
  newSelectListSelect.classList.remove('d-none')
  newServicesSelect.classList.add('d-none')
});

newCheckCustomer.addEventListener('change', () => {
  newSelectListSelect.classList.add('d-none')
  newServicesSelect.classList.remove('d-none')
});


newUserPhoto.addEventListener('change', (e) => {
          e.target.parentElement.children[1]
      if(e.target.files.length > 0) {
        let src = URL.createObjectURL(e.target.files[0]);
        let addAvatar = e.target.parentElement.children[2];
        addAvatar.src = src;
        addAvatar.classList.remove('d-none');
        newUserPhoto.parentElement.style.border = '1px solid transparent'
        newUserPhoto.parentElement.parentElement.children[2].classList.add('success') 
      }
});

newSubmitBtn.addEventListener('click', () => {
  checkInputs()

  let  successNewPhoto = newUserPhoto.parentElement.parentElement.children[2].classList;
  let successNewName = newServiceName.parentElement.children[2].classList;
  let successNewSum = newSum.parentElement.children[2].classList;
  let successNewMessage = newMessage.parentElement.children[2].classList;

  if( successNewPhoto == 'success' && successNewName == 'success' && successNewSum == 'success' && successNewMessage == 'success') {
    newSubmitBtn.type = 'submit'   
  }
});

function checkInputs() {
  const newUserPhotoValue = newUserPhoto.value.trim();
  const newServiceNameValue = newServiceName.value.trim();
  const newSumValue = newSum.value.trim();
  const newMessageValue = newMessage.value.trim();


  if(newUserPhotoValue === '') {
    newUserPhoto.parentElement.classList.add('inputError');
    newUserPhoto.parentElement.style.border = '1px solid #E47169'
  } else {
  }

  if(newServiceNameValue === '' || newServiceNameValue.length <= 2) {
    setErrorFor(newServiceName, '1px solid #E47169')
  } else {
    setSuccesFor(newServiceName)
    newServiceName.parentElement.children[2].classList.add('success')
  }

  if(newSumValue === '') {
    setErrorFor(newSum, '1px solid #E47169')
  } else {
    setSuccesFor(newSum)
    newSumValue.parentElement.children[2].classList.add('success')
  }
  
  if(newMessageValue === '' || newMessageValue.length < 10) {
    setErrorFor(newMessage, '1px solid #E47169')
  } else {
    setSuccesFor(newMessage)
    newMessage.parentElement.children[2].classList.add('success')
  }
}

function setErrorFor(input, border) {
  input.style.border = border
}

function setSuccesFor(input) {
  input.style.border = `1px solid #366CF6`;
} 

newServiceName.addEventListener('keypress', () => {
  newServiceName.style.border = `1px solid #366CF6`;
});

newSum.addEventListener('keypress', () => {
  newSum.style.border = `1px solid #366CF6`;
});

newMessage.addEventListener('keypress', () => {
  newMessage.style.border = `1px solid #366CF6`;
});


