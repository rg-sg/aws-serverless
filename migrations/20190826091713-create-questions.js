'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      questionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING
      },
      option1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      option2:{
        allowNull: false,
        type:Sequelize.STRING
      },
      option3:{
        allowNull: false,
        type: Sequelize.STRING
      },
      option4:{
        allowNull: false,
        type:Sequelize.STRING
      },
      answer:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      questionType: {
        type: Sequelize.ENUM('Qualification', 'Leaderboard'),
        defaultValue: 'Qualification',
        allowNull: false
      },
      sessionNumber:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      questionOrder:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      questionMarks:{
        allowNull: true,
        defaultValue: null,
        type:Sequelize.INTEGER
      },
      leaderboardType: {
        type: Sequelize.ENUM('Normal', 'Spin','Boost'),
        defaultValue: 'Normal',
        allowNull: false
      },
      createdOn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      modifiedOn: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};