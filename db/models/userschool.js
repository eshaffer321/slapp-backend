'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSchool = sequelize.define('UserSchool', {

  }, {});
  UserSchool.associate = function(models) {
      UserSchool.belongsTo(models.School);
      UserSchool.belongsTo(models.User);
  };
  return UserSchool;
};