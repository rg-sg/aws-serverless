'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_type', {
      userTypeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userType: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable('users_type');
  }
};