const {
    addUserLogin,
    addNewUser,
    addNewCategory,
    addNewPost,
    addNewPostCategory } = require('./schemas');

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

const validatePost = (data, cat) => {
    const { error } = addNewPost.validate(data);
    const { errorCat } = addNewPostCategory.validate(cat);
    if (error) return { type: 'INVALID_VALUE', message: error.message };
    if (errorCat) return { type: 'EMPTY_ARRAY', message: errorCat.message };

    return { type: null, message: '' };
};

module.exports = {
    validateLogin,
    validateUser,
    validateCat,
    validatePost,
};