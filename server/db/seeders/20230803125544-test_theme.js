'use strict';
const { Theme } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Theme.bulkCreate([
      {
        title: 'Преподаватели',
      },
      {
        title: 'Фильмы',
      },
      {
        title: 'Сериалы',
      },
      ])
  },

  async down (queryInterface, Sequelize) {
    await Theme.destroy({ where: {} });
  }
};
