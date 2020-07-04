const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
    truckname: { type: String },
    image: { type: String },
    foodkeywords: { type: Array },
    otherphotos: { type: Array },
    location: { type: String },
    date: { type: Date, default: Date.now }
});

const Truck = mongoose.model("Truck", truckSchema)

module.exports = Truck;