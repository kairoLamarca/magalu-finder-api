const loja = require('../../models/admin/lojaRepository');

exports.getByFilial = async (req, res) => {
    try {
        const filial = req.params.filial;

        const result = await loja.getByFilial(filial);

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
        const result = await loja.getAll();

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

        req.assert(dados.filial, 'Filial é obrigatório').isEmpty();
        req.assert(dados.descricao, 'Descrição é obrigatório').isEmpty();
        req.assert(dados.cep, 'Cep é obrigatório').isEmpty();
        req.assert(dados.cidade, 'Cidade é obrigatório').isEmpty();
        req.assert(dados.estado, 'Estado é obrigatório').isEmpty();
        req.assert(dados.endereco, 'Endereço é obrigatório').isEmpty();
        req.assert(dados.bairro, 'Bairro é obrigatório').isEmpty();
        req.assert(dados.numero, 'Número é obrigatório').isEmpty();

        let erros = await req.validationErrors();

        if (erros) {
            res.status(400).json({ 'erros': erros });
        }
        else {
            const result = await loja.post(dados);
            
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

exports.put = async (req, res) => {
    try {
        const filial = req.params.filial;
        const dados = req.body;

        const result = await loja.put(filial, dados);

        if (result.affectedRows > 0) {
            res.status(204).json({ 'mensagem': `${result.affectedRows} registro(s) alterado(s) com sucesso` });
        }
        else {
            res.status(404).json({ 'mensagem': 'Nenhum registro foi alterado' });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
}

exports.delete = async (req, res) => {
    try {
        const filial = req.params.filial;

        const result = await loja.delete(filial);

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