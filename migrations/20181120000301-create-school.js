'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Schools', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hostname: {
                type: Sequelize.STRING
            },
            district: {
                type: Sequelize.STRING
            },
            schoolName: {
                type: Sequelize.STRING
            },
            token: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('Schools');
    }
};