const dotenv = require("dotenv");
dotenv.config();

Credential = {
  dbname: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  testdb: process.env.test_db,
};

module.exports = { Credential };
