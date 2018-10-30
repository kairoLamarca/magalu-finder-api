const loja = require('../src/models/admin/lojaRepository');
const expect = require('chai').expect;

async function add(a, b) {
    return (a + b);
}

describe('lojaRepository.js', () => {
    it('loja - getAll', async () => {
        const result = await loja.getAll();
        expect(result).to.be.a('Array');
    });    

    it('loja - post', async () => {
        const result = await loja.post({
            "filial": "9999",
            "descricao": "Loja 9999",
            "cep": "14400500",
            "cidade": "Franca",
            "estado": "SP",
            "endereco": "Rua do comércio",
            "bairro": "Centro",
            "numero": "1234"
        });

        expect(result.affectedRows).to.equal(1);
    });

    it('loja - getByFilial', async () => {
        const result = await loja.getByFilial(9999);
        expect(result[0]).to.be.a('object');
    });

    it('loja - put', async () => {
        const result = await loja.put('9999', {
            "descricao": "Loja 9999",
            "cep": "14456123",
            "cidade": "Franca",
            "estado": "SP",
            "endereco": "Rua do comércio",
            "bairro": "Centro",
            "numero": "1234"
        });

        expect(result.affectedRows).to.equal(1);
    });

    it('loja - delete', async () => {
        const result = await loja.delete(9999);
        expect(result.affectedRows).to.equal(1);
    });
});



