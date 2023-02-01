const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenGenerator = (payload) => jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
});

module.exports = {
    tokenGenerator,
};