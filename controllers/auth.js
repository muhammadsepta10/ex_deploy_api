const jwt = require("jsonwebtoken");
const models = require("../models");
const user = models.user;

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  user.findOne({ where: { email, password } }).then(user => {
    if (user) {
      const token = jwt.sign({ userId: user.id }, "secret code");
      res.send({
        user,
        token
      });
    } else {
      res.send({
        error: true,
        message: "wrong email or password"
      });
    }
  });
};
