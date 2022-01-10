require("dotenv").config();

const tripData = require("./data/trips");
const connectDB = require("./config/db");
const Trip = require("./models/Trip");

connectDB();

const importData = async () => {
  try {
    await Trip.deleteMany({});

    await Trip.insertMany(tripData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
