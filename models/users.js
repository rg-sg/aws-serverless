'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phoneNumber: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    fullName: {
      defaultValue: null,
      type: DataTypes.STRING
    },
    userTypeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: {
        'model': 'users_type',
        'key': 'userTypeId',
        'as': 'UserType'
      }
    },
    isLegalVerify: {
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    isAdult: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status: {
      defaultValue: 1,
      allowNull: false,
      type: DataTypes.STRING
    },
    isDeleted: {
      defaultValue: 0,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    isVerified: {
      defaultValue: 0,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    regCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    theme:{
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    tncAccept:{
      defaultValue: 0,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdOn: {
      allowNull: false,
      type: DataTypes.DATE
    },
    modifiedOn: {
      allowNull: false,
      type: DataTypes.DATE
    },
    deletedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  users.associate = function(models) {
    users.hasOne(models.users_type, { foreignKey: 'userTypeId', required: false });
    // associations can be defined here
  };
  return users;
};