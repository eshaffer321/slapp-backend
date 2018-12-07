'use strict';
module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define('School', {
        hostname: DataTypes.STRING,
        district: DataTypes.STRING,
        school_name: DataTypes.STRING,
        token: DataTypes.STRING,
    }, {
        timestamps: true,
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    School.associate = function (models) {};
    return School;
};