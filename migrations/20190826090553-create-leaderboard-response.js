'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leaderboard_responses', {
      leaderBoardResponseId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          'model': 'users_type',
          'key': 'userTypeId',
          'as': 'UserType'
        }
      },
      raceTrackId:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      medalCount:{
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      timeTaken:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      leaderboardResponseSummury: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.JSON
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
    return queryInterface.dropTable('leaderboard_responses');
  }
};