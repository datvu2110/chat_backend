require('dotenv').config()

module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "postgres",
        "logging": false
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "postgres",
        "logging": false
    },
    "production": {
        "username": process.env.DB_USER_PROD,
        "password": process.env.DB_PASSWORD_PROD,
        "database": process.env.DB_DATABASE_PROD,
        "host": process.env.DB_HOST_PROD,
        "dialect": "postgres",
        "dialectOptions":{
            "ssl": true
        },
        "logging": false
    }
}