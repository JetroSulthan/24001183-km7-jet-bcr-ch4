const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");

// Cars API
router.get("/", dashboardController.userPage);
router.get("/", dashboardController.createUser);

module.exports = router;
