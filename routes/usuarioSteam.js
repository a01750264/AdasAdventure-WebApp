const express = require('express');
const router = express.Router();
const steamController = require('../controllers/usuarioSteam');

router.get('/agregarUsuario', steamController.getAgregarUsuarioSteam);
router.post('/agregarUsuario', steamController.postAgregarUsuarioSteam);

module.exports = router;