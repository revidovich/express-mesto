// авторизационный мидлвэр для проверки JWT. для авторизации/ должен верифицировать токен из заголовков.
// OK- мидлвэр должен добавлять пейлоуд токена в объект запроса

const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = process.env;
const jwtSign = require('../helpers/jwt-sign')

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log('------------------' + authorization);
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res
      .status(401)
      .send({ message: 'Необходима авторизация' });
  }
// в ост случаях:
  const token = authorization.replace('Bearer ', '');
  console.log('MYTOKENIS' + token);
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'admin-secret');
  } catch (err) {
    return res
      .status(401)
      .send({ message: 'Нет прав доступа' });
  }
  req.user = payload; // записываем пейлоуд в объект запроса
  console.log('MYPAYLOADIS' + payload);
  next(); // пропускаем запрос дальше
};
