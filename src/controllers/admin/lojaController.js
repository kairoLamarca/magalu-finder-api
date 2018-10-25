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