const db = require('../models/owner');

module.exports = {
    findAll: function() {
        return db.Owner.find({})
    },
    create: function(newowner) {
        console.log(newowner)
        return db.Book.create(newowner)
    }
}