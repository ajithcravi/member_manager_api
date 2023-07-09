require('dotenv').config()

const config = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    repositoryMode: true
}

module.exports = {
    "local": config,
    "development": config,
    "qa": config,
    "production": config
}