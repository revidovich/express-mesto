const Card = require('../models/card');

const ERROR_CODE = 400;

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).send(cards);
  } catch (err) {
    res
      .status(ERROR_CODE)
      .send({ message: `Ошибка на сервере при поиске карточки: ${err}` });
  }
};

const postCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id }) // req.params._id }) п.9
    .then((card) => res.send({ card }))
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res
          .status(ERROR_CODE)
          .send({
            message: `Ошибка на сервере при поиске карточки, невалидный json: ${err}`,
          });
      }
      return res.status(500).send({ message: `Сервер пятисотит: ${err}` });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id)
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ErrorName') {
        return res
          .status(ERROR_CODE)
          .send({
            message: `Ошибка на сервере при поиске карточки, невалидный json: ${err}`,
          });
      }
      return res.status(500).send({ message: `Сервер пятисотит: ${err}` });
    });
};

module.exports = {
  getCards,
  postCard,
  deleteCard,
};
// планы:
// PUT /cards/:cardId/likes — поставить лайк карточке
// DELETE /cards/:cardId/likes — убрать лайк с карточки
