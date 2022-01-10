require("dotenv").config();
const express = require("express");
const tripRoutes = require("./routes/tripRoutes");
const connectDB = require("./config/db");
const userRouter = require("./routes/user.route");
const reviewroute = require("./routes/review.route");
connectDB();

const app = express();

app.use(express.json());



app.use("/api/trips", tripRoutes);
app.use("/api/review", reviewroute);
app.use('/api/user', userRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));