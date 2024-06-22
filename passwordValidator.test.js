
const isValidPassword = require('./passwordValidator');

describe('Password Validation', () => {
    // 1. Cuando la contraseña supera 10 caracteres, retorna false
    test('Cuando la contraseña supera 10 caracteres, retorna false', () => {
        expect(isValidPassword('Aa1@12345678')).toBe(false);
        expect(isValidPassword('Aa1@123456789')).toBe(false);
    });

    // 2. Cuando la contraseña es menor a 8 caracteres, retorna false
    test('Cuando la contraseña es menor a 8 caracteres, retorna false', () => {
        expect(isValidPassword('Aa1@12')).toBe(false); // 6 caracteres
        expect(isValidPassword('Aa1@123')).toBe(false); // 7 caracteres
    });

    // 3. Cuando la contraseña tiene entre 8 y 10 caracteres, retorna true si cumple con todas las condiciones
    test('Cuando la contraseña tiene entre 8 y 10 caracteres y cumple con todas las condiciones, retorna true', () => {
        expect(isValidPassword('Aa1@1234')).toBe(true); // 8 caracteres
        expect(isValidPassword('Aa1@12345')).toBe(true); // 9 caracteres
        expect(isValidPassword('Aa1@123456')).toBe(true); // 10 caracteres
    });

    // 4. Verificar que exista letra mayúscula
    test('Cuando la contraseña no tiene letra mayúscula, retorna false', () => {
        expect(isValidPassword('aa1@1234')).toBe(false);
        expect(isValidPassword('aa1@abcd')).toBe(false);
    });

    // 5. Verificar que exista alguna letra (mínimo 2 letras)
    test('Cuando la contraseña no tiene al menos dos letras, retorna false', () => {
        expect(isValidPassword('A1@234567')).toBe(false); // 1 letra
        expect(isValidPassword('123@56789')).toBe(false); // 0 letras
    });

    // 6. Verificar que exista algún caracter especial
    test('Cuando la contraseña no tiene caracter especial, retorna false', () => {
        expect(isValidPassword('Aa112345')).toBe(false);
        expect(isValidPassword('Aa1123Bb')).toBe(false);
    });

    // 7. Verificar que exista un número
    test('Cuando la contraseña no tiene un número, retorna false', () => {
        expect(isValidPassword('Aa@abcdef')).toBe(false);
        expect(isValidPassword('Aa@ABCDE')).toBe(false);
    });

    // 8. Verificar que exista letra minúscula
    test('Cuando la contraseña no tiene letra minúscula, retorna false', () => {
        expect(isValidPassword('AA1@1234')).toBe(false);
        expect(isValidPassword('AA1@ABCD')).toBe(false);
    });

    // 9. Verificar que cumpla con todas las condiciones
    test('Cuando la contraseña cumple con todas las condiciones, retorna true', () => {
        expect(isValidPassword('Aa1@1234')).toBe(true);
        expect(isValidPassword('Bb2#5678')).toBe(true);
        expect(isValidPassword('Cc3$7890')).toBe(true);
    });

    // Additional edge cases
    test('Cuando la contraseña tiene espacios, retorna false', () => {
        expect(isValidPassword('Aa1@ 234')).toBe(false); // Space in password
        expect(isValidPassword(' Aa1@234')).toBe(false); // Leading space
        expect(isValidPassword('Aa1@234 ')).toBe(false); // Trailing space
    });

    test('Cuando la contraseña tiene solo caracteres especiales y cumple con la longitud, retorna false', () => {
        expect(isValidPassword('!@#$%^&*(')).toBe(false); // 10 special characters
    });

    test('Cuando la contraseña cumple con todas las condiciones menos una, retorna false', () => {
        expect(isValidPassword('a1234567')).toBe(false); // No uppercase, no special char
        expect(isValidPassword('A1234567')).toBe(false); // No lowercase, no special char
        expect(isValidPassword('aA@#$%^')).toBe(false); // No number
        expect(isValidPassword('A1@B2345')).toBe(false); // No lowercase
    });
});
