const userRouter = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  editUser,
  editUserAvatar,
} = require('../controllers/users.js');

userRouter.get('/users', getUsers);
userRouter.get('/users/:_id', getUser);
userRouter.post('/users', createUser);
userRouter.patch('/users/me', editUser);
userRouter.patch('/users/me/avatar', editUserAvatar);

module.exports = userRouter;
