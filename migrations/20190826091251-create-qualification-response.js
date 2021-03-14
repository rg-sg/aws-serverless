'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('qualification_responses', {
      qualificationResponseId: {
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
      status:{
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      track:{
        defaultValue: 1,
        type: Sequelize.INTEGER
      },
      qualificationResponseSummury: {
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
    return queryInterface.dropTable('qualification_responses');
  }
};