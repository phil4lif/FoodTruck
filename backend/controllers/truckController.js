const { body, validationResult } = require('express-validator');
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
      /**/ console.log('Field validation passed');

      const newTruck = {
        truckName: req.body.truckName,
        foodType: req.body.foodType,
        catering: req.body.catering,
        homeLoc: req.body.homeLoc,
      };

      const checkIfTruckExists = (foundOwner) => {
        // Determine if the owner already has a truck with that name
        let isTruckNew = true;
        foundOwner.trucks.forEach((truck) => {
          if (truck.truckName === req.body.truckName) {
            console.log('Found ', truck.truckName);
            isTruckNew = false;
          }
        });
        console.log('isTruckNew: ', isTruckNew);
        return isTruckNew;
      };

      const pushTruckToOwner = async (foundOwner) => {
        console.log('2');
        await foundOwner.trucks.push(newTruck);
        await foundOwner.save();
      };

      // Finds owner and adds truck if it doesn't already exist
      db.Owner.findOne({ username: req.body.owner }).then((foundOwner) => {
        if (foundOwner) {
          // Owner found; Check if truck already exists
          if (checkIfTruckExists(foundOwner)) {
            // Truck not found, push truck to owner
            pushTruckToOwner(foundOwner);
            // Send response to client
            console.log(foundOwner);
            res.send(newTruck.truckName + ' added to owner ' + foundOwner.username);
          }
          // Truck already exists; Send err msg to client
          else {
            res.send("You've already added a truck with this name.");
          }
        }
        // Owner not found (shouldn't happen if owner is logged in...)
        else {
          res.send('Owner not found');
        }
      });
    }
  },
];
