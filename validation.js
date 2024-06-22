// Prueba de Caja Negra - Análisis de valor frontera o valor Límte

function isValidUsername(username) {
    return typeof username === 'string' && username.length >= 3 && username.length <= 15;
  }
  
  function isValidPassword(password) {
    return typeof password === 'string' && password.length >= 8 && password.length <= 20;
  }
  
  function isValidAge(age) {
    return typeof age === 'number' && age >= 18 && age <= 99;
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validateUser(user) {
    const { username, password, age, email } = user;
    return (
      isValidUsername(username) &&
      isValidPassword(password) &&
      isValidAge(age) &&
      isValidEmail(email)
    );
  }
  
  module.exports = { isValidUsername, isValidPassword, isValidAge, isValidEmail, validateUser };
  
  /*
Escenario: Validación de Formularios de Registro de Usuarios
Requisitos:

Nombre de usuario: Debe tener entre 3 y 15 caracteres.
Contraseña: Debe tener entre 8 y 20 caracteres.
Edad: Debe ser un número entre 18 y 99.
Correo electrónico: Debe ser un correo electrónico válido.
 */