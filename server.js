var express = require('express');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;

var PORT = 3000;

var app = express();

var server = app.listen(PORT, function () {
  console.log('Server listening on port', PORT);
});