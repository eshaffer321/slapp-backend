'use strict';
module.exports = (sequelize, DataTypes) => {
  const Announcement = sequelize.define('Announcement', {
    message: DataTypes.TEXT
  }, {});
  Announcement.associate = function(models) {
    // associations can be defined here
  };
  return Announcement;
};