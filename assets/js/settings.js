const   uploadLogo = document.getElementById('upload-logo'),
        settingEmail = document.getElementById('setting-email'),
        settingName = document.getElementById('setting-name'),
        settingPhone = document.getElementById('setting-phone'),
        companyName = document.getElementById('company-name'),
        saveSetting = document.querySelector('.save-setting');

uploadLogo.addEventListener('change', (e) => {
          e.target.parentElement.children[1]
      if(e.target.files.length > 0) {
        let src = URL.createObjectURL(e.target.files[0]);
        let addAvatar = e.target.parentElement.children[2];
        addAvatar.src = src;
        addAvatar.classList.remove('d-none');
        uploadLogo.parentElement.style.border = '1px solid transparent'
        uploadLogo.parentElement.parentElement.children[2].classList.add('success') 
      }
});

saveSetting.addEventListener('click', () => {
  checkInputsSeeting()

  let successUploadLogo = uploadLogo.parentElement.parentElement.children[2].classList;
  let successSettingName = settingName.parentElement.children[2].classList;
  let successSettingEmail = settingEmail.parentElement.children[2].classList;
  let succesScompanyName = companyName.parentElement.children[2].classList;
  let succesSettingPhone = settingPhone.parentElement.children[2].classList;

  if(successUploadLogo == 'success' && successSettingName == 'success' && successSettingEmail == 'success' && succesScompanyName == 'success' && succesSettingPhone == 'success') {
    saveSetting.type = 'submit'   
  }
});

function checkInputsSeeting() {
  const uploadLogoValue = uploadLogo.value.trim();
  const settingNameValue = settingName.value.trim();
  const settingEmailValue = settingEmail.value.trim();
  const settingPhoneValue = settingPhone.value.trim();
  const companyNameValue = companyName.value.trim();

  if(settingEmailValue === '') {
    setErrorFor(settingEmail, '1px solid #E47169')
  }
  else if(!isEmail(settingEmailValue)) {
    setErrorFor(settingEmail, '1px solid #E47169')
  }
   else {
    setSuccesFor(settingEmail)
    settingEmail.parentElement.children[2].classList.add('success')
  }

  if(uploadLogoValue === '') {
    uploadLogo.parentElement.classList.add('inputError');
    uploadLogo.parentElement.style.border = '1px solid #E47169'
  } else {
  }

  if(settingNameValue === '' || settingNameValue.length <= 2) {
    setErrorFor(settingName, '1px solid #E47169')
  } else {
    setSuccesFor(settingName)
    settingName.parentElement.children[2].classList.add('success')
  }

  if(settingPhoneValue === '') {
    setErrorFor(settingPhone, '1px solid #E47169')
  } else {
    setSuccesFor(settingPhone)
    settingPhone.parentElement.children[2].classList.add('success')
  }
  
  if(companyNameValue === '' || companyNameValue.length < 10) {
    setErrorFor(companyName, '1px solid #E47169')
  } else {
    setSuccesFor(companyName)
    companyName.parentElement.children[2].classList.add('success')
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input, border) {
  input.style.border = border
}

function setSuccesFor(input) {
  input.style.border = `1px solid #366CF6`;
} 

settingEmail.addEventListener('keypress', () => {
  if(isEmail(settingEmail.value.trim())) {
    settingEmail.style.border = `1px solid #366CF6`;
  }
});

settingName.addEventListener('keypress', () => {
  settingName.style.border = `1px solid #366CF6`;
});

settingPhone.addEventListener('keypress', () => {
  settingPhone.style.border = `1px solid #366CF6`;
});

companyName.addEventListener('keypress', () => {
  companyName.style.border = `1px solid #366CF6`;
});


