"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      fullname: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      image: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.articles, {
      foreignKey: "author",
      as: "users"
    });
  };
  return users;
};
