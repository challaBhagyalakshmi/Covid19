const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;

router.post("/signup", async (req, res) => {
  const pwd = req.body.pass;
  const hashed = await bcrypt.hash(pwd, 8);
  try {
    User.sync()
      .then(function() {
        return User.create({
          name: req.body.username,
          pass: hashed,
          email: req.body.email
        });
      })
      .then(data => {
        res.status(200);
        res.send(JSON.stringify(data));
      });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
