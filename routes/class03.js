var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('class03', { title: 'Search Results by class03' });
});

module.exports = router;
