const jwt = require('jsonwebtoken');

const User = require('../services/User');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const email = await User.getUserByEmail(decoded.email);
    if (!email) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.email = email;
    req.userId = email.message.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};