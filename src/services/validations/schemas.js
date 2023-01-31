const Joi = require('joi');

const addUserLogin = Joi.object({
    email: Joi.string().email().empty('').required(),
    password: Joi.string().empty('').required(),
}).messages({
    'string.email': 'Some required fields are missing',
    'string.empty': 'Some required fields are missing',
    'string.required': 'Some required fields are missing',
});

module.exports = {
    addUserLogin,
};