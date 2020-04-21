const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const recovered = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/recovered.js");

router.get("/top10", (req, res) => {
  sequelize
    .query("select * from deaths order by no_of_cases asc limit 10")
    .then(data => {
      res.send(JSON.stringify(data));
      res.status(200);
    });
});

module.exports = { router };
