require('express-session');
const passport = require('passport');
const ownerController = require('../controllers/ownerController');
const userController = require('../controllers/userController');
const { User } = require('../models');

function apiRoutes(app) {
  app.get('/api/owner', (req, res) => {
    ownerController
      .findAll()
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  });
  app.post('/api/owner', (req, res) => {
    let newowner = req.body;
    ownerController.create(newowner).then((dbModel) => res.json(dbModel.data));
  });
  app.get('/api/user', (req, res) => {
    userController
      .findAll()
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  });
  app.post('/api/user', (req, res, next) => {
    let newuser = req.body;
    userController.create(newuser).then((dbModel) => res.json(dbModel.data));
    // newuser.save((err) => {
    //   if (err) {
    //     return next(err);
    //   }
    //   res.redirect('/');
    // });
  });
  app.post(
    '/api/log-in',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/',
    })
  );
}

module.exports = apiRoutes;
