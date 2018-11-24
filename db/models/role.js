'use strict';
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
            role: DataTypes.STRING,
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING
        },
        {
            timestamps: true,
            underscored: true,
            updatedAt: 'updated_at',
            createdAt: 'created_at'
        }
    );
    Role.associate = function (models) {
        // associations can be defined here
    };
    return Role;
};