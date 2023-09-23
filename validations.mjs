/* // Lógica de validación para el nombre
export const validarNombre = (input) => {
    const expresion = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    return expresion.test(input.value);
}

// Lógica de validación para el apellido
export const validarApellido = (input) => {
    const expresion = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    return expresion.test(input.value);
}

// Lógica de validación para el DNI
export const validarDNI = (input) => {
    const expresion = /^[0-9]{8,}$/; // Numeros, hasta 8 digitos
    return expresion.test(input.value);
}

// Lógica de validación para el email
export const validarEmail = (input) => {
    const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return expresion.test(input.value);
}

// Lógica de validación para el usuario
export const validarUsuario = (input) => {
    const expresion = /^[a-zA-Z0-9\_\-]{4,16}$/; // Letras, numeros, guion y guion_bajo
    return expresion.test(input.value);
}

// Lógica de validación para la contraseña
export const validarPassword = (input) => {
    const expresion = /^.{8,12}$/; // 8 a 12 digitos.
    return expresion.test(input.value);
}
 */


import checkpassword from './checkpassword.mjs'


export const inputSingUp = document.querySelectorAll('#registro-form input')
    //Validación
 export   const expresion = {

        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        dni: /^[0-9]{8,}$/, // Numeros, hasta 8 digitos
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        password: /^.{8,12}$/ // 4 a 12 digitos.

    }

  export  const check = {

        nombre: false,
        apellido: false,
        dni: false,
        email: false,
        usuario: false,
        password: false

    }

 export   const checkValidation = (e) => {
        if (e.target.name === 'singup__nombre') validations(expresion.nombre, e.target, 'nombre')
        if (e.target.name === 'singup__apellido')validations(expresion.apellido, e.target, 'apellido')
        if (e.target.name === 'singup__dni') validations(expresion.dni, e.target, 'dni')
        if (e.target.name === 'singup__email') validations(expresion.email, e.target, 'email')
        if (e.target.name === 'singup__usuario') validations(expresion.usuario, e.target, 'usuario')
        if (e.target.name === 'singup__password') {
            validations(expresion.password, e.target, 'password')
            checkpassword();
        }
        if (e.target.name === 'singup__password2') checkpassword()

    }

    export   const validations = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.querySelector(`#singup__${campo}`).classList.add('check-active')
            document.querySelector(`#singup__${campo}`).classList.remove('check-error')
            document.querySelector(`#error_${campo}`).classList.add('error__inactive')
            check[campo] = true;
            console.log('hola if')
        } else {
            document.querySelector(`#singup__${campo}`).classList.remove('check-active')
            document.querySelector(`#singup__${campo}`).classList.add('check-error')
            document.querySelector(`#error_${campo}`).classList.remove('error__inactive')
            check[campo] = false;
            console.log('hola else')
        }
    }
