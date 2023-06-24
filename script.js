document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registrationForm = document.getElementById("registrationForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    /*-----------verificación de los datos almacenados en Local Storage-----------*/
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (email === savedEmail && password === savedPassword) {
      Swal.fire({
        icon: "success",
        title: "¡Inicio de sesión exitoso!",
        text: "Bienvenido de nuevo a Fluffy",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {});
    } else {
      Swal.fire({
        icon: "error",
        title: "¡Error de inicio de sesión!",
        text: "El correo o la contaseña son incorrectos. Por favor, vuelva a intentarlo.",
        confirmButtonText: "Aceptar",
      });
    }
  });

  /*-----------valiadación de los datos ingresados y almacenamiento en LocalStorage-----------*/
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("nombreInput").value;
    const phone = document.getElementById("telefonoInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("contraseñaInput").value;
    const terms = document.getElementById("terms").value;
    
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    Swal.fire({
      icon: "success",
      title: "¡Registro exitoso!",
      text: "Usuario registrado exitosamente",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => {});
  });

  /*-----------captura de datos y envío al archivo de nuevos usuarios: users.js-----------*/
  document.querySelector("#btnSaveUser").addEventListener("click", saveUser);
  function saveUser() {
    let sName = document.querySelector("#nombreInput").value,
      sPhone = document.querySelector("#telefonoInput").value,
      sEmail = document.querySelector("#emailInput").value,
      sPassword = document.querySelector("#contraseñaInput").value;

    addUserToSystem(sName, sPhone, sEmail, sPassword);
  }
});
