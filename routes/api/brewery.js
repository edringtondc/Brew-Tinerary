const router = require("express").Router();
const breweryController = require("../../controllers/brewerycontrollers");

// Matches with "/api/books"
router.route("/") //api/brewery/
  .get(breweryController.findAll)
  .post(breweryController.create);

// Matches with "/api/books/:id"
router
  .route("/:id") //api/brewery/:id
  .get(breweryController.findById)
  .put(breweryController.update)
  .delete(breweryController.remove);

  // router.route("/api/breweries")

module.exports = router;



