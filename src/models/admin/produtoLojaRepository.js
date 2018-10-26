const mysql = require('../../config/bdConnection');

exports.getById = async (id) => {
    const connection = await mysql();

    const [results] = await connection.query('select * from produtos_lojas where codigo = ?', [id]);

    return results;
}

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query('select * from produtos_lojas;');

    return results;
}