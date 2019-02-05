const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  id: String
  // name: { type: String, required: true },
  // status: {type: String, required: false},
  // city: { type: String, required: true },
  // state: { type: String, required: false },
  // address: { type: String, required: false },
  // date: { type: Date, default: Date.now }
});



const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;