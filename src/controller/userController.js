const User = require('../services/User');
const { tokenGenerator } = require('../utils/token');
// const validateBody = (body) =>

//     .validate(body);

// module.exports = async (req, res, next) => {
//     const data = req.body;
//     const { error } = validateBody(data);

//     if (error) return res.status(200).json({ message: error.message });

//     const payload = {
//         email: data.email,
//     };

//     const token = jwt.sign(payload, JWT_SECRET, {
//         expiresIn: '1h',
//     });

//     res.status(200).json({ token });
// };

const login = async (req, res) => {
    const { email, password } = req.body;

    const { type, message } = await User.getUserLogin(email, password);

    if (type) return res.status(400).json({ message });

    const token = tokenGenerator({ email });
    res.status(200).json({ token });
};

module.exports = {
    login,
};