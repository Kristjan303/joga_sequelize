'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.bulkInsert('Authors', [{
          id: 1,
          name: 'John Doe',
            createdAt: new Date(),
            updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Authors', [{
            id: 2,
            name: 'Jane Doe',
            createdAt: new Date(),
            updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Authors', [{
            id: 3,
            name: 'John Smith',
            createdAt: new Date(),
            updatedAt: new Date()
        }]),
        ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
