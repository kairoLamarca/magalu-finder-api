const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente/clienteController');

router.route('/produtoloja')
    .get(clienteController.getAll);

router.route('/produtoloja/codigo/cep/:codigo/:cep')
    .get(clienteController.getCodigoCep);

router.route('/produtoloja/descricao/cep/:descricao/:cep')
    .get(clienteController.getDescricaoCep);

module.exports = router;  