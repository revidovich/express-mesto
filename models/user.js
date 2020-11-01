const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    validate: {
      validator(v) { // function(v) {
        return /^https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.#?/i.test(v);
      },
      message: (props) => `ссылка ${props.value} невалидна!`,
    },
    required: true,
  },
});
// /^https?:\/\/[w{3}?\.?/w#?$/i конец строки не пропускает
// /^https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i
// http://ya.ru
// https://www.ya.ru
// http://2-domains.ru
// http://ya.ru/path/to/deep/
// http://ya-ya-ya.ru

module.exports = mongoose.model('user', userSchema);
