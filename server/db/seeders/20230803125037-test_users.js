'use strict';

const { User } = require('../models');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        name: 'Антон',
        email: 'anton_ne@mail.ru',
        password: await bcrypt.hash('123456', 5),
        score:0
      },
      {
        name: 'Andrey',
        email: 'Andrey_ne@mail.ru',
        password: await bcrypt.hash('123456', 5),
        score:0
      },
      {
        name: 'Valeron',
        email: 'Valeron@mail.ru',
        password: await bcrypt.hash('123456', 5),
        score:0
      },
    
    ])
      
  },

  async down (queryInterface, Sequelize) {
    await User.destroy({ where: {} });
  }
};
