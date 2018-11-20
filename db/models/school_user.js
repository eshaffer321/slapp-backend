const UserSchool = sequelize.define('user_school', {
    id: {type: Sequelize.DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
        }
    },

    school_id: {
        type: Sequelize.INTEGER,
        references: {
            model: School,
            key: 'id',
        }
    }
});