const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente/clienteController');

router.route('/produtoloja')
    .get(clienteController.getAll);

module.exports = router;  