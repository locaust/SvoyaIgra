'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    scores: {
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};