const { User } = require('../models');
const schema = require('./validations/validationsInputValues');

const getUserLogin = async (email, password) => {
    const error = schema.validateLogin({ email, password });
    if (error.type) return error;

    const users = await User.findOne({ where: { email, password } });

    if (!users) return { type: 'INVALID_LOGIN', message: 'Invalid fields' };

    return { type: '', message: users };
};

module.exports = {
    getUserLogin,
};