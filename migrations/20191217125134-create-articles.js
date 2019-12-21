"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER,
        reference: {
          model: "categories",
          key: "id"
        }
      },
      is_published: {
        type: Sequelize.BOOLEAN
      },
      is_archived: {
        type: Sequelize.BOOLEAN
      },
      author: {
        type: Sequelize.INTEGER,
        reference: {
          model: "users",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("articles");
  }
};
