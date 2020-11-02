const cardsRouter = require('express').Router();
const {
  getCards,
  postCard,
  deleteCard,
} = require('../controllers/cards.js');

cardsRouter.get('/cards', getCards);
cardsRouter.post('/cards', postCard);
cardsRouter.delete('/cards/:_id', deleteCard);

module.exports = cardsRouter;
