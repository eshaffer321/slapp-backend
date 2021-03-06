'use strict';
module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define('School', {
        hostname: DataTypes.STRING,
        district: DataTypes.STRING,
        school_name: DataTypes.STRING,
        admin_token: DataTypes.STRING,
        user_token: DataTypes.STRING,
        calendar_id: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    School.associate = function (models) {
        School.hasMany(models.Announcement);
    };
    return School;
};