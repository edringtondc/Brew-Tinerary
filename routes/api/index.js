const router = require("express").Router();
const breweryRoutes = require("./brewery");
const breweryAPIRoutes = require("./brewAPI");


// Book routes
router.use("/brewery", breweryRoutes);
router.use("/breweryAPI", breweryAPIRoutes);



module.exports = router;