const showCompany = document.querySelectorAll('.about-company-head');


showCompany.forEach(show => {
  show.addEventListener('click', () => {
    show.parentElement.classList.toggle('showCompany')
  });
})
        