const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = requite("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));