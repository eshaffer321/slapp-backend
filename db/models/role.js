'use strict';
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
            role_token: DataTypes.STRING,
            role: DataTypes.STRING
        },
        {
            timestamps: true,
            underscored: true,
            updatedAt: 'updated_at',
            createdAt: 'created_at'
        }
    );
    Role.associate = function (models) {};
    return Role;
};