'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserSchool = sequelize.define('UserSchool', {
        role: DataTypes.STRING
    }, {
        timestamps: true,
        underscored: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at',
    });
    UserSchool.associate = function (models) {
        models.User.belongsToMany(models.School, {through: UserSchool});
        models.School.belongsToMany(models.User, {through: UserSchool});
    };
    return UserSchool;
};