const Trip = require("../models/Trip");

const getTrips = async (req, res) => {
  try {
    const trip = await Trip.find({});
    res.json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    res.json(trip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getTrips,
  getTripById,
};
