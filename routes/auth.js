const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/auth");

router
  .post("/api/register", authController.register)
  .post("/api/login", passport.authenticate("local"), authController.login);

module.exports = router;
