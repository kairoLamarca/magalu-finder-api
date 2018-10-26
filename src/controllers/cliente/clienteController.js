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