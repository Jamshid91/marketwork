const paymentBtns = document.querySelectorAll('.rates-item__btn'),
      paymentPopUp = document.querySelector('.popUp-payment')

paymentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        paymentPopUp.classList.remove('d-none')
    })
})