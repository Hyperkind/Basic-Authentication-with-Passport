# Basic Authentication with Passport

Basic authentication is one of the simplest authentication strategies because it doesn't require cookies, sessions, or even a login form! Instead, it uses HTTP headers which means credentials are transmitted on each request.

## Installation
You will need to install `passport` and `passport-http`. The `passport-http` module is what allows you set up the [Basic Authentication Scheme](http://tools.ietf.org/html/rfc2617#section-2), in addition to a couple other authentication strategies.

```bash
$ npm install express passport passport-http --save
```

## Configuration
Set up your express server as you normally would. In addition, require both of the passport modules into the top of your server file:

```javascript
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;  // Want to use Basic Authentication Strategy
```


```javascript
// Other middleware

var user = { username: 'bob', password: 'secret', email: 'bob@example.com' };
passport.use(new BasicStrategy(
  function(username, password, done) {
    // Example authentication strategy using
    if ( !(username === user.username && password === user.password) ) {
      return done(null, false);
    }
    return done(null, user);
}));
```
// Routes

## Protecting Endpoints
Using passport, you can easily protect routes in your express applicaiton. the `passport.authenicate` handler accepts a strategy name (`basic`), as well as some extra options. In this example we're going to disable sessions on the server.
```javascript
app.get('/secret',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json(req.user);
  });
```
_Note: Just because sessions are disabled on the server, your browser may cache headers. Check your network tab!_