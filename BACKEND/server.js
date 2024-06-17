// import "dotenv/config";
const dotenv = require("dotenv");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// import logger from "./log";
const logger = require("./log");

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  // useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
  // console.log("MongoDB connection success");
  logger.info("MongoDB connection success");
});

const studentRouter = require("./routes/students.js");

app.use("/student", studentRouter);

app.listen(PORT, () => {
  // console.log(`Server is running on port number: ${PORT}`);
  logger.info(`Server is running on port number: ${PORT}`);
});
