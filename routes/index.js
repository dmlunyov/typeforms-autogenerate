var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log();
  res.sendStatus(200);
  //res.render('index', { title: 'Express' });
});

module.exports = router;
