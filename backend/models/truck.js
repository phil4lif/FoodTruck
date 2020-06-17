const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const truckSchema = new Schema({
  truckName: { type: String, required: true },
  foodType: { type: String, required: true },
  catering: { type: Boolean },
  homeLoc: { type: String, required: true },
});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;


// TODO:
// Currently getting trucks based on model Truck, which would be it's own mongo collection.
// But trucks are actually objects in owner accounts, so need to search owner accounts instead of a truck collection.
// Need to change Truck model shema....