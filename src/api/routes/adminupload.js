const express = require("express");
const router = express.Router();
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;
const recover = require("/Users/bhagyalakshmi/Documents/COVID_19/src/data/processing/recovered_export.js");
const confirm = require("/Users/bhagyalakshmi/Documents/COVID_19/src/data/processing/confirmed.js");
const death = require("/Users/bhagyalakshmi/Documents/COVID_19/src/data/processing/deaths_export.js");
const Confirm = confirm.confirm_data_import_db;
const Recover = recover.recovered_data_import_db;
const Death = death.deaths_data_import_db;
router.post("/admin", async (req, res) => {
  const user = await Credential(req.body.email, req.body.pass);
  if (!user) {
    throw new Error("Invalid Credentials");
  } else {
    try {
      confirm.confirm_data_import_db();
      recover.recovered_data_import_db();
      death.deaths_data_import_db();
    } catch (error) {
      res.send(error);
      res.status(400);
    }
    res.send("successfully upload the file");
    res.status(200);
  }
});

async function Credential(email, pass) {
  const user = User.findOne(email);
  if (!user) {
    return new Error("Invalid user!");
  } else {
    if (user[0].admin == true) {
      return user;
    } else {
      return new Error("Only admin can only upload the data into database");
    }
  }
}
module.exports = { router };
