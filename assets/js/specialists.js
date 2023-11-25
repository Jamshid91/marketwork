const specialistsAll = document.querySelector('.specialists .specialists-all'),
      specialistUsers = document.querySelectorAll('.specialists .specialists-user');

specialistsAll.addEventListener('click', () => {
    specialistUsers.forEach(user => {
        user.style.display = 'flex'
        specialistsAll.remove()
    })
  })


