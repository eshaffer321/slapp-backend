'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const usersRows = await queryInterface.sequelize.query(
            "SELECT id from `Users`;"
        );
        const schoolsRows = await queryInterface.sequelize.query(
            "SELECT id from `Schools`;"
        );

        const users = usersRows[0];
        const schools = schoolsRows[0];

        return queryInterface.bulkInsert('Announcements',
            [{
                message: 'This is a message from San Benecio.',
                school_id: schools[0].id,
                user_id: users[0].id,
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                message: 'School will be shutdown while joe is in Cancun.',
                school_id: schools[0].id,
                user_id: users[0].id,
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                message: 'This is a message from Toro Park.',
                school_id: schools[1].id,
                user_id: users[1].id,
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }], {});
    },

    down: (queryInterface, Sequelize) => {

          return queryInterface.bulkDelete('Announcements', null, {});
    }
};
