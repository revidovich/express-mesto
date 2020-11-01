// app.js — входной файл
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;
const app = express();
const routes = require('./routes/index');

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// подключаем мидлвары, роуты и всё остальное...
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // нет сторонним пакетам
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use((req, res, next) => { // временно вместо авторизации
  req.user = {
    _id: '5f93590a3ea6942bc8a58414',
  };
  next();
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
