const router = require('express').Router();
const {
  notFound
} = require('../controllers/not_found.js')

router.all('*', notFound);

module.exports = router;
