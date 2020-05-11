const request = require("supertest");
const app = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/Middlewares/app.js");
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;

describe("post/users/login ", () => {
  it("should login user and return auth token ", () => {
    request(app)
      .post("/users/login")
      .send({
        email: "user1@gmail.com",
        pass: "user123",
      })
      .expect(200)
      .expect((res) => {})
      .end((err, res) => {
        if (err) {
          throw new err("Invalid User!");
        }
        User.findById(users.id)
          .then((user) => {
            expect(user.token).toHaveProperty("access", "auth");
            expect(user.token).toHaveProperty("token", res.headers["x-auth"]);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  });
  it("should rejects the invalid login ", () => {
    request(app)
      .post("/users/login")
      .send({
        email: "user5@gmail.com",
        pass: "pass900",
      })
      .expect(200)
      .expect((res) => {
        expect(res.headers["x-auth"].toBeUndefined());
      })
      .end((error) => {
        if (error) {
          return error;
        }
        User.findById(users.id)
          .then((user) => {
            expect(user.token.length).toBe(0);
          })
          .catch((error) => {
            return error;
          });
      });
  });
});
