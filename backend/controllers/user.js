const db = require('../models/user');

module.exports = {
    findAll: function() {
        return db.User.find({})
    },
    create: function(newuser) {
        console.log(newuser)
        return db.User.create(newuser)
    }
};