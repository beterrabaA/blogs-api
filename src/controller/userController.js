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

    const token = tokenGenerator({ email });
    res.status(201).json({ token });
} catch (e) {
    res.status(409).json({ message: 'User already registered' });
}
};
module.exports = {
    login,
    createUser,
};