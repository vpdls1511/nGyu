const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

var fs = require('fs');
var ejs = require('ejs');
var multer  =   require('multer');
var crypto = require('crypto');
var mysql = require('mysql'); //mysql 모듈을 로딩.

const app = express();
const port = process.env.PORT||3000;

app.use('/', express.static(__dirname + '/views'));


app.get('/', function(req, res, next){

});

app.listen(port, err =>{
	 if(err)
 		 console.log(err);
   else
     console.log('server is running...');
});
