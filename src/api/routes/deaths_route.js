const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const deaths = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/deaths.js");

router.get("/top10", (req, res) => {
  sequelize
    .query("select * from recovered_cases order by no_of_cases asc limit 10")
    .then(data => {
      res.send(JSON.stringify(data));
      res.status(200);
    });
});

module.exports = { router };
