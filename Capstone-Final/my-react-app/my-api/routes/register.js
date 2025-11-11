const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 10);
    const user = new User({ email: req.body.email, password: hashed });
    await user.save();
    res.status(201).send("User registered");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});