require('express-session');
const passport = require('passport');
const ownerController = require('../controllers/ownerController');
const userController = require('../controllers/userController');
const truckController = require('../controllers/truckController');

const { User, Truck } = require('../models');

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
  app.get('/api/trucks', truckController.getAllTrucks);
  //get one truck by id
  app.get('/api/trucks/:_id', truckController.getTruckById);
  // POST requests to create users and truck owners
  app.post('/api/create-user', userController.create);
  app.post('/api/create-owner', ownerController.create);
  app.post('/api/create-truck', truckController.create);
  //put route for saving a truck to favorites
  app.put('/api/addfavorite/:userid/:truckid', userController.addFavorite)
  //get route for displaying the users favorties on their home page
  app.get('/api/getfavorite/:userid', userController.getFavorites)
  // POST request for user/owner login
  app.post('/api/login', userController.login);

  app.post('/api/check-auth', userController.checkAuth);
}

module.exports = apiRoutes;
