const authRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  login,
  createUser,
} = require('../controllers/users.js');

authRouter.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(2),
    // у меня пароль из 2х....
    // я пока так оставлю, не знаю как поменять пароль
  }),
}), login);

authRouter.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8), // ho ho
  }),
}), createUser);

module.exports = authRouter;
