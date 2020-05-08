const jwt = require("jsonwebtoken");
const user = require("/Users/bhagyalakshmi/Documents/COVID_19/src/db/Models/user.js");
const User = user.User;
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authprization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "covid19");
    const user = await User.findOne({ id: decoded.id });

    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    res.staus(401).send({ error: "please authenticate" });
  }
};

module.exports = { auth };
