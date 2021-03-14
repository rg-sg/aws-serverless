'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phoneNumber: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fullName: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      userTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          'model': 'users_type',
          'key': 'userTypeId',
          'as': 'UserType'
        }
      },
      isLegalVerify: {
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      isAdult: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      status: {
        defaultValue: 1,
        allowNull: false,
        type: Sequelize.STRING
      },
      isDeleted: {
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      isVerified: {
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      regCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      theme:{
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      tncAccept:{
        defaultValue: 0,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdOn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      modifiedOn: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};