const express = require("express");
const router = express.Router();
const {
  getTrips,
  getTripById,
} = require("../controller/tripControllers");

router.get("/", getTrips);
router.get("/:id", getTripById);

module.exports = router;