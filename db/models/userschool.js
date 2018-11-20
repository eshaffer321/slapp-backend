'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSchool = sequelize.define('UserSchool', {

  }, {});
  UserSchool.associate = function(models) {
    // associations can be defined here
  };
  return UserSchool;
};