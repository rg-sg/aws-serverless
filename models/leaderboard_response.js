'use strict';
module.exports = (sequelize, DataTypes) => {
  const leaderboard_response = sequelize.define('leaderboard_response', {
    leaderBoardResponseId: {
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
    raceTrackId:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    medalCount:{
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    timeTaken:{
      allowNull: false,
      type: DataTypes.INTEGER
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    leaderboardResponseSummury: {
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
  leaderboard_response.associate = function(models) {
    leaderboard_response.hasOne(models.users_type, { foreignKey: 'userTypeId', required: false });
    // associations can be defined here
  };
  return leaderboard_response;
};