const router = require('express').Router();
const userRoutes = require('./user');
const ownerRoutes = require('./owner');

router.use('/owner', ownerRoutes);
router.use('/user', userRoutes);

module.exports = router;