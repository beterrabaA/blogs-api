const Joi = require('joi');

const addUserLogin = Joi.object({
    email: Joi.string().email().empty('').required(),
    password: Joi.string().empty('').required(),
}).messages({
    'string.email': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
    'any.required': 'Some required fields are missing',
});

const addNewUser = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
});

module.exports = {
    addUserLogin,
    addNewUser,
};