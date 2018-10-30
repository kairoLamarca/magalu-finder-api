const mysql = require('../../config/bdConnection');
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAeBo_FJ16gCjhAYWQY4LtMSy-JDHPfVig',
    Promise: Promise
});

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query(`select l.descricao as loja, l.cep, p.descricao as produto, p.codigo as codigo_produto, p.valor 
                                                from produtos_lojas pl
                                                inner join lojas l
                                                    on pl.filial = l.filial
                                                inner join produtos p
                                                    on pl.id_produto = p.id;`);

    connection.destroy();

    return results;
}

exports.getCodigoCep = async (codigo, cep) => {
    const connection = await mysql();

    const [results] = await connection.query(`select l.descricao as loja, l.cep, p.descricao as produto, p.codigo as codigo_produto, p.valor
                                                from produtos_lojas pl
                                                inner join lojas l
                                                    on pl.filial = l.filial
                                                inner join produtos p
                                                    on pl.id_produto = p.id
                                                where p.codigo = '${codigo}';`);

    connection.destroy();

    let retornoCliente = []

    if (results.length > 0) {
        retornoCliente = await retornaDistancia(results, cep);
    }

    return retornoCliente;
}

exports.getDescricaoCep = async (descricao, cep) => {
    const connection = await mysql();

    const [results] = await connection.query(`select l.descricao as loja, l.cep, p.descricao as produto, p.codigo as codigo_produto, p.valor 
                                                from produtos_lojas pl
                                                inner join lojas l
                                                    on pl.filial = l.filial
                                                inner join produtos p
                                                    on pl.id_produto = p.id
                                                where p.descricao = '${descricao}';`);

    connection.destroy();

    let retornoCliente = []

    if (results.length > 0) {

        retornoCliente = await retornaDistancia(results, cep);
    }

    return retornoCliente;
}

retornaDistancia = async (results, cep) => {
    let cepsLojas = [];
    let retornoCliente = []

    await results.map(item => (
        cepsLojas.push(item.cep)
    ));

    let response = await googleMapsClient.distanceMatrix(
        {
            origins: cep,
            destinations: cepsLojas
        })
        .asPromise()

    for (i = 0; i < results.length; i++) {
        retornoCliente.push(
            {
                loja: results[i].loja,
                cep: results[i].cep,
                produto: results[i].produto,
                codigo_produto: results[i].codigo_produto,
                valor: results[i].valor,
                distancia: response.json.rows[0].elements[i].status === 'OK' ? response.json.rows[0].elements[i].distance.text : '',
                distance_value: response.json.rows[0].elements[i].status === 'OK' ? response.json.rows[0].elements[i].distance.value : ''
            }
        );
    }

    await retornoCliente.sort((a, b) => {
        return a.distance_value < b.distance_value ? -1 : a.distance_value > b.distance_value ? 1 : 0;
    })

    return retornoCliente;
}