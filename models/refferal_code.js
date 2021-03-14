'use strict';
module.exports = (sequelize, DataTypes) => {
  const refferal_code = sequelize.define('refferal_code', {
    refferalCodeId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    refferalCode: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    refferalCodeType: {
      allowNull: false,
      type: DataTypes.STRING
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
  refferal_code.associate = function(models) {
    // associations can be defined here
  };
  return refferal_code;
};