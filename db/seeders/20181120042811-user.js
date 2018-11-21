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
                roleId: roles[0].id,
                createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                googleToken: 'ut7U8nv9f8Q7c6rDEiXP6QBV',
                cookie: 'puXh9DfwASfYBcktKmSyfniL'
            }, {
                email: 'bendover@wusd.edu',
                roleId: roles[1].id,
                createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                googleToken: 'PRSzMuJTeuDcKU78cfatcgRe',
                cookie: 'HEFYMKj3u5ZaGMjKDpALvXCz'
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
