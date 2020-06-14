const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    truckname: { type: String, required: true },
    username: { type: String, required: true }
})

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;