var express = require('express');
var router = express.Router();
var passport = require('passport');
var async = require('async');
const db = require('../models');

router.use(passport.initialize());

var bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
// const { sanitizeBody } = require('express-validator');

module.exports = {
  findAll: function () {
    return db.User.find({});
  },

  create: function (newUser) {
    console.log('newUser: ', newUser);

    // Validate fields
    body('username', 'Username must not be empty.').trim().isLength({ min: 1 }),
      body('password', 'Password must not be empty.').trim().isLength({ min: 1, max: 64 }),
      body('confirmPassword', 'Confirm your password.').trim().isLength({ min: 1 }).bail(),
      // Make sure password confirmation matches
      body('confirmPassword')
        .custom((value, { req }) => {
          /**/ console.log('checking passwords...');
          if (value !== req.body.password) {
            return false;
          }
          return true;
        })
        .bail(),
      //
      // Check if username already taken
      body('username', 'Username taken')
        .custom((value) => {
          return db.User.findOne({ username: value }, (err, found_user) => {
            /**/ console.log('checking username...');
            if (found_user) {
              /**/ console.log('Found user: ' + found_user.username);
              return false; //TODO - WHY DOESN'T IS VALIDATION FAILURE??
            }
            return true;
          });
        })
        .bail(),
      // Need a .catch here or something to get the Promise...

      // TODO - Sanitizing fields isn't working? (whitespace not trimming)
      // Sanitize fields (using wildcard).
      body('*').escape().trim().bail(),
      // Process request after validation and sanitization
      (req, res, next) => {
        /**/ console.log(validationResult(req));

        const errors = validationResult(req);
        // Print error messages t0 console
        if (!errors.isEmpty()) {
          /**/ console.log('Validation failed: ');
          for (let i = 0; i < errors.array().length; i++) {
            /**/ console.log(errors.array()[i].param + ': ' + errors.array()[i].msg);
          }
          // Populate reloaded page with pre-entered data
          let oldReqBody = req.body;
          res.append('Errors', errors);
          return res.send('error');
        }
        if (errors.isEmpty()) {
          /**/ console.log(validationResult(req));
          /**/ console.log('validation passed');
          // Takes req.body.password and hashes it
          // then saves hashed password to db instead of plain text password
          bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
            /**/ console.log('hashing password...');
            if (err) return next(err);
            const user = new User({
              username: req.body.username,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              password: hashedPassword,
              memberStatus: 'applicant',
            }).save((err) => {
              if (err) return next(err);
              res.redirect('/');
            });
          });
        }
      },
      db.User.create(newUser);
  },
};

//

// TODO - merge this into exports.create above
exports.sign_up =
  /*(req, res, next) => {*/
  [];
