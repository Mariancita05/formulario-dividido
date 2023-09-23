import {check} from './validations.mjs'


export default function checkpassword() {
    const pass1 = document.getElementById('singup__password').value
    const pass2 = document.getElementById('singup__password2').value

    if (pass1 !== pass2) {
        document.querySelector(`#singup__password2`).classList.remove('check-active')
        document.querySelector(`#singup__password2`).classList.add('check-error')
        document.querySelector(`#error_password2`).classList.add('error-active')
        check['password'] = false;
    } else {
        document.querySelector(`#singup__password2`).classList.add('check-active')
        document.querySelector(`#singup__password2`).classList.remove('check-error')
        document.querySelector(`#error_password2`).classList.remove('error-active')
        check['password'] = true;

    }
}


