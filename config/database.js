require('dotenv').config()

let DB_HOST_PROD = "ec2-54-165-164-38.compute-1.amazonaws.com"
let DB_USER_PROD = "pzosfuutpnktdp"
let DB_PASSWORD_PROD = "afc22b2e86b508082ae81f434bc5fbfa698904c797767749c4c016ce35d9cedb"
let DB_DATABASE_PROD = "d1au4drbo6gkl7"

module.exports = {
    "development": {
        "username": DB_USER_PROD,
        "password": DB_PASSWORD_PROD,
        "database": DB_DATABASE_PROD,
        "host": DB_HOST_PROD,
        "dialect": "postgres",
        "logging": false
    },
    "test": {
        "username": DB_USER_PROD,
        "password": DB_PASSWORD_PROD,
        "database": DB_DATABASE_PROD,
        "host": DB_HOST_PROD,
        "dialect": "postgres",
        "logging": false
    },
    "production": {
        "username": DB_USER_PROD,
        "password": DB_PASSWORD_PROD,
        "database": DB_DATABASE_PROD,
        "host": DB_HOST_PROD,
        "dialect": "postgres",
        "dialectOptions":{
            "ssl": true
        },
        "logging": false
    }
}