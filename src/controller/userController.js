const User = require('../services/User');
const { tokenGenerator } = require('../utils/token');

const login = async (req, res) => {
    const { email, password } = req.body;

    const { type, message } = await User.getUserLogin(email, password);

    if (type) return res.status(400).json({ message });

    const token = tokenGenerator({ email });
    res.status(200).json({ token });
};

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
try {
    const { type, message } = await User.createUser(displayName, email, password, image);

    if (type) return res.status(400).json({ message });

    const token = tokenGenerator({ displayName, email });
    console.log(token);
    res.status(201).json({ token });
} catch (e) {
    res.status(409).json({ message: 'User already registered' });
}
};

const getAll = async (req, res) => {
    const { type, message } = await User.getAll();

    if (type) return res.status(400).json({ message });

    res.status(200).json(message);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await User.getUserById(id);

    if (type) return res.status(404).json({ message });

    res.status(200).json(message);
};

module.exports = {
    login,
    createUser,
    getAll,
    getById,
};