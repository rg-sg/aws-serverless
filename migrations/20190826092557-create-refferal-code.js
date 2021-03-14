'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('refferal_codes', {
      refferalCodeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      refferalCode: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      refferalCodeType: {
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
    return queryInterface.dropTable('refferal_codes');
  }
};