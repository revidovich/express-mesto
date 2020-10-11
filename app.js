const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const userRoutes = require('./routes/users.js');
const cardsRoutes = require('./routes/cards.js');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes)

app.use('/cards', cardsRoutes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
})
