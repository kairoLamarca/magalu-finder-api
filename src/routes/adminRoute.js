const express = require('express');
const router = express.Router();
const controller = require('../controllers/admin/lojaController');

router.route('/loja/:filial')
    .get(controller.getByFilial);

module.exports = router;    