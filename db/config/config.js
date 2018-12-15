require('dotenv').config();

module.exports = {
    development: {
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        port: process.env.PORT,
        CLEARDB_DATABASE_URL: process.env.CLEARDB_DATABASE_URL,
        dialect: 'mysql',
        pool: {
            max: 9,
            min: 0,
            acquire: 30000,
            idle: 10000,
            maxIdleTime: 120000
        },
        define: {
            underscored: true
        },
        dialectOptions: {
            charset: 'utf8mb4'
        },
    },
    testing: {
        use_env_variable: 'CLEARDB_DATABASE_URL',
        dialect: 'mysql',
        dialectOptions: {
            charset: 'utf8mb4'
        },
    },
    production: {
        use_env_variable: 'CLEARDB_DATABASE_URL',
        dialect: 'mysql',
        dialectOptions: {
            charset: 'utf8mb4'
        },
    },
};