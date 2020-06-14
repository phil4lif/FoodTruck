const db = require('../models');

module.exports = {
    findAll: function() {
        return db.Owner.find({})
    },
    create: function(newowner) {
        console.log(newowner)
        return db.Owner.create(newowner)
    }
}