'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Owners', [
      {
      firstName: "Marcia",
      lastName: "Bobarcia",
      pet: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Tom",
      lastName: "Tooter",
      pet: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Katie",
      lastName: "Flatulator",
      pet: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: "Peter",
      lastName: "Pleater",
      pet: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
