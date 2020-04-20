const Sequelize = require("sequelize");
const uuid = require("uuid/v4");
const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const Country = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/countries.js");
const country = Country.country;
const sequelize = connection.sequelize;
const Recover = sequelize.define("recovered_cases", {
  No_of_cases: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: false,
    defaultValue: null
  },
  recover_id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    primaryKey: false,
    defaultValue: null
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    primaryKey: false,
    defaultValue: null
  }
});
country.hasMany(Recover, {
  foreignKey: "country_code",
  foreignKeyConstraint: true
});
Recover.belongsTo(country, {
  foreignKey: "country_code"
});
Recover.sync();

module.exports = { Recover };
