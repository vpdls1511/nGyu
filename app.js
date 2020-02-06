const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();

var fs = require('fs');
var ejs = require('ejs');

const app = express();
const port = process.env.PORT||8080;

const main = require('./route/main');


app.set('view engine', 'ejs');


// SETTING
app.use('/', express.static(__dirname + '/views'));


//ROUTING
app.use('/', main);


app.listen(port, err =>{
	 if(err)
 		 console.log(err);
   else
     console.log('server is running...');
});
