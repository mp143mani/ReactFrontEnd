const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 20;
    const specialCharsRegex = /[!@#$%^&*]/;
    const numericCharsRegex = /\d/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
  
    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      specialCharsRegex.test(password) &&
      numericCharsRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password)
    );
  };
  
  module.exports = {
    validateEmail,
    validatePassword,
  };
  