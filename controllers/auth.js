const jwt = require("jsonwebtoken");
const models = require("../models");
const user = models.users;
const hash = require("password-hash");

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //   res.send({ message: "okeokeoko" });
  user
    .findOne({
      where: {
        email: req.body.email
        // password: req.body.password
      }
    })
    .then(user => {
      if (user) {
        const password = user.password;
        const verify = hash.verify(req.body.password, password);
        if (verify === true) {
          const token = jwt.sign({ userId: user.id }, "secret code");
          res.send({
            user,
            token
          });
        } else {
          res.send({
            error: true,
            message: "wrong password"
          });
        }
      } else {
        res.send({
          error: true,
          message: "your email not registered"
        });
      }
    })
    .catch(err => res.send(err));
};
