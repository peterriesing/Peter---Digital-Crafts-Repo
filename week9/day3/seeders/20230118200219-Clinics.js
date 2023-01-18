'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Clinics', [{
      clinicName: 'Leroy Jenkins Memorial',
      location: 'San Fransico',
      size: "420",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      clinicName: 'Seeder-Sinai',
      location: 'Los Angeles',
      size: "6969",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      clinicName: "Joe's House",
      location: 'Houston',
      size: "1",
      createdAt: new Date(),
      updatedAt: new Date(),
      },

    ]
    )
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
