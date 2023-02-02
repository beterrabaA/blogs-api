const Category = require('../services/Category');

const getAll = async (_req, res) => {
    const { type, message } = await Category.getAll();

    if (type) return res.status(400).json({ message });

    res.status(200).json(message);
};

const createCat = async (req, res) => {
    const { name } = req.body;
try {
    const { type, message } = await Category.createCategory(name);

    if (type) return res.status(400).json({ message });

    res.status(201).json(message);
} catch (e) {
    res.status(409).json({ message: 'Category already registered' });
}
};

module.exports = {
    getAll,
    createCat,
};