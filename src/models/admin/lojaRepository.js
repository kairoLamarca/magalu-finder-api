const mysql = require('../../config/bdConnection');

exports.getByFilial = async (filial) => {
    const connection = await mysql();

    const [results] = await connection.query('select * from lojas where filial = ?', [filial]);

    return results;
}

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query('select * from lojas;');

    return results;
}

exports.post = async (dados) => {
    const connection = await mysql();

    const [results] = await connection.query('insert into lojas set ?', dados);

    return results;
}

exports.put = async (filial, dados) => {
    const connection = await mysql();
        
    const [results] = await connection.query('update lojas set ? where filial = ?', [dados, filial]);

    return results;
}