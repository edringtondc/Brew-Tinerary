const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    console.log("in find all", req.body)
    
    db.Brewery
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Brewery
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("in create")
    db.Brewery
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    //passing it an array, change it to handle multiple documents at once - insert many and then send one response
  },
  createMany: function (req, res) {
    // console.log("in insert Many", req.body)


    const idArray = req.body.map(element => {
      return { id: element } //make sure whatever is passed is an object - make more complex on the front end, 35 to req.body
    })
    console.log("id array: ", idArray)
    db.Brewery
      .insertMany(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    //passing it an array, change it to handle multiple documents at once - insert many and then send one response
  },
  update: function (req, res) {
    db.Brewery
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Brewery
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
