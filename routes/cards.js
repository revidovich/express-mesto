const cardsRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards,
  postCard,
  deleteCard,
  getCardById,
} = require('../controllers/cards.js');

// router.post('/posts', celebrate({
//   body: Joi.object().keys({
//     title: Joi.string().required().min(2).max(30),
//     text: Joi.string().required().min(2),
//   }),
// }), createPost);

cardsRouter.get('/cards', getCards);
cardsRouter.get('/cards/:_id', getCardById)
cardsRouter.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(/^http[s]?:\/\/\w+/),
  }),
}), postCard);
cardsRouter.delete('/cards/:_id', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().hex(),
  }),
}), deleteCard);


module.exports = cardsRouter;
