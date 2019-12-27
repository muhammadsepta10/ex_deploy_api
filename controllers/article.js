const models = require("../models");
const Articles = models.articles;
const categories = models.categories;
const users = models.users;

exports.delete = (req, res) => {
  Articles.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(result => res.json(result))
    .catch(err => res.send(err));
};

exports.edit = (req, res) => {
  Articles.update(
    {
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      updatedAt: Date.now()
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(result => res.json(result))
    .catch(err => res.send(err));
};

exports.input = (req, res) => {
  Articles.create({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    category_id: req.body.category,
    is_published: 1,
    is_archived: 0,
    author: req.body.author,
    createdAt: Date.now(),
    updatedAt: Date.now()
  })
    .then(article => res.json(article))
    .catch(err => res.send(err));
};

exports.articleByPerson = (req, res) => {
  Articles.findAll({
    where: { author: req.params.id }
  })
    .then(articles => res.send(articles))
    .catch(err => res.send(err));
};

exports.releated = (req, res) => {
  Articles.findAll({
    limit: 3,
    where: { category_id: req.params.id },
    include: [
      {
        model: users,
        as: "users"
      }
    ]
  })
    .then(articles => res.send(articles))
    .catch(err => res.send(err));
};

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
