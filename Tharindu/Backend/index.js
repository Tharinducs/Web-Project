const express = require('express');
const  bodyParser = require('body-parser');
const passport = require('passport');

const path = require('path');

var app = express();
const config = require('./db.js');
require('./config/passport')(passport);

var userController = require('./controllers/userController')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


app.listen(3000, function ( ) {
    console.log('Server started at port : 3000')
});


app.use('/user', userController);