'use strict';
const { Question } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate([
      {
        question: 'У какой породы собак язык не розового цвета?',
        answer: 'Чау чау',
        theme_id: 1,
      },
      {
        question: 'Какого цвета кровь у лобстера?',
        answer: 'Голубого',
        theme_id: 1,
      },
      {
        question: 'Какую птицу французы называют «Летучая крыса»?',
        answer: 'Голубь',
        theme_id: 1,
      },
      {
        question:
          'Какое животное может обходиться без воды дольше, чем верблюд?',
        answer: 'Крыса',
        theme_id: 1,
      },
      {
        question: 'Как называются семейные группы у львов?',
        answer: 'Прайд',
        theme_id: 1,
      },
      {
        question: 'По какому признаку у щенка определяют его будущие размеры?',
        answer: 'Лапы',
        theme_id: 1,
      },
      {
        question: 'Кто основал компанию McDonald’s?',
        answer: 'Братья Макдональды',
        theme_id: 2,
      },
      {
        question: 'В каком году была основана компания?',
        answer: '1940',
        theme_id: 2,
      },
      {
        question: 'Где открылся первый ресторан McDonalds?',
        answer: 'Калифорния',
        theme_id: 2,
      },
      {
        question:
          'Как называется комплексный заказ еды для детей в McDonald’s?',
        answer: 'Хэппи Мил',
        theme_id: 2,
      },
      {
        question: 'Как называется российский аналог McDonald’s?',
        answer: 'ВКУСно и тОЧКА',
        theme_id: 2,
      },
      {
        question:
          'Вопрос для Влада(3 фаза). Как сейчас можно получить при покупке большого комбо в Вкусно и точка ?',
        answer: 'Бокал',
        theme_id: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy({ where: {} });
  },
};
