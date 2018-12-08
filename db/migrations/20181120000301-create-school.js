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
            school_name: {
                type: Sequelize.STRING
            },
            admin_token: {
                type: Sequelize.STRING,
                unique: true
            },
            user_token: {
                type: Sequelize.STRING,
                unique: true
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
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