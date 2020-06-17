require('express-session');
const passport = require('passport');
const ownerController = require('../controllers/ownerController');
const userController = require('../controllers/userController');
const truckController = require('../controllers/truckController');

const { User } = require('../models');

// GET requests for user and owner accounts
function apiRoutes(app) {
  app.get('/api/owner', (req, res) => {
    ownerController
      .findAll()
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  });
  app.get('/api/user', (req, res) => {
    userController
      .findAll()
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  });

  // GET request for truck info (not owner accounts)
  app.get('/api/trucks', truckController.getTrucks);

  // app.post('/api/owner', (req, res) => {
  //   let newowner = req.body;
  //   ownerController.create(newowner).then((dbModel) => res.json(dbModel.data));
  // });

  // POST requests to create users and truck owners
  app.post('/api/create-user', userController.create);
  app.post('/api/create-owner', ownerController.create);
  app.post('/api/create-truck', truckController.create);

  // newuser.save((err) => {
  //   if (err) {
  //     return next(err);
  //   }
  //   res.redirect('/');
  // });

  app.post(
    '/api/log-in',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/',
    })
  );
}

module.exports = apiRoutes;
