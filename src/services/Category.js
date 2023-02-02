const { Category } = require('../models');
const schema = require('./validations/validationsInputValues');

const getAll = async () => {
    const categories = await Category.findAll();

    return { type: '', message: categories };
};

const createCategory = async (name) => {
    const error = schema.validateCat({ name });
    if (error.type) return error;

    const newCategory = await Category.create({ name });

    return { type: '', message: newCategory };
};

module.exports = {
    getAll,
    createCategory,
};