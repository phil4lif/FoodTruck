const db = require('../models');

module.exports = {
    findAll: function() {
        return db.User.find({})
    },

    create: function(newUser) {
        console.log(newUser)
        return db.User.create(newUser)
    }
};