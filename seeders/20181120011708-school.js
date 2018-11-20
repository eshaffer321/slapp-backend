'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Schools', [{
            schoolName: 'San Benancio Middle School',
            hostname: 'wusd',
            district: 'Washington Union School District',
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        }], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Schools', null, {});
    }
};
