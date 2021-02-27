const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click', () => {
    if (checkbox.classList.contains('active')) {
        checkbox.classList.remove('active')
    } else {
        checkbox.classList.add('active')
    }
})