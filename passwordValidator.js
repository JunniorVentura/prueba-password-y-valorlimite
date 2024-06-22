function isValidPassword(password) {
    const minLength = 8;
    const maxLength = 10;
    const hasRequiredLength = password.length >= minLength && password.length <= maxLength;
    const hasTwoLetters = /[a-zA-Z].*[a-zA-Z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasRequiredLength &&
        hasTwoLetters &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar;
}

module.exports = isValidPassword;