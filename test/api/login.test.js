const request = require("supertest");
const app = require("/Users/bhagyalakshmi/Documents/COVID_19/src/api/Middlewares/app.js");
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;
const users = {
  id: 2,
  email: "user2@gmail.com",
    pass: "pass123",
  token:"eyJzdWIiOiJkZGU5N2Y0ZC0wNmQyLTQwZjEtYWJkNi0xZWRhODM1YzExM2UiLCJhdWQiOiI3c2Jzamh -TRUNCATED- hbnRfaWQiOiJ4cGVwcGVycy5jb20iLCJleHAiOjE1N jY4MzQwMDgsImlhdCI6MTU2NjgzMDQwOH0"
};
describe("post/users/login ", () => {
  it("should login user and return auth token ", () => {
    request(app)
      .post("/users/login")
      .send({users.email,users.pass})
      .expect(200)
      .expect((res) => {
        expect(res.headers["x-path"]).not.toBeNull();
      })
      .end((err, res) => {
        if (err) {
          throw new err();
        }
          User.findById(users.id).then(user => {
              expect(user.token).toHaveProperty('access', 'auth');
              expect(user.token).toHaveProperty('token', res.headers['x-auth']);
          }).catch(error => {
              console.log(error);
        });
      });
  });
    it('should rejects the invalid login ', () => {
        request(app).post('/users/login').send({
            email: "user5@gmail.com",
            pass:'pass900'
        }).expect(200).expect(res => {
            expect(res.headers['x-auth'].toBeUndefined())
        }).end(error => {
            if (error) {
                return error;
            }
            User.findById(users.id).then(user => {
                expect(user.token.length).toBe(0);
            }).catch(error => {
                return error;
            })
        })
    })
});
