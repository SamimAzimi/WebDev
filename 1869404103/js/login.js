const user = document.getElementById('usr')
const password = document.getElementById('passwd')

const form = document.getElementById('loginForm')

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (user.value === 'admin' && password.value === 'admin') {
        const hide = document.getElementById('navhidden')
        const a = document.createElement('a')
        a.setAttribute('href', './landingPage.html')
        hide.appendChild(a)
        a.click();

    }


})