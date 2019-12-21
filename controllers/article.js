const models = require("../models");
const Articles = models.articles;
const categories = models.categories;
const users = models.users;

exports.indexLimit = (req, res) => {
  Articles.findAll({
    limit: 5,
    order: [["id", "DESC"]],
    include: [
      {
        model: categories,
        as: "category"
      },
      {
        model: users,
        as: "users"
      }
    ]
  })
    .then(articles => res.send(articles))
    .catch(err => res.send(err));
};
exports.index = (req, res) => {
  Articles.findAll({
    limit: 10,
    include: [
      {
        model: categories,
        as: "category"
      },
      {
        model: users,
        as: "users"
      }
    ]
  })
    .then(articles => res.send(articles))
    .catch(err => res.send(err));
};
exports.Categories = (req, res) => {
  Articles.findAll({
    limit: 10,
    where: { category_id: req.params.id },
    include: [
      {
        model: categories,
        as: "category"
      },
      {
        model: users,
        as: "users"
      }
    ]
  })
    .then(articles => res.send(articles))
    .catch(err => res.send(err));
};
exports.show = (req, res) => {
  Articles.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: categories,
        as: "category"
      },
      {
        model: users,
        as: "users"
      }
    ]
  })
    .then(article => res.send(article))
    .catch(err => res.send(err));
};
