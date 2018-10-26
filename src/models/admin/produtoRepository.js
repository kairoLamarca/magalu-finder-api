const mysql = require('../../config/bdConnection');

exports.getByCodigo = async (codigo) => {
    const connection = await mysql();

    const [results] = await connection.query('select * from produtos where codigo = ?', [codigo]);

    return results;
}

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query('select * from produtos;');

    return results;
}

exports.post = async (dados) => {
    const connection = await mysql();

    const [results] = await connection.query('insert into produtos set ?', dados);

    return results;
}