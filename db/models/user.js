'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        google_token: DataTypes.STRING,
        cookie: DataTypes.STRING,
    }, {
        timestamps: true,
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });
    User.associate = function (models) {
        User.belongsTo(models.Role);
    };
    return User;
};