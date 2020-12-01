const cardsRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards,
  getCardById,
  postCard,
  deleteCard,
} = require('../controllers/cards.js');

cardsRouter.get('/cards', getCards);

cardsRouter.get('/cards/:_id', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex(),
  }),
}), getCardById);

cardsRouter.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().regex(/^http[s]?:\/\/\w+/),
  }),
}), postCard);

cardsRouter.delete('/cards/:_id', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex(),
  }),
}), deleteCard);

// cardsRouter.put('/:cardId/likes', celebrate({
//   params: Joi.object().keys({
//     cardId: Joi.string().hex(),
//   }),
// }), likeCard); - на будущее

// cardsRouter.delete('/:cardId/likes', celebrate({
//   params: Joi.object().keys({
//     cardId: Joi.string().hex(),
//   }),
// }), dislikeCard);

module.exports = cardsRouter;
