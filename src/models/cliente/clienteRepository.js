const mysql = require('../../config/bdConnection');
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAeBo_FJ16gCjhAYWQY4LtMSy-JDHPfVig',
    Promise: Promise
});

exports.getAll = async () => {
    const connection = await mysql();

    const [results] = await connection.query(`select l.descricao as loja, l.cep, p.descricao as produto, p.codigo as codigo_produto 
                                                from produtos_lojas pl
                                                inner join lojas l
                                                    on pl.filial = l.filial
                                                inner join produtos p
                                                    on pl.id_produto = p.id;`);

    connection.destroy();

    googleMapsClient.distanceMatrix(
        {
            origins: ['14403530'],
            destinations: ['14405413', '14400500', '14400260']
        })
        .asPromise()
        .then((response) => {
            console.log(response.json.rows[0].elements.length);
            console.log(response.json.rows[0].elements[0]);
            console.log(response.json.rows[0].elements[1]);
            console.log(response.json.rows[0].elements[2]);
        })
        .catch((err) => {
            console.log(err);
        });

    return results;
}

exports.getCodigoCep = async (codigo, cep) => {
    const connection = await mysql();

    const [results] = await connection.query(`select l.descricao as loja, l.cep, p.descricao as produto, p.codigo as codigo_produto 
                                                from produtos_lojas pl
                                                inner join lojas l
                                                    on pl.filial = l.filial
                                                inner join produtos p
                                                    on pl.id_produto = p.id
                                                where p.codigo = '${codigo}';`);

    connection.destroy();

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
                distancia: response.json.rows[0].elements[i].distance.text,
                distance_value: response.json.rows[0].elements[i].distance.value
            }
        );
    }

    await retornoCliente.sort((a, b) => {
        return a.distance_value < b.distance_value ? -1 : a.distance_value > b.distance_value ? 1 : 0;
    })

    console.log(retornoCliente);

    return retornoCliente;
}