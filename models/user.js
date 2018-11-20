'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
    }, {});
    User.associate = function (models) {
        User.hasOne(models.Schools);
    };
    return User;
};