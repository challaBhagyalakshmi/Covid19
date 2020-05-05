const request = require("supertest");
const login = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/routes/login.js");
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;

describe("signup ", () => {
  it("create a new user ", () => {
    request(app)
      .post("/signup")
      .send({
        email: "user3@gmail.com",
        pass: "pass456",
      })
      .expect((res) => {
        expect(res.headers["x-path"]).not.toBeNull();
        expect(res.body.email).toBe(username);
        expect(res.body.pass).toBe(pass);
        expect(res.status).toBe(200);
      })
      .end((err) => {
        if (err) {
          throw new err();
        }
        User.findOne({ email }).then((user) => {
          expect(user).not.toBeNull();
          expect(user.pass).not.toBe(pass);
        });
      });
  });
  it("it should return validation is request is invalid ", () => {
    request(app)
      .post("/signup")
      .send({
        email: "adadndfjdf",
        pass: "uiue90",
      })
      .expect(400);
  });
  it("should not create a user if user is already existed ", () => {
    const user = {
      emai: "user2@gmail.com",
      pass: "pass123",
    };
    User.findOne({ email }).then(() => {
      request(app).post("/signup").expect(400);
    });
  });
});
