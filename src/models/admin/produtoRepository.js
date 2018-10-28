const mysql = require('../../config/bdConnection');

exports.getByCodigo = async (codigo) => {
    const connection = await mysql();

    const [results] = await connection.query('select * from produtos where codigo = ?', [codigo]);

    connection.destroy();

    return results;
}

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query('select * from produtos;');

    connection.destroy();

    return results;
}

exports.post = async (dados) => {
    const connection = await mysql();

    const [results] = await connection.query('insert into produtos set ?', dados);

    connection.destroy();

    return results;
}

exports.put = async (id, dados) => {
    const connection = await mysql();
        
    const [results] = await connection.query('update produtos set ? where id = ?', [dados, id]);

    connection.destroy();

    return results;
}

exports.delete = async (id) => {
    const connection = await mysql();

    const [results] = await connection.query('delete from produtos where id = ?', [id]);

    connection.destroy();
    
    return results;
}