// validation.test.js

const { isValidUsername, isValidPassword, isValidAge, isValidEmail, validateUser } = require('./validation');

describe('Validación de Formularios de Registro de Usuarios', () => {

  // Análisis de Valores Frontera para el Nombre de Usuario
  describe('Nombre de Usuario', () => {
    test('Debe ser válido con longitud mínima de 3 caracteres', () => {
      expect(isValidUsername('abc')).toBe(true);
    });

    test('Debe ser válido con longitud máxima de 15 caracteres', () => {
      expect(isValidUsername('abcdefghijklmno')).toBe(true);
    });

    test('Debe ser inválido con longitud menor a 3 caracteres', () => {
      expect(isValidUsername('ab')).toBe(false);
    });

    test('Debe ser inválido con longitud mayor a 15 caracteres', () => {
      expect(isValidUsername('abcdefghijklmnop')).toBe(false);
    });
  });

  // Análisis de Valores Frontera para la Contraseña
  describe('Contraseña', () => {
    test('Debe ser válida con longitud mínima de 8 caracteres', () => {
      expect(isValidPassword('abcd1234')).toBe(true);
    });

    test('Debe ser válida con longitud máxima de 20 caracteres', () => {
      expect(isValidPassword('abcdefghij1234567890')).toBe(true);
    });

    test('Debe ser inválida con longitud menor a 8 caracteres', () => {
      expect(isValidPassword('abc123')).toBe(false);
    });

    test('Debe ser inválida con longitud mayor a 20 caracteres', () => {
      expect(isValidPassword('abcdefghij12345678901')).toBe(false);
    });
  });

  // Análisis de Valores Frontera para la Edad
  describe('Edad', () => {
    test('Debe ser válida en el límite inferior de 18 años', () => {
      expect(isValidAge(18)).toBe(true);
    });

    test('Debe ser válida en el límite superior de 99 años', () => {
      expect(isValidAge(99)).toBe(true);
    });

    test('Debe ser inválida por debajo del límite inferior de 18 años', () => {
      expect(isValidAge(17)).toBe(false);
    });

    test('Debe ser inválida por encima del límite superior de 99 años', () => {
      expect(isValidAge(100)).toBe(false);
    });
  });

  // Análisis de Valores Frontera para el Correo Electrónico
  describe('Correo Electrónico', () => {
    test('Debe ser válido con un formato de correo electrónico correcto', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
    });

    test('Debe ser inválido con un formato de correo electrónico incorrecto', () => {
      expect(isValidEmail('test@com')).toBe(false);
    });
  });

  // Validación Completa del Usuario
  describe('Validación Completa del Usuario', () => {
    test('Debe validar correctamente un usuario con datos válidos', () => {
      const user = {
        username: 'validuser',
        password: 'validpass123',
        age: 25,
        email: 'user@example.com'
      };
      expect(validateUser(user)).toBe(true);
    });

    test('Debe invalidar un usuario con datos inválidos', () => {
      const user = {
        username: 'ab',
        password: 'pass',
        age: 17,
        email: 'invalid@com'
      };
      expect(validateUser(user)).toBe(false);
    });
  });
});

/*Explicación de las Pruebas
1. Análisis de Valores Frontera para el Nombre de Usuario:

    Verifica que el nombre de usuario sea válido con la longitud mínima (3 caracteres) y máxima (15 caracteres).
    Verifica que el nombre de usuario sea inválido con una longitud menor a 3 caracteres y mayor a 15 caracteres.

2. Análisis de Valores Frontera para la Contraseña:

    Verifica que la contraseña sea válida con la longitud mínima (8 caracteres) y máxima (20 caracteres).
    Verifica que la contraseña sea inválida con una longitud menor a 8 caracteres y mayor a 20 caracteres.

3. Análisis de Valores Frontera para la Edad:

    Verifica que la edad sea válida en los límites inferior (18 años) y superior (99 años).
    Verifica que la edad sea inválida por debajo del límite inferior (17 años) y por encima del límite superior (100 años).

4. Análisis de Valores Frontera para el Correo Electrónico:

    Verifica que el correo electrónico sea válido con un formato correcto.
    Verifica que el correo electrónico sea inválido con un formato incorrecto.

5. Validación Completa del Usuario:

    Verifica que un usuario con datos válidos pase todas las validaciones.
    Verifica que un usuario con datos inválidos falle en las validaciones. */