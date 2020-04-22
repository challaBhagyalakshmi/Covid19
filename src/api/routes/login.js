const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;
router.post("/login", (req, res) => {
  User.find({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          message: "User not found."
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          var token = jwt.sign(JSON.parse(JSON.stringify(user)), "secret", {
            expiresIn: 10000
          });
          jwt.verify(token, "secret", (err, data) => {
            console.log(err, data);
          });
          res.json({ success: true, token: "JWT " + token });
        } else {
          res.status(401).send({
            success: false,
            msg: "Authentication failed. Wrong password."
          });
        }
      });
    })
    .catch(error => res.status(400).send(error));
});

module.exports = { router };
