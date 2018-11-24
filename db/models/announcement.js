'use strict';
module.exports = (sequelize, DataTypes) => {
    const Announcement = sequelize.define('Announcement', {
        message: DataTypes.TEXT
    }, {
        timestamps: true,
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });
    Announcement.associate = function (models) {
        Announcement.belongsTo(models.User);
        Announcement.hasOne(models.School);
    };
    return Announcement;
};