var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('school', { title: 'Search Results by class' });
});

module.exports = router;
