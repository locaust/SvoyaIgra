'use strict';
const { Theme } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Theme.bulkCreate([
      {
        title: 'Животные',
      },
      {
        title: 'МакДоналдс',
      },
      ])
  },

  async down (queryInterface, Sequelize) {
    await Theme.destroy({ where: {} });
  }
};
