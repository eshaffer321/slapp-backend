var randtoken = require('rand-token');
'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Roles',
            [{
                role: 'user',
                role_token: randtoken.generate(4),
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                role: 'admin',
                role_token: randtoken.generate(4),
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Roles', null, {});
    }
};
