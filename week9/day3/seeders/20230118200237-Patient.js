'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Patients', [{
      firstName: 'Corey',
      lastName: 'Boborey',
      employeeAssignedID: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Josh',
      lastName: 'Naraund',
      employeeAssignedID: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Haywood',
      lastName: 'Yabuzov',
      employeeAssignedID: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      firstName: 'Tommy',
      lastName: 'Chong',
      employeeAssignedID: 8,
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
