const axios = require('axios');
const keys = require("../../keys.js")
var express = require('express')
const router = require("express").Router();
const db = require("../../controllers/brewerycontrollers")



const BASEURL = "http://beermapping.com/webservice/loccity/";
const APIKEY = keys.beerMapping




router.get("/", function (req, res) {

  console.log(req.query)

  axios.get(BASEURL + APIKEY + req.query.q + "&s=json")
    .then(function (response) {
      console.log(response.data)
      console.log("query", req.query)
      res.json(response.data)
    }).catch(function (err) {
      if (err) { res.json(err) }
    })
})
//actual post /api/breweryAPI/saved
router.route("/saved").post(db.create)


module.exports = router;