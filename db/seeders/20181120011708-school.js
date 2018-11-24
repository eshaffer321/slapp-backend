'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Schools', [{
            school_name: 'San Benancio Middle School',
            hostname: 'wusd',
            district: 'Washington Union School District',
            created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        }, {
            school_name: 'Toro Park School',
            hostname: 'wusd',
            district: 'Washington Union School District',
            created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        }], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Schools', null, {});
    }
};
