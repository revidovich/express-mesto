const notFound = (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден: 404' }); // ${err}
};

module.exports = {
  notFound,
};
