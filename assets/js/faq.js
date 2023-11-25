const faqs = document.querySelectorAll('.faq .faq-head')


faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.classList.toggle('showFaq')
    })
})