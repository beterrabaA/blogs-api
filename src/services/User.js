const { User } = require('../models');
const schema = require('./validations/validationsInputValues');

const getUserLogin = async (email, password) => {
    const error = schema.validateLogin({ email, password });
    if (error.type) return error;

    const users = await User.findOne({ where: { email, password } });

    if (!users) return { type: 'INVALID_LOGIN', message: 'Invalid fields' };

    return { type: '', message: users };
};

const getUserByEmail = async (email) => {
    const users = await User.findOne({ where: { email } });

    if (!users) return { type: 'INVALID_LOGIN', message: 'Invalid fields' };

    return { type: '', message: users };
};

const createUser = async (displayName, email, password, image) => {
    const error = schema.validateUser({ displayName, email, password, image });
    if (error.type) return error;

    const newUser = await User.create({ displayName, email, password, image });

    return { type: '', message: newUser };
};

module.exports = {
    getUserLogin,
    createUser,
    getUserByEmail,
};