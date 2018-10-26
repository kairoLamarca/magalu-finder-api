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

exports.post = async (dados) => {
    const connection = await mysql();

    const [results] = await connection.query('insert into produtos_lojas set ?', dados);

    return results;
}

exports.delete = async (id) => {
    const connection = await mysql();
    
    const [results] = await connection.query('delete from produtos_lojas where id = ?', [id]);

    return results;
}