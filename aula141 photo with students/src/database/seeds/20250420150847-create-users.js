const bcrypt = require("bcryptjs");

("use strict");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Cecília",
          email: "ceciliaocteixeira@gmail.com",
          password_hash: await bcrypt.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Raul",
          email: "raulc@gmail.com",
          password_hash: await bcrypt.hash("654321", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
