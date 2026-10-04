const promise = require("mysql2/promise")

module.exports = promise.createPool(
    {
        host: "127.0.0.1",
        port: 3306,
        database: 'rciom',
        user: 'root',
        password: '2323'
    }
)