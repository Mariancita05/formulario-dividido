
import {check} from './validations.mjs'

export const createLocal = () => {
    if(localStorage.getItem('users') === null){
        let users = JSON.stringify([])
        localStorage.setItem('users', users)
    }
}
createLocal();
let localUser = JSON.parse(localStorage.getItem('users'));
console.log(localUser)

export const formularioSingUp = document.querySelector('#registro-form')

formularioSingUp.addEventListener('submit', (e) => {
    
    e.preventDefault();
    if(check.nombre && check.apellido && check.dni && check.email && check.usuario && check.password){
        let nombre = document.getElementById('singup__nombre').value
        let apellido = document.getElementById('singup__apellido').value
        let dni = document.getElementById('singup__dni').value
        let email = document.getElementById('singup__email').value
        let usuario = document.getElementById('singup__usuario').value
        let password = document.getElementById('singup__password').value
        
        
        let users = {
            nombre,
            apellido,
            dni,
            email,
            usuario,
            password               
        }
        /* console.log(usersDB) */
        localUser.push(users);
        localStorage.setItem('users', JSON.stringify(localUser));
        localUser = JSON.parse(localStorage.getItem('users'))
        localUser.push(users)
        localStorage.setItem('users',JSON.stringify(localUser))
        formularioSingUp.reset();
        document.querySelector('#login').classList.remove('inactive')
        document.querySelector('#registro').classList.add('inactive')
        console.log(localUser, 'localUser')
    }
})


formularioSingUp.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("singup__usuario").value;
    const password = document.getElementById("singup__password").value;
    const sing = document.getElementById('singUp')
    sing.style.display = 'none'
    document.getElementById('login').classList.remove("inactive")

    // ... (obtener otros campos)

    // Almacenar en Local Storage (ejemplo)
    const userData = { usuario, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Datos registrados exitosamente");
    /*         window.location.href = "login.html"; // Redirigir a la página login.html */
});
