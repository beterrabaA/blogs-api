const Joi = require('joi');

const pointSchema = Joi.string().empty('').required();
const SOME_REQUIRED_FIELDS = 'Some required fields are missing';

const addUserLogin = Joi.object({
    email: Joi.string().email().empty('').required(),
    password: Joi.string().empty('').required(),
}).messages({
    'string.email': SOME_REQUIRED_FIELDS,
    'string.empty': SOME_REQUIRED_FIELDS,
    'any.required': SOME_REQUIRED_FIELDS,
});

const addNewUser = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
});

const addNewCategory = Joi.object({
    name: pointSchema,
});

const addNewPost = Joi.object({
    title: pointSchema,
    content: pointSchema,
    userId: Joi.number().integer().required(),
}).messages({
    'number.base': SOME_REQUIRED_FIELDS,
    'number.integer': SOME_REQUIRED_FIELDS,
    'any.required': SOME_REQUIRED_FIELDS,
});

const addNewPostCategory = Joi.array().items(Joi.number().integer()).required().messages({
    'number.base': 'one or more "categoryIds" not found',
});

module.exports = {
    addUserLogin,
    addNewUser,
    addNewCategory,
    addNewPost,
    addNewPostCategory,
};