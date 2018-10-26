const produto = require('../../models/admin/produtoRepository');

exports.getByCodigo = async (req, res) => {
    try {
        const codigo = req.params.codigo;

        const result = await produto.getByCodigo(codigo);

        if (result.length > 0) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi encontrado' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.getAll = async (req, res) => {
    try {
        const result = await produto.getAll();

        if (result.length > 0) {
            res.status(200).json(result);
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi encontrado' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.post = async (req, res) => {
    try {
        const dados = req.body;

        req.assert(dados.codigo, 'Código é obrigatório').isEmpty();
        req.assert(dados.descricao, 'Descrição é obrigatório').isEmpty();
        req.assert(dados.valor, 'Valor é obrigatório').isEmpty();

        let erros = await req.validationErrors();

        if (erros) {
            res.status(400).json({ 'erros': erros });
        }
        else {
            const result = await produto.post(dados);
            
            if (result.affectedRows > 0) {
                res.status(201).json({ 'mensagem': `${result.affectedRows} registro(s) inserido(s) com sucesso` });
            }
            else {
                res.status(404).json({ 'mensagem': 'Nenhum registro foi inserido' });
            }
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}