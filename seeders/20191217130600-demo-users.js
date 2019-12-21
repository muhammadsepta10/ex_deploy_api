"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          fullname: "John Doe",
          username: "JohnKaf",
          email: "johnkaf@gmail.com",
          password: "colcolcol",
          createdAt: "23-09-1998",
          updatedAt: "23-09-1998"
        },
        {
          fullname: "jphan",
          username: "andreas",
          email: "andreas@gmail.com",
          password: "france",
          createdAt: "23-09-1998",
          updatedAt: "23-09-1998"
        },
        {
          fullname: "mike anggara",
          username: "mike_anggara",
          email: "johnkaf@gmail.com",
          password: "colcolcol",
          createdAt: "23-09-1998",
          updatedAt: "23-09-1998"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", [
      {
        fullname: "John"
      }
    ]);
  }
};
