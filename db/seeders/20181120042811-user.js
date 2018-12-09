'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Users',
            [{
                email: 'joe@wusd.edu',
                first_name: 'Joe',
                last_name: 'Coolguy',
                image_url: 'something.jpg',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                email: 'bendover@wusd.edu',
                first_name: 'Ben',
                last_name: 'Dover',
                image_url: 'pic/yes/img.jpg',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
            }, {
                email: 'sallygal@toropark.edu',
                first_name: 'Sally',
                last_name: 'Othergal',
                created_at: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
                image_url: 'pic/yes/img.jpg'
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
