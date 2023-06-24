let usersList = [];

function addUserToSystem(uName, uPhone, uEmail, uPassword) {
  let newUser = {
    nombre: uName,
    teléfono: uPhone,
    email: uEmail,
    contraseña: uPassword
  };

  /* activar para comprobar que se estén guardando los objetos, hacer un par de nuevos registros y llamar a usersList en la consola del navegador.

  console.log(newUser);

  */

  usersList.push(newUser);
}
