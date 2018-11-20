'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Roles',
            [{
                role: 'user',
                createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
            }, {
                role: 'admin',
                createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Roles', null, {});
    }
};
