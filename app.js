const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const userRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');
const notFound = require('./routes/not_found');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes)
app.use('/', cardsRoutes)
app.use('/', notFound)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
