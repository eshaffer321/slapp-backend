'use strict';
module.exports = {
    up: (queryInterface, sequelize) => {
        return queryInterface.createTable('UserSchools', {
            user_id: {
                type: sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id',
                }
            },
            school_id: {
                type: sequelize.INTEGER,
                references: {
                    model: 'Schools',
                    key: 'id',
                }
            },
            createdAt: {
                allowNull: false,
                type: sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UserSchools');
    }
};