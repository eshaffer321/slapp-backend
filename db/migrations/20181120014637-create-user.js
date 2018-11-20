'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Roles',
                    key: 'id'
                }
            },
            googleToken: {
                type: Sequelize.STRING,
                allowNull: false
            },
            cookie: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};