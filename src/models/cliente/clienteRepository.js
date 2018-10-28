const mysql = require('../../config/bdConnection');

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query(`select l.descricao as loja, l.cep, p.descricao as produto, p.codigo as codigo_produto 
                                                from produtos_lojas pl
                                                inner join lojas l
                                                    on pl.filial = l.filial
                                                inner join produtos p
                                                    on pl.id_produto = p.id;`);

    connection.destroy();

    return results;
}