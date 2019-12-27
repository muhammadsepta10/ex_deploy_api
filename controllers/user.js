const models = require("../models");
const user = models.users;
const hash = require("password-hash");

exports.register = (req, res) => {
  user
    .findOne({
      where: { email: req.body.email }
    })
    .then(user => {
      if (user) {
        res.send({
          error: true,
          message: "email telah terdaftar"
        });
      } else {
        models.users
          .create({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: hash.generate(req.body.password),
            image: req.body.image,
            createdAt: Date.now(),
            updatedAt: Date.now()
          })
          .then(register => res.json(register))
          .catch(err => res.send(err));
      }
    });
  // create({

  // })
};
