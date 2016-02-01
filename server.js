var express = require('express');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

var CONFIG = require('./config');

var app = express();

// middleware
// var user = { username : 'bob', password : 'secret', email : 'bob@example.com'};
passport.use(new BasicStrategy(
  function (username, password, done) {
    // example authentication strategy using
    if ( !(username === CONFIG.USER.USERNAME && password === CONFIG.USER.PASSWORD) ) {
      return done(null, false);
    }
    return done(null, CONFIG);
  }
));

// routes
app.get('/secret',
  passport.authenticate('basic', { session : false}),
  function (req, res) {
    res.json(CONFIG.USER);
  });

// has server listen
var server = app.listen(CONFIG.PORT, function () {
  console.log('Server listening on port', server.address().port);
});