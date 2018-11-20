'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        Example:
            return queryInterface.bulkInsert('Users', [{
                email: 'joe@wusd.edu',
                createdAt:  Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                updatedAt:  Sequelize.literal('CURRENT_TIMESTAMP(3)')
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
