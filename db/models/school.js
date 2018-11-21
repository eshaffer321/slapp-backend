'use strict';
module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define('School', {
        hostname: DataTypes.STRING,
        district: DataTypes.STRING,
        schoolName: DataTypes.STRING,
        token: DataTypes.STRING,
    }, {});
    School.associate = function (models) {
    };
    return School;
};