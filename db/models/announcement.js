'use strict';
module.exports = (sequelize, DataTypes) => {
  const Announcement = sequelize.define('Announcement', {
    message: DataTypes.TEXT
  }, {});
  Announcement.associate = function(models) {
      Announcement.belongsTo(models.User);
      Announcement.belongsTo(models.School);
  };
  return Announcement;
};