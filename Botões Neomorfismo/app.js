const btns = document.querySelectorAll('.btn')

btns.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('active')) {
            element.classList.remove('active')
        } else {
            element.classList.add('active')
        }
    })
});