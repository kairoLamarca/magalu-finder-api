const mysql = require('../../config/bdConnection');

exports.getByFilial = async (filial) => {
    //abre conexão
    const connection = await mysql();

    const [results] = await connection.query('select * from lojas where filial = ?', [filial]);

    return results;
}

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query('select * from lojas;');

    return results;
}