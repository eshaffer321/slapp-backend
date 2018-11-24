'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {

        const roleRowObject = await
            queryInterface.sequelize.query(
                "SELECT id from `Roles`;"
            );
        const roles = roleRowObject[0];

        return queryInterface.bulkInsert('Users',
            [{
                email: 'joe@wusd.edu',
                first_name: 'Joe',
                last_name: 'Coolguy',
                role_id: roles[0].id,
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                google_token: 'ut7U8nv9f8Q7c6rDEiXP6QBV',
                cookie: 'puXh9DfwASfYBcktKmSyfniL'
            }, {
                email: 'bendover@wusd.edu',
                role_id: roles[1].id,
                first_name: 'Ben',
                last_name: 'Dover',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                google_token: 'PRSzMuJTeuDcKU78cfatcgRe',
                cookie: 'HEFYMKj3u5ZaGMjKDpALvXCz'
            }, {
                email: 'sallygal@wusd.edu',
                role_id: roles[0].id,
                first_name: 'Sally',
                last_name: 'Othergal',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                google_token: 'JKDHFkjhfjdka847',
                cookie: 'dakfjhdf3348AAdDJ'
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
