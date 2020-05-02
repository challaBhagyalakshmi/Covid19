const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;
router.post("/login", auth,(req, res) => {
  try {
    const user = credential(req.body.email, req.body.pass);
    const token = await generatetoken();
    res.send({ user, token });
    res.send(user);
    res.status(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

async function credential(email, pass) {
  const user = sequelize.sync().then(function() {
    return User.findAll({
      where: {
        email: email
      }
    });
  });
  if (!user) {
    throw new Error("login failed");
  }
  const pwd = await bcrypt.hash(pass, 8);
  const isMatch = await bcrypt.compare(pwd, user.pass);
  if (!isMatch) {
    throw new Error("login failed");
  }
  return user;
}
async function generatetoken(user) {
  const token = jwt.sign({ id: user.id }, "covid");
  return token;
}

module.exports = { router };
