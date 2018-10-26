const mysql = require('../../config/bdConnection');

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query('select * from produtos;');

    return results;
}