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

exports.put = async (id, dados) => {
    const connection = await mysql();
        
    const [results] = await connection.query('update produtos set ? where id = ?', [dados, id]);

    return results;
}

exports.delete = async (id) => {
    const connection = await mysql();

    const [results] = await connection.query('delete from produtos where id = ?', [id]);

    return results;
}