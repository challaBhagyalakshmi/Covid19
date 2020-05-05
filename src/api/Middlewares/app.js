const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const confirm = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/routes/confirm_router.js");
const recover = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/routes/recover_route.js");
const deaths = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/routes/deaths_route.js");
const login = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/routes/login.js");
const signup = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/routes/signup.js");
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/confirmed", confirm);
app.use("/recovered", recover);
app.use("/deaths", deaths);
app.use("/users", signup);
app.use("/users", login);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,DELETE");
  next();
});
app.use((req, res, next) => {
  const error = new Error("Not Found");
  res.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
});

module.exports = app;
