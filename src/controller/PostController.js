const Post = require('../services/Post');

const getAll = async (_req, res) => {
    const { type, message } = await Post.getAll();

    if (type) return res.status(400).json({ message });

    res.status(200).json(message);
};

const createPost = async (req, res) => {
    const { userId, body } = req;
    const { title, content, categoryIds } = body;
    const { type, message } = await Post.insert({ title, content, userId }, categoryIds);

    if (type) return res.status(400).json({ message });

    res.status(201).json(message);
};

module.exports = {
    getAll,
    createPost,
};