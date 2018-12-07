'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        role_token: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });
    User.associate = function (models) {
    };
    return User;
};