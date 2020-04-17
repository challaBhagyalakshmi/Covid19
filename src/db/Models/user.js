const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const uuid = require("uuid/v4");
const Sequelize = require("sequelize");
const sequelize = connection.sequelize;
const User = sequelize.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false
  },
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    uniqueKey: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: true
  },
  phno: {
    type: Sequelize.BIGINT,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false
  },
  admin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false
  }
});

User.sync({ force: true })
  .then(() => {
    return User.create({
      name: "bhagya",
      email: "bhagya@gmail.com",
      phno: 8923242242,
      admin: true
    });
  })
  .then(data => {
    console.log(JSON.stringify(data));
  });

module.exports = { User };
