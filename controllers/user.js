const models = require("../models");
const user = models.users;
const hash = require("password-hash");

exports.register = (req, res) => {
  user
    .create({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: hash.generate(req.body.password),
      image: "sementara iki image",
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
    .then(register => res.json(register))
    .catch(err => res.send(err));
};
