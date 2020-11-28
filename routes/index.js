const router = require('express').Router();
const userRouter = require('./users');
const cardsRouter = require('./cards');
const authsRouter = require('./auths');
const notFoundRouter = require('./not_found');
const auth = require('../middlewares/auth');

router.use(authsRouter);
// Все роуты, кроме /signin и /signup, защищены авторизацией:
router.use('/', auth, userRouter);
router.use('/', auth, cardsRouter);
router.use(notFoundRouter);

module.exports = router;