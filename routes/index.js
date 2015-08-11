var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express + Handlebars', message: "Hello World from routes/index.js"  });
});

router.get('/test', function(req, res) {
  res.render('test', { title: 'Express + Handlebars', message: "This is only a test" });
});

module.exports = router;
