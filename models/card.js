const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },

  link: {
    type: String,
    validate: {
      validator(v) { // иначе эслинт ругает
        return /^https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.#?/i.test(v);
      },
    },
    message: (props) => `A ссылка ${props.value} - невалидна!`,
    required: true,
  },

  owner: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  likes: [{
    type: mongoose.Types.ObjectId,
    ref: 'user',
    default: [],
  }],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('card', cardSchema);

// {"likes":[],
// "createdAt":"2019-07-06T12:10:29.149Z",
// "_id":"5f9345414e00502fbc735b02",
// "name":"Иваново",
// "link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"}
