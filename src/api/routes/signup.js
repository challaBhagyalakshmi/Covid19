const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;
router.post("/signup", (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.status(400).send({
      message: "please enter username,password and email"
    });
  } else {
    User.create({
      name: req.body.username,
      pass: req.body.password,
      email: req.body.email
    })
      .then(user => {
        res.status(200).send(user);
      })
      .catch(error => {
        res.status(400).send({
          error: error.message
        });
      });
  }
});

module.exports = router;
