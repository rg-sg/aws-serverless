'use strict';
module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    questionId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    question: {
      allowNull: false,
      type: DataTypes.STRING
    },
    option1: {
      allowNull: false,
      type: DataTypes.STRING
    },
    option2:{
      allowNull: false,
      type:DataTypes.STRING
    },
    option3:{
      allowNull: false,
      type: DataTypes.STRING
    },
    option4:{
      allowNull: false,
      type:DataTypes.STRING
    },
    answer:{
      allowNull: false,
      type:DataTypes.INTEGER
    },
    questionType: {
      type: DataTypes.ENUM('Qualification', 'Leaderboard'),
      defaultValue: 'Qualification',
      allowNull: false
    },
    sessionNumber:{
      allowNull: false,
      type:DataTypes.INTEGER
    },
    questionOrder:{
      allowNull: false,
      type:DataTypes.INTEGER
    },
    questionMarks:{
      allowNull: true,
      defaultValue: null,
      type:DataTypes.INTEGER
    },
    leaderboardType: {
      type: DataTypes.ENUM('Normal', 'Spin','Boost'),
      defaultValue: 'Normal',
      allowNull: false
    },
    createdOn: {
      allowNull: false,
      type: DataTypes.DATE
    },
    modifiedOn: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  questions.associate = function(models) {
    // associations can be defined here
  };
  return questions;
};