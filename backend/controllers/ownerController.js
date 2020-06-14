const db = require('../models');

module.exports = {
    findAll: function() {
        return db.Owner.find({})
    },
    create: function(newOwner) {
        console.log(newOwner)
        return db.Owner.create(newOwner)
    }
}