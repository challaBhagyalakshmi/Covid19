const Sequelize = require("sequelize");
const uuid = require("uuid/v4");
const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const Country = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/countries.js");
const country = Country.country;
const sequelize = connection.sequelize;
const Confirm = sequelize.define("confirm_cases", {
  "4/28/20": {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: false,
    defaultValue: null
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
country.hasMany(Confirm, {
  foreignKey: "country_code",
  foreignKeyConstraint: true
});
Confirm.belongsTo(country, { foreignKey: "country_code" });
const data = 4;
Confirm.sync({ force: true })
  .then(function() {
    return Confirm.create({
      "4/29/20": data
    });
  })
  .then(data => {
    console.log(JSON.stringify(data));
  });

module.exports = { Confirm };
