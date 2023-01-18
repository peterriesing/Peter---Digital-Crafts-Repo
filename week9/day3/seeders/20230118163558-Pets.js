'use strict';

const { DATE } = require('sequelize');

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
    await queryInterface.bulkInsert('Pets', [
      {
      name: "Gorgo",
      type: "Golden Retriever",
      owner: "Marcia",
      age: "9",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Hannah",
      type: "Orange Cat",
      owner: "Tom",
      age: "13",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Maxine",
      type: "Gray Cat",
      owner: "Katie",
      age: "10",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Penny",
      type: "Dumpster Cat",
      owner: "Peter",
      age: "11",
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
