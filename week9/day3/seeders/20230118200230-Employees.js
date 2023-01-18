'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [{
      firstName: 'Joe',
      lastName: 'Fraiser',
      clinicID: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Ethan',
      lastName: 'Gupta',
      clinicID: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Meg',
      lastName: 'Aladon',
      clinicID: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Peg',
      lastName: 'Mi',
      clinicID: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
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
