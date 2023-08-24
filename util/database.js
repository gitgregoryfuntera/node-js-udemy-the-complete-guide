const mysql2 = require('mysql2')

const pool = mysql2.createPool({
    host: 'localhost',
    password: 'admin',
    database: 'node_complete',
    user: 'root'
})

module.exports = pool.promise()