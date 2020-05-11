const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const router = express.Router();
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const auth = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/Middlewares/auth.js");
const Auth = auth.auth;
const User = user.User;
router.post("/login", Auth, async (req, res) => {
  try {
    const user = credential(req.body.email, req.body.pass);
    const token = await generatetoken(user);
    res.send({ user, token });
    res.send(user);
    res.status(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

async function credential(email, pass) {
  const user = sequelize.sync().then(function () {
    return User.findAll({
      where: {
        email: email,
      },
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
  const token = jwt.sign({ id: user.id }, process.env.secret_key);
  return token;
}

module.exports = { router };
