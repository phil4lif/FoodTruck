const express = require('express');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
const async = require('async');
const db = require('../models');

passport.initialize();

module.exports = {
  findAll: function () {
    return db.User.find({});
  },
};

module.exports.create = [
  // VALIDATE FIELDS
  // username and password must not be empty
  // TODO - add stronger password requirements
  body('username', 'Username must not be empty.').trim().isLength({ min: 1 }),
  body('password', 'Password must not be empty.').trim().isLength({ min: 1, max: 64 }),

  // Check if username already taken
  body('username')
    .custom((value) => {
      return db.User.findOne({ username: value }).then((foundUser) => {
        if (foundUser) {
          return Promise.reject('Username taken');
        }
      });
    })
    .bail(),

  // Remove whitespace (sanitization)
  body('*').escape().trim().bail(),

  // TODO - Make sure password confirmation matches
  //   body('confirmPassword', 'Confirm your password.').trim().isLength({ min: 1 }).bail(),
  //   body('confirmPassword')
  //     .custom((value, { req }) => {
  //       /**/ console.log('checking passwords...');
  //       if (value !== req.body.password) {
  //         return false;
  //       }
  //       return true;
  //     })
  //     .bail(),
  //

  // Process request after validation and sanitization
  (req, res, next) => {
    const errors = validationResult(req);
    // Print error messages to console
    if (!errors.isEmpty()) {
      /**/ console.log('Validation failed:');
      for (let i = 0; i < errors.array().length; i++) {
        if (errors.array()[i].msg) {
          console.log('::' + errors.array()[i].param + ': ' + errors.array()[i].msg);
        }
      }
      res.json(errors.array());

      next();
    }
    if (errors.isEmpty()) {
      /**/ console.log('validation passed');
      // Takes req.body.password and hashes it
      // then saves hashed password to db instead of plain text password
      bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        /**/ console.log('hashing password...');
        if (err) return next(err);
        const newUser = new db.User({
          username: req.body.username,
          password: hashedPassword,
        });
        //   Hashing complete; save to DB
        db.User.create(newUser);
        //   Send success msg to client
        res.send('User ' + newUser.username + ' created');
      });
    }
  },
];

module.exports.login = (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.json('Incorrect username or password');
    }
    // Success; log in
    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }
      const response = { user: user, b2Credentials: res.locals.credentials };

      // Send user info back to client as JSON
      // res.status(200).json(response);
      // return res.redirect(client + '/private-space');
      console.log('req.session (inside login logic): ', req.session);
      res.json('Login successful');
    });
  })(req, res, next);
};
