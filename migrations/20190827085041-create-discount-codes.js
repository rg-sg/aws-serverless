'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('discount_codes', {
      discountCodeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      discountCode: {
        allowNull: false,
        type: Sequelize.STRING
      },
      discountDesc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userType: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          'model': 'users_type',
          'key': 'userTypeId',
          'as': 'UserType'
        }
      },
      trackSection:{
        allowNull: false,
        type:Sequelize.INTEGER
      },
      leaderboardPlaceMin:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      leaderboardPlaceMax:{
        allowNull: false,
        type: Sequelize.STRING
      },
      createdOn: {
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
        type: Sequelize.DATE
      },
      modifiedOn: {
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('discount_codes');
  }
};