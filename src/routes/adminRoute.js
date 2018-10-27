const express = require('express');
const router = express.Router();
const lojaController = require('../controllers/admin/lojaController');
const produtoController = require('../controllers/admin/produtoController');
const produtoLojaController = require('../controllers/admin/produtoLojaController');

router.route('/loja')
    .get(lojaController.getAll)
    .post(lojaController.post);

router.route('/loja/:filial')
    .get(lojaController.getByFilial)
    .put(lojaController.put)
    .delete(lojaController.delete);

router.route('/produto')
    .get(produtoController.getAll)
    .post(produtoController.post);

router.route('/produto/:codigo')
    .get(produtoController.getByCodigo)
    .put(produtoController.put)
    .delete(produtoController.delete);

router.route('/produtoloja')
    .get(produtoLojaController.getAll)
    .post(produtoLojaController.post);

router.route('/produtoloja/:id')
    .get(produtoLojaController.getByCodigo)
    .delete(produtoLojaController.delete);

module.exports = router;    