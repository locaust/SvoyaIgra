'use strict';

const { User } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Антон',
        score: 2,
      },
      {
        name: 'Катя',
        score: 100,
      },
      {
        name: 'Валерий',
       score: 15
      },])
      
  },

  async down (queryInterface, Sequelize) {
    await User.destroy({ where: {} });
  }
};
