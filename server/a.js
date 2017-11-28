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

passport.use(new LocalStrategy(
    function (username, password, done) {
        if (username != 'iakov') {
            return done(null, false, {message: 'Неверный логин.'});
        };
        if (password != '123') {
            return done(null, false, {message: 'Неверный пароль.'});
        }
        var user = {id: 1, login: 'iakov'};
        return done(null, user);
    }));
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', api);
app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler




app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen(3001, function(){
    console.log(' Сервер запушен: http://localhost:3001');
});



module.exports = app;
