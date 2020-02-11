const express = require('express');
const router = express.Router();
const setting = require('./setting');

router.get('/', function(req, res, next) {
    res.render('index', {title : setting.title});
});

router.get('/main', function(req,res,next){
  res.render('main');
});

module.exports = router;
