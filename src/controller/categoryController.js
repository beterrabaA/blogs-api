const Category = require('../services/Category');

const getAll = async (_req, res) => {
    const { type, message } = await Category.getAll();

    if (type) return res.status(400).json({ message });

    res.status(200).json(message);
};

module.exports = {
    getAll,
};