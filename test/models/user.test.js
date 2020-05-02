const connection = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/config/connection.js");
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const bcrypt = require("bcrypt");
const User = user.User;
const sequelize = connection.sequelize;

describe("User model ", () => {
  beforeEach(function() {
    sequelize.drop({ force: true });
  });
  it("inserting a new record ", () => {
    const pwd = "pass456";
    const hashed = bcrypt.hash(pwd, 8);
    User.sync()
      .then(function() {
        return User.create({
          name: "user2",
          pass: hashed,
          email: "user2@gmail.com"
        });
      })
      .then(data => {
        expect(data.name).toBe("user2");
        expect(data.pass).toBe(hashed);
        expect(data.pass).toBe("user2@gmail.com");
        expect(data.admin).toBe(false);
      });
  });
  afterEach(function() {
    sequelize.drop();
  });
});
