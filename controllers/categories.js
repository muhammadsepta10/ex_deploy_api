const Category = require("../models").categories;

exports.index = (req, res) => {
  Category.findAll()
    .then(categories => res.send(categories))
    .catch(err => res.send(err));
};
