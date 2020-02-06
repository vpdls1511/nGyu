const express = require('express');
const router = express.Router();
const setting = require('./setting');

app.set('view engine', 'ejs');


router.get('/', function(req, res, next) {
    res.render('index', {title : setting.title});
})



module.exports = router;
