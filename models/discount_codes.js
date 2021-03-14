'use strict';
module.exports = (sequelize, DataTypes) => {
  const discount_codes = sequelize.define('discount_codes', {
    discountCodeId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    discountCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    discountDesc: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userType: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: {
        'model': 'users_type',
        'key': 'userTypeId',
        'as': 'UserType'
      }
    },
    trackSection:{
      allowNull: false,
      type:DataTypes.INTEGER
    },
    leaderboardPlaceMin:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    leaderboardPlaceMax:{
      allowNull: false,
      type: DataTypes.STRING
    },
    createdOn: {
      allowNull: false,
      defaultValue: sequelize.NOW,
      type: DataTypes.DATE
    },
    modifiedOn: {
      allowNull: false,
      defaultValue: sequelize.NOW,
      type: DataTypes.DATE
    }
  }, {});
  discount_codes.associate = function(models) {
    discount_codes.hasOne(models.users_type, { foreignKey: 'userTypeId', required: false });
    // associations can be defined here
  };
  return discount_codes;
};