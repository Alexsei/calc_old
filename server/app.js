var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const MongoClient    = require('mongodb').MongoClient;

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');
var app = express();

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', index);
app.use('/api/users', users);
// catch 404 and forward to error handler




app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen(3001, function(){
    console.log(' Сервер запушен: http://localhost:3001');
    console.log(' nginx /api/: http://localhost:8081');
});



module.exports = app;
