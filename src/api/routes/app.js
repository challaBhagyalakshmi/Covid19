const express = require("express");
const app = express();

app.use("confirmed", confirm);
app.use("recovered", recover);
app.use("deaths", death);

module.exports = app;
