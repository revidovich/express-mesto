const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const jwtVerify = async (token) => {
  try {
    const decoded = await jwt.verify(token,
      NODE_ENV === 'production' ? JWT_SECRET : 'admin-secret', { expiresIn: '7d' });
    return decoded;
  } catch (e) {
    return false;
  }
};

module.exports = jwtVerify;
