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
            created_at: {
                allowNull: false,
                type: sequelize.DATE
            },
            updated_at: {
                allowNull: true,
                type: sequelize.DATE,
                defaultValue: null
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UserSchools');
    }
};