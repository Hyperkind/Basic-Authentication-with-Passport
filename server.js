var express = require('express');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

var PORT = 3000;

var app = express();

// middleware
var user = { username : 'bob', password : 'secret', email : 'bob@example.com'};
passport.use(new BasicStrategy(
  function (username, password, done) {
    // example authentication strategy using
    if ( !(username === user.username && password === user.password) ) {
      return done(null, false);
    }
    return done(null, user);
  }
));

// routes
app.get('/secret',
  passport.authenticate('basic', { session : false}),
  function (req, res) {
    res.json(req.user);
  });

var server = app.listen(PORT, function () {
  console.log('Server listening on port', PORT);
});