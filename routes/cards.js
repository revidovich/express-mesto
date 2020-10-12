const cardsRouter = require('express').Router();
const {
  getCards
} = require('../controllers/cards.js')

cardsRouter.get('/cards', getCards);

module.exports = cardsRouter;