'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const userRowObject = await
            queryInterface.sequelize.query(
                "SELECT id from `Users`;"
            );
        const users = userRowObject[0];


        const schoolRowObject = await
            queryInterface.sequelize.query(
                "SELECT id from `Schools`;"
            );
        const schools = schoolRowObject[0];

        return queryInterface.bulkInsert('UserSchools', [{
            school_id: schools[0].id,
            user_id: users[0].id,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        }, {
            school_id: schools[1].id,
            user_id: users[0].id,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP(3)')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('UserSchools', null, {});
    }
};
