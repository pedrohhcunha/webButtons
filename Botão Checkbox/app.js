const btn = document.querySelector('#btnCheckbox')

function modoNoturno () {
    if (btn.classList.contains('active')) {
        btn.classList.remove('active')
    } else {
        btn.classList.add('active')
    }
}