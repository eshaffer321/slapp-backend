var randtoken = require('rand-token');

'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Schools', [{
            school_name: 'San Benancio Middle School',
            hostname: 'wusd',
            district: 'Washington Union School District',
            created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            admin_token: randtoken.generate(4),
            user_token: randtoken.generate(4),
            calendar_id: 'washingtonusd.org_dlama676qjna5p897bgb5615es@group.calendar.google.com'
        }, {
            school_name: 'Toro Park School',
            hostname: 'wusd',
            district: 'Washington Union School District',
            created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            admin_token: randtoken.generate(4),
            user_token: randtoken.generate(4),
            calendar_id: randtoken.generate(4)
        }], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Schools', null, {});
    }
};
