const express = require('express');
const  bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const path = require('path');

var app = express();
const config = require('./db.js');
require('./config/passport')(passport);

var userController = require('./controllers/userController');
var reservationController = require('./controllers/reservationController');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ origin: 'http://localhost:4200'}));



app.listen(3000, function ( ) {
    console.log('Server started at port : 3000')
});

app.use('/user', userController);
app.use('/reservation', reservationController);