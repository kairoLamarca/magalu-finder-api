const mysql = require('../../config/bdConnection');

exports.getByCodigo = async (codigo) => {
    const connection = await mysql();

    const [results] = await connection.query(`select pl.id, l.filial, l.descricao as loja, p.descricao as produto, p.codigo as codigo_produto 
                                                from produtos_lojas pl
                                                inner join lojas l
                                                    on pl.filial = l.filial
                                                inner join produtos p
                                                    on pl.id_produto = p.id
                                                where p.codigo = ?`, [codigo]);

    connection.destroy();

    return results;
}

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query(`select pl.id, l.filial, l.descricao as loja, p.descricao as produto, p.codigo as codigo_produto 
                                                from produtos_lojas pl
                                                inner join lojas l
                                                    on pl.filial = l.filial
                                                inner join produtos p
                                                    on pl.id_produto = p.id;`);

    connection.destroy();

    return results;
}

exports.post = async (dados) => {
    const connection = await mysql();

    const [results] = await connection.query('insert into produtos_lojas set ?', dados);

    connection.destroy();

    return results;
}

exports.delete = async (id) => {
    const connection = await mysql();

    const [results] = await connection.query('delete from produtos_lojas where id = ?', [id]);

    connection.destroy();

    return results;
}