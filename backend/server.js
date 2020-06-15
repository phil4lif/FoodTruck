const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
const { User } = require('./models');

// Auth
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, function (err, user) {
      if (err) return done(err);
      if (!user) {
        return done(null, false, { msg: 'Incorrect username' });
      }
      // Compare plain-text pw to hashed pw in db
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match! log user in
          /**/ console.log('password correct!');
          return done(null, user);
        } else {
          /**/ console.log('password incorrect...');
          // passwords do not match!
          return done(null, false, { msg: 'Incorrect password' });
        }
      });
    });
  })
);

passport.serializeUser((user, done) => {
  done(err, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app.use(session({ secret: 'gus', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//add routes
const apiRoutes = require('./routes/apiRoutes')(app);

//connect to mongoDB
mongoose.connect('mongodb://localhost/foodtruck', { useNewUrlParser: true });

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
