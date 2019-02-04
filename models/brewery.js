const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: false },
  state: { type: String, required: true },
  address: String,
  date: { type: Date, default: Date.now }
});

const Brewery = mongoose.model("Book", brewerySchema);

module.exports = Brewery;