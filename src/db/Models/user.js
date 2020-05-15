const connection = require("../config/connection.js");
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
  pass: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    uniqueKey: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    unique: true,
    validate: {
      isEmail: true
    }
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

module.exports = { User };
