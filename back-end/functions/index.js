const express = require("express");
const cors = require('cors');
const bp = require('body-parser');
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const programRoute = require("./routes/programRoute");
const programHistoryRoute = require('./routes/programHistoryRoute');
const functions = require("firebase-functions");
const admin= require("./config/firebaseAdmin");
connectDB();

const app = express();

// Middleware
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(errorHandler);

// Routes
app.use("/program", programRoute);
app.use("/programHistory", programHistoryRoute);



app.listen( 5000, () =>
  console.log(`Server listening on port ${5000}`.green.underline)
);

exports.api = functions.https.onRequest(app);
