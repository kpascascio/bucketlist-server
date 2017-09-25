require('dotenv').config()
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var mongoose = require('mongoose');
var cors = require('cors');

//DB Connection
mongoose.connect('mongodb://admin:admin@ds115411.mlab.com:15411/bucketlist');

//Middleware
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
router(app);

//Server
var port = process.env.PORT || 3000;
var server = http.createServer(app);
server.listen(port);
console.log('Server listening on ' + port);
