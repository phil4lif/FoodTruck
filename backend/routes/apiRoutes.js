const ownerController = require('../controllers/owner');
const userController = require('../controllers/user');

function apiRoutes(app) {
    app.get('/api/owner', (req, res) => {
        ownerController.findAll()
            .then(dbModel => {
                res.json(dbModel)
            }).catch(err => res.status(422).json(err));
    })
    app.post('/api/owner', (req, res) => {
        let newowner = req.body;
        ownerController.create(newowner)
            .then(dbModel => res.json(dbModel.data))
    })
    app.get('/api/user', (req, res) => {
        userController.findAll()
            .then(dbModel => {
                res.json(dbModel)
            }).catch(err => res.status(422).json(err));
    })
    app.post('/api/user', (req, res) => {
        let newuser = req.body;
        userController.create(newuser)
            .then(dbModel => res.json(dbModel.data))
    })
}

module.exports = apiRoutes;