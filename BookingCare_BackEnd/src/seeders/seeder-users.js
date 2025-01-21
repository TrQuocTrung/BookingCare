'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email  : 'admin123@gmail.com',
        password : 'admin123',
        firstName : 'admin',
        lastName : 'admin',
        address: 'Hà Nội',
        phoneNumber:'032554858997',
        gender: true,
        image:null,
        roleId:null,
        positionId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
