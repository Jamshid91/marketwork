const   userPhotoEdit = document.getElementById('editPhoto'),
        removePhoto = document.querySelector('.remove-photo'),
        userNameEdit = document.getElementById('editName'),
        cityEdit = document.querySelector('.input-box .select-active'),
        messageEdit = document.getElementById('user-about'),
        editPhone = document.getElementById('editPhone'),
        saveProfile = document.querySelector('.save-profile');

    userPhotoEdit.addEventListener('change', (e) => {
          e.target.parentElement.children[1]
      if(e.target.files.length > 0) {
        let src = URL.createObjectURL(e.target.files[0]);
        let addAvatar = e.target.parentElement.parentElement.children[0].children[0];
        addAvatar.src = src;
        addAvatar.classList.remove('d-none');
        userPhotoEdit.parentElement.parentElement.children[0].style.border = '1px solid transparent'
        userPhotoEdit.parentElement.children[2].classList.add('success') 
      }
});
removePhoto.addEventListener('click', () => {
  let img = removePhoto.parentElement.children[0].children[0]
  img.classList.add('d-none');
  img.src = ''
  userPhotoEdit.value = ''
})

selectList.forEach(list => {
    list.addEventListener('click', () => {
        cityEdit.parentElement.children[2].classList.add('success');
        cityEdit.parentElement.style.border = '1px solid #366CF6'
    })
  });

saveProfile.addEventListener('click', () => {
  checkInputsEdit()

  let successPhotoEdit = userPhotoEdit.parentElement.parentElement.children[2].classList;
  let successNameEdit = userNameEdit.parentElement.children[2].classList;
  let successCityEdit = cityEdit.parentElement.children[2].classList;
  let successMessageEdit = messageEdit.parentElement.children[2].classList;
  let successPhoneEdit = editPhone.parentElement.children[2].classList;

  if(successPhotoEdit == 'success' && successNameEdit == 'success' && successCityEdit == 'success' && successMessageEdit == 'success' && successPhoneEdit == 'success') {
    saveProfile.type = 'submit'   
  }
});

function checkInputsEdit() {
  const userPhotoEditValue = userPhotoEdit.value.trim();
  const userNameEditValue = userNameEdit.value.trim();
  const editPhoneValue = editPhone.value.trim();
  const messageEditValue = messageEdit.value.trim();


  if(userPhotoEditValue === '') {
    userPhotoEdit.parentElement.classList.add('inputError');
    userPhotoEdit.parentElement.parentElement.children[0].style.border = '1px solid #E47169'
  }

  if(cityEdit.textContent == 'Выбрать регион') {
    cityEdit.parentElement.children[2].classList.add('inputError');
    cityEdit.parentElement.style.border = '1px solid #E47169'
  } else {
    cityEdit.parentElement.children[2].classList.add('success');
    cityEdit.parentElement.style.border = '1px solid #366CF6'
  }

  if(userNameEditValue === '' || userNameEditValue.length <= 2) {
    setErrorFor(userNameEdit, '1px solid #E47169')
  } else {
    setSuccesFor(userNameEdit)
    userNameEdit.parentElement.children[2].classList.add('success')
  }

  if(editPhoneValue === '') {
    setErrorFor(editPhone, '1px solid #E47169')
  } else {
    setSuccesFor(editPhone)
    editPhone.parentElement.children[2].classList.add('success')
  }
  
  if(messageEditValue === '' || messageEditValue.length < 10) {
    setErrorFor(messageEdit, '1px solid #E47169')
  } else {
    setSuccesFor(messageEdit)
    messageEdit.parentElement.children[2].classList.add('success')
  }
}

function setErrorFor(input, border) {
  input.style.border = border
}

function setSuccesFor(input) {
  input.style.border = `1px solid #366CF6`;
} 

userNameEdit.addEventListener('keypress', () => {
    userNameEdit.style.border = `1px solid #366CF6`;
});

editPhone.addEventListener('keypress', () => {
    if(editPhone.value.length > 16) {
        editPhone.style.border = `1px solid #366CF6`;
    }
})

messageEdit.addEventListener('keypress', () => {
    messageEdit.style.border = `1px solid #366CF6`;
});


