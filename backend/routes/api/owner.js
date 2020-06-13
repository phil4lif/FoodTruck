const router = require("express").Router();
const ownerController = require('../../controllers/owner');

router.route('/')
    .get(ownerController.findAll)
    .post(ownerController.create);


module.exports = router;