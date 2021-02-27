const lines = document.querySelectorAll('.line')
const checkboxs = document.querySelectorAll('.checkbox')

var cont = 0

checkboxs.forEach(element => {
    var line = lines[cont]
    cont += 1
    element.addEventListener('click', () => {
        if (line.classList.contains('active')) {
            line.classList.remove('active')
        } else {
            line.classList.add('active')
        }
    })
});