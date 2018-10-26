const produtoLoja = require('../../models/admin/produtoLojaRepository');

exports.getById = async (req, res) => {
    try {
        const id = req.params.id;

        const result = await produtoLoja.getByCodigo(id);

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
        const result = await produtoLoja.getAll();

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
        
        req.assert(dados.id_produto, 'id_produto é obrigatório').isEmpty();
        req.assert(dados.filial, 'filial é obrigatório').isEmpty();

        let erros = await req.validationErrors();

        if (erros) {
            res.status(400).json({ 'erros': erros });
        }
        else {

            const result = await produtoLoja.post(dados);

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

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        
        const result = await produtoLoja.delete(id);

        if (result.affectedRows > 0) {
            res.status(200).json({ 'mensagem': `${result.affectedRows} registro(s) excluído(s) com sucesso` });
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi excluído' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}