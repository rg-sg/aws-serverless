'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_type = sequelize.define('users_type', {
    userTypeId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userType: {
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
  users_type.associate = function(models) {
    // associations can be defined here
  };
  return users_type;
};