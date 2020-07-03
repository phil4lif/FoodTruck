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

  // GET request for all trucks
  app.get('/api/trucks', truckController.getTrucks);

  // POST requests to create users and truck owners
  app.post('/api/create-user', userController.create);
  app.post('/api/create-owner', ownerController.create);
  app.post('/api/create-truck', truckController.create);

  // POST request for user/owner login
  // TODO - Add functionality
  app.post(
    '/api/login',
    (req, res, next) => {
      console.log('req: ', req);
      next();
    },
    userController.login
  );
}

module.exports = apiRoutes;
