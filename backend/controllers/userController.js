const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
// const { sanitizeBody } = require('express-validator');
const async = require('async');
const db = require('../models');

passport.initialize();

module.exports = {
  findAll: function () {
    return db.User.find({});
  },
};

module.exports.create = [
  // Validate fields
  //   TODO - change fn console log err msgs to send resp to app instead
  body('username', 'Username must not be empty.').trim().isLength({ min: 1 }),

  body('password', 'Password must not be empty.').trim().isLength({ min: 1, max: 64 }),

  body('username')
    .custom((value) => {
      return db.User.findOne({ username: value }).then((foundUser) => {
        if (foundUser) {
          return Promise.reject('Username taken');
        }
      });
    })
    .bail(),

  // Need a .catch here or something to get the Promise...

  // TODO - Sanitizing fields isn't working? (whitespace not trimming)
  // Sanitize fields (using wildcard).
  body('*').escape().trim().bail(),

  //   body('confirmPassword', 'Confirm your password.').trim().isLength({ min: 1 }).bail(),
  // TODO - Make sure password confirmation matches
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
  // Check if username already taken

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
        db.User.create(newUser);
        res.send('User ' + newUser.username + ' created');
      });
    }
  },
];
