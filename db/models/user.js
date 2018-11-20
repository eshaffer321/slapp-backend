'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        googleToken: DataTypes.STRING,
        cookie: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        User.belongsToMany(models.Schools, {through: 'UserSchool'});
        User.belongsTo(models.Roles);
    };
    return User;
};