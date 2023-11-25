const serviceCatalogAll = document.querySelector('.service-catalog .service-catalog-all'),
serviceCatalogs = document.querySelectorAll('.service-catalog .recommendations-card');

serviceCatalogAll.addEventListener('click', () => {
    serviceCatalogs.forEach(catalog => {
        catalog.style.display = 'flex'
        serviceCatalogAll.remove()
    })
  })


