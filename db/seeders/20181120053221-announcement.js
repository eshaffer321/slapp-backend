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
                message: 'Schools out for summer.',
                schoolId: schools[0].id,
                userId: users[0].id,
                createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                message: 'School will be shutdown while joe is in Cancun.',
                schoolId: schools[0].id,
                userId: users[0].id,
                createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }], {});
    },

    down: (queryInterface, Sequelize) => {

          return queryInterface.bulkDelete('Announcements', null, {});
    }
};
