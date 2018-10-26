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
    console.log(dados);
    const [results] = await connection.query('insert into lojas set ?', dados);

    return results;  
}