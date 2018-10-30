const mysql = require('mysql2/promise');

const connection = async () => {
    // return await mysql.createConnection({
    //     host: process.env.MYSQL_HOST,
    //     user: process.env.MYSQL_USER,
    //     database: process.env.MYSQL_DATABASE,
    //     password: process.env.MYSQL_PASSWORD
    // })
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'magalu_finder',
        password: '1234'
    })
};

module.exports = connection;
