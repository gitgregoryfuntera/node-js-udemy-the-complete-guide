"use strict";
// const { WorkOrderLookup } = require('../models/workorderlookup')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("WorkOrderLookups", [
      {
        name: "repair",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "build",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "enhance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("WorkOrderLookups", null, {});
  },
};
