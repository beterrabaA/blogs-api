const { addUserLogin } = require('./schemas');

const validateLogin = (login) => {
    const { error } = addUserLogin.validate(login);
    console.log(error);
    if (error) return { type: 'INVALID_LOGIN', message: error.message };

    return { type: null, message: '' }; 
};

module.exports = {
    validateLogin,
};