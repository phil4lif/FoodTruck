const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  trucks: {type: Array}, /* Array of truck objects */
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
