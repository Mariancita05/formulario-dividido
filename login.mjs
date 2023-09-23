/* export const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginUsuario = document.getElementById("login-usuario").value;
    const loginPassword = document.getElementById("login-password").value;

    // Obtener los datos almacenados
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData && storedUserData.usuario === loginUsuario) {
        alert("Inicio de sesión exitoso");
        window.location.href = "home.html"; // Redirigir a la página home.html

    } else {
        alert("Credenciales incorrectas");
    }
}); */

const formularioSingUp = document.querySelector("#registro-form");
//Enviar datos para poder registrarse
formularioSingUp.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.getElementById("singup__usuario").value;
  const password = document.getElementById("singup__password").value;
  const sing = document.getElementById("singUp");
  sing.style.display = "none";
  document.getElementById("login").classList.remove("inactive");
});

document.querySelector('#submit-login').addEventListener("submit", function (event) {
  event.preventDefault();

  const loginUsuario = document.getElementById("login-usuario").value;
  const loginPassword = document.getElementById("login-password").value;

  // Obtener los datos almacenados
  const storedUserData = JSON.parse(localStorage.getItem("users"));
  const usuarioPrueba = storedUserData.find(
    (user) => user.usuario == loginUsuario
  );
  console.log(usuarioPrueba);
  if (usuarioPrueba.password === loginPassword &&
    usuarioPrueba.usuario === loginUsuario) {
    alert("Inicio de sesión exitoso");
    window.location.href = "home.html"; // Redirigir a la página home.html
  } else {
    alert("Credenciales incorrectas");
  }
});


/* 
  // ... (obtener otros campos)

  // Almacenar en Local Storage (ejemplo)
  const userData = { usuario, password };
  localStorage.setItem("userData", JSON.stringify(userData));

  alert("Datos registrados exitosamente");
  //        window.location.href = "login.html"; // Redirigir a la página login.html
});  */
