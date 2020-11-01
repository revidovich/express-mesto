// const path = require('path');
const User = require('../models/user');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({ message: `Ошибка на сервере при поиске полей Users: ${err}` });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params._id });
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: `Ошибка на сервере при поиске пользователя: ${err}` });
  }
};

const createUser = async (req, res) => {
  try {
    const id = User.countDocuments();
    const user = await User.create({ id, ...req.body });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: `Невалидный джейсон вызвал ошибку на сервере при записи: ${err}` });
  }
};

const editUser = async (req, res) => {
  try {
    const { name, about } = req.body;
    const user = await User.findByIdAndUpdate({ _id: req.user._id }, { name, about });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: `Ошибка на сервере при патче: ${err}` });
  }
};

const editUserAvatar = async (req, res) => {
  try {
    const { avatar } = req.body;
    const newavatar = await User.findByIdAndUpdate({ _id: req.user._id }, { avatar });
    res.status(200).send(newavatar);
  } catch (err) {
    res.status(400).send({ message: `Ошибка на сервере при патче авы: ${err}` });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  editUser,
  editUserAvatar,
};
