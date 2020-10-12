const fsPromises = require('fs').promises
//Функция для чтения файлов
module.exports = (pathUrl) => {
  return fsPromises.readFile(pathUrl, { encoding: 'utf8' })
  .then(file => {
    return JSON.parse(file)
  })
}
