const models = require("../models");
const users = models.users;
const comments = models.commenst;

exports.comments = (req, res) => {
  comments
    .findAll({
      where: { article_id: req.params.id },
      include: [
        {
          model: users,
          as: "users"
        }
      ]
    })
    .then(comments => res.send(comments))
    .catch(err => res.send(err));
};

exports.created = (req, res) => {
  comments
    .create({
      comment: req.body.comment,
      article_id: req.params.id,
      user_id: req.body.id,
      createdAt: Date.now(),
      updatedAt: Date.now()
    })
    .then(comments => res.json(comments))
    .catch(err => res.send(err));
};
