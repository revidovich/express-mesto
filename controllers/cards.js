const readFile = require('../utils/read_file')
const path = require('path')
const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json')
//Код вынесен в контроллеры. Для чтения файлов используются промисы, а не колбэки.
const getCards = (req, res) => {
  readFile(jsonDataPath)
  .then(data => res.send(data))
  .catch((err) => {
    console.log('err = ', err.message); //невалидный json=>отдать код 500 и поле message с описанием ошибки.
    res.status(500).send({ message: 'Ошибка на сервере' });
  });
}

module.exports = {
  getCards
};
