const cliente = require('../../models/cliente/clienteRepository');

exports.getAll = async (req, res) => {
    try {
        const result = await cliente.getAll();

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

exports.getCodigoCep = async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const cep = req.params.cep;

        const result = await cliente.getCodigoCep(codigo, cep);
        
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

exports.getDescricaoCep = async (req, res) => {
    try {
        const descricao = req.params.descricao;
        const cep = req.params.cep;

        const result = await cliente.getDescricaoCep(descricao, cep);
        
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