const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
require("dotenv").config();

console.log(process.env.MONGO_URL);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MONGOOSE SETUp

const PORT = 3001;
const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Error: MONGO_URL is not defined in the .env file");
  process.exit(1);
}

mongoose
  .connect(mongoUrl, {})
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => {
    console.error(`Error: ${err.message}`);
    console.error(
      "Failed to connect to MongoDB. Please check your connection string and MongoDB service."
    );
  });
