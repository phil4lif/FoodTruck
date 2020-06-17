const { body, validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
const db = require('../models');

module.exports.getTrucks = (req, res, next) => {
  console.log('Getting trucks...');
  db.Owner.find({ trucks: {} }).then((foundTrucks) => {
    if (foundTrucks) {
      return res.json(foundTrucks);
    }
  });
};

module.exports.create = [
  // VALIDATE FIELDS
  // truckName, foodType, homeLoc must not be empty
  body('truckName', 'Truck name must not be empty.').trim().isLength({ min: 1 }),
  body('foodType', 'Food type must not be empty.').trim().isLength({ min: 1, max: 64 }),
  body('homeLoc', 'Enter your home location.').trim().isLength({ min: 1, max: 64 }),

  // Check if truck already exists for owner
  // TODO - add forEach loop to check each truck in array
  // TODO - If (trucks[i].truckName = req.body.truckName ...)
  body('truckName')
    .custom((value) => {
      return db.Owner.findOne({ trucks: { truckName: value } }).then((foundTruck) => {
        if (foundTruck) {
          console.log("you've added this truck...");
          return Promise.reject("You've already added this truck");
        }
      });
    })
    .bail(),

  // Remove whitespace (sanitization)
  body('*').escape().trim().bail(),

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

      const newTruck = {
        truckName: req.body.truckName,
        foodType: req.body.foodType,
        catering: req.body.catering,
        homeLoc: req.body.homeLoc,
      };

      // Finds owner in db
      db.Owner.findOne({ username: req.body.owner }).then(async (foundUser) => {
        // Owner found; add truck
        if (foundUser) {
          console.log(newTruck);
          await foundUser.trucks.push(newTruck);
          await foundUser.save();

          console.log(foundUser);
          res.send(newTruck.truckName + ' added to owner ' + foundUser.username);
        }
        // Could not find owner in db (shouldn't happen if owner is logged in...)
        else if (!foundUser) {
          res.send('Owner not found');
        }
      });

      // db.Owner.trucks.push()({
      // Push new created truck's auto-assigned id
      // });
      //   Send success msg to client
    }
  },
];
