const express = require('express');


const setting = require('./setting');


app.get('/', function(req, res, next) {
    res.render('index', {title : setting.title});
})
