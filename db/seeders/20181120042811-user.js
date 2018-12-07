'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {

        const roleRowObject = await
            queryInterface.sequelize.query(
                "SELECT role_token from `Roles`;"
            );
        const roles = roleRowObject[0];

        console.log(roles[0].role_token);

        return queryInterface.bulkInsert('Users',
            [{
                email: 'joe@wusd.edu',
                first_name: 'Joe',
                last_name: 'Coolguy',
                role_token: roles[1].role_token,
                google_id: 'dkfhkj23h4',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                email: 'bendover@wusd.edu',
                role_token: roles[0].role_token,
                first_name: 'Ben',
                last_name: 'Dover',
                google_id: 'dkfhkj23h4',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                email: 'sallygal@toropark.edu',
                role_token: roles[1].role_token,
                first_name: 'Sally',
                last_name: 'Othergal',
                google_id: 'dkfhkj23h4',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
