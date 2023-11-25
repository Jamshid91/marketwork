const filters = document.querySelectorAll('.filters .filter-head'),
      filterOptions = document.querySelectorAll('.filters .filter-options li');


filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filter.parentElement.classList.toggle('showFilter')
    });
});

filterOptions.forEach(option => {
    option.addEventListener('click', () => {
      let active =  option.parentElement.parentElement.children[0].children[0]
      active.textContent = option.textContent
      option.parentElement.parentElement.classList.toggle('showFilter')
    });
});

document.addEventListener("click",(function(e){
    filters.forEach(filter => {
    filter.parentElement.contains(e.target)||(filter.parentElement.classList.remove('showFilter'))
    });
}));