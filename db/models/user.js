'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
    }, {});
    User.associate = function (models) {
        User.belongsTo(models.Schools);
        User.belongsTo(models.Roles);
    };
    return User;
};