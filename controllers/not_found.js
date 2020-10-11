const notFound = (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' })
    .catch(err => res.send(err))
}

module.exports = {
  notFound
};