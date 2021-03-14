'use strict';
module.exports = (sequelize, DataTypes) => {
  const qualification_response = sequelize.define('qualification_response', {
    qualificationResponseId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      reference: {
        'model': 'users_type',
        'key': 'userTypeId',
        'as': 'UserType'
      }
    },
    status:{
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    track:{
      defaultValue: 1,
      type: DataTypes.INTEGER
    },
    qualificationResponseSummury: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.JSON
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
  qualification_response.associate = function(models) {
    qualification_response.hasOne(models.users_type, { foreignKey: 'userTypeId', required: false });
    // associations can be defined here
  };
  return qualification_response;
};