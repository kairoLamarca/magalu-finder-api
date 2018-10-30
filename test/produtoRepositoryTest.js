const produto = require('../src/models/admin/produtoRepository');
const expect = require('chai').expect;

describe('produtoRepository.js', () => {
    it('produto - getAll', async () => {
        const result = await produto.getAll();
        expect(result).to.be.a('Array');
    });

    it('produto - post', async () => {
        const result = await produto.post({
            "codigo": "999999",
            "descricao": "Produto 999999",
            "valor": "123.45"
        });

        expect(result.affectedRows).to.equal(1);
    });

    it('produto - getByCodigo', async () => {
        const result = await produto.getByCodigo('999999');
        expect(result[0]).to.be.a('object');
    });

    it('produto - put', async () => {
        const prodEncontrado = await produto.getByCodigo('999999');
        const result = await produto.put(prodEncontrado[0].id, {
            "codigo": "999999",
            "descricao": "Produto 999999",
            "valor": "123.45"
        });

        expect(result.affectedRows).to.equal(1);
    });

    it('produto - delete', async () => {
        const prodEncontrado = await produto.getByCodigo('999999');
        const result = await produto.delete(prodEncontrado[0].id);
        expect(result.affectedRows).to.equal(1);
    });
});



