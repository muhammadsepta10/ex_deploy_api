'use strict';
module.exports = (sequelize, DataTypes) => {
  const follows = sequelize.define('follows', {
    user_id: DataTypes.INTEGER,
    follow: DataTypes.INTEGER
  }, {});
  follows.associate = function(models) {
    // associations can be defined here
  };
  return follows;
};