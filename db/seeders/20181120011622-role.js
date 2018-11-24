'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Roles',
            [{
                role: 'user',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                role: 'admin',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Roles', null, {});
    }
};
