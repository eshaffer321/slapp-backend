'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        googleToken: DataTypes.STRING,
        cookie: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        User.belongsTo(models.Role);
    };
    return User;
};