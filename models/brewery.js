const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brewerySchema = new Schema({
  id: String,
  name: String,
  url: String

});



const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;