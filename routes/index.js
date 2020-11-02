const router = require('express').Router();
const userRouter = require('./users');
const cardsRouter = require('./cards');
const notFoundRouter = require('./not_found');

router.use(
  userRouter,
  cardsRouter,
  notFoundRouter,
);

module.exports = router;
