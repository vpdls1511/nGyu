const express = require('express');
const router = express.Router();
const setting = require('./setting');

router.get('/', function(req, res, next) {
    res.render('index', {title : setting.title});
})

router.get('/create' function(req,res,next){
  res.render('index');
})

module.exports = router;
