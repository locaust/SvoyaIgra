'use strict';
const { Question } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate([
      {
        question: 'Какой преподаватель на фото?',
        answer: 'Артем',
        theme_id: 1,
        img:"/foto/Anna.png"
      },
      {
        question: 'Какой преподаватель на фото?',
        answer: 'Толя',
        theme_id: 1,
        img:"/foto/Tolia.png"
      },
      {
        question: 'Какой преподаватель на фото?',
        answer: 'Аня',
        theme_id: 1,
        img:"/foto/Anna.png"
      },
      {
        question:
          'Какой преподаватель на фото?',
        answer: 'Лиза',
        theme_id: 1,
        img:"/foto/Liza.png"
      },
      {
        question: 'Какой преподаватель на фото?',
        answer: 'Юра',
        theme_id: 1,
        img:"/foto/Yura.png"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy({ where: {} });
  },
};
