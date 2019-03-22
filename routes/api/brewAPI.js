const axios = require('axios');
// const keys = require("../../keys.js")
var express = require('express')
const router = require("express").Router();
const brewController = require("../../controllers/brewerycontrollers")



const BASEURL = "http://beermapping.com/webservice/loccity/";
const APIKEY = "1e85b90225089a51575fe3432c04261e/"
// const APIKEY 


const geoURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const geoKey = "&key=" + "AIzaSyDAF0hELme6xtzcJwHWCqTS9sstTg_ilgk"
// const geoKey = "&key=" + 



// api/breweryAPI/
router.get("/", function (req, res) {

  // console.log(req.query)
 
  axios.get(BASEURL + APIKEY + req.query.q + "&s=json")
    .then(function (response) {
      // console.log(response.data)
      // console.log("query", req.query)
      res.json(response.data)
    }).catch(function (err) {
      if (err) { res.json(err) }
    })
})

// /api/breweryAPI/geocode
router.get("/geocode", function (req, res) {

  
  // console.log("geo query: " ,  req.query)

  axios.get(geoURL + req.query.q + geoKey)

    .then(function (response) {
      // console.log(response.data)
      // console.log("query", req.query)

      res.json(response.data)

    }).catch(function (err) {
      if (err) { console.log(err) }
    })
})


//actual post /api/breweryAPI/saved
router.route("/saved").post(brewController.createMany)
// /api.breweryAPI/savedAll

router.route("/savedAll")
  .get(brewController.findAll)



module.exports = router;