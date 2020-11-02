const Card = require('../models/card');

const ERROR_CODE = 400;
const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).send(cards);
  } catch (err) {
    res
      .status(ERROR_CODE)
      .send({ message: `Ошибка на сервере при поиске карточки! ${err}` });
  }
};

const postCard = (req, res) => {
  const { name, link } = req.body;
  const ownerId = req.user._id;
  Card.create({ name, link, owner: ownerId }) // req.params._id }) п.9
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(ERROR_CODE).send({
          message: `Ошибка на сервере при создании карточки, в метод переданы некорректные данные! ${err}`,
        });
      } else {
        res.status(500).send({ message: `Сервер пятисотит: ${err}` });
      }
    });
};

const deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndRemove(req.params.id);
    if (!card) {
      res.status(404).send({ message: 'А такой карточки у нас нет в нашей базе данных' });
    } else {
      res.status(200).send(card);
    }
  } catch (err) {
    if (err.name === 'ErrorName') {
      res.status(ERROR_CODE).send({ message: `Ошибка на сервере при поиске карточки, невалидный json: ${err}` });
    } else {
      res.status(500).send({ message: `Сервер пятисотит: ${err}` });
    }
  }
};

module.exports = {
  getCards,
  postCard,
  deleteCard,
};
