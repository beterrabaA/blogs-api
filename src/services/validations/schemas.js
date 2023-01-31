const Joi = require('joi');

const addUserLogin = Joi.object({
    email: Joi.string().email().empty('').required()
.messages({
        'string.email': 'Some required fields are missing',
        'string.empty': 'Some required fields are missing',
        'any.required': 'Some required fields are missing',
    }),
    password: Joi.string().empty('').required(),
});

module.exports = {
    addUserLogin,
};