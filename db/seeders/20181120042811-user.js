'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Users',
            [{
                email: 'joe@wusd.edu',
                first_name: 'Joe',
                last_name: 'Coolguy',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                email: 'bendover@wusd.edu',
                first_name: 'Ben',
                last_name: 'Dover',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                email: 'sallygal@toropark.edu',
                first_name: 'Sally',
                last_name: 'Othergal',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
