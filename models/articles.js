"use strict";
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      is_published: DataTypes.BOOLEAN,
      is_archived: DataTypes.BOOLEAN,
      author: DataTypes.INTEGER
    },
    {}
  );
  articles.associate = function(models) {
    articles.belongsTo(models.categories, {
      foreignKey: "category_id",
      as: "category"
    }),
      articles.belongsTo(models.users, {
        foreignKey: "author",
        as: "users"
      });
  };
  return articles;
};
