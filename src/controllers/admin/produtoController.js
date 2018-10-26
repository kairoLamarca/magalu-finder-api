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