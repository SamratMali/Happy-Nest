const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const User = require("../models/User");

// Configuration multer for File Upload

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
    //Store uploaded files in the 'Uploads' Folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    //Use the original file name
  },
});

const upload = multer({ storage });

// USER REGISTER

router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    // Take all Information from the form
    const { firstName, lastName, email, password } = req.body;

    // The uploaded file is available as req.file]
    const profileImage = req.file;
  } catch (err) {}
});
