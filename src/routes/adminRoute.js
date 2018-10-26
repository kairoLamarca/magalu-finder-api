const express = require('express');
const router = express.Router();
const lojaController = require('../controllers/admin/lojaController');
const produtoController = require('../controllers/admin/produtoController');

router.route('/loja')
    .get(lojaController.getAll)
    .post(lojaController.post);

router.route('/loja/:filial')
    .get(lojaController.getByFilial)
    .put(lojaController.put)
    .delete(lojaController.delete);

router.route('/produto')
    .get(produtoController.getAll);

router.route('/produto/:codigo')
    .get(produtoController.getByCodigo);

module.exports = router;    