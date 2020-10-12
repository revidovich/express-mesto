const userRouter = require('express').Router();
const {
  getUsers,
  getUser
} = require('../controllers/users.js')

userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);

module.exports = userRouter;