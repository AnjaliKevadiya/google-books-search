const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// endpoint "/api/google"
router.route("/").get(googleController.findAll);

module.exports = router;
