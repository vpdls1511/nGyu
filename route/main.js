const express = require('express');
const router = express.Router();
const setting = require('./setting');

router.get('/', function(req, res, next) {
    res.render('index', {title : setting.title});
});

router.get('/main', function(req,res,next){
  res.render('tab/main');
});

router.get('/portfolio', function(req,res,next){
  res.render('tab/portfolio');
});

module.exports = router;
