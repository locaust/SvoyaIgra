"use strict";
const { Question } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Question.bulkCreate([
      {
        question: "Какой преподаватель на фото?",
        answer: "Артем",
        theme_id: 1,
        img: "https://4.downloader.disk.yandex.ru/preview/7fccc6a3dbfa27ae9984ebffd662658075a0eb131d7496d46acb9fc2dca18537/inf/k7C0p21pVguSOS-L7-0TnO_DEbsVyrXlPhJsN1hQl9O-VL-6nJZZQ64KFMcsNUIXBW50pFhobtbdv-FrUxnwtA%3D%3D?uid=287531752&filename=Artem.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=287531752&tknv=v2&size=1349x619",
        price: 1000,
        isDone: false,
      },
      {
        question: "Какой преподаватель на фото?",
        answer: "Толя",
        theme_id: 1,
        img: "https://1.downloader.disk.yandex.ru/preview/de3951f313db844bb3f23f3b4c2419471ae3ecc8828da4f99617e9433c934cfc/inf/tNPeR-DBUsuUnSFb-UNrgco0bFSjcPLgKujpwzmUGplHxOnHicuwwgz80iDxQ2O5oj0IeFOAaPhMFXQSHX1GDg%3D%3D?uid=287531752&filename=Tolia.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=287531752&tknv=v2&size=1349x619",
        price: 1000,
        isDone: false,
      },
      {
        question: "Какой преподаватель на фото?",
        answer: "Аня",
        theme_id: 1,
        img: "https://2.downloader.disk.yandex.ru/preview/5966f7143e465b1969e4b655efec186af068e4afbb69a3037853c5ac1c6aa209/inf/Co26NBMIJAJt8UotDpqL2jC8YVdYWfQvs6qPcTr6Nl4nLylavzZuxWmzUEC2MZOnOkCHZ89gPqXC2k1h_ILztQ%3D%3D?uid=287531752&filename=Anna.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=287531752&tknv=v2&size=1349x619",
        price: 1000,
        isDone: false,
      },
      {
        question: "Какой преподаватель на фото?",
        answer: "Лиза",
        theme_id: 1,
        img: "https://2.downloader.disk.yandex.ru/preview/7feac7f6d63e644836c45896b97c5759848ea58bece60b549d0214d735cb9a13/inf/ImkQPbq-xAODIoA_N8xJ2DC8YVdYWfQvs6qPcTr6Nl48Zw0hrIEujiLLBw3I-1bM19YeXg3iuP5g1MWM8xrkNw%3D%3D?uid=287531752&filename=Liza2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=287531752&tknv=v2&size=1349x619",
        price: 1000,
        isDone: false,
      },
      {
        question: "Какой преподаватель на фото?",
        answer: "Юра",
        theme_id: 1,
        img: "https://4.downloader.disk.yandex.ru/preview/875a103c29990c381a940599c1b6089572c69a59a61a1d45fd95338a896663ab/inf/je7Bc1slsdKNPhd9wB-jb96R1E87_iRqhEVObwKEoCgbFPJG-D-isG5J8P9bbbpe3gqLHvoqsxLTM0VHRWy-xw%3D%3D?uid=287531752&filename=Yura.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=287531752&tknv=v2&size=1349x619",
        price: 1000,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "Хэнкок",
        theme_id: 2,
        img: "https://ugadai-film.ru/dest/img/screens/272/1.webp",
        price: 100,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "1+1",
        theme_id: 2,
        img: "https://ugadai-film.ru/dest/img/screens/400/2.webp",
        price: 100,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "Гарри Поттер и тайная комната",
        theme_id: 2,
        img: "https://ugadai-film.ru/dest/img/screens/96/1.webp",
        price: 200,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "Исходный код",
        theme_id: 2,
        img: "https://ugadai-film.ru/dest/img/screens/242/1.webp",
        price: 300,
        isDone: false,
      },

      {
        question: "Угадай фильм по кадру",
        answer: "Грязь",
        theme_id: 2,
        img: "https://ugadai-film.ru/dest/img/screens/223/2.webp",
        price: 500,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "Остаться в живых",
        theme_id: 3,
        img: "https://ugadai-film.ru/dest/img/screens/289/3.webp",
        price: 100,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "Клиника",
        theme_id: 3,
        img: "https://ugadai-film.ru/dest/img/screens/13/2.webp",
        price: 200,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "Зачарованные",
        theme_id: 3,
        img: "https://www.kino-teatr.ru/movie/kadr/18572/931128.jpg",
        price: 300,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "Ваша честь",
        theme_id: 3,
        img: "https://storage.yandexcloud.net/moskvichmag/uploads/2020/12/honor.jpg",
        price: 400,
        isDone: false,
      },
      {
        question: "Угадай фильм по кадру",
        answer: "11.22.63",
        theme_id: 3,
        img: "https://ugadai-film.ru/dest/img/screens/41/1.webp",
        price: 500,
        isDone: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Question.destroy({ where: {} });
  },
};
