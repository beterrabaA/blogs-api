const { addUserLogin, addNewUser, addNewCategory } = require('./schemas');

const validateLogin = (login) => {
    const { error } = addUserLogin.validate(login);
    if (error) return { type: 'INVALID_LOGIN', message: error.message };

    return { type: null, message: '' }; 
};

const validateUser = (data) => {
    const { error } = addNewUser.validate(data);

    if (error) return { type: 'INVALID_USER', message: error.message };

    return { type: null, message: '' };
};

const validateCat = (name) => {
    const { error } = addNewCategory.validate(name);

    if (error) return { type: 'INVALID_VALUE', message: error.message };

    return { type: null, message: '' };
};

module.exports = {
    validateLogin,
    validateUser,
    validateCat,
};