const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Array of truck objects
  // Trucks can be created after owner creates account
  trucks: { type: Array },
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;


// --------------------------------------
// Truck creation fields for client form:
// --------------------------------------
// truckName - String, req
// foodType - String, req
// catering - Boolean
// homeLoc - String, req
// owner - String (auto-populated, req)
// contact - Object
// --- phone - String
// --- email - String
// --- web - String